//variables:
  //variables para fondo
    let cantImagFondo = 6;
    let fondo = [];
    let posXFondo = 0;
  //variables para Toriel
    let TorielF = [];
    let TorielA = [];
    let TorielIz = [];
    let TorielDer = [];
    let cantImagToriF = cantImagToriA = cantImagToriIz = cantImagToriDer = 4;
    let f, a, iz, der;
    let posXTori, posYTori;
  //otras variables
    let limiteCaminata, limiteFondo;
    let vel;
    let marcaEnElTiempo = 0;
    let velocidadAnimación = 190;
    let framePróximo;
    let estadoTori;
    let inicioEstado0, inicioEstado6, inicioEstado11, inicioEstado13;
    
    
//funciones:
  //funciones propias con parámetro
  function spritesTori (arregloSprites, movX, movY){
    image(arregloSprites[framePróximo], posXTori, posYTori, 80, 160);
    posXTori = posXTori + movX;
    posYTori = posYTori + movY;
  }
  
  function torielQuieta(arregloSprites2, casilla){
    image(arregloSprites2[casilla], posXTori, posYTori, 80, 160);
  }
  
  
  //función que retorna valor
  function calculoFrames(actualFrame){
    let siguienteFrame = actualFrame + 1;
    if(siguienteFrame == 4){
      siguienteFrame = 0;
    }
    return siguienteFrame;
  }
