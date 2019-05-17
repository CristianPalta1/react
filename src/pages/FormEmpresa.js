import React from 'react';

import './styles/BadgeNew.css';
// import header from '../images/badge-header.svg';
// import farmerLogo from '../images/farmer1.png'
import Badge from '../components/Badge';
import Empresas from '../components/Empresas';

class FormEmpresa extends React.Component {
  state = {
    form: {
      factName: '',
      NIT: '',
      email: '',
      phone: '',
      typeP: '',
      password: ''
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          {/* <img className="img-fluid" src={farmerLogo} alt="Logo" /> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.factName}
                lastName={this.state.form.NIT}
                email={this.state.form.email}
                phone={this.state.form.phone}
                password={this.state.form.typeP}
                farms={this.state.form.password}
                // avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <Empresas
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormEmpresa;
