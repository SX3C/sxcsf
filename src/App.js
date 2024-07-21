import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import SubjectChoose from "./pages/SubjectChoose";
import ResultsDisp from "./pages/ResultsDisp";

function App() {
  return (
    <div className="font-lora bg-[#f5f5dc]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
