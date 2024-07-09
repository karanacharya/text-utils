import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
BrowserRouter as Router,
Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {


  // const [buttoncolor,setButtoncolor]=useState({mode})

  const chgbcolor = (color) => {
    setMode(color)
    document.body.style.backgroundColor = color
    // 
    // document.body.classList.add('bg-'+ color)
    // document.body.classList.add('text-'+color)
  };


  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('#322f45')
      document.body.style.backgroundColor = '#322f45'
      showAlert("dark mode has been enabled", "success")
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>  
        <Navbar title="karan" mode={mode} togglemode={toggleMode} chgbcolor={chgbcolor} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform showalert={showAlert} heading="Enter your text here" mode={mode} />
            </Route>
          </Switch>
        </div>
       </Router>


    </>
  );
}

export default App;
