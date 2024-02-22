import Container from "../Container";
import Brand from "./Brand";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Lato_700 } from "../layout";

const Navbar = ({ icons }) => {
  console.log(icons);

  const LINKS = [
    { title: "Products", name: "products", href: "#products" },

    {
      title: "Arge",
      name: "arge",
      href: "#arge",
    },

    {
      title: "Academy",
      name: "academy",
      href: "#academy",
    },

    { title: "About us", name: "about-us", href: "#about" },
    { title: "Partnerships", name: "partnerships", href: "#partnerships" },
    { title: "Contact", name: "contact", href: "#contact" },
  ];

  const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);

  const handleSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <nav>
        <Container className={"flex items-center justify-between"}>
          <Brand />
          <ul className="hidden lg:flex lg:gap-6">
            {LINKS.map((link) => (
              <NavLink
                href={link.href}
                key={link.href}
                active={pathname === link.href}
                className={Lato_700.className}
              >
                {link.title}
              </NavLink>
            ))}
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="block lg:hidden"
            onClick={handleSideBar}
          />
        </Container>
      </nav>
      <Sidebar show={sidebar} handleSidebar={handleSideBar} LINKS={LINKS} />
    </>
  );
};

export default Navbar;
