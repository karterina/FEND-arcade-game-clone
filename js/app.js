// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    //setting coordinates and speed
    this.x = x;
    this.y = y;
    this.speed = speed;
    //loading the image for the enemy objects
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiplies any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // reapperaing on canvas after getting to the end of canvas
    if (this.x > 630) {
      this.x = -140;
      // randomizing speed
      this.speed = 100 + Math.floor(Math.random() * 452);
    }
    // checking for collision and returning player to the initial point
    // if collision happens
    if (player.x < this.x + 80 &&
    player.x + 80 > this.x &&
    player.y < this.y + 50 &&
    player.y + 50 > this.y) {
      player.x = 252;
      player.y = 536;
    }
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  //setting coordinates
  this.x = x;
  this.y = y;
  //loading image for the player object
  this.player = 'images/char-pink-girl.png'
}


Player.prototype.update = function () {
  //preventing the player going off screen
  if (this.x > 450 || this.x < 0) {
    this.x = 252;
  }
  if (this.y > 536) {
    this.y = 536;
  }
  //checking for player getting to the top of the canvas and winning
  if (this.y < 0) {
    this.x = 252;
    this.y = 536;
  }
}

// draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
