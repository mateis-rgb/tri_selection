// function min(tableau, indice) {
//     indice_min = indice;

//     for (let i = indice_min + 1; i < tableau.length; i++) {
//         if (tableau[i] < tableau[indice_min]) {
//             indice_min = i;
//         }
//     }
//     return indice_min;
// }

// function tri_selection(tableau) {
//     for (let k = 0; k < tableau.length - 1; k++) {
//         minimum = min(tableau, k);
//         temp = tableau[minimum];
//         tableau[minimum] = tableau[k];
//         tableau[k] = temp;
//     }

//     return tableau;
// }

let vm = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data() {
        return {
            toto: true,
            unevariablequelconque: "je suis une variable quelconque"
        }
    },
    methods: {
        nom_fonction: function () {
            // processus de fonction ... (les instructions)
            console.log("nom_fonction");

            return `un variable à retourner`;
        }
    }
});