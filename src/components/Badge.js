import React from 'react';

import './styles/Badge.css';
// import eurekaLogo from '../images/logo1.jpeg';
// import farmerLogo from '../images/farmer1.png'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          {/* <img src={farmerLogo} alt="Logo de la conferencia" /> */}
        </div>

        <div className="Badge__section-name">
          {/* <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          /> */}
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h4>Agricultor de {this.props.farms}</h4>
          <div>Modulos monitoreados: {this.props.modules}</div>
        </div>

        <div className="Badge__footer">#IrrigaTIC</div>
      </div>
    );
  }
}

export default Badge;
