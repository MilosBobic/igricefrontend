function prikaziPoruku() {
    var porukaInput = document.getElementById("poruka");
    var poruka = porukaInput.value;
    var rezultat = document.getElementById("rezultat");
    
    rezultat.textContent = "Vaša poruka je: " + poruka;
  }