import React from "react";
import logo from "../accessimg/logo.svg";
import icons from "../icons/icons";
import { NavLink } from "react-router-dom";
import { MenuSibar } from "../Interface";
import { useNavigate } from "react-router-dom";

const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie } =
  icons;
const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",

    icons: <TbChartArcs size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icons: <HiOutlineChartPie size={24} />,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icons: <MdOutlineFeed size={24} />,
  },
];

const Sidebarleft: React.FC = () => {
  const navigate = useNavigate();

  const notActiveStyle =
    "py-2 px-[25px] flex text-[#32323D]  font-bold text-[13px] gap-3 items-center";
  const ActiveStyle =
    "py-2 px-[25px] flex text-[#0F7070]  font-bold text-[13px] gap-3 items-center";

  return (
    <div className="flex h-full flex-col bg-main-200">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        className="w-full h-[70px] py-[15px] px-[25px] flex justify-start  items-center "
      >
        <img className="w-[120px] h-10  object-contain " src={logo} alt="" />
      </div>

      <div>
        {sidebarMenu.map((item: MenuSibar) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? ActiveStyle : notActiveStyle
              }
            >
              {item.icons}
              <span>{item.text}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebarleft;
