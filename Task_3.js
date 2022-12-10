
$(document).ready(function () {
    

let cel = document.getElementById("cel")
let far = document.getElementById("far")

cel.oninput=()=>{
let output = (parseFloat(cel.value) * 9) / 5 + 32
far.value = parseFloat(output.toFixed(2))
console.log(cel.value)
}
far.oninput=()=>{
    let output = ((parseFloat(far.value) - 32) * 5) / 9
    cel.value = parseFloat(output.toFixed(2))
    console.log(far .value)
    }
});


