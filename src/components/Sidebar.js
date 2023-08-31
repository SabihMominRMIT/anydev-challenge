import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faComments,
  faChartLine,
  faFlask,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Repository"); // Default selected tab

  const Menus = [
    { title: "Repository", icon: faGithub, path: "/" },
    { title: "Statistics", icon: faChartLine, path: "/statistics" },
    { title: "Test Cases", icon: faFlask, path: "/testcases" },
    // Add more menu items with paths
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-8 md:w-20"
        } h-screen p-0 md:p-4 pt-8 relative duration-300 bg-gradient-to-b from-blue-300 to-blue-500`}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1110/1110704.png"
          className={` absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-6 text-white mt-8">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path} key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer ${
                  selectedTab === Menu.title
                    ? "bg-blue-400"
                    : "hover:bg-blue-400"
                } text-base md:text-lg items-center gap-x-4 
                ${Menu.gap ? "mt-3 md:mt-9" : "mt-2"}`}
                onClick={() => (setSelectedTab(Menu.title), setOpen(false))}
              >
                <FontAwesomeIcon
                  icon={Menu.icon}
                  style={{ color: "#fff", fontSize: "1.5rem" }}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
