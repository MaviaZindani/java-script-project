// calculater

const disply = document.getElementById("display");
var userinput1 ;
var oprater ;
var userinput2 ;
var result ;



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
   for (var i =0; i < disply.value.length; i++) {
       console.log();
    if (disply.value[i] === "+" || disply.value[i] === "-" || disply.value[i] === "/" || disply.value[i] === "*" || disply.value[i] === "Squ" || disply.value[i] === "+") {
      userinput1 = parseFloat(disply.value.slice(0,i));
      console.log("userinput1: " + userinput1);
      
      var oprater = disply.value[i];
      console.log("Oprater: " + oprater)

      userinput2 = parseFloat(disply.value.slice(i + 1));
      console.log("userinput2: " + userinput2)

      break;
    }
    if (result === null) {
      result = disply.value;
    }
    
   }
   switch (oprater) {
    case oprater = "+":
      result = userinput1 + userinput2;
      break;
    case oprater = "-":
        result = userinput1 - userinput2;
        break;
    case oprater = "*":
      result = userinput1 * userinput2;
      break;
    case oprater = "/":
        result = userinput1 / userinput2;
        break;
    case oprater = "Squ":
      result = userinput1 * userinput1;
      break;
    default:
      result = "error";
      break;
   }
   disply.value = result;

  }