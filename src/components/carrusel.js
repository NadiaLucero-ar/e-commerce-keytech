import '../styles/carouselStyle.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagenesCarrusel from '../data/imagenesCarrusel.js';

const Carrusel = () => {
    return (
        <Carousel className='carrusel' style={{zIndex:"900"}}>

            {ImagenesCarrusel.map((ImagenesCarrusel) => {return(
                <Carousel.Item >
                              
                        <img style={{height:"345px"}}
                          className="d-block w-100"
                          src={ImagenesCarrusel.imagen}
                          alt="First slide"
                        />

                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>{ImagenesCarrusel.descripcion}</p>
                        </Carousel.Caption>

                </Carousel.Item>
                
                
            )})}
        </Carousel>
    )
  }
export default Carrusel;