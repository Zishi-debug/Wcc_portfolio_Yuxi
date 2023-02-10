
let Cmc,CmcM;
function preload(){
    Cmc=loadModel('assets/images/C_minecraft/C_mc.obj');
    CmcM=loadImage('assets/images/C_minecraft/c.png')
}
function setup() {
    canvas= createCanvas(400, 400,WEBGL);
    canvas.parent("sketch-container");
    noStroke();  
  }
  
  function draw() {
    orbitControl(2, 1, 0.1);
    background(43,163,255,0);
    //circle(width/2,height/2,100);
    push();
    scale(20,-20,20);
    translate(0,-5,0);
    texture(CmcM);
    model(Cmc);
    pop();
  }