import { motion } from "framer-motion";
import styled from "styled-components";
import { variants } from "../../styles/variants";
import { Logo } from "../atoms";

export const Footer = () => {
  return (
    <FooterWrapper
      variants={variants.slideUp}
      animate="visible"
      initial="initial"
      exit="exit"
    >
      <FooterBorder
        animate={{
          width: "100%",
          transition: {
            type: "tweem",
            duration: 2,
          },
        }}
        initial={{
          width: 0,
        }}
        exit={{
          width: 0,
          transition: {
            type: "tweem",
            duration: 0.5,
          },
        }}
      />
      <FooterContent>
        <Logo to="/">made with framer motion</Logo>
        <FooterText></FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterText = styled.p``;

const FooterWrapper = styled(motion.footer)`
  max-width: 100%;
  margin: 0;
  padding: 40px 80px;
`;

const FooterContent = styled.div`
  max-width: 100%;
  max-height: 100%;

  display: grid;
  grid-template-columns: 0.75fr 1fr;
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
