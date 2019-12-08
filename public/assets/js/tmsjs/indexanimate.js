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

    var img1 = "assets/images/Final folder/cover01.png";
    var img2 = "assets/images/Final folder/cover2.png";
    var img3 = "assets/images/Final folder/cover3.png";
    var img4 = "assets/images/Final folder/cover4.png";

    var para1 = "<h5>Your partner in manufacturing of  foundry tooling, dies and fixtures.</h5><br>Alpha has consistently embraced innovation to provide reliable services to a wide range of industries.";
    var para2 = "<h5>We offer a wide range of foundry solutions.With over 2 decades experience in this field,</h5> <br>Alpha has earned a high reputation in foundry tooling solutions.";
    var para3 = "<h5>A proud team of experienced engineers with an innovative approach.</h5><br>Alpha has a qualified team of engineers and professionals ready to take on new industry challenges."
    var para4 = "<h5>Allied expertise in design, simulation and reverse engineering.</h5><br>Alpha has established capabilities in designing of technically critical projects alongside customers by understanding their needs. <br>We have achieved competence in simulation of castings and design optimisation which guarantee reliable results."

    var paragraph = [para1, para2, para3];
    var paraindex = 0;
    var images = [img1, img2, img3, img4];
    var index = 0;

    setInterval(function() {
        var element = document.getElementById("para01");
        element.innerHTML = paragraph[paraindex];
        // var element = document.getElementById("para02");
        // element.innerHTML = para2;
        // var element = document.getElementById("para03");
        // element.innerHTML = para3;
        // var element = document.getElementById("para04");
        // element.innerHTML = para4;

        console.log("Set Interval");
        paraindex = (paraindex + 1) % paragraph.length;

        document.getElementById('img').src = images[index];
        console.log("Set Intervel");
        index = (index + 1) % images.length;
        // for (i = 0; i < images.length; i++) {
        //     currimage = images[i];

        // }

    }, 6000);

    nextImageandText(); {
        var element = document.getElementById("para01");
        element.innerHTML = paragraph[paraindex++];

        document.getElementById('img').src = images[index++];

    }

}