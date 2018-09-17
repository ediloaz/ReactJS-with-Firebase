import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';

import FileUpload from './FileUpload';
import './App.css';

class App extends Component {
  constructor(){      // Para usar estados
    super();
    this.state = {
      user: null
    };
    // bindeo de los this (JS)
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  componentWillMount(){   // Este es un método de ciclo de vida
                          // Se ejecuta cuando el componente es ejecutado en el DOM
                          // Se reinicia el metodo render
    // Cada vez que se logueen o deslogueen se hace:
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        //user : user
        user  // ES6 hace que si el valor a asignar es el mismo al guardado, entonces lo omite.
      });
    })
  }


  // Maneja la autenticación
  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log('Quiere iniciar sesión con Google.');

    firebase.auth().signInWithPopup(provider)  // Siempre el signIn devuelven promesas.
       .then(result => console.log(`El usuario ${result.user.email} entró al sistema con Gooogle Auth.`))                 // Se resuelve con then las promesas.
                               // 'result' es el objeto que nos devuelve then, dentro de result está el objeto 'user'
                               // Esto es sintaxis de  ES6, con JS habría que escribir 'function' y 'return' con {en el código} y (en los parámetros)
       .catch(error => console.log(`Hubo un error ${error.code}: ${error.message}`));                // Y para errores se resuelven con catch.
  }


  // Maneja el cierre de sesión
  handleLogout(){
    firebase.auth().signOut()
      .then(result => console.log(`El usuario ${result.user.email} ha salido.`))
      .catch(error => console.log(`Hubo un error ${error.code}: ${error.message}`));
  }


  // Maneja el estado de logueo.
  renderLoginButton(){
    if (this.state.user){
      return (  // Se devuelve el JSX
        <div>
          <img width="50" src={this.state.user.photoURL} className="rounded" alt={this.state.user.displayName} />
          <p> Hola {this.state.user.displayName} mi amor, gracias por iniciar sesión </p>
          <FileUpload />
          <br />
          <button onClick={this.handleLogout}>Logout</button>
        </div>  
      );
    }else{
      return(     // Se devuelve el JSX
        <button onClick={this.handleAuth}>Login with Gooooogle</button>
      );
    }
  }

  // Rendiriza la aplicación
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instagram</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderLoginButton()}
      </div>
    );
  }
}

export default App;
