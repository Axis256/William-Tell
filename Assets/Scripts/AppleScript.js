var controller: GameObject;
var scoreText : GameObject;
var livesText : GameObject;
var walkingSpeed : double;
var livesNumber : int;
var scoreNumber : int;

function Start () {
	controller = GameObject.Find("Controller");
	scoreText = GameObject.Find("Score");
	livesText = GameObject.Find("Lives");

	//Initialize the values of walking speed




	//Place the ant in a random position on start of the game
	this.gameObject.transform.position.x = generateX();
	this.gameObject.transform.position.y = generateY();
}

function Update () {	

	if(this.gameObject.transform.position.y < -4.35 && controller.GetComponent(GameScript).livesNumber > 0){	
		
		controller.GetComponent(GameScript).livesNumber -= 1;
		
		generateCoordinates();

	}else if(this.gameObject.transform.position.y < -4.35 && controller.GetComponent(GameScript).livesNumber == 0){
		Destroy(GameObject.Find("APPEL"));
        Destroy(GameObject.Find("APPEL1"));
		gameOver();

	}else{

		this.gameObject.transform.position.y -=  controller.GetComponent(GameScript).speed;
	}
}


function gameOver(){	
	Application.LoadLevel("GameOver");
}


//Generates random x
function generateX(){
	var x = Random.Range(-2.54,2.54);
	return x;
}

//Generates random y
function generateY(){
	var y = Random.Range(-4.0,3.8);
	return y;
}

//Move the "Ant" to the new coordiantess
function generateCoordinates(){

  

	

	//Update the score display

	this.gameObject.transform.position.x = generateX();
	this.gameObject.transform.position.y = generateY();
}

//If tapped or clicked
function OnMouseDown(){
	//Place the ant at another point
  GameObject.Find("Controller").GetComponent(GameScript).scoreNumber+=1;

	generateCoordinates();
    
}