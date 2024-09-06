import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import SubjectChoose from "./pages/SubjectChoose";
import ResultsDisp from "./pages/ResultsDisp";
import { Toaster } from "react-hot-toast";
import ScannerResult from "./pages/ScannerResult";

function App() {
  return (
    <div className="font-lora bg-[#f5f5dc]">
      <Toaster position={"top-center"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner-result" element={<ScannerResult />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/:roundid" element={<SubjectChoose />} />
          <Route
            path="/results/:roundid/:subjectid"
            element={<ResultsDisp />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
