import { ReactNode } from "react";
import Arrow from "../../assets/arrow.svg";

function NavItem({ text, icon }: { text: string; icon: ReactNode }) {
  return (
    <li className="header__nav_item">
      <div>
        {icon}
        <span>{text}</span>
      </div>
      {text !== "Dashboard" && <Arrow />}
    </li>
  );
}

export default NavItem;
