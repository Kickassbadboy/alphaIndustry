/*
Create an Array 
var currImage ='';
var var1=relativelink
var var2=relativelink
var var3=relativelink


var images = [var1, var2, var3];

for(i=0;i<images.length; i++)
{
    this.currImage = images[i];
}
*/

window.onload = function() {
    imgchange();
}

function imgchange() {


    var currimage;

    var img1 = "assets/images/main-slider/core_box1.png";
    var img2 = "assets/images/main-slider/slide2-hp1.jpg";
    // var img3="assets/images/main-slider/core_box.png";
    // var img4="assets/images/main-slider/core_box.png";

    var images = [img1, img2];
    var index = 0;


    setInterval(function() {
        document.getElementById('img').src = images[index];
        console.log("Set Intervel");
        index = (index + 1) % images.length;
        // for (i = 0; i < images.length; i++) {
        //     currimage = images[i];

        // }

    }, 6000);



}