$(document).ready(function(){

  var currentColor = "white";
  var reset = "white";
  var height = 50;
  var width = 70;
  var clicking = false;
  var actualColor = document.querySelector(".currentColor > .actualColor")

  var table = document.querySelector("table");
  for(var i=0; i<height; i++){
    var tr = document.createElement("tr");
    table.append(tr);
    for(var j=0; j<width; j++){
      var td = document.createElement("td");
      tr.append(td);
      td.addEventListener("mousedown", function(){
        clicking = true;
        if(this.className === currentColor){
          this.className = reset;
        } else {
          this.className = currentColor;
        }
      })
      td.addEventListener("mouseenter", function(){
        if(clicking){
            this.className = currentColor;
        }
      })
    }
  }

  var colors = document.querySelectorAll(".palette > div");
  for(var i=0; i<colors.length; i++){
    colors[i].addEventListener("click", function(){
      currentColor = this.className;
      actualColor.className = 'actualColor ' + currentColor;
    })
  }



  table.addEventListener("mouseleave", function(){
    clicking = false;
  })

  table.addEventListener("mouseup", function(){
    clicking = false;
  })
})
