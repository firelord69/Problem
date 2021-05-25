const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    backgroundImg(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    //change the data in JSON format
    var responseJSON = await response.json();

   
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=0600 && hour<=0800){
        bg = "sunrise1.png";
    }
    else if(hour>=0900 && hour<=1100){
        bg = "sunrise2.png";
    }
    else if(hour>=1101 && hour<=1300){
        bg = "sunrise3.png";
    }    
    else if(hour>=1301 && hour<=1400){
        bg = "sunrise4.png";
    }
    else if(hour>=1401 && hour<=1500){
        bg = "sunrise5.png";
    }
    else if(hour>=1501 && hour<=1700){
        bg = "sunrise6.png";
    }
    else if(hour>=1701 && hour<=1800){
        bg = "sunset7.png";
    }
    else if(hour>=1801 && hour<=1900){
        bg = "sunset8.png";
    }
    else if(hour>=1901 && hour<=2000){
        bg = "sunset10.png";
    }
    else if(hour>=2001 && hour<=2300){
        bg = "sunset11.png";
    }
    else if(hour>=2301 && hour<=0600){
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    
}
