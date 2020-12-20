var database
var dog
var happyDog
var foodS
var foodStock

function preload()
{
  happyDog = loadImage ("images/doglmg1.png");
  dog = loadImage("doglmg.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(400, 200, 20, 20);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}




function draw() {  
  background(46,139,87); 
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  

}


function readStock (data){
  foodS = data.val();

}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}






