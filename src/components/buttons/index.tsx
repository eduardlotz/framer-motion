import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(motion(Link))`
  font-family: "Manrope";
  font-size: 1.5rem;
  font-weight: 700;
  color: #121212;
  text-decoration: none;
  padding: 16px 24px;

  border-bottom: 2px solid #1212122f;
  transition: 0.24s ease-in;
  transition-property: border-color padding;

  &:hover {
    border-color: #121212;
  }
`;
