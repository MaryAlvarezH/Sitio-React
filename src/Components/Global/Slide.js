import React, {Component} from 'react'

class Slide extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://picsum.photos/1800/450/?image=71" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>Primer sitio con REACT!</h1>
                    <h4>Utilizando Bootstrap en cada uno de los componentes</h4>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://picsum.photos/1800/450/?image=72" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://picsum.photos/1800/450/?image=75" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        );
    }
}
export default Slide