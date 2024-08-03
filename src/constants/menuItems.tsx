import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";

export const sideBarItems = [
    {
      name: "Home",
      href: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "About",
      href: "/about",
      icon: <BsPeople />,
    },
    {
      name: "Mails",
      href: "/mails",
      icon: <FiMail />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <TiContacts />,
    },
  ];