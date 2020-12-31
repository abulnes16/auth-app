/* App component
  The app main entry
*/

// React
import { useContext } from "react";

// Context
import Context from "./context";
// Router
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";

// Styled
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";

// Constants
import { lightTheme, darkTheme } from "./constants/theme";

// Components
import Footer from "./components/layout/Footer";
import Toggler from "./components/Toggler";

function App() {
  const context = useContext(Context);
  return (
    <Router>
      <ThemeProvider theme={context.theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="App">
          <Toggler onClick={context.toggleTheme} />
          <AppRouter />
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
