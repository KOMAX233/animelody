import { useState } from "react";
import MALBox from "./components/MALBox";
import SongTable from "./components/SongTable";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Songs from "./components/Songs";

function App() {
  const [username, setUsername] = useState("");
  return (
    <Router>
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
          <main>
            <MALBox setUsername={setUsername} />
            <SongTable username={username} />
          </main>
          <Routes>
            <Route path="/songs" element={<Songs />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
