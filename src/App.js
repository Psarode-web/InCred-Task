import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./components/auth/authContext";
function App() {
  return (
    <div className="main-container">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
