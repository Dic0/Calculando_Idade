
  idade=()=>{

    try{
    var num1 =  document.getElementById('num1').value;
    var num2 =  document.getElementById('num2').value;
    var resul = num2 - num1;
      
    if(num1 < 0 || num2 < 0){
      throw "O ANO DEVE SER POSITIVO!"
    }
    else if(resul){
      document.getElementById('msg').innerHTML = "Quem nasceu em "+num1+" vai completar "+resul+" anos em "+num2+".";
    }
    }catch (error){
      document.getElementById('msg').innerHTML = "O ANO DEVE SER POSITIVO!";
    }
    }