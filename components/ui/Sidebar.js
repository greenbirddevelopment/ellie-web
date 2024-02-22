import Link from "next/link";
import Brand from "./Brand";
import { Lato_700 } from "../layout";
import Image from "next/image";

const { default: Offcanvas } = require("./Offcanvas");

const Sidebar = ({ show, handleSidebar, LINKS }) => {
  if (!show) return;

  return (
    <Offcanvas show={show} handleOffcanvas={handleSidebar}>
      <Offcanvas.Header handleOffcanvas={handleSidebar}>
        <Brand />
      </Offcanvas.Header>
      <Offcanvas.Body className={"mt-auto"}>
        <div className="grid grid-cols-12 gap-6">
          {LINKS.map((link) => (
            <Link
              href={link.href}
              className={`col-span-6 text-center rounded-lg bg-linear-from-darker shadow border border-gray-500 px-4 py-10 ${Lato_700.className}`}
              onClick={handleSidebar}
            >
              <Image
                src={`/${link.name}.png`}
                width={96}
                height={96}
                className="mx-auto w-14 mb-4"
                alt={link.name}
              />
              <h1 className="text-lg">{link.title}</h1>
            </Link>
          ))}
        </div>
      </Offcanvas.Body>
      <Offcanvas.Footer></Offcanvas.Footer>
    </Offcanvas>
  );
};

export default Sidebar;
