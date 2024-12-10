import { useState } from "react";
import MALBox from "./components/MALBox";
import SongTable from "./components/SongTable";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Songs from "./components/Songs";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="/">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          {/* <header className="p-4">
        <nav>
          <a href="https://animelos.com" className="hover:underline">
            <h1 className="text-2xl font-bold">Animelody</h1>
          </a>
        </nav>
      </header> */}
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/songs" element={<Songs />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
