import Result from "./Result";
const Results = ({ profiles }) => {
  return (
    <div className="Results">
      {profiles.map((profile) => (
        <Result profile={profile} />
      ))}
    </div>
  );
};

export default Results;
