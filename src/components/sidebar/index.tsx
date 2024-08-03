"use client";

import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { sideBarItems } from "../../constants/menuItems";
import { useMenuStore } from "@/store/menu";

export const Sidebar = () => {

  const pathname = usePathname();
  const { isOpen, setIsOpen } = useMenuStore((state) => state);
  const display = isOpen ? 'none' : 'block';

  return (
    <div className={styles.sidebar_wrapper}>
      <button className={styles.btn} onClick={setIsOpen}>
        <MdOutlineKeyboardArrowLeft color="#000" />
      </button>
      <aside className={styles.sidebar} style={{ width: isOpen ? '81px' : '220px' }} >
        <div className={styles.sidebar_top}>
          <Image
            src="/logo.png"
            width={80}
            height={80}
            className={styles.sidebar_logo}
            alt="logo"
          />
          <p className={styles.sidebar_logo_name}
            style={{
              display,
            }}
          >
            Dashboard
          </p>
        </div>

        <ul className={styles.sidebar_list}>
          {sideBarItems.map((item, index) => (
            <li className={styles.sidebar_item} key={item.name}>
              <Link href={item.href} className={styles.sidebar_link} 
                style={{ 
                  backgroundColor: pathname === item.href ? '#9b9bff' : '#f3f4f6', 
                  color: pathname === item.href ? '#fff' : '#000', 
                }} 
              >
                <span className={styles.ssidebar_icon}> {item.icon} </span>
                <span className={styles.sidebar_name} style={{ display }} >{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};