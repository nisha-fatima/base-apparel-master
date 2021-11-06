import React, { useState } from 'react';
import './App.css';
import girl from './assets/images/hero-desktop.jpg'

function App() {

  const emailValidator = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (emailValidator.test(email)) {
      setEmailError('Valid Email :D')
    } else {
      setEmailError('please provide a valid email!')
    }
  }


  return (
    <div className="container">
      <div className="firstCont">
        <div className="header"></div>
        <div className="text">W E'R E</div>
        <div className="heading">C O M I N G</div>
        <div className="heading1">S O O N</div>
        <div className="pera">
          <h4>Hello fellow shoppers! We're currently building our new <br /> <br />
            fashion store. Add your email below to stay up-to-date with <br /> <br />
            accouncement and our launch deals.</h4>
        </div>
        <>
          <input className="email" type="email" id="email" placeholder="Email Address" size="40"
            onChange={(e) => validateEmail(e)}
          />
          <div className="errorMessage">{emailError}</div>
        </>
      </div>

      <div className="imageCont">
        <img src={girl} className="image" />
      </div>
    </div>


  );
}




export default App;
