function promeniTemu(tema) {
    var bodyElement = document.body;
    
    if (tema === 'light') {
      bodyElement.className = 'light';
    } else if (tema === 'dark') {
      bodyElement.className = 'dark';
    }
  }