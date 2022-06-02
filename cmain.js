let vm = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            fab: false,
            tasks: [{done: false, text: 5}, {done: false, text: 7}, {done: false, text: 9}, {done: false, text: 21}, {done: false, text: 1}, {done: false, text: -5}],
            int_tasks: [],
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
        
                vm._data.tasks.push({ done: true, text: tableau[k] });

                this.sleep(1000);
            }
            // if (vm._data.int_tasks.length == (vm._data.tasks.length - 1)) {
            //     vm._data.int_tasks.push({ done: true, text: tableau[tableau.length - 1] });

                

            //     // setTimeout(async function tri() {
            //     //     let tab_pastrie = vm._data.tasks;
            //     //     let tab_trie = vm._data.int_tasks;
                    
            //     //     for (let i = 0; i < tab_pastrie.length; i++) {
            //     //         temp = tab_trie[i].text;
            //     //         temp1 = tab_pastrie[i].text;
                        
            //     //         for (let k = 0; k < tab_pastrie.length; k++) {
            //     //             if (temp1 == tab_trie[k].text) {                                
            //     //                 tab_pastrie[k].text = tab_trie[k].text;

            //     //                 console.log("toto")
            //     //             }
            //     //         }

            //     //         tab_pastrie[i].text = temp;
            //     //         tab_pastrie[i].done = true;
                        
            //     //         vm._data.tasks = tab_pastrie;

            //     //         await sleep(2000);
            //     //     }
            //     // });                              
            // }
        },
        // Supp une valeur
        // reinitialiser (equilibré l'interface (button))
        // fragmenter le code en différentes fonctions
        // faire l'echange dans le tri
    }
});