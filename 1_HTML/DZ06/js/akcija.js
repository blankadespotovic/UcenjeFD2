const LAYERS = [
    { count: 40, size: 4, speed: 0.5 },  // Veliki, spori mjehurići
    { count: 60, size: 3, speed: 1.2 },  // Srednji
    { count: 80, size: 2, speed: 1.8 }   // Mali, brzi mjehurići
];

const BUBBLE_COLOR = 'rgba(255, 255, 255, 0.4)'; // Prozirno bijela
const BUBBLE_STROKE = 'rgba(255, 255, 255, 0.7)'; // Nešto jači obrub
const MOUSE_RADIUS = 100;

let mouse = { x: null, y: null };
let bubbles = [];

// Canvas setup
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9999';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Mouse tracking
window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Bubble creation
function createBubble(layer, isInitial = false) {
    return {
        x: Math.random() * window.innerWidth,
        // Ako je inicijalno, rasporedi ih po ekranu, inače ih stvori ispod dna
        y: isInitial ? Math.random() * window.innerHeight : window.innerHeight + 20,
        radius: layer.size * (Math.random() * 1.5 + 1),
        speed: layer.speed * (Math.random() * 0.5 + 0.8),
        sway: Math.random() * 2 - 1, // Vodoravno vrludanje
        swaySpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2,
        layer
    };
}

// Inicijalizacija
LAYERS.forEach(layer => {
    for (let i = 0; i < layer.count; i++) {
        bubbles.push(createBubble(layer, true));
    }
});

function drawBubble(b) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    
    // Gradijent za efekt sjaja mjehurića
    ctx.fillStyle = BUBBLE_COLOR;
    ctx.fill();
    
    ctx.strokeStyle = BUBBLE_STROKE;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Dodaj mali bijeli odsjaj unutar mjehurića
    ctx.beginPath();
    ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fill();
}

function updateBubble(b) {
    // Kretanje prema GORE
    b.y -= b.speed;
    
    // Sinusoidalno vrludanje lijevo-desno
    b.x += Math.sin(Date.now() * b.swaySpeed + b.offset) * 0.5;

    // Interakcija s mišem (odbijanje)
    if (mouse.x !== null) {
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            b.x += (dx / dist) * force * 5;
            b.y += (dy / dist) * force * 5;
        }
    }

    // Resetiranje kada mjehurić izađe na VRHU (kao da je puknuo)
    if (b.y + b.radius < -10) {
        const newBubble = createBubble(b.layer);
        b.y = newBubble.y;
        b.x = newBubble.x;
        b.radius = newBubble.radius;
    }

    // Wrap vodoravno
    if (b.x < -b.radius) b.x = window.innerWidth + b.radius;
    if (b.x > window.innerWidth + b.radius) b.x = -b.radius;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const b of bubbles) {
        updateBubble(b);
        drawBubble(b);
    }

    requestAnimationFrame(animate);
}

animate();