import { motion } from "framer-motion";
import styled from "styled-components";
import { H2 } from "../../components";
import { Footer } from "../../components/molecules";
import { ImageSlider } from "../../components/molecules/imageSlider";
import { SliderImage } from "../../components/molecules/imageSlider/types";
import { SplitSlideUp } from "../../components/typography/SplitText";

const images: SliderImage[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1598257006463-7c64a5a538cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    label: "01. Telecommunications",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    label: "02. Education",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    label: "03. Media & entertainment",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    label: "04. Healthcare & insurance",
  },
];

export const AboutPage = () => {
  return (
    <Container>
      <Wrapper>
        <div style={{ marginBottom: "24px" }}>
          <SplitSlideUp text="About us" splitBy="words" component={H2} />
        </div>
        <ImageSlider images={images} smartTransition={false} />
      </Wrapper>

      <Footer />
    </Container>
  );
};

const Wrapper = styled.div<{ maxWidth?: number | string }>`
  max-width: ${({ maxWidth }) => (maxWidth !== undefined ? maxWidth : "100%")};

  padding: 0 80px;
  max-height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled(motion.div)`
  max-width: 100%;
  max-height: 100%;
`;
