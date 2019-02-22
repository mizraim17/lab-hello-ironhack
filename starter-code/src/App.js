import React, {Component} from 'react';
import Navbar from "../Component/Navbar";
import Contenedor from "../Component/Contenedor";
import Cards from "../Component/Cards";
import './styles.css';

class App extends Component {

  render() {
    return(
      <div>
        <Navbar/>
        <Contenedor/>
        <Cards/>
      </div>
    );
  }
}

export default App;