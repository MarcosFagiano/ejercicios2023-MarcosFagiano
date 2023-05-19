/**
 * Conversion de unidades(metros, yardas, pies y pulgadas)
 * @method changeUnit
 * @param {string} id - id de los inputs
 * @param {number} value - valor de los inputs
 * @return
 */

function changeUnit(id, value){
    if(isNaN(value)){
        alert('Se ingreso un valor invalido.');
        document.unit.unid_metro.value= "";
        document.unit.unid_pulgada.value= "";
        document.unit.unid_pie.value= "";
        document.unit.unid_yarda.value= "";
    }else if(id=="metro"){
        document.unit.unid_pulgada.value= 39.3701*value;
        document.unit.unid_pie.value= 3.28*value;
        document.unit.unid_yarda.value= 1.09*value;
    }else if(id=="pulgada"){
        document.unit.unid_metro.value= 0.03*value;
        document.unit.unid_pie.value= 0.08*value;
        document.unit.unid_yarda.value= 0.03*value;
    }else if(id=="pie"){
        document.unit.unid_metro.value= 0.3*value;
        document.unit.unid_pulgada.value= 12*value;
        document.unit.unid_yarda.value= 0.33*value;
    }else if(id=="yarda"){
        document.unit.unid_metro.value= 0.91*value;
        document.unit.unid_pie.value= 3*value;
        document.unit.unid_pulgada.value= 36*value;
    }

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
    var rad, grad;
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
    var num1, num2;
    if(isNaN(document.getElementsByName("sum_num1")[0].value)||
        isNaN(document.getElementsByName("sum_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("sum_num1")[0].value = "";
        document.getElementsByName("sum_num2")[0].value = "";
    } else{
        num1 = document.getElementsByName("sum_num1")[0].value;
        num2 = document.getElementsByName("sum_num2")[0].value;
        document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
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
    var num1, num2;
    if(isNaN(document.getElementsByName("res_num1")[0].value)||
        isNaN(document.getElementsByName("res_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("res_num1")[0].value = "";
        document.getElementsByName("res_num2")[0].value = "";
    } else {
        num1 = document.getElementsByName("res_num1")[0].value;
        num2 = document.getElementsByName("res_num2")[0].value;
        document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
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
    var num1, num2;
    if(isNaN(document.getElementsByName("mul_num1")[0].value)||
        isNaN(document.getElementsByName("mul_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("mul_num1")[0].value = "";
        document.getElementsByName("mul_num2")[0].value = "";
    } else {
        num1 = document.getElementsByName("mul_num1")[0].value;
        num2 = document.getElementsByName("mul_num2")[0].value;
        document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
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
    var num1, num2;
    if(isNaN(document.getElementsByName("div_num1")[0].value)||
        isNaN(document.getElementsByName("div_num2")[0].value)) {
        alert('Se ingreso un valor invalido.');
        document.getElementsByName("div_num1")[0].value = "";
        document.getElementsByName("div_num2")[0].value = "";
    } else {
        num1 = document.getElementsByName("div_num1")[0].value;
        num2 = document.getElementsByName("div_num2")[0].value;
        document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
    }
}