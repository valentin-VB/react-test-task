import Link from "next/link";
import LogoIcon from "../../assets/logo.svg";

function Logo() {
  return (
    <Link href="">
      <div className="header__logo_wrapper">
        <LogoIcon></LogoIcon>
        <div className="header__logo_text">
          Dashboard <span>v.01</span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
