import React from "react";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="underline">-</div>
      <div className="dashboard-container">
        <div className="profile-card">
          <img
            src="assets/avatar-default.png"
            alt="Avatar"
            className="avatar"
          />
          <div className="profile-details">
            <h1 className="full-name">Mritul Senthilkumar</h1>
            <h1 className="username">mritul___</h1>
            <h1 className="department">ECE</h1>
          </div>
        </div>
        <div className="about-me">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            deleniti earum eos natus facere omnis, qui beatae at assumenda
            impedit soluta illo enim odio nihil debitis temporibus ullam dolorum
            quo esse! Repellendus asperiores cupiditate animi. Magni nisi
            aspernatur quidem in. Blanditiis autem dolor culpa eum optio
            aspernatur magnam, voluptates est, et labore iusto alias! Iste
            voluptates atque vero sunt ducimus nemo ut, doloremque labore aut
            dolore sit asperiores illo minima placeat animi necessitatibus
            numquam perferendis consequatur molestiae nihil. Inventore animi
            repudiandae est beatae quod? Consequuntur repellat qui corporis
            earum, assumenda voluptatum voluptatibus labore tenetur, voluptatem
            quisquam odit maxime? Assumenda, possimus.
          </p>
        </div>
      </div>
      <div className="comments-container">
        <h1 className="comments-section-title">Comments</h1>
        <div className="underline">-</div>
        <p className="comments-section-instruction">
          This section displays all the comments made by other users on you. Use
          the delete button to remove the comment permanently.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
