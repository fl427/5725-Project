import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Remote Control Rescue Robot Control Panel</h1>
        <div class="Row">
          <div class="Column" />
          <div class="Column"><button onClick={fwd}>Forward</button></div>
          <div class="Column" />
        </div>
        <div class="Row">
          <div class="Column"><button onClick={left}>Turn Left</button></div>
          <div class="Column"><button onClick={stop}>Stop</button></div>
          <div class="Column"><button onClick={right}>Turn Right</button></div>
        </div>
        <div class="Row">
          <div class="Column" />
          <div class="Column"><button onClick={back}>Backward</button></div>
          <div class="Column" />
        </div>
        <div class="Row">
          <div class="Column" ><button onClick={setStart}>Set as Start</button></div>
          <div class="Column"></div>
          <div class="Column" ><button onClick={returnToStart}>Return</button></div>
        </div>
      </header>
    </div>
  );
}

const moveUrl = "http://10.148.2.206:8080/move/"

function fwd() {
  axios.get(moveUrl + "fwd").then()
    .catch((err) => {
      alert("error:  " + err)
    });
}

function back() {
  axios.get(moveUrl + "back").then()
    .catch((err) => {
      alert("error:  " + err)
    });
}

function left() {
  axios.get(moveUrl + "left").then()
    .catch((err) => {
      alert("error:  " + err)
    });
}

function right() {
  axios.get(moveUrl + "right").then()
    .catch((err) => {
      alert("error:  " + err)
    });
}

function stop() {
  axios.get(moveUrl + "stop").then()
    .catch((err) => {
      alert("error:  " + err)
    });
}

function setStart(){
  axios.get(moveUrl + "setStart").then()
    .catch((err) => {
      alert("error:  " + err)
    });
}

function returnToStart(){
  axios.get(moveUrl + "return").then()
  .catch((err) => {
    alert("error:  " + err)
  }); 
}

export default App;
