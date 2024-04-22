// calculater

const disply = document.getElementById("display");
function getvalue(input){
  disply.value += input;
};

function clearDisplay(del){
    if(del === "del"){
        disply.value = "";
    }else if(del === "c"){
        disply.value = disply.value.slice(0,-1);
    }
}

function getopr(){
  try{
    disply.value = eval(disply.value);
  }catch(error){
    disply.value = "error";
  }
}

