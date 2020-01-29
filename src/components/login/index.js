import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSeccion } from '../../redux/actions/actions';
import { withRouter, Redirect } from 'react-router-dom';
import SignIn from './page';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    this.props.requestSeccion(this.state.user, this.state.pass);
    event.preventDefault();
    this.setState({ user: '', pass: '' });

  }
  componentDidUpdate(preProps, preState, actState) {
  }

  render() {
    const { message } = this.props;
    return (
      <div >
        <UsuarioInvalido message={message} />
        <SignIn user={this.state.user} pass={this.state.pass} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
function MostrarError(props) {
  return <div>
    <Alert severity="error">{props.message}</Alert>
  </div>;
}
function UsuarioInvalido(props) {
  const mensaje = props.message;
  if (mensaje !== 'Ingreso Realizado' && mensaje !== '') {
    return <MostrarError message={props.message} />
  }
  else if (mensaje === 'Ingreso Realizado') {
    console.log(mensaje);
    return <Redirect to="/home" />
  }
  else {
    return <Alert severity="success" color="info">
      Celco S.A. está posicionada entre las principales empresas metalmecánicas del sector eléctrico,
      especializada en la construcción de equipos metálicos que alojan componentes eléctricos para control, maniobra y protección de la energía en media y baja tensión,
      destinados a satisfacer las necesidades de los usuarios del sector de la industria, la construcción y el comercio.
      </Alert>;
  }
}
const mapStateToProps = (state) => {
  return {
    usuario: state.userRedux.usuario,
    message: state.userRedux.message
  };
}
const mapDispatchToProps = {
  requestSeccion
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Login)

);
