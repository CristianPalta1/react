import React from 'react';

class BadgeForm extends React.Component {
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
        <h1>Registro Agricultor</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
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
            <label>Tipo de cultivo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="farms"
              value={this.props.formValues.farms} //ASi leo el 
            />
          </div>

          <div className="form-group">
            <label>Modulos a Comprar</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="modules"
              value={this.props.formValues.modules} //ASi leo el 
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

export default BadgeForm;
