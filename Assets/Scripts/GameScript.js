var scoreText : GameObject;
var livesText : GameObject;
var speed : double;
var livesNumber : int;
var scoreNumber : int;

function Start () {

	scoreText = GameObject.Find("Score");
	livesText = GameObject.Find("Lives");

	//Initialize the values of walking speed
	walkingSpeed = 0.0;
	livesNumber = 3;
	scoreNumber = 0;
    speed = 0.01;

	//Initialize the GUI components
	livesText.GetComponent(UI.Text).text = "Lives Remaining: " + livesNumber;
	scoreText.GetComponent(UI.Text).text = "Score: " + scoreNumber;

}

function Update () {	
    speed = 0.01 + scoreNumber * 0.01;
	livesText.GetComponent(UI.Text).text = "Lives Remaining: " + livesNumber;
	scoreText.GetComponent(UI.Text).text = "Score: " + scoreNumber;

}

function gameOver(){	
	Application.LoadLevel("GameOver");
}
