//ALGORITMO DE BOUNCE OFF

var spriteFixo, spriteMovel;

function setup() {
  createCanvas(1200, 800);

  spriteFixo = createSprite(200, 100, 50, 80);
  spriteMovel = createSprite(200, 600, 80, 30);

  spriteFixo.debug = true;
  spriteMovel.debug = true;

  spriteFixo.velocityY = 5;
  spriteMovel.velocityY = -5;
}

function draw() {
  background(255, 255, 255);

  console.log(spriteMovel.x - spriteFixo.x);

  if (spriteMovel.x - spriteFixo.x < spriteFixo.width / 2 + spriteMovel.width / 2 &&
    spriteFixo.x - spriteMovel.x < spriteFixo.width / 2 + spriteMovel.width / 2) {
    spriteMovel.velocityX = spriteMovel.velocityX * (-1);
    spriteFixo.velocityX = spriteFixo.velocityX * (-1);
  }
  if (spriteMovel.y - spriteFixo.y < spriteFixo.height / 2 + spriteMovel.height / 2 &&
    spriteFixo.y - spriteFixo.y < spriteFixo.height / 2 + spriteMovel.height / 2) {
    spriteMovel.velocityY = spriteMovel.velocityY * (-1);
    spriteFixo.velocityY = spriteFixo.velocityY * (-1);
  }
  drawSprites();
}

// função isTouching()
function isTouching(objeto1, objeto2) {
  if (objeto1.x - objeto2.x < objeto1.width / 2 + objeto2.width / 2 && objeto2.x - objeto1.x < objeto2.width / 2 + objeto1.width / 2 && objeto1.y - objeto2.y < objeto1.height / 2 + objeto2.height / 2 && objeto2.y - objeto1.y < objeto2.height / 2 + objeto1.height / 2) {
    return true;
  } else {
    return false;
  }
}