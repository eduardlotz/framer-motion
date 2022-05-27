import { AnimatePresence, motion, useDomEvent } from "framer-motion";
import { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { variants } from "../../../styles/variants";

interface ImagemodalProps {
  imageUrl?: string;
  onClose: () => void;
  layoutId?: string;
  isOpen?: boolean;
  smartTransition?: boolean;
}

export const ImageModal = ({
  imageUrl,
  onClose,
  layoutId,
  isOpen,
  smartTransition,
}: ImagemodalProps) => {
  useDomEvent(useRef(window), "scroll", () => isOpen && onClose());

  const smartTransitionConfig = {
    layoutId: `${imageUrl}-image`,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.3,
      stiffness: 100,
    },
  };

  const fadeTransitionConfig = {
    variants: variants.slideUp,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
  };

  const imageTransitionConfig = smartTransition
    ? smartTransitionConfig
    : fadeTransitionConfig;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <FullscreenImage
            src={imageUrl}
            onClick={onClose}
            {...imageTransitionConfig}
          />
          <FullScreenBackground
            onClick={onClose}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

const FullScreenBackground = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(62, 51, 45, 0) 0%,
    rgba(62, 51, 45, 0.62) 31.25%
  );
  z-index: 20;

  overflow: hidden;
`;

const FullscreenImage = styled(motion.img)`
  /* height: 100%; */
  object-fit: contain;
  background-position: center;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  max-height: calc(100vh - 80px);
  width: auto;

  margin: auto;
  z-index: 25;
`;
