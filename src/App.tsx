import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/routes/router";
import { Flowbite } from "flowbite-react";
import { customTheme } from "./libs/flowbite";
import { AuthProvider } from "./context/auth/auth.context";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Flowbite theme={{ theme: customTheme }}>
        <AuthProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AuthProvider>
      </Flowbite>
    </QueryClientProvider>
  );
}

export default App;
