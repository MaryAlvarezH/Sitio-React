import React, {Component} from 'react'
import EdadClick from './js/edad'
import './css/Body.css';



class Body extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <form name="datos">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="email" class="form-control" id="txtName" aria-describedby="emailHelp" placeholder="Ingresa tu nombre o usuario"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your information with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Edad</label>
                        <input type="text" class="form-control" id="txtAge" placeholder="Contraseña"/>
                    </div>
                    

                    <button type="button" class="btn btn-primary" onClick={EdadClick}>Enviar</button>
                    </form>
                    </div>
                    <div className="col-lg-6">
                    <label className="Body-text" id="lblName"></label><br/>
                    <label className="Body-text" id="lblEdad"></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body