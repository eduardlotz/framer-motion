import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { ContentContainer } from "../../components";
import { SplitSlideUp } from "../../components/typography/SplitText";
import { variants } from "../../styles/variants";

const draw = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      type: "spring",
      duration: 6,
    },
  },
  exit: {
    pathLength: 1,
    type: "spring",
    duration: 0.6,
  },
};

export const ErrorPage = () => {
  const containerRef = useRef(null);

  return (
    <ContentContainer ref={containerRef}>
      <Wrapper>
        <ErrorCode
          variants={variants.slideUp}
          animate="visible"
          initial="hidden"
          exit="exit"
          drag
          dragSnapToOrigin
          dragConstraints={containerRef}
          dragTransition={{ bounceStiffness: 350, bounceDamping: 15 }}
          whileDrag={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.3, type: "spring" },
            border: "4px solid #000000",
          }}
          dragElastic={0.5}
        >
          404
          <AnimatedScribble
            variants={draw}
            initial={false}
            exit="exit"
            width="545"
            height="188"
            viewBox="0 0 545 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={draw}
              initial="initial"
              animate="animate"
              d="M58.799 5.85144C126.754 5.85144 194.578 12.0338 262.475 12.0338C299.754 12.0338 336.957 15.5892 374.239 15.7433C398.876 15.8451 423.515 15.7433 448.153 15.7433C456.262 15.7433 442.297 18.4466 440.115 18.9719C395.644 29.6778 348.509 32.0658 303.072 35.9391C255.097 40.0288 206.846 42.9458 158.679 42.9458C133.964 42.9458 108.878 43.5268 84.2155 45.144C75.3497 45.7254 48.6777 45.4188 57.5625 45.4188C66.453 45.4188 75.327 44.4457 84.2155 44.1823C127.542 42.8985 170.84 42.9458 214.183 42.9458C306.394 42.9458 398.837 42.9002 491.017 45.6935C502.88 46.053 514.661 46.6553 526.532 46.6553C530.653 46.6553 542.92 45.8298 538.896 46.7239C526.306 49.5218 513.437 50.6867 500.634 52.1507C457.552 57.0772 414.405 61.5408 371.353 66.7137C295.109 75.8748 219.12 84.3302 142.399 88.0086C123.289 88.9248 104.166 88.6955 85.0398 88.6955C83.6607 88.6955 81.6195 89.3913 84.2155 89.8633C96.3678 92.0728 110.801 89.8664 123.027 90.0007C168.822 90.504 214.538 93.4875 260.345 93.6415C316.595 93.8305 372.819 93.2983 429.056 94.8779C457.892 95.688 486.758 97.2129 515.609 97.3509C522.021 97.3816 540.703 95.0215 534.843 97.6257C528.012 100.662 516.942 98.5874 509.908 98.5874C459.994 98.5874 410.059 99.4523 360.156 100.511C256.278 102.714 152.354 104.371 48.495 106.968C34.9181 107.307 21.3395 107.243 7.75985 107.243C-1.51928 107.243 26.3055 107.931 35.5806 108.204C133.536 111.096 231.339 112.682 329.244 117.684C386.31 120.6 557.774 120.844 500.634 120.844C491.088 120.844 481.544 121.792 472.058 122.767C434.102 126.669 396.322 130.181 358.233 132.728C278.248 138.076 198.595 138.155 118.493 138.155C111.833 138.155 110.15 138.512 118.013 137.88C150.592 135.262 183.159 135.682 215.832 135.682C308.503 135.682 401.171 136.918 493.834 136.918C501.403 136.918 499.212 136.744 493.078 137.193C463.368 139.367 433.636 141.055 403.914 143.101C302.835 150.058 202.188 155.465 100.839 155.465C93.283 155.465 85.7267 155.465 78.1705 155.465C65.7914 155.465 102.914 156.42 115.265 157.251C155.806 159.982 196.095 164.525 236.715 166.525C289.257 169.112 341.691 173.219 394.228 175.936C432.801 177.931 471.454 182.668 510.114 182.668"
              stroke="#EAE5E2"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </AnimatedScribble>
        </ErrorCode>
        <SplitSlideUp
          text="This page is not real."
          component={ErrorText}
          splitBy="words"
          hoverEffect
        />
      </Wrapper>
    </ContentContainer>
  );
};

const AnimatedScribble = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: -40px;
  right: 0;
  bottom: 0;
  height: 100%;
  margin: 0 auto;
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-height: 100%;
  max-width: 100%;
`;

const ErrorText = styled(motion.h1)`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 108px;
  line-height: 148px;

  letter-spacing: -4px;

  color: #000000;

  margin: 0;
`;

const ErrorCode = styled(motion.h1)`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 249px;
  line-height: 340px;
  letter-spacing: -4px;
  padding: 24px 40px;
  background-color: #eae5e2;

  color: #000000;

  margin: 0;

  position: relative;
  z-index: 10;
  cursor: grab;
  overflow: hidden;

  border-radius: 100px;

  border: 2px solid transparent;
`;
