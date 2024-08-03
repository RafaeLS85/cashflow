import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import HomeIcon from '@mui/icons-material/Home';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const sideBarItems = [
    {
      name: "Inicio",
      href: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Ingresos",
      href: "/ingresos",
      icon: <AddIcon />,
    },
    {
      name: "Gastos",
      href: "/gastos",
      icon: <RemoveIcon />,
    },
    {
      name: "Mercados",
      href: "/mercados",
      icon: <CurrencyExchangeIcon />,
    },
    {
      name: "Ahorros",
      href: "/ahorros",
      icon: <AccountBalanceIcon />,
    },
  ];