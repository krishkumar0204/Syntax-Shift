import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0D1526",
            border: "1px solid rgba(0, 212, 255, 0.15)",
            color: "#F8FAFC",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            borderRadius: "8px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#1D9E75",
              secondary: "#0A0F1E",
            },
          },
          error: {
            iconTheme: {
              primary: "#E24B4A",
              secondary: "#0A0F1E",
            },
          },
        }}
      />
    </AuthContextProvider>
  </BrowserRouter>,
);
