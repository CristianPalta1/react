import React from 'react';

class empresas extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
    this.setState({

    })
  };

  render() {
    return (
      <div>
        <h1>Registro Empresa</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Empresa</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="factName"
              value={this.props.formValues.factName}
            />
          </div>

          <div className="form-group">
            <label>NIT</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="NIT"
              value={this.props.formValues.NIT}
            />
          </div>

          <div className="form-group">
            <label>Correo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Telefono</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="phone"
              value={this.props.formValues.phone} //ASi leo el 
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="password"
              value={this.props.formValues.password} //ASi leo el 
            />
          </div>

          <div className="form-group">
            <label>Producto</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="typeP"
              value={this.props.formValues.typeP} //ASi leo el 
            />
          </div>

          

          

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default empresas;
