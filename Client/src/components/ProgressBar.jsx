const ProgressBar = ({ label, value }) => {
  return (
    <div className="progress">
      <div className="label">
        {label} <span>{value}/9</span>
      </div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${(value / 9) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
