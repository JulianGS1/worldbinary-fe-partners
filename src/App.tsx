import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/routes/router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
