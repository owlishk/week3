//variables IN functionss (function scope) can see global variables.
var imagelistA = [];

imagelistA[0] = "images/drawing/thumbs/artwork_1.jpg";
imagelistA[1] = "images/drawing/thumbs/artwork_2.jpg";
imagelistA[2] = "images/drawing/thumbs/artwork_3.jpg";
imagelistA[3] = "images/drawing/thumbs/artwork_4.jpg";
imagelistA[4] = "images/drawing/thumbs/artwork_5.jpg";
imagelistA[5] = "images/drawing/thumbs/artwork_6.jpg";
imagelistA[6] = "images/drawing/thumbs/artwork_7.jpg";
imagelistA[7] = "images/drawing/thumbs/artwork_8.jpg";
imagelistA[8] = "images/drawing/thumbs/artwork_9.jpg";
imagelistA[9] = "images/drawing/thumbs/artwork_10.jpg";
imagelistA[10] = "images/drawing/thumbs/artwork_11.jpg";
imagelistA[11] = "images/drawing/thumbs/artwork_12.jpg";
imagelistA[12] = "images/drawing/thumbs/artwork_13.jpg";
imagelistA[13] = "images/drawing/thumbs/artwork_14.jpg";
imagelistA[14] = "images/drawing/thumbs/artwork_15.jpg";
imagelistA[15] = "images/drawing/thumbs/artwork_16.jpg";
imagelistA[16] = "images/drawing/thumbs/artwork_17.jpg";
imagelistA[17] = "images/drawing/thumbs/artwork_18.jpg";
imagelistA[18] = "images/drawing/thumbs/artwork_19.jpg";
imagelistA[19] = "images/drawing/thumbs/artwork_20.jpg";
imagelistA[20] = "images/drawing/thumbs/artwork_21.jpg";
imagelistA[21] = "images/drawing/thumbs/artwork_22.jpg";
imagelistA[22] = "images/drawing/thumbs/artwork_23.jpg";
imagelistA[23] = "images/drawing/thumbs/artwork_24.jpg";
imagelistA[24] = "images/drawing/thumbs/artwork_25.jpg";

//oil painting list
var imagelistB = [];

imagelistB[0] = "images/oil/thumbs/artwork_1.jpg";
imagelistB[1] = "images/oil/thumbs/artwork_2.jpg";
imagelistB[2] = "images/oil/thumbs/artwork_3.jpg";
imagelistB[3] = "images/oil/thumbs/artwork_4.jpg";
imagelistB[4] = "images/oil/thumbs/artwork_5.jpg";
imagelistB[5] = "images/oil/thumbs/artwork_6.jpg";
imagelistB[6] = "images/oil/thumbs/artwork_7.jpg";
imagelistB[7] = "images/oil/thumbs/artwork_8.jpg";

//watercolor list
var imagelistC = [];

imagelistC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imagelistC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imagelistC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imagelistC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imagelistC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imagelistC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imagelistC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imagelistC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imagelistC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imagelistC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");
  //thumbsDiv.innerHTML = "<p>hi there</p>"; //innerHTML replaces what the original value was
  
  //create an output variable
  var output = "";
  
  //for loops are memory intensive. three parts: counter, condition (loop will keep looping as long as the condition is true), incrementer (adds one to the counter after the code is executed)
  for(var i=0; i < imagelistA.length; i++)
  {
    output += '<img src="' + imagelistA[i] + '" />'; //concatenation assignment operator 
    thumbsDiv.innerHTML = output;
  }
  
  //resetting output variable so it only loops watercolor thumbs
  output = [];
  //thumbnail array for watercolor section
  var thumbsDiv = document.getElementById("watercolor")
  
    //for loops are memory intensive. three parts: counter, condition (loop will keep looping as long as the condition is true), incrementer (adds one to the counter after the code is executed)
  for(var j=0; j < imagelistB.length; j++)
  {
    output += '<img src="' + imagelistB[j] + '" />'; //concatenation assignment operator 
    thumbsDiv.innerHTML = output;
  }
  
  //resetting output variable
  output = [];
  //thumbnail array for oil section
    var thumbsDiv = document.getElementById("oils")
  
    //for loops are memory intensive. three parts: counter, condition (loop will keep looping as long as the condition is true), incrementer (adds one to the counter after the code is executed)
  for(var k=0; k < imagelistC.length; k++)
  {
    output += '<img src="' + imagelistC[k] + '" />'; //concatenation assignment operator 
    thumbsDiv.innerHTML = output;
  }
}






//capture an event when the page loads
window.onload = function()//literal function
{
  buildThumbnails();//use or "fire off" or invoke this function
  
};

