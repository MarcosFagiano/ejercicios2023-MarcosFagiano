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