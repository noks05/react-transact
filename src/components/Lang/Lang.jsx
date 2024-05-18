import "./lang.css";
// import  Earth from "../../assets/img/earth.svg";
import Earth from '../../assets/img/earth.svg?react';

function Lang() {
  return (
    <button className="btn-reset lang" type="button">
      <Earth/>
      {/* <div className="img-wrap">
      </div> */}
      <span>EN</span>
    </button>
  );
}

export default Lang;
