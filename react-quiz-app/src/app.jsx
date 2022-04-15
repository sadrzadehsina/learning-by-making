import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import ThemeProvider from "./theme";
import { LayoutBase } from "./layouts/base";
import { Welcome } from "./screens/welcome";
import { Quiz } from "./screens/quiz";
import { AuthVerify } from "./screens/auth-verify";

function App() {
  return (
    <Auth0Provider
      domain="dev-uggh5a64.us.auth0.com"
      clientId="ozi6iSqklAf1upwDZMMIRWDm5i4cndx9"
      redirectUri={window.location.origin}
    >
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutBase />}>
              <Route index element={<Welcome />} />
              <Route path="/quiz" element={<Quiz />} />
            </Route>
            <Route path="/auth-verify" element={<AuthVerify />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
