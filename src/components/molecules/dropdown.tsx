import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  content: React.ReactNode[];
}

const dropdownVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { staggerChildren: 0.05, duration: 0.2 },
  },
  transition: { duration: 0.15, type: "spring" },
};

export const Dropdown = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DropdownTrigger onClick={toggleDropdown} activated={isOpen}>
        {props.children}
        <AnimatePresence>
          {isOpen && (
            <DropdownContent
              variants={dropdownVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {props.content.map((item, index) => (
                <DropdownItem variants={dropdownVariants} key={index}>
                  {item}
                </DropdownItem>
              ))}
            </DropdownContent>
          )}
        </AnimatePresence>
      </DropdownTrigger>
    </>
  );
};

const DropdownTrigger = styled(motion.button)<{ activated?: boolean }>`
  position: relative;
  text-decoration: none;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: ${(p) => (p.activated ? "#EAE5E2" : "#121212")};

  background-color: ${(p) => (p.activated ? "#121212" : "#EAE5E2")};

  white-space: nowrap;

  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const DropdownContent = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background: #121212;

  max-width: 0;
  min-width: fit-content;

  border-radius: 4px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DropdownItem = styled(motion.div)`
  padding: 8px 12px;

  width: fit-content;
  & * {
    color: white;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
