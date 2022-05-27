import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

import homeImage from "../../assets/home.jpeg";
import { H2, Headline } from "../../components";
import { Footer, MotionAccordion } from "../../components/molecules";
import { SplitSlideUp } from "../../components/typography/SplitText";
import { variants } from "../../styles/variants";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const OverflowHidden = styled(motion.div)`
  max-width: 100%;
  padding-left: 80px;
  height: fit-content;
  min-height: 216px;
  overflow-x: hidden;
  margin-bottom: 80px;
`;

export const ExamplesPage = () => {
  const { scrollY } = useViewportScroll();

  const physics = { damping: 10, mass: 0.3, stiffness: 30 }; // easing of smooth scroll

  const headlineX = useTransform(scrollY, (latest) => latest * -2);
  const imageY = useTransform(scrollY, (latest) => latest * -1);

  const headlineMotion = useSpring(headlineX, physics);

  const imageMotion = useSpring(imageY, physics);
  return (
    <Container>
      <Wrapper>
        <SplitSlideUp
          component={H2}
          text="framer motion animation examples"
          splitBy="words"
        />
      </Wrapper>

      <ImageAnimationWrapper
        layoutId="home-image"
        id="home-image"
        variants={variants.heightExpand}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          mass: 0.7,
          damping: 40,
          stiffness: 150,
        }}
      >
        <FullScreenImage
          layoutId="home-image-src"
          src={homeImage}
          style={{ y: imageMotion }}
        />
      </ImageAnimationWrapper>

      <OverflowHidden>
        <motion.div
          style={{ x: headlineMotion }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.3,
            stiffness: 100,
          }}
        >
          <SplitSlideUp
            text="A big headline that scrolls with you and is animated"
            component={Headline}
            splitBy="words"
          />
        </motion.div>
      </OverflowHidden>

      <Wrapper>
        <H2
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={variants.slideUp}
          style={{ minWidth: "100%" }}
        >
          Fragen & Antworten
        </H2>
        <MinMaxWidth min={"60%"} max={"60%"}>
          <MotionAccordion />
        </MinMaxWidth>
      </Wrapper>

      <Footer />
    </Container>
  );
};

interface IMinMaxWidth {
  min: string;
  max: string;
}

const MinMaxWidth = styled(motion.div)<IMinMaxWidth>`
  height: fit-content;
  max-width: ${(p) => p.max};
  min-width: ${(p) => p.min};
`;

const FullScreenImage = styled(motion.img)`
  width: 100%;
  aspect-ratio: 240 / 300;
  position: absolute;
  top: 0;
  left: 0;

  object-fit: cover;
`;

const ImageAnimationWrapper = styled(motion.div)`
  width: 100%;
  max-width: calc(100% - 160px);

  height: 620px;
  min-height: 620px;

  margin: 0 auto;
  overflow: hidden;
  height: fit-content;
  position: relative;

  margin-bottom: 80px;
`;

const Wrapper = styled(motion.div)`
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
