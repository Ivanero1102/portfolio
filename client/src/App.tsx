import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";
import AnimatedBackground from "./components/layout/AnimatedBackground";
function App() {

  return (
    <LanguageProvider>
    <div className="min-h-screen  text-gray-900 dark:text-gray-100 transition duration-300">
      <AnimatedBackground></AnimatedBackground>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" state={{ notFound: true }} />} />
      </Routes>
    </div>
    </LanguageProvider>
  );
}

export default App
