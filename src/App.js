import React from 'react';
import Router from 'components/Router';
import './App.css';
import AuthProvider from './services/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider value={'what a value'}>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
