//create an array
var colorlist = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];


//variables IN functionss (function scope) can see global variables.
var imagelistA = new Array();

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


//create the buildThumbnail function
function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");
  //thumbsDiv.innerHTML = "<p>hi there</p>"; //innerHTML replaces what the original value was
  
  //create an output variable
  var output = "";
  
  //for loops are memory intensive. three parts: counter, condition (loop will keep looping as long as the condition is true), incrementer (adds one to the counter after the code is executed)
  for(var i=0; i < imagelist.length; i++)
  {
    output += '<img src="' + imagelist[i] + '" />'; //concatenation assignment operator 
  }
    thumbsDiv.innerHTML = output;
  
//  thumbsDiv.innerHTML = 
//  '<img src="' + imagelist[0] + '"/>' +
//  '<img src="' + imagelist[1] + '"/>' +
//  '<img src="' + imagelist[2] + '"/>' +
//  '<img src="' + imagelist[3] + '"/>' +
//  '<img src="' + imagelist[4] + '"/>'
//  ;
}



//capture an event when the page loads
window.onload = function()//literal function
{
  buildThumbnails();//use or "fire off" or invoke this function
  
};