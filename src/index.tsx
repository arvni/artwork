import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./style/main.css";
import Router from './router';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <Router />,
);
