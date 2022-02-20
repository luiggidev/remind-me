import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';

import CreateReminder from "./routes/createReminder";
import ShowReminder from "./routes/showReminder";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="createReminder" element={<CreateReminder />} />
      <Route path="showReminder" element={<ShowReminder />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
