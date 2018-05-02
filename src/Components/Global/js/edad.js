function EdadClick() {
    var nombre=document.datos.txtName.value         
    var edad = document.datos.txtAge.value
    document.getElementById('lblName').innerHTML=`${nombre}`
    if(edad>=18){
      document.getElementById('lblEdad').innerHTML = "Bienvenido, eres mayor de edad";
    }
    else{
      document.getElementById('lblEdad').innerHTML = "Lo sentimos, eres menor de edad";
    }
  }

  module.exports=EdadClick