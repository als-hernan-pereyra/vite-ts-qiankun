import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { registerMicroApps, start, loadMicroApp } from 'qiankun';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Registro de microfrontends en Qiankun
    registerMicroApps([
      {
        name: 'react-microfrontend',
        entry: '//localhost:3001',  // URL del micro-frontend React
        container: '#react-microfrontend',
        activeRule: '#/react',
        //activeRule: '/react',
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

  // Function to manually load a micro-frontend
  const loadReactApp = () => {
    loadMicroApp({
      name: 'react-app',
      // entry: '//localhost:3001',
      // entry: '//localhost:3001/dist/reactApp.js',
      entry: '//localhost:3001/index.html',
      container: '#react-microfrontend',
    });
  };

  const loadVueApp = () => {
    loadMicroApp({
      name: 'vue-app',
      entry: '//localhost:3002',
      container: '#vue-microfrontend',
    });
  };

  const loadSvelteApp = () => {
    loadMicroApp({
      name: 'svelte-app',
      entry: '//localhost:3003',
      container: '#svelte-microfrontend',
    });
  };

  // if (loading) {
  //   return <div>Loading Micro-Frontends...</div>;
  // }

  return (
    <Router>
      <div>
        <h1>Super App Shell</h1>
        {/* Dynamically load Micro-Frontends */}
      <div>
        <button onClick={loadReactApp}>Load React Micro-Frontend</button>
        <button onClick={loadVueApp}>Load Vue Micro-Frontend</button>
        <button onClick={loadSvelteApp}>Load Svelte Micro-Frontend</button>
      </div>
      {/* Containers for Micro-Frontends */}
      <div id="react-microfrontend"></div> {/* Container for React */}
      <div id="vue-microfrontend"></div> {/* Container for Vue */}
      <div id="svelte-microfrontend"></div> {/* Container for Svelte */}
      </div>
    </Router>
  );
};

export default App; 
