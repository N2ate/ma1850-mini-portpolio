let theText = ["wahoo" ,"i","did","it"];
let word = theText [0];
let i = 0;


function setup() {
  createCanvas(400, 400);
frameRate(2);
}

function draw() {
  background(220);

  // the text display
textSize(45);
text (word,random(400), height/2)

// change value of text
word = theText[i];
i=i+1
if(i>theText.length){i=0}
}




