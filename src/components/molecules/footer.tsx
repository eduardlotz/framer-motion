import { motion } from "framer-motion";
import styled from "styled-components";
import { variants } from "../../styles/variants";

export const Footer = () => {
  return (
    <FooterWrapper
      layout="position"
      variants={variants.slideUp}
      animate="visible"
      initial="initial"
      exit="exit"
    >
      <FooterBorder
        animate={{
          width: "100%",
        }}
        initial={{
          width: 0,
        }}
        exit={{
          width: 0,
        }}
        transition={{ width: { duration: 1.5 }, layout: { duration: 0.2 } }}
      />
      <FooterContent
        variants={variants.slideUp}
        animate="visible"
        initial="initial"
        exit="exit"
      >
        <FooterText>You have reached the end 🦶</FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterText = styled(motion.p)`
  font-weight: 600;
  font-size: 16px;
`;

const FooterWrapper = styled(motion.footer)`
  max-width: 100%;
  margin: 0;
  padding: 40px 80px;
`;

const FooterContent = styled(motion.div)`
  max-width: 100%;
  max-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterBorder = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 2px;
  margin-bottom: 40px;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.36) 55.21%,
    rgba(0, 0, 0, 0) 100%
  );
`;
