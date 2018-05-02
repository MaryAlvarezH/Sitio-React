//Dependencias
import React, { Component } from 'react';

//Componentes
import Navbar from './Global/Navbar'
import Slide from './Global/Slide'
import Body from './Global/Body'

//Datos
import items from './Global/data/menu'

class App extends Component {
  constructor(){
    super()
    this.state={
      primer:"Inicio",
      segundo: "Sobre nosotros",
      tercer:"Contactanos",
      cuarto: "Ubicacion"
    }
  }
 
  render() {
    return (
      <div className="App">
       <Navbar text={this.state.primer} text2={this.state.segundo} text3={this.state.tercer} text4={this.state.cuarto}/>
       <Slide/>
       <br/>
       <br/>
       <Body/> {/*mandar propiedades a nuestro componente body*/}
      </div>
    );
  }
}

export default App;
