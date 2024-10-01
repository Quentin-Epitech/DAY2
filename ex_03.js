function changebackground() {
    var magicNumber = 1;
    let magicNumber = 2; //erreur dans le code icu :magic number déjà declaré,fait exprès?
    let magicNumber = 3;
  
    if (magicNumber === 1) {
      paintRedRectangle();
    }
    if (magicNumber === 2) {
      paintGreenRectangle();
    }
    if (magicNumber === 3) {
      paintYellowRectangle();
    }
  }
  
  changebackground();
  