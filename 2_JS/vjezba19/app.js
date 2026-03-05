const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac: 0,
            upozori: false
        }
    },
    methods:{
        uvecaj(){
            this.upozori=false;
            this.brojac++;
        },
        umanji(){
            if(this.brojac===0){
                this.upozori=true;
                return;
            }
            this.brojac--;
        },
        uvecajZaDva(){
            this.brojac += 2;
        }
    }
}).mount('#app');