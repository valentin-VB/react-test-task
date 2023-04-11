import Logo from "@/components/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Navigation from "@/components/Navigation";
import person from "../../assets/person.jpg";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerContent = (
    <>
      <Navigation />
      <div className="header__user_wrapper">
        <Image src={person.src} alt="user" width="42" height="42" />
        <div>
          <p className="header__user_name">Evano</p>
          <p className="header__user_position">Project Manager</p>
        </div>
      </div>
    </>
  );

  return (
    <header className="header">
      <Logo />
      {isOpen && (
        <div className="header__mobile_menu">
          <button
            className="header__mobile_menu_btn"
            onClick={() => setIsOpen(false)}
          >
            <MdClose size="35px" fill="#9197B3" />
          </button>
          {headerContent}
        </div>
      )}
      <button
        className="header__mobile_menu_btn"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu size="35px"></GiHamburgerMenu>
      </button>
      <div className="header__pc-menu">{headerContent}</div>
    </header>
  );
}

export default Header;
