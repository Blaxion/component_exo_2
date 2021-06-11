import React, { Component } from 'react';

class Contenu extends Component {
    render() {
        return (
            <div className="row bg-success row-cols-4 justify-content-evenly g-0" >
                <div className="col bg-dark" style={{height:'77vh'}}></div>
                <div className="col bg-dark" style={{height:'77vh'}}></div>
                <div className="col bg-dark" style={{height:'77vh'}}></div>
            </div>
        );
    }
}

export default Contenu;