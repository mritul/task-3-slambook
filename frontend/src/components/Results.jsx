import Result from "./Result";
const Results = ({ profiles }) => {
  return (
    <div className="Results">
      {profiles.map((profile, idx) => (
        <Result profile={profile} key={idx} />
      ))}
    </div>
  );
};

export default Results;
