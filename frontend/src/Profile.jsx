import { Link } from "react-router-dom";
import Protection from "./utils/Protection";
const Profile = () => {
  return (
    <Protection>
      <div className="Profile">
        <div className="dashboard-container">
          <div className="profile-card">
            <img
              src="../../assets/avatar-default.png"
              alt="Avatar"
              className="avatar"
            />
            <div className="profile-details">
              <h1 className="full-name">Mritul Senthilkumar</h1>
              <h1 className="username">
                <i className="fa-solid fa-user"></i>mritul___
              </h1>
              <h1 className="department">
                <i className="fa-solid fa-building"></i>ECE
              </h1>
              <h1 className="batch">
                <i className="fa-solid fa-calendar-days"></i>2025
              </h1>
            </div>
          </div>
          <div className="about-me">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              deleniti earum eos natus facere omnis, qui beatae at assumenda
              impedit soluta illo enim odio nihil debitis temporibus ullam
              dolorum quo esse! Repellendus asperiores cupiditate animi. Magni
              nisi aspernatur quidem in. Blanditiis autem dolor culpa eum optio
              aspernatur magnam, voluptates est, et labore iusto alias! Iste
              voluptates atque vero sunt ducimus nemo ut, doloremque labore aut
              dolore sit asperiores illo mini jfdsl adjfh fsdhdkl. illo mini
              jfdsl adjfh fsdhdkl. illo mini jfdsl adjfh fsdhdkl. illo mini
              jfdsl adjfh fsdhdkl.jfjsjla
            </p>
          </div>
        </div>
        <div className="write-slam-book-section">
          <Link className="link-text write-slam-book-link" to="/slambook/:id">
            Write Slambook
          </Link>
        </div>
      </div>
    </Protection>
  );
};

export default Profile;
