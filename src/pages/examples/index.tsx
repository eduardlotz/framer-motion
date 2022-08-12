import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

import homeImage from "../../assets/home.jpeg";
import {
  Footer,
  MotionAccordion,
  ContentContainer,
  H2,
  Headline,
  FlexStartWrapper,
} from "../../components";
import { SplitSlideUp } from "../../components/typography/SplitText";
import { variants } from "../../styles/variants";

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
    <ContentContainer layout>
      <FlexStartWrapper>
        <SplitSlideUp
          component={H2}
          text="framer motion animation examples"
          splitBy="words"
        />
      </FlexStartWrapper>
      <AnimatePresence initial={false} exitBeforeEnter>
        <ImageAnimationWrapper
          layoutId="home-image"
          id="home-image"
          variants={variants.heightExpand}
          initial="initial"
          animate="animate"
          exit={{
            y: 40,
            opacity: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 0.8,
              stiffness: 60,
            },
          }}
          transition={{
            layout: {
              type: "spring",
              mass: 0.7,
              damping: 40,
              stiffness: 150,
            },
          }}
        >
          <FullScreenImage
            layoutId="home-image-src"
            src={homeImage}
            style={{ y: imageMotion }}
          />
        </ImageAnimationWrapper>
      </AnimatePresence>
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
      <FlexStartWrapper layout>
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
      </FlexStartWrapper>
      <Footer />
    </ContentContainer>
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
