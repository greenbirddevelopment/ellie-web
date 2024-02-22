import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Container from "../Container";

const Offcanvas = ({ show, handleOffcanvas, children, style }) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (show) body.style.overflow = "hidden";
    else body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return;

  document.body.addEventListener("click", (e) => {
    if (e.target === document.getElementById("offcanvas-overlay"))
      handleOffcanvas();
  });

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") handleOffcanvas();
  });

  return createPortal(
    <div
      id="offcanvas-overlay"
      className="z-10"
      style={{ height: "100vh", ...style }}
    >
      <motion.div
        animate={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="offcanvas flex flex-col w-full backdrop-blur-md overflow-y-scroll"
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("offcanvas-backdrop")
  );
};

const OffcanvasHeader = ({ children, handleOffcanvas }) => (
  <Container className="offcanvas-header backdrop-blur-lg flex items-center sticky top-0 py-3">
    {children}
    <FontAwesomeIcon
      icon={faTimes}
      size="xl"
      className="cursor-pointer ms-auto"
      onClick={handleOffcanvas}
    />
  </Container>
);

const OffcanvasBody = ({ children }) => (
  <Container className="offcanvas-body my-8">{children}</Container>
);

const OffcanvasFooter = ({ children }) => (
  <div className="offcanvas-footer mt-auto px-6 py-3">{children}</div>
);

Offcanvas.Header = OffcanvasHeader;
Offcanvas.Body = OffcanvasBody;
Offcanvas.Footer = OffcanvasFooter;

export default Offcanvas;
