import { LayoutGroup, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Headline } from "../../components";

import homeImage from "../../assets/home.jpeg";
import { variants } from "../../styles/variants";
import { SplitSlideUp } from "../../components/typography/SplitText";

export const HomePage = () => {
  return (
    <Container>
      <LayoutGroup>
        <Wrapper>
          <SplitSlideUp text="Understanding" component={Headline} hoverEffect />
          <FlexRow style={{ marginTop: "-12px" }} layout>
            <SplitSlideUp
              text="every"
              delay={2}
              component={Headline}
              hoverEffect
            />

            <FitContentWrapper layout>
              <ImageAnimationWrapper
                layoutId="home-image"
                variants={variants.heightExpand}
                initial="initial"
                animate="animate"
                whileHover="parentHover"
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
    </Container>
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

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
