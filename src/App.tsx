import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
