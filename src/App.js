import './App.css';
import MainRouter from './Routers/Router';
import context from './Store/context';
import React, { useState } from 'react';
function App() {
  const [showmenu, setshowmenu] = useState(false)
  const data = {
    showmenu: showmenu,
    changestatus() {
      setshowmenu(!showmenu)
    },
  }
  return (
    <context.Provider value={data}>
      <div className="App">
        <MainRouter />
      </div>
    </context.Provider>

  );
}

export default App;
