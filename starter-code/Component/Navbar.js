import React, {Component} from 'react';

class Navbar extends Component{
  render() {
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light" >
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <img src="./images/ironhack-logo.svg" alt=""/>
              <a className="nav-item nav-link" href="#">Pricing</a>
              <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;