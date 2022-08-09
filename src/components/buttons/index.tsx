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

export const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;

  font-family: "Manrope";
  font-size: 16px;
  font-weight: 700;
  color: #121212;
  padding: 12px 20px;

  border: 2px solid #121212;
  border-radius: 50px;
  background-color: #121212;
  color: #ffffff;
  transition: 0.15s linear;
  transition-property: background-color color;

  &:hover {
    background-color: transparent;
    color: #121212;
    cursor: pointer;
  }
`;

export const IconButton = styled(Button)`
  background-color: transparent;
  color: #2f2d2c;
  padding: 8px;
  height: fit-content;
  width: fit-content;
  border-radius: 50%;

  border: none;

  svg {
    transition: 0.15s linear;
    transition-property: color transform;
  }

  &:hover {
    color: #121212;

    & svg {
      color: #121212;
    }
  }
`;
