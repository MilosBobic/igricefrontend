function generisiPoruku() {
    var opcija = document.querySelector('input[name="opcije"]:checked');
    var rezultat = document.getElementById("rezultat");
    
    if (opcija) {
      rezultat.textContent = opcija.value;
    } else {
      rezultat.textContent = "Niste izabrali nijednu opciju.";
    }
  }