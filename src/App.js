import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./constants/theme";
import AppRouter from "./routes/Router";
import Context from "./context";
import Footer from "./components/layout/Footer";

function App() {
  const context = useContext(Context);
  return (
    <Router>
      <ThemeProvider theme={context.theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <button onClick={context.toggleTheme}>Switch Theme</button>
          <AppRouter />
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
