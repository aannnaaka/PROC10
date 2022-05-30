//Crear variables (donde podemos guardar valores)

var trex;
var ground;

//Esta función precarga las imagénes en eljuego
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = //completa con la función correcta
}

//Esta función configura los sprites
function setup() {
  createCanvas(600, 200);
  
  //crear sprite del t-rex, agregar la animación, modificar el tamaño y posición del trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite suelo, agregar la animación, modificar el tamaño y posición del suelo
  ground = 
  ground.
  ground.x = 
}

//Esta función dibuja las acciones de los sprites
function draw() {
  background(220);
  
  //agrega velocidad al suelo

  //Una función que diga: Si la posición del suelo en el eje de las x es menor a 0
  if ()){
    ground.x = ground.width/2;
  }
  
  //Crear una función para que al presionar la tecla space el trex se mueva hacia arriba
  if(()) {
    trex.velocityY = -10;
  }
  
  //esto hace que el juego tenga gravedad
  trex.velocityY = trex.velocityY + 0.8
  
 
 //evitar que el trex caiga y colisione en el suelo
  trex.(ground);
  drawSprites();
}
