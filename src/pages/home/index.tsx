import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentContainer, Headline } from "../../components";

import homeImage from "../../assets/home.jpeg";
import { variants } from "../../styles/variants";
import { SplitSlideUp } from "../../components/typography/SplitText";

export const HomePage = () => {
  return (
    <ContentContainer>
      <LayoutGroup>
        <Wrapper>
          <SplitSlideUp text="Understanding" component={Headline} hoverEffect />
          <FlexRow style={{ marginTop: "-12px" }}>
            <SplitSlideUp
              text="every"
              delay={2}
              component={Headline}
              hoverEffect
            />

            <FitContentWrapper>
              <AnimatePresence>
                <ImageAnimationWrapper
                  layoutId="home-image"
                  variants={variants.heightExpand}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  whileHover="parentHover"
                  transition={{
                    type: "spring",
                    mass: 0.7,
                    damping: 40,
                    stiffness: 150,
                  }}
                >
                  <Link to="/examples">
                    <Image
                      layoutId="home-image-src"
                      initial={false}
                      animate="animate"
                      variants={variants.heightExpand}
                      whileHover="childHover"
                      src={homeImage}
                    />
                  </Link>
                </ImageAnimationWrapper>
              </AnimatePresence>
            </FitContentWrapper>

            <SplitSlideUp
              text="voice."
              delay={4}
              component={Headline}
              hoverEffect
            />
          </FlexRow>
        </Wrapper>
      </LayoutGroup>
    </ContentContainer>
  );
};

const FitContentWrapper = styled(motion.div)`
  width: 260px;
  height: 340px;

  margin: 0 40px;
`;

const ImageAnimationWrapper = styled(motion.div)`
  width: 260px;
  height: 340px;

  aspect-ratio: 240 / 300;

  transform-origin: bottom center;

  overflow: hidden;

  position: relative;
`;

const Image = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  background-position: center;
  width: 100%;
  height: 340px;
  object-fit: cover;
`;

const FlexRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
