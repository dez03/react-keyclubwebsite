// Code for top maroon nav bar completed 3/10/22 12:40AM
// TODO add google fonts


import uhsseal from '../images/uhs1881seal.png';
import "../styles/topNavStyles.css";
import "../global.css"

function TopNavBar() {
  return (
    <nav>
      <div className="container">
        <img src={uhsseal} className="UHSSEAL" alt="logo" />
        <span>
          <h1 className="titleText">UNION HIGH SCHOOL KEY CLUB</h1>
          <h1 className="subtitle">A club that cares about our community.</h1>
        </span>
      </div>
    </nav>
  );
}

export default TopNavBar;
