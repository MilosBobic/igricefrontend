function promeniSliku() {
    var slika = document.getElementById("slika");
    
    if (slika.src.endsWith("slika1.jpg")) {
      slika.src = "images/slika2.jpg";
      slika.alt = "Slika 2";
    } else if (slika.src.endsWith("slika2.jpg")) {
      slika.src = "images/slika1.jpg";
      slika.alt = "Slika 1";
    }
  }