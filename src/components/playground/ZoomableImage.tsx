import { useDomEvent, motion } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const image = {
  imageUrl:
    "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  label: "03. Media & entertainment",
};

export const ZoomableImage = () => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
    <Wrapper isOpen={isOpen}>
      <BackgroundShade
        isOpen={isOpen}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        onClick={() => setOpen(false)}
      />
      <Image
        isOpen={isOpen}
        src={image.imageUrl}
        alt={image.label}
        onClick={() => setOpen(!isOpen)}
        transition={transition}
      />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ isOpen: boolean }>`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 66.66%;
  cursor: zoom-in;
  margin: 50px 0;

  ${({ isOpen }) => isOpen && "cursor: zoom-out;"};
`;

const BackgroundShade = styled(motion.div)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  background: rgba(0, 0, 0, 0.9);

  ${({ isOpen }) =>
    isOpen &&
    `
    pointer-events: auto;
    opacity: 1;
  `};
`;

const Image = styled(motion.img)<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;

  ${({ isOpen }) =>
    isOpen &&
    `
    position: fixed;
    width: auto;
    height: auto;
    max-width: 100%;
    margin: auto;
  `};
`;
