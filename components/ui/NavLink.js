const { default: Link } = require("next/link");

const NavLink = ({ href, className, active, children }) => {
  let classes = `nav-link text-gray-400 hover:text-white ${className}`;

  if (active) classes += "text-dark";

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};

export default NavLink;
