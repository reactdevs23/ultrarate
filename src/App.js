import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import clsx from "clsx";
import { useTheme } from "./components/ThemeContext/ThemeContext";

function App() {
  const { isDarkTheme } = useTheme();
  return (
    <div className={clsx("mainPage", isDarkTheme ? "darkTheme" : "lightTheme")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
