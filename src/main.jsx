import React from 'react';
import {hydrateRoot,createRoot} from 'react-dom/client';
import App from './App.jsx';
import './style.css';
const root=document.getElementById('root');
if(root.querySelector('header'))hydrateRoot(root,<App/>);else createRoot(root).render(<App/>);
