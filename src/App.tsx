import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage, ExamplesPage, ErrorPage } from "./pages";
import styled from "styled-components";
import { Navigation } from "./components/molecules";
import { AboutPage } from "./pages/about";
import { AnimatePresence } from "framer-motion";
import { ToastsPage } from "./pages/toasts";

function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/toasts" element={<ToastsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  max-height: 100%;
  height: calc(100vh - 112px);
  display: flex;
`;
