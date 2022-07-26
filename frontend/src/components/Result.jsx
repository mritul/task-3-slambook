const Result = () => {
  return (
    <div className="Result">
      <img src="assets/avatar-default.png" alt="Profile Pic" />
      <h1 className="card-full-name">Mritul Senthilkumar</h1>
      <div className="details-panel">
        <h1 className="card-batch">
          <i className="fa-solid fa-calendar-days"></i> 2024
        </h1>
        <h1 className="card-department">
          <i className="fa-solid fa-building"></i>ECE
        </h1>
      </div>
      <button className="btn btn-view-profile">View Profile</button>
    </div>
  );
};
export default Result;
