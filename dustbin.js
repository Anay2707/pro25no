class dustbin
{
	constructor(x,y,width,height)
	{
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		// this.dustbinWidth=200;
		// this.dustbinHeight=213;
		// this.wallThickness=20;
		
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic:true})
		// this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		// this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		this.image = loadImage("dustbingreen.png");

		World.add(world, this.body)
		// World.add(world, this.leftWallBody)
		// World.add(world, this.rightWallBody);

	}
	display()
	{
		
			// var posBottom=this.bottomBody.position;
			// var posLeft=this.leftWallBody.position;
			// var posRight=this.rightWallBody.position;

			var pos = this.body.position;
			
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			image(this.image,0,0,this.width, this.height);
			pop()

			// push()
			// translate(posRight.x, posRight.y);
			// imageMode(CENTER)
			// strokeWeight(4);
			// angleMode(RADIANS)
			// fill(255)
			// rotate(-1*this.angle)
			// image(this.image,0,0,this.wallThickness, this.dustbinHeight);
			// pop()

			// push()
			// translate(posBottom.x, posBottom.y+10);
			// imageMode(CENTER)
			// strokeWeight(4);
			// angleMode(RADIANS)
			// fill(255)
			// image(this.image,0,0,this.dustbinWidth, this.wallThickness);
			// pop()
			
	}

}