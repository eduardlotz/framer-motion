import { motion } from "framer-motion";
import styled from "styled-components";

export const FloatingCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 16px;
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 185px 297px rgba(26, 65, 90, 0.08),
    0px 104.488px 186.991px rgba(26, 65, 90, 0.043456),
    0px 42.624px 168.934px rgba(26, 65, 90, 0.033408),
    0px 2.516px 176.18px rgba(26, 65, 90, 0.033632),
    0px -12.728px 142.085px rgba(26, 65, 90, 0.027904);

  border-radius: 24px;
`;

export const ContentContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const CenteredContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 800px;
  max-width: calc(100% - 160px);
`;

export const FlexStartWrapper = styled(motion.div)`
  max-width: 1440px;
  padding: 0 80px;
  max-height: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 80px;
`;
