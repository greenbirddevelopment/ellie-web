import { Lato_700 } from "../layout";

const Button = ({ type, variant, className, onClick, disabled, children }) => {
  let classes = `rounded shadow px-6 py-3 transition-all ${className} ${Lato_700.className} `;

  switch (variant) {
    case "primary":
      classes += "bg-primary hover:bg-primary-darker text-white";
      break;

    case "secondary":
      classes += "bg-secondary hover:bg-secondary-darker text-white";
      break;

    case "dark":
      classes += "bg-dark hover:bg-black text-white";
      break;

    case "light":
      classes += "bg-light hover:bg-white text-dark";
      break;

    case "link":
      classes +=
        "text-primary hover:text-primary-darker text-lg shadow-none drop-shadow-lg !p-0";
      break;

    case "gradient":
      classes +=
        "bg-gradient-to-r from-primary to-secondary to-60% bg-clip-text text-transparent text-lg shadow-none !p-0 hover:text-primary";
      break;
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
