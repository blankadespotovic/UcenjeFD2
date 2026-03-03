const students = [
    { firstName: 'Blanka', lastName: 'Despotović', github: 'blankadespotovic', file: 'media/blanka.webm' },
    { firstName: 'Borna', lastName: 'Novak', github: 'BornaaRNR', file: 'media/borna.webm' },
    { firstName: 'Marija', lastName: 'Dergez', github: 'marijadergez', file: 'media/marija.webm' },
    { firstName: 'Tomislav', lastName: 'Jakopec', github: 'tjakopec', file: 'media/tomislav.webm' },
    { firstName: 'Vladimir', lastName: 'Geić', github: 'vladogeic', file: 'media/vladimir.webm' },
];

const els = {
    grid: document.getElementById("grid"),
    search: document.getElementById("search"),
    initialFilter: document.getElementById("initialFilter"),
    modal: document.getElementById("modal"),
    modalVideo: document.getElementById("modalVideo"),
    modalName: document.getElementById("modalName"),
    modalGit: document.getElementById("modalGit"),
};

function fullName(s) {
    return `${s.firstName} ${s.lastName}`.trim();
}

function githubUrl(handle) {
    return `https://github.com/${handle.replace(/^@/, "")}`;
}

function initialsOptions(list) {
    const set = new Set(list.map(s => (s.lastName?.[0] || s.firstName?.[0] || "").toUpperCase()).filter(Boolean));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "hr"));
}

function buildFilters() {
    const opts = initialsOptions(students);
    for (const ch of opts) {
        const opt = document.createElement("option");
        opt.value = ch;
        opt.textContent = ch;
        els.initialFilter.appendChild(opt);
    }
}

function cardTemplate(s) {
    const name = fullName(s);
    const gh = s.github || "";
    const url = githubUrl(gh);

    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Otvori pregled: ${name}`);

    const play = document.createElement("div");
    play.className = "play";
    play.innerHTML = `<span aria-hidden="true">▶</span><span>Pregled</span>`;

    const video = document.createElement("video");
    video.className = "thumb";
    video.src = s.file;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;

  video.addEventListener("error", () => {
    const ph = document.createElement("div");
    ph.className = "thumb";
    ph.style.display = "grid";
    ph.style.placeItems = "center";
    ph.style.padding = "16px";
    ph.style.background = "rgba(255,255,255,0.04)";
    ph.style.color = "rgba(255,255,255,0.85)";
    ph.innerHTML = `
      <div style="text-align:center">
        <div style="font-weight:700; font-size:16px; margin-bottom:6px;">
          Ne mogu učitati video
        </div>
        <div style="opacity:.75; font-size:13px;">
          Provjeri putanju: <code>${s.file}</code>
        </div>
      </div>
    `;
    video.replaceWith(ph);
});

    const body = document.createElement("div");
    body.className = "card-body";

    const left = document.createElement("div");
    const h = document.createElement("h3");
    h.className = "name";
    h.textContent = name;

    const sub = document.createElement("div");
    sub.className = "sub";

    const a = document.createElement("a");
    a.className = "github";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = `@${gh.replace(/^@/, "")}`;

    a.addEventListener("click", (e) => e.stopPropagation());

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "webm";

    sub.appendChild(a);
    sub.appendChild(badge);

    left.appendChild(h);
    left.appendChild(sub);

    body.appendChild(left);

    card.appendChild(play);
    card.appendChild(video);
    card.appendChild(body);

    const open = () => openModal(s);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
        }
    });

    return card;
}

function render(list) {
    els.grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    list.forEach(s => frag.appendChild(cardTemplate(s)));
    els.grid.appendChild(frag);
}

function applyFilters() {
    const q = (els.search.value || "").trim().toLowerCase();
    const init = els.initialFilter.value;

    const filtered = students.filter(s => {
        const name = fullName(s).toLowerCase();
        const gh = (s.github || "").toLowerCase();
        const matchQ = !q || name.includes(q) || gh.includes(q);

        const ch = (s.lastName?.[0] || s.firstName?.[0] || "").toUpperCase();
        const matchInit = init === "all" || ch === init;

        return matchQ && matchInit;
    });

    render(filtered);
}

function openModal(s) {
    const name = fullName(s);
    els.modalVideo.src = s.file;
    els.modalVideo.setAttribute ('aria-label', `Predstavljanje: ${name}`);
    els.modalVideo.load();
    els.modalVideo.play().catch(() => {});
    els.modalName.textContent = name;

    const url = githubUrl(s.github || "");
    els.modalGit.href = url;
    els.modalGit.textContent = `GitHub: @${(s.github || "").replace(/^@/, "")}`;

    els.modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    els.modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    els.modalVideo.src = "";
}

function setupModal() {
    els.modal.addEventListener("click", (e) => {
        const close = e.target?.dataset?.close === "true";
        if (close) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        const isOpen = els.modal.getAttribute("aria-hidden") === "false";
        if (isOpen && e.key === "Escape") closeModal();
    });
}

buildFilters();
render(students);
setupModal();

els.search.addEventListener("input", applyFilters);
els.initialFilter.addEventListener("change", applyFilters);