import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { IoDocumentOutline } from "react-icons/io5";
import { BiSolidMessageDots } from "react-icons/bi";

const NavItems = [
  { id: 1, idConnect: "#home", name: "Home", icon: IoHomeOutline },
  {
    id: 2,
    idConnect: "#services",
    name: "Services",
    icon: IoSettingsOutline,
  },
  {
    id: 3,
    idConnect: "#portfolio",
    name: "Portfolio",
    icon: IoBriefcaseOutline,
  },
  {
    id: 4,
    idConnect: "#about",
    name: "About",
    icon: FaUserGraduate,
  },
  {
    id: 5,
    idConnect: "#resume",
    name: "Resume",
    icon: IoDocumentOutline,
  },
  {
    id: 6,
    idConnect: "#contact",
    name: "Contact",
    icon: BiSolidMessageDots,
  },
];

export default NavItems;
