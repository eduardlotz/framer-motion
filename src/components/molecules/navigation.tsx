import { motion, LayoutGroup } from "framer-motion";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { LinkWrapper, Logo, NavLink, NavText } from "../atoms";

export const Navbar = styled(motion.nav)`
  position: fixed;
  height: 112px;

  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  display: grid;
  grid-template-columns: 0.75fr 1fr;
  align-items: center;
  padding: 0px 80px;
  max-width: 100%;

  background: rgba(234, 229, 226, 0.5);
  backdrop-filter: blur(35px);
`;

const navbarVariants = {
  hidden: {
    y: -120,
  },
  visible: {
    y: 0,

    transition: {
      type: "spring",
      damping: 10,
      stiffness: 50,
      delay: 0.6,
      mass: 0.1,
    },
  },
  exit: {
    y: 120,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.3,
      stiffness: 100,
    },
  },
  active: {
    y: [0, -50, 50, 0],
  },
  inactive: {
    y: [0, 50, -50, 0],
  },
};

export const Navigation = () => {
  return (
    <Navbar>
      <Logo
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        to="/"
      >
        mooootion.
      </Logo>
      <LayoutGroup id="navigation-links">
        <LinkWrapper
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <NavigationLink to="/why" text="Why" />
          <NavigationLink to="/examples" text="Examples" />
          <NavigationLink to="/resources" text="Resources" />
          <NavigationLink to="/about" text="About" />
        </LinkWrapper>
      </LayoutGroup>
    </Navbar>
  );
};

interface INavigationLinkProps {
  to: string;
  text: string;
}

export const NavigationLink = ({ to, text }: INavigationLinkProps) => {
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname === to;
  }, [location, to]);

  return (
    <NavLink to={to} whileHover="hover">
      <NavText activated={isActive}>{text}</NavText>

      {isActive && (
        <ActivePillBackground
          layoutId="active-indicator"
          transition={{
            type: "spring",
            damping: 15,
            mass: 0.3,
            stiffness: 100,
          }}
        />
      )}
    </NavLink>
  );
};

const ActivePillBackground = styled(motion.span)`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 auto;

  width: 100%;
  height: 100%;

  background: #121212;
  z-index: -1;
`;
