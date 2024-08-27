import "boxicons";
import "../style/NavigationSidebar.css";
function NavigationSidebar() {
  return (
    <div className="siderbar">
      <div className="logo_content">
        <div className="logo">
          <box-icon type="logo" name="docker"></box-icon>
          <div className="logo_name">CodingLab</div>
        </div>
      </div>
      <box-icon name="menu"></box-icon>
      <ul className="nav_list">
        <li>
          <box-icon name="search"></box-icon>
          <input type="text" placeholder="Search...." />
        </li>
        <li>
          <a href="#">
            <box-icon name="grid-alt"></box-icon>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <box-icon name="user"></box-icon>
            <span className="links_name">Profile</span>
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <box-icon name="chat"></box-icon>
            <span className="links_name">RoomChat</span>
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <box-icon name="border-all"></box-icon>
            <span className="links_name">Orthers</span>
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <box-icon name="cog"></box-icon>
            <span className="links_name">Setting</span>
          </a>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img src="" />
          </div>
        </div>
        <div className="job_name">
          <div className="job">java backend</div>
          <div className="name">nguyen van d</div>
        </div>
        <box-icon name="log-out" id="log_out"></box-icon>
      </div>
    </div>
  );
}
export default NavigationSidebar;
