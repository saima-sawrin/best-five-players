function getInputFieldElementById(id){
    const input = document.getElementById(id);
    const value = input.value;
    const  string = parseFloat(value);
    input.value = '';
    return string;
}
function getTextElementById(id){
    const input = document.getElementById(id);
    const value = input.innerText;
    const  string = parseFloat(value);
    return string;
}

function setTextElementById(id , value){
    const element = document.getElementById(id);
    element.innerText = value;
}

