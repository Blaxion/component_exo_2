import React, { Component } from 'react';
import ReactDOM from'react-dom';
import App from '../../App.jsx'
// let myTargets = [];
// let myTargetsCounter = [];
class Header extends Component {
    myTargets = [];
    myTargetsCounter = [];
    enfin = ''
    incrementor(e) {
        console.log(e)
        console.log(this.myTargets.indexOf(e))
        if (this.myTargets.indexOf(e) === -1) {
            this.myTargets.push(e);
            this.myTargetsCounter.push(1);
            console.log(this.myTargetsCounter)
        } else {
            console.log(this.myTargetsCounter)
            this.myTargetsCounter[this.myTargets.indexOf(e)]++;
        }
        // console.log(this.myTargetsCounter)
        // console.log(this.myTargetsCounter[this.myTargets.indexOf(e)]);
        this.enfin = this.myTargetsCounter[this.myTargets.indexOf(e)];
        ReactDOM.render(
            
                <App/>
            ,
            document.getElementById('root')
        );
        

    }
    render() {
        return (
            <div className='lastOne'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" onClick={(e) =>this.incrementor(e.target)}>
                    <a className="navbar-brand" href="/#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/#">Action</a></li>
                                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                            <li className="nav-item">
                                <p className='nav-link m-0 bg-danger'>Vous avez clické fois <span className='counter'>{this.enfin}</span> sur cette élément</p>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}
export default Header;