//alert("Hello");
console.log("hello")
console.warn("warn")
console.error("error")


function changeWidth (ttt){
    let element = document.getElementById("eafH1");
    element.style.width = "100px";
}

function getxy (){
    let element = document.getElementById("eafH1");
    let rect = element.getBoundingClientRect();
    
    // the position related to the viewport
    let x = rect.x;
    let y = rect.y;
    
    // get the postion related to the webpage
    x = x + window.scrollX;
    y = y + window.scrollY;
    
    let xposition=document.getElementById("xposition");
    xposition=x
    let yposition=document.getElementById("yposition");
    yposition=y

}

