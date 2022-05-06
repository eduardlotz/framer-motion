import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(motion(Link))`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;

  color: #000000;

  text-decoration: none;
`;

export const LinkWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 16px;
  align-items: center;
  justify-items: flex-end;
  width: 100%;
`;

export const NavLink = styled(motion(Link))`
  position: relative;
  text-decoration: none;
  padding: 8px 12px;
`;

export const NavText = styled(motion.span)<{ activated: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: ${(p) => (p.activated ? "#EAE5E2" : "#121212")};

  white-space: nowrap;
`;
