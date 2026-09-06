//TP#1 - Animación de sprites
//Para este trabajo use al personaje Toriel del videojuego Undertale recorriendo su casa
  
function preload(){
  //recorre las imagenes del fondo
  for(let i = 0; i < cantImagFondo; i++){
  fondo.push ( loadImage('/assets/Recorrido0'+i+'.png') );
  }
  //recorre las imagenes de Toriel frente, atras, izquierda y derecha
  for(let i = 0; i < cantImagToriF; i++){
    TorielF.push ( loadImage ('/assets/TorielCaminaFrente0'+i+'.png') );
  }
  for(let i = 0; i < cantImagToriA; i++){
    TorielA.push ( loadImage ('/assets/TorielCaminaAtras0'+i+'.png') );
  }
  for(let i = 0; i < cantImagToriIz; i++){
    TorielIz.push ( loadImage ('/assets/TorielCaminaIz0'+i+'.png') );
  }
  for(let i = 0; i < cantImagToriDer; i++){
    TorielDer.push ( loadImage ('/assets/TorielCaminaDerecha0'+i+'.png') );
  }
}

function setup() {
  createCanvas( 800,600 );
  f = a = iz = der = 0;
  posXTori = 260;
  posYTori = 155;
  limiteCaminataX = 595;
  limiteCaminataY = 350;
  limiteFondo = -1100;
  vel = 3;
  estadoTori = 0;
  framePróximo = 0;
  inicioEstado0 = millis();
}
 
function draw() {
  background(200);
  //imagenes del fondo
  if(estadoTori < 6){ //animaciones de toriel en la cocina
  image(fondo[0], 0, 0, 800, 600);
  }
  if(estadoTori >= 6){ //animaciones de toriel en la sala-comedor
  image(fondo[1], 0, 0, 800, 600);
  }
  if(estadoTori >= 11){ // animaciones de toriel en las escaleras
  image(fondo[2], 0, 0, 800, 600);
  }
  if(estadoTori >= 13){ // animaciones de toriel en el pasillo
  image(fondo[3], posXFondo, 50, 1800, 500);
  }
  
  //Estados de animación Toriel  
        if(estadoTori == 0){
        torielQuieta(TorielF, f);
        }
        if(estadoTori == 0 && millis() - inicioEstado0 > 3000){ //empieza en la cocina
        estadoTori = 1;
        }
        if(estadoTori == 1 && posXTori > limiteCaminataX){
        vel = 0;
        estadoTori = 2;
        inicioEstado2 = millis();
        }
        if(estadoTori == 2){
        torielQuieta(TorielA, a);
        }
        if(estadoTori == 2 && millis() - inicioEstado2 > 2000){
        vel = 3;
        estadoTori = 3;
        }
        if(estadoTori == 3 && posYTori > limiteCaminataY){
        estadoTori = 4;
        limiteCaminataX = 230;
        }
        if(estadoTori == 4 && posXTori < limiteCaminataX){
        estadoTori = 5;
        limiteCaminataY = 500;
        }
        if(estadoTori == 5 && posYTori > limiteCaminataY){ //cambia habitación: sala-comedor
        posXTori = 130;
        posYTori = 10;
        estadoTori = 6;
        inicioEstado6 = millis();
        }
        if(estadoTori == 6){ //pasa a la sala-comedor
        torielQuieta(TorielF, f);
        }
        if(estadoTori == 6 && millis() - inicioEstado6 > 2000){
          estadoTori = 7;
          limiteCaminataY = 130;
        }
        if(estadoTori == 7 && posYTori > limiteCaminataY){
          estadoTori = 8;
          limiteCaminataX = 500;
        }
        if(estadoTori == 8 && posXTori > limiteCaminataX){
          estadoTori = 9;
          limiteCaminataY = 350;
        }
        if(estadoTori == 9 && posYTori > limiteCaminataY){
          estadoTori = 10;
          limiteCaminataX = 720;
        }
        if(estadoTori == 10 && posXTori > limiteCaminataX){ //cambia habitación: escaleras
          estadoTori = 11;
          posXTori = 10;
          posYTori = 350;
          inicioEstado11 = millis();
        }
        if(estadoTori == 11){
          torielQuieta(TorielDer, der);
        }
        if(estadoTori == 11 && millis() - inicioEstado11 > 2000){
          estadoTori = 12;
          limiteCaminataX = 720;
        }
        if(estadoTori == 12 && posXTori > limiteCaminataX){  //cambia habitación: pasillo
          estadoTori = 13;
          posXTori = 10;
          posYTori = 250;
          inicioEstado13 = millis();
        }
        if(estadoTori == 13){  
          torielQuieta(TorielDer, der);
        }
        if(estadoTori == 13 && millis() - inicioEstado13 > 2000){  
          estadoTori = 14;
          limiteCaminataX = 350;
        }
        if(estadoTori == 14 && posXTori > limiteCaminataX){
          estadoTori = 15;
        }
        if(estadoTori == 15){
          image(fondo[3], -posXFondo, 50, 1800, 500);
          posXFondo = posXFondo + vel;
          image(TorielDer[framePróximo], posXTori, posYTori, 80, 160);
        }
        if(estadoTori == 15 && posXFondo > 1000){
          vel = 0;
          estadoTori = 16;
        }
          
          
        if(estadoTori == 1){
          image(TorielDer[framePróximo], posXTori, 155, 80, 160);
          posXTori = posXTori + vel;
          }
        if(millis() > marcaEnElTiempo + velocidadAnimación){
          framePróximo = calculoFrames(framePróximo);
          marcaEnElTiempo = millis();
        }
        if(estadoTori == 3){
          spritesTori (TorielF, 0, vel);
        }
        if(estadoTori == 4){
          spritesTori (TorielIz, -vel, 0);
        }
        if(estadoTori == 5){
          spritesTori (TorielF, 0, vel);
        }
        if(estadoTori == 7){
          spritesTori (TorielF, 0, vel);
        }
        if(estadoTori == 8){
          spritesTori (TorielDer, vel, 0);
        }
        if(estadoTori == 9){
          spritesTori (TorielF, 0, vel);
        }
        if(estadoTori == 10){
          spritesTori (TorielDer, vel, 0);
        }
        if(estadoTori == 12){
          spritesTori (TorielDer, vel, 0);
        }
        if(estadoTori == 14){
          spritesTori (TorielDer, vel, 0);
        }
}
