let vm = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            fab: false,
            // tasks: [],
            tasks: [{done: false, text: 5}, {done: false, text: 7}, {done: false, text: 9}, {done: false, text: 21}, {done: false, text: 1}, {done: false, text: -5}],
            list: [],
            newTask: "",
        }
    },
    computed: {
        completedTasks () {
            return this.tasks.filter(task => task.done).length
        },
        progress () {
            return this.completedTasks / this.tasks.length * 100
        },
        remainingTasks () {
            return this.tasks.length - this.completedTasks
        },
      },
    methods: {
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        create () {
            if (this.newTask.length != 0) {
                this.tasks.push({
                    done: false,
                    text: Math.floor(this.newTask),
                })
                
                this.newTask = "";
            }
        },
        onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop () {
            this.$vuetify.goTo(0)
        },
        min(tableau, indice) {
            indice_min = indice;
        
            for (let i = indice_min + 1; i < tableau.length; i++) {
                if (tableau[i] < tableau[indice_min]) {
                    indice_min = i;
                }
            }
            return indice_min;
        },
        async tri_selection() {
            if (vm._data.tasks.length != 0) {}
            vm._data.list = [];
            vm._data.tasks.forEach(element => {
                vm._data.list.push(parseInt(element.text));
            });

            let tableau = vm._data.list;

            for (let k = 0; k < tableau.length; k++) {
                minimum = this.min(tableau, k);
                temp = tableau[minimum];
                tableau[minimum] = tableau[k];
                tableau[k] = temp;

                vm._data.tasks[minimum].text = vm._data.tasks[k].text;

                vm._data.tasks[k].text = temp;
                vm._data.tasks[k].done = true;

                await this.sleep(1000);
            }
        },
        clearAll() {
            vm._data.tasks = [];
        },
        clearOnes(element) {
            let tableau = vm._data.tasks;
            let nTableau = [];

            tableau.forEach((e) => {
                if (e != element) {
                    nTableau.push(e);
                } 
            });

            vm._data.tasks = nTableau;
        },
    }
});