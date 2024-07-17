import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/routes/router";
import { Flowbite } from "flowbite-react";
import { customTheme } from "./libs/flowbite";
import { AuthProvider } from "./context/auth/auth.context";

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </Flowbite>
  );
}

export default App;
