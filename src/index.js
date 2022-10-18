// Importeren React
import React from 'react';

// Importren ReactDOM
import ReactDOM from "react-dom/client";

// Importeren App
import App from "./Components/App/App";

// Renderen de root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)