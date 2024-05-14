const input = document.getElementById("input");

function Submit(){
    try{
        document.getElementById("input").value = eval(document.getElementById("input").value);
    }catch(error){

    }
}

function AppendToInput(elem){
    const inputContent = document.getElementById("input");
    inputContent.value += elem;
}

function ClearInput(){
    document.getElementById("input").value = "";
}