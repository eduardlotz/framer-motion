import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled(motion.h1)`
  font-family: "Manrope";
  font-size: 3rem;
  font-weight: 800;
  color: #121212;
  margin: 0;
  padding: 0;
`;

export const Headline = styled(motion.h1)`
  font-style: normal;
  font-weight: 700;
  font-size: 158px;

  color: #000000;

  letter-spacing: -4px;

  margin: 0;
  cursor: default;
`;

export const H2 = styled(motion.h2)`
  font-style: normal;
  font-weight: 700;
  font-size: 52px;

  color: #000000;

  margin: 0 0 16px 0;
`;

export const H5 = styled(motion.h5)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  color: #000000;

  margin: 0 0 16px 0;
`;
