class Block {
    constructor(x,y,width, height) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          density: 1,
          friction: 0.3
      }
      this.body = Bodies.rectangle(x,y,width, height,options);
      this.width = width;
      this.height = height
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed < 3){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
    
      rect( 0, 0, this.width, this.height);
      pop();

    }
    else{
      World.remove(world, this.body)
      push();
      this.visibility -= 5;
      pop();
    }
    }

    score(){
      if(this.visibility < 0 && this.visibility > -105){
        score++;

      }
    }
  };