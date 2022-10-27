const arraySpesa = ["Pasta", "Carne", "Pesce", "Verdura", "Frutta", "Dolci", "Bibite", "Prodotti per la casa", "Set LEGO", "Carte Pokémon"];
const listaSpesa = document.getElementById("lista");
let i = 0;

while(i < arraySpesa.length){
    listaSpesa.innerHTML += `<li>${arraySpesa[i]}</li>`
    i++
}