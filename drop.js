function drop() {
  this.x = random(-width, 2 * width);
  this.y = random(-height, -100);
  this.z = random(0, 25)
  this.yspeed = map(this.z, 0, 25, 15, 30);

  this.fall = () => {
    
    this.y += this.yspeed;
    this.x += windSpeed * this.yspeed;
    this.yspeed += 0.01;

    if (this.y > height) {
      this.x = random(-width, 2 * width);
      this.y = random(-200, -100);
      this.z = random(0, 25)
      this.yspeed = map(this.z, 0, 25, 15, 30);
    }
  }

  this.show = () => {
    stroke(230, 167, 31)

 
    strokeWeight(this.z / 5)
    line(this.x, this.y, this.x + windSpeed * this.yspeed, this.y + this.yspeed);
  }
}

