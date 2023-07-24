/**
 * Conversion de unidades(metros, yardas, pies y pulgadas)
 * @method changeUnit
 * @param {string} id - id de los inputs
 * @param {number} value - valor de los inputs
 * @return
 */

function changeUnit(id, value){
    let metro, pulgada, pie, yarda;
    if(value.includes(",")){
        value=value.replace(",", ".");
    }
    if(isNaN(value)){
        alert('Se ingreso un valor invalido.');
        metro= "";
        pulgada= "";
        pie= "";
        yarda= "";
    }else if(id==="metro"){
        metro=value;
        pulgada= 39.3701*value;
        pie= 3.28*value;
        yarda= 1.09*value;
    }else if(id==="pulgada"){
        pulgada=value;
        metro= 0.03*value;
        pie= 0.08*value;
        yarda= 0.03*value;
    }else if(id==="pie"){
        pie=value;
        metro= 0.3*value;
        pulgada= 12*value;
        yarda= 0.33*value;
    }else if(id==="yarda"){
        yarda=value;
        metro= 0.91*value;
        pie= 3*value;
        pulgada= 36*value;
    }
    document.unit.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.unit.unid_metro.value= Math.round(metro*100)/100;
    document.unit.unid_pie.value= Math.round(pie*100)/100;
    document.unit.unid_yarda.value= Math.round(yarda*100)/100;
}
/**
 * Conversion de grados-radianes
 * @method changeGR
 * @param {string} id - id de los inputs
 * @param {number} rad - valor de los radianes
 * @param {number} grad - valor de los grados
 * @return
 */

function changeGR(id){
    let rad, grad;
    if(isNaN(document.getElementById("grados").value)||isNaN(document.getElementById("radianes").value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementById("grados").value = "";
        document.getElementById("radianes").value = "";
    }else if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }
}

/**
 * mostrar/ocultar div
 * @method showHide
 * @param {string} valueMo - valor del id mostrat/ocultar
 */

function showHide(valueMo){
    if(valueMo=="val_mostrar"){
        document.getElementById("divShow").style.display = 'block';
    }else if(valueMo=="val_ocultar"){
        document.getElementById("divShow").style.display = 'none';
    }
}

/**
 * suma
 * @method plus
 * @param {number} num1 - valor de la variable 1
 * @param {number} num2 - valor de la variable 2
 * @return
 */
function plus(){
    let num1, num2;
    if(isNaN(document.getElementsByName("sum_num1")[0].value)||
        isNaN(document.getElementsByName("sum_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("sum_num1")[0].value = "";
        document.getElementsByName("sum_num2")[0].value = "";
    } else{
        num1 = document.getElementsByName("sum_num1")[0].value;
        num2 = document.getElementsByName("sum_num2")[0].value;
        document.getElementsByName("sum_total")[0].innerHTML = Number(num1) + Number(num2);
    }
}
/**
 * minus
 * @method minus
 * @param {number} num1 - valor de la variable 1
 * @param {number} num2 - valor de la variable 2
 * @return
 */
function minus(){
    let num1, num2;
    if(isNaN(document.getElementsByName("res_num1")[0].value)||
        isNaN(document.getElementsByName("res_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("res_num1")[0].value = "";
        document.getElementsByName("res_num2")[0].value = "";
    } else {
        num1 = document.getElementsByName("res_num1")[0].value;
        num2 = document.getElementsByName("res_num2")[0].value;
        document.getElementsByName("res_total")[0].innerHTML = Number(num1) - Number(num2);
    }
}
/**
 * multiplication
 * @method multiplication
 * @param {number} num1 - valor de la variable 1
 * @param {number} num2 - valor de la variable 2
 * @return
 */

function multiplication(){
    let num1, num2;
    if(isNaN(document.getElementsByName("mul_num1")[0].value)||
        isNaN(document.getElementsByName("mul_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("mul_num1")[0].value = "";
        document.getElementsByName("mul_num2")[0].value = "";
    } else {
        num1 = document.getElementsByName("mul_num1")[0].value;
        num2 = document.getElementsByName("mul_num2")[0].value;
        document.getElementsByName("mul_total")[0].innerHTML = Number(num1) * Number(num2);
    }
}
/**
 * division
 * @method division
 * @param {number} num1 - valor de la variable 1
 * @param {number} num2 - valor de la variable 2
 * @return
 */
function division(){
    let num1, num2;
    if(isNaN(document.getElementsByName("div_num1")[0].value)||
        isNaN(document.getElementsByName("div_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("div_num1")[0].value = "";
        document.getElementsByName("div_num2")[0].value = "";
    } else {
        num1 = document.getElementsByName("div_num1")[0].value;
        num2 = document.getElementsByName("div_num2")[0].value;
        document.getElementsByName("div_total")[0].innerHTML = Number(num1) / Number(num2);
    }
}

/**
 * funcionamiento de primer pagina
 * @method loadWeb
 * @param {number} cant - valor a convertir
 * @param {string}  unit - unidad a la que se desea convertir
 * @param {string} urlComp - valor de la url completa
 * @return
 */
function loadWeb(){
    let unit, cant, urlComp;
    cant = document.getElementById("distancia").value;
    unit = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unit;
    window.open(urlComp);

}

/**
 * funcionamiento de la segunda web
 * @method division
 * @param {number} can - valor de la conversion
 * @param {string} un - unidad a la que se convirtio
 * @param {string} urlComp - valor de la url completa con los valores y unidades
 * @return
 */
function showAns(){
    let urlComp, can, un;

    urlComp=window.location.href.split("/")[5];
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2].split("_")[1];
    document.getElementById("dist").value= can + " " + un;

}

function saveLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open("segundaWeb_2.html");
}

function loadLocalStorage(){
    let cant, un;

    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadLS").split("_")[1];
    document.getElementById("dist").value = cant + " " + un;
}

function draw(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let yMax = canvas.height;
    let xMax = canvas.width;
    let border = 5
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+border, yMax-40-border, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.fillStyle = "#998333"
    ctx.fill();
}

var bandera;
function drawPaint(event){
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);
    ctx.fillStyle = "#000000"
    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    if(bandera) {
        ctx.fillRect(posX-10, posY-121, 10, 10);
        ctx.fill();
    }
}
// document.addEventListener("DOMContentLoaded", function() {
//     let canvas = document.getElementById("paint");
//     let ctx = canvas.getContext("2d");
//
//     canvas.addEventListener("mousemove", function(e) {
//         drawPaint(e, ctx);
//     });
//
//     function drawPaint(e, context) {
//         var posX = e.clientX - canvas.offsetLeft;
//         var posY = e.clientY - canvas.offsetTop;
//
//         context.fillStyle = "#000000";
//         context.fillRect(posX, posY, 5, 5);
//         context.fill();
//     }
// });

 function clear(){
     let canvas = document.getElementById("paint");
     let ctx = canvas.getContext("2d");
     canvas.width = canvas.width;
 }