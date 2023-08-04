//alert("Hello");
console.log("hello")
console.warn("warn")
console.error("error")
// گرفتن اطلاعات دیو
function getinfodiv(){
    let elem = document.getElementById("eafH1");
    let rect = elem.getBoundingClientRect();
    
    for (const key in rect) {
      if (typeof rect[key] !== "function") {
        let para = document.createElement("p");
        para.textContent = `${key} : ${rect[key]}`;
        document.body.appendChild(para);
      }
    }  
}
// تغییر عرض دیو
function changeWidth() {
    var width = document.getElementById("widthInput").value;
    document.getElementById("eafH1").style.width = width + "px";
  }
//حرکت خط

