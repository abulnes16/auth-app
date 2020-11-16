import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";

import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouter />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
