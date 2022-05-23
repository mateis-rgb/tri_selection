function tri_selection(tableau) {
    for (let k = 0; k < tableau.length - 1; k++) {
        minimum = min(tableau, k);
        temp = tableau[minimum];
        tableau[minimum] = tableau[k];
        tableau[k] = temp;
    }

    return tableau;
}

let vm = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            fab: false,
            tasks: [],
            int_tasks: [],
            list: [],
            newTask: null,
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
        create () {
            this.tasks.push({
                done: false,
                text: this.newTask,
            })
                
            this.newTask = null
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
        tri_selection() {
            vm._data.list = [];
            vm._data.tasks.forEach(element => {
                vm._data.list.push(parseInt(element.text));
            });

            let tableau = vm._data.list;

            for (let k = 0; k < tableau.length - 1; k++) {
                minimum = this.min(tableau, k);
                temp = tableau[minimum];
                tableau[minimum] = tableau[k];
                tableau[k] = temp;
            
                console.log(`tableau[k] => ${tableau[k]}`)
                console.log(`tableau[minimum] => ${tableau[minimum]}`)
                console.log(`minimum => ${minimum}`)

                vm._data.int_tasks.push({ done: true, text: tableau[k] });
            }
            if (vm._data.int_tasks.length == (vm._data.tasks.length - 1)) {
                vm._data.int_tasks.push({ done: true, text: tableau[tableau.length - 1] });

                // for each tableau
                // pause changement
            }
        },
    }
});