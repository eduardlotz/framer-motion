import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { variants } from "../../styles/variants";

interface IMotionAccordionProps {
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const MotionAccordionItem = ({
  isOpen,
  onClick,
  index,
}: IMotionAccordionProps) => {
  return (
    <AccordionItem
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={variants.slideUp}
      onClick={onClick}
      layout
    >
      <AccordionHeader
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={variants.slideUp}
        custom={index}
      >
        <AccordionTitle>Wie funktioniert das?</AccordionTitle>
        <IconButton>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M4 12L20 12"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <motion.path
              animate={{ rotate: isOpen ? 90 : -0 }}
              initial={{ rotate: 0 }}
              transition={{
                type: "spring",
                mass: 0.2,
                stiffness: 60,
                damping: 10,
              }}
              d="M4 12L20 12"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </motion.svg>
        </IconButton>
      </AccordionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordionContent
            animate={{ y: 0, opacity: 1, height: "auto" }}
            initial={{ y: -10, opacity: 0, height: 0 }}
            exit={{ y: -10, opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              mass: 0.2,
              stiffness: 60,
              damping: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, ipsum eget sagittis porttitor, nisi urna porta
            nisl, eget euismod nunc nisi euismod.
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
};

export const MotionAccordion = () => {
  const [openItem, setOpenItem] = useState(0);

  const openAccordion = (id: number) => {
    if (openItem === id) setOpenItem(-1);
    else setOpenItem(id);
  };

  return (
    <Accordion
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
      exit="exit"
      variants={variants.slideUp}
      layout
    >
      <MotionAccordionItem
        index={0}
        isOpen={openItem === 0}
        onClick={() => openAccordion(0)}
      />
      <MotionAccordionItem
        index={1}
        isOpen={openItem === 1}
        onClick={() => openAccordion(1)}
      />
      <MotionAccordionItem
        index={2}
        isOpen={openItem === 2}
        onClick={() => openAccordion(2)}
      />
    </Accordion>
  );
};

const Accordion = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const AccordionItem = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 12px 0;
`;

const AccordionHeader = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const AccordionTitle = styled(motion.h5)`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;

  color: #1e1f24;

  margin: 0;
`;

const AccordionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  color: #1e1f24;

  padding: 8px 0;
  position: relative;
`;

const IconButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0;
`;
