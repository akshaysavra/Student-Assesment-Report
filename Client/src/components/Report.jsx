import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Report = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  if (!report) return <p>Loading...</p>;

  return (
    <div className="report">
      <h1>Speaking Assessment Report</h1>

      <div className="overall">
        <h2>Overall Score</h2>
        <div className="score">{report.overall} / 9</div>
        <p className="feedback">{report.feedback}</p>
      </div>

      <h2>Skill-wise Scores</h2>
      <ProgressBar label="Pronunciation" value={report.skills.pronunciation} />
      <ProgressBar label="Fluency" value={report.skills.fluency} />
      <ProgressBar label="Vocabulary" value={report.skills.vocabulary} />
      <ProgressBar label="Grammar" value={report.skills.grammar} />
    </div>
  );
};

export default Report;
