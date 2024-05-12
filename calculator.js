function clearDisplay(){
    document.getElementById("display").value = "";
}
function addToScreen(value){
    document.getElementById("display").value += value;
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Arithmetic Error';
    }
}
function deleteButton(){
    const newDisplay = document.getElementById('display');
    newDisplay.value = newDisplay.value.slice(0, -1)
}
