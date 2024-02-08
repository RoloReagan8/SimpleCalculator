const result = document.getElementById("result");

function addToResult(input){
    result.value += input;
}

function clearResult(){
    result.value = "";
}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value = "Error";
    }
}
