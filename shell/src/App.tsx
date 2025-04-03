import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';

const App = () => {
  React.useEffect(() => {
    // Registro de microfrontends en Qiankun
    registerMicroApps([
      {
        name: 'react-microfrontend',
        entry: '//localhost:3001',  // URL del micro-frontend React
        container: '#react-microfrontend',
        activeRule: '/react',
      },
      {
        name: 'vue-microfrontend',
        entry: '//localhost:3002',  // URL del micro-frontend Vue
        container: '#vue-microfrontend',
        activeRule: '/vue',
      },
      {
        name: 'svelte-microfrontend',
        entry: '//localhost:3003',  // URL del micro-frontend Svelte
        container: '#svelte-microfrontend',
        activeRule: '/svelte',
      },
    ]);

    start();  // Inicia Qiankun
  }, []);

  return (
    <Router>
      <div>
        <h1>Super App Shell</h1>
        <div id="react-microfrontend" />
        <div id="vue-microfrontend" />
        <div id="svelte-microfrontend" />
      </div>
    </Router>
  );
};

export default App;
