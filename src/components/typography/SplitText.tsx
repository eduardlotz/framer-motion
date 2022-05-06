import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import styled, { StyledComponent } from "styled-components";
import { variants } from "../../styles/variants";

const getLetters = (str: string) =>
  str.split("").map((text, index) => ({ text, index }));

const WHITESPACE_SYMBOL = "&nbsp;";

const getWords = (str: string) =>
  str.split(/(\s+)/).map((text, index) => {
    if (text === " ") return { text: WHITESPACE_SYMBOL, index };
    return { text, index };
  });

interface ISlideUpProps {
  text: string;
  delay?: number;
  component: StyledComponent<
    ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h2">>,
    any,
    {},
    never
  >;
  layoutId?: string;
  splitBy?: "letters" | "words";
  hoverEffect?: boolean;
}

//create a function that returns array with a h1 of all letters of a string
export const SplitSlideUp = ({
  text,
  delay = 1,
  component: Component,
  layoutId,
  splitBy = "letters",
  hoverEffect = false,
}: ISlideUpProps) => {
  const splittedText =
    splitBy === "letters" ? getLetters(text) : getWords(text);

  return (
    <SplitTextWrapper key={`${text}-wrapper`} layout>
      {splittedText.map((letter) => {
        return letter.text !== WHITESPACE_SYMBOL ? (
          <Component
            key={`${text}-${letter.index}`}
            variants={variants.slideUpItem}
            animate="visible"
            initial="hidden"
            exit="exit"
            whileHover={hoverEffect ? "hover" : ""}
            custom={letter.index * delay}
            layoutId={layoutId}
            layout
          >
            {letter.text}
          </Component>
        ) : (
          <Whitespace key={`whitespace-${letter.index}`} />
        );
      })}
    </SplitTextWrapper>
  );
};

const SplitTextWrapper = styled(motion.div)`
  width: fit-content;
  height: fit-content;

  margin: 0;
  display: flex;
  gap: -2px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Whitespace = styled(motion.div)`
  width: 1em;
  height: 12px;
  background: transparent;
`;
