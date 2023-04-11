import { navLinks } from "../../constants/constants";
import NavItem from "@/components/NavItem";

function Navigation() {
  return (
    <ul>
      {navLinks &&
        navLinks.map(({ id, name, icon }) => (
          <NavItem key={id} text={name} icon={icon} />
        ))}
    </ul>
  );
}

export default Navigation;
