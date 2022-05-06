import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ImagemodalProps {
  imageUrl?: string;
  onClose: () => void;
  layoutId?: string;
  isOpen?: boolean;
}

export const ImageModal = ({
  imageUrl,
  onClose,
  layoutId,
  isOpen,
}: ImagemodalProps) => {
  console.log("ImageModal layoutId", `${imageUrl}-image`);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <FullScreenImageWrapper layoutId={`${imageUrl}-wrapper`}>
            <FullscreenImage
              layoutId={`${imageUrl}-image`}
              transition={{
                type: "spring",
                damping: 10,
                mass: 0.5,
                stiffness: 40,
              }}
              src={imageUrl}
              onClick={onClose}
            />
          </FullScreenImageWrapper>
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

const FullScreenImageWrapper = styled(motion.div)`
  position: absolute;
  top: 40px;
  bottom: 40px;
  left: 0;
  right: 0;

  max-height: 100%;
  width: fit-content;

  margin: 0 auto;
  z-index: 25;
`;

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
  height: 100%;

  object-fit: contain;
`;
