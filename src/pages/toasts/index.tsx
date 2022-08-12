import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import {
  Footer,
  ContentContainer,
  H2,
  CenteredContent,
  Button,
  IconButton,
  H5,
} from "../../components";
import { variants } from "../../styles/variants";

const centeredContentVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.3,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.3,
      stiffness: 100,
    },
  },
};

interface IToast {
  id: string;
  message: string;
  type: "success" | "error";
}

export const ToastsPage = () => {
  const [toasts, setToasts] = useState([] as IToast[]);
  const [message, setMessage] = useState("");
  const makeToast = (e: React.FormEvent) => {
    e.preventDefault();

    const toast: IToast = {
      id: Math.random().toString(),
      message: message,
      type: "success",
    };

    setToasts([...toasts, toast]);

    setMessage("");
  };

  const removeToast = (id: string) => () => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <ContentContainer layout>
      <LayoutGroup>
        <CenteredContent
          variants={centeredContentVariants}
          animate="animate"
          exit="exit"
          initial="hidden"
        >
          <H2>Toasts</H2>
          <MiniForm onSubmit={makeToast}>
            <ToastInput
              placeholder="Message"
              value={message}
              onChange={onChange}
            />
            <Button type="submit">Make a Toast</Button>
          </MiniForm>
          {toasts.length > 0 ? (
            <ToastsContainer>
              <AnimatePresence>
                {toasts.map((toast) => (
                  <Toast
                    layout="position"
                    key={toast.id}
                    type={toast.type}
                    variants={variants.popUp}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      layout: {
                        type: "spring",
                        damping: 15,
                        stiffness: 80,
                      },
                    }}
                    style={{
                      position: "relative", // inline styles to avoid distortions & weird overlap
                      borderRadius: "16px",
                    }}
                  >
                    <motion.span>{toast.message}</motion.span>
                    <IconButton onClick={removeToast(toast.id)}>
                      <CloseIcon />
                    </IconButton>
                  </Toast>
                ))}
              </AnimatePresence>
            </ToastsContainer>
          ) : (
            <AnimatePresence>
              <CenterBox
                variants={variants.popUp}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <H5>No Toasts 😭</H5>
              </CenterBox>
            </AnimatePresence>
          )}
        </CenteredContent>
        <Footer />
      </LayoutGroup>
    </ContentContainer>
  );
};

const Toast = styled(motion.div)<{ type: "success" | "error" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  gap: 4px;

  background: #e0dbd8;
  border-radius: 16px;

  //text styles
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  text-align: center;

  color: #1e1f24;
`;

const ToastsContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 32px;

  margin-top: 40px;
`;

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.15">
      <path
        d="M6.34375 17.6569L17.6575 6.34315"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M6.34375 6.34314L17.6575 17.6568"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const MiniForm = styled.form`
  width: 100%;
  max-width: 500px;

  display: flex;
  gap: 16px;

  align-items: center;
  justify-content: space-between;
`;

const ToastInput = styled.input`
  width: 100%;
  padding: 12px 20px;

  border-radius: 40px;
  border: 2px solid #121212;

  font-size: 16px;
  color: #121212;
  background: transparent;

  &::placeholder {
    color: #12121294;
  }
`;

const CenterBox = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px 0 40px 0;
`;
