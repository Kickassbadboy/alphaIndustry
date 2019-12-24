window.onload = function() {
    imgchange();
}

function imgchange() {


    var currimage;

    // var img1 = "assets/images/Final/Old_images/1.png";
    // var img2 = "assets/images/Final/Old_images/2.png";
    // var img3 = "assets/images/Final/Old_images/3.png";
    // var img4 = "assets/images/Final/Old_images/4.png";


    var img1 = `<img class="first" src="assets/images/Final/Old_images/1.png" alt="" >`;
    var img2 = `<img class="second" src="assets/images/Final/Old_images/2.png" alt=""  >`;
    var img3 = `<img class="third" src="assets/images/Final/Old_images/3.png" alt="" >`;
    var img4 = `<img class="mob" src="assets/images/Final/Old_images/4.png" alt="" >`;

    var para1 = "<h5 class='size'>Your partner in manufacturing of  foundry tooling, dies and fixtures.</h5><br>Alpha has consistently embraced innovation to provide reliable services to a wide range of industries.";
    var para2 = "<h5 class='size'>We offer a wide range of foundry solutions.With over 2 decades experience in this field,</h5> <br>Alpha has earned a high reputation in foundry tooling solutions.";
    var para3 = "<h5 class='size'>A proud team of experienced engineers with an innovative approach.</h5><br>Alpha has a qualified team of engineers and professionals ready to take on new industry challenges."
    var para4 = "<h5 class='size'>Allied expertise in design, simulation and reverse engineering.</h5><br>Alpha has established capabilities in designing of technically critical projects alongside customers by understanding their needs. <br>We have achieved competence in simulation of castings and design optimisation which guarantee reliable results."


    var button1 = `  <a class="
    tp - caption fp_button_layer rev - btn tp - resizeme "
    href = "service-dies-manufacturing.html"
    id = "slide-2-layer-4" 
    
    
    style = "z-index: 9; white-space: nowrap; color: rgba(0,0,0);background-color:rgb(255,255,255); border-color:black !important;border-width:2px 2px 2px 2px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration:" > Know
    More </a> `;
    var button2 = `  <a class="
    tp - caption fp_button_layer rev - btn tp - resizeme "
    href = "service-foundry-toolings.html"
    id = "slide-2-layer-4"
    
    
    style = "z-index: 9; white-space: nowrap; color: rgba(0,0,0,1);background-color:rgb(255,255,255);border-color:black !important;border-width:2px 2px 2px 2px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration:" > Know
    More   </a> `;
    var button3 = `  <a class="
    tp - caption fp_button_layer rev - btn tp - resizeme "
    href = "inovation.html"
    id = "slide-2-layer-4"
    
    
    style = "z-index: 9; white-space: nowrap; color: rgba(0,0,0,1);background-color:rgb(255,255,255);border-color:black !important;border-width:2px 2px 2px 2px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration:" > Know
    More   </a> `;
    var button4 = `  <a class="
    tp - caption fp_button_layer rev - btn tp - resizeme "
    href = ".html"
    id = "slide-2-layer-4"
    
    
    style = "z-index: 9; white-space: nowrap; color: rgba(0,0,0,1);background-color:rgb(255,255,255);;border-color:black !important;border-width:2px 2px 2px 2px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;text-decoration:" > Know
    More </a> `;


    var paragraph = [para1, para2, para3, para4];
    var paraindex = 0;
    var images = [img1, img2, img3, img4];
    var index = 0;
    var buttons = [button1, button2, button3, button4];
    var buttonindex = 0;

    setInterval(function() {
        var element = document.getElementById("para01");


        var element2 = document.getElementById("button");

        var element3 = document.getElementById("slider");


        console.log("Set Interval");
        paraindex = (paraindex + 1) % paragraph.length;
        buttonindex = (buttonindex + 1) % buttons.length;
        index = (index + 1) % images.length;

        // document.getElementById('newmage').src = images[index];
        element.innerHTML = paragraph[paraindex];
        element2.innerHTML = buttons[buttonindex];
        element3.innerHTML = images[index];
        console.log("Set Intervel");




    }, 4000);



}