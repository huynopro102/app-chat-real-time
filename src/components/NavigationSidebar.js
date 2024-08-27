/* eslint-disable jsx-a11y/anchor-is-valid */
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "../style/NavigationSidebar.css";
import { useState } from "react";
import logoImage from "../assets/images/logo.jpg";
function NavigationSidebar() {
  // Tạo một state để lưu trữ màu sắc của từng biểu tượng
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="siderbar">
      <div className="logo_content">
        <div className="logo">
          <box-icon
            size="md"
            color="#fff"
            type="logo"
            name="discord-alt"
            id="logoIndividual"
          ></box-icon>
          <div className="logo_name">CodingLab</div>
          <box-icon color="#fff" name="menu" size="sm" id="btn"></box-icon>
        </div>
      </div>
      <ul className="nav_list">
        <li>
          <a>
            <box-icon color="#fff" id="iconSearch" name="search"></box-icon>
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
            ></box-icon>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onMouseEnter={() => setHoveredIcon("profile")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <box-icon
              color={hoveredIcon === "profile" ? "#1d1b31" : "#fff"}
              name="user"
            ></box-icon>
            <span className="links_name">Profile</span>
          </a>
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
            ></box-icon>
            <span className="links_name">RoomChat</span>
          </a>
          <span className="ltooltip">layout</span>
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
            ></box-icon>
            <span className="links_name">Orthers</span>
          </a>
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
            ></box-icon>
            <span className="links_name">Setting</span>
          </a>
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
