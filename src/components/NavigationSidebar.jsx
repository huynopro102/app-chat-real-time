/* eslint-disable jsx-a11y/anchor-is-valid */
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "../style/NavigationSidebar.css";
import { useState } from "react";
import logoImage from "../assets/images/logo.jpg";
function NavigationSidebar() {
  // Tạo một state để lưu trữ màu sắc của từng biểu tượng
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isActive, setIsActive] = useState(false); // State để theo dõi class 'active'

  const handleOnClick = () => {
    setIsActive(!isActive); // Đảo ngược giá trị của isActive khi click
  };
  return (
    <div className={`siderbar ${isActive ? "active" : ""}`}> {/* Thêm class 'active' vào 'siderbar' nếu isActive là true */}
      <div className="logo_content">
        <div className="logo">
          <box-icon
            size="lg"
            color="#fff"
            type="logo"
            name="discord-alt"
            id="logoIndividual"
          ></box-icon>
          <div className="logo_name">CodingLab</div>
          <box-icon
            color="#fff"
            name="menu"
            size="sm"
            id="btn"
            onClick={handleOnClick}
          ></box-icon>
        </div>
      </div>
      <ul className="nav_list">
        <li>
          <a>
            <box-icon color="#fff" id="iconSearch" name="search"
            className={isActive ? "active":""}
            onClick={handleOnClick}
            ></box-icon>
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Search...."
              id="inputSearchEngine"
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            onMouseEnter={() => setHoveredIcon("dashboard")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <box-icon
              color={hoveredIcon === "dashboard" ? "#1d1b31" : "#fff"}
              name="grid-alt"
              size="md"
            ></box-icon>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">layout</span>
        </li>
        <li>
          <a
            href="/profile"
            onMouseEnter={() => setHoveredIcon("profile")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <box-icon
              color={hoveredIcon === "profile" ? "#1d1b31" : "#fff"}
              name="user"
              size="md"
              className="icon_ul_li"
            ></box-icon>
            <span className="links_name">Profile</span>
          </a>
          <span className="tooltip">layout</span>
        </li>
        <li>
          <a
            href="#"
            onMouseEnter={() => setHoveredIcon("chat")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <box-icon
              color={hoveredIcon === "chat" ? "#1d1b31" : "#fff"}
              name="chat"
              size="md"
               className="icon_ul_li"
            ></box-icon>
            <span className="links_name">RoomChat</span>
          </a>
          <span className="tooltip">layout</span>
        </li>
        <li>
          <a
            href="#"
            onMouseEnter={() => setHoveredIcon("others")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <box-icon
              color={hoveredIcon === "others" ? "#1d1b31" : "#fff"}
              name="border-all"
              size="md"
            ></box-icon>
            <span className="links_name">Orthers</span>
          </a>
          <span className="tooltip">layout</span>
        </li>
        <li>
          <a
            href="#"
            onMouseEnter={() => setHoveredIcon("settings")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <box-icon
              color={hoveredIcon === "settings" ? "#1d1b31" : "#fff"}
              name="cog"
              size="md"
            ></box-icon>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">layout</span>
        </li>
      </ul>
      <div className="profile_content">
        <img src={logoImage} alt="Profile Logo" />
        <div className="job_name">
          <div className="name">nguyen van d</div>
          <div className="job">java backend</div>
        </div>
        <box-icon color="#fff" name="log-out" id="log_out"></box-icon>
      </div>
    </div>
  );
}

export default NavigationSidebar;
