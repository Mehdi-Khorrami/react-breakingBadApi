import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';



const container= document.getElementById('root');
const root = createRoot(container!);
root.render(<AppProvider><App /></AppProvider>)
