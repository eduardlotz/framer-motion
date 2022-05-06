export const variants = {
  squareShapeExpand: {
    initial: {
      height: 0,
      y: 60,
    },
    animate: {
      height: "340px",
      y: 0,

      transition: {
        type: "spring",
        damping: 10,
        mass: 0.2,
        stiffness: 60,
        delay: 0.5,
      },
    },
    exit: {
      height: 0,
      y: -60,
      opacity: 0,

      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
    parentHover: {
      scale: 0.95,
      transition: {
        type: "spring",
        duration: 0.2,
      },
    },
    childHover: {
      scale: 1.1,
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
  },
  widthGrow: {
    initial: {
      width: 0,
    },
    animate: (i: number) => ({
      width: "390px",
      transition: {
        type: "spring",
        damping: 35,
        mass: 0.6,
        stiffness: 100,
        delay: 0.2 * i,
      },
    }),
    exit: (i: number) => ({
      y: 40,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 15,
        mass: 0.6,
        stiffness: 80,
        delay: 0.1 * i,
      },
    }),

    parentHover: {
      scale: 0.95,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
    childHover: {
      scale: 1.15,
      transition: {
        type: "spring",
        damping: 15,
        mass: 0.6,
        stiffness: 80,
      },
    },
  },
  heightExpand: {
    initial: {
      height: 0,
      transformOrigin: "bottom center",
      opacity: [1, 0],
    },
    layout: {
      width: "100%",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.5,
        bounce: 0.2,
      },
    },
    animate: {
      opacity: 1,
      height: "100%",
      transformOrigin: "bottom center",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.8,
        stiffness: 35,
        delay: 0.35,
      },
    },
    exit: {
      y: 40,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.8,
        stiffness: 60,
      },
    },
    parentHover: {
      scale: 0.95,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
    childHover: {
      scale: 1.1,
      transition: {
        type: "spring",
        damping: 15,
        mass: 0.6,
        stiffness: 50,
      },
    },
  },
  buttonVariants: {
    rest: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.9,
      },
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        bounce: 0.9,
      },
    },
    pressed: {
      y: 0,
    },
  },
  slideUp: {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.85,
        stiffness: 100,
        delayChildren: 10,
        staggerChildren: 4,
        delay: i * 0.2,
      },
    }),
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
  },
  slideUpItem: {
    hidden: {
      y: 300,
      rotate: -15,
      height: "fit-content",
    },
    hover: (i: number) => ({
      y: 20 * Math.random(),
      rotate: 5 * Math.random(),
    }),
    visible: (i: number) => ({
      y: 0,
      rotate: 0,
      height: "fit-content",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.2,
        stiffness: 60,
        delay: i * 0.035,
      },
    }),
    exit: (i: number) => ({
      y: 40,
      opacity: 0,
      transition: {
        delay: i * 0.005,
        beforeChildren: true,
      },
    }),
  },
  popUp: {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
    hidden: { opacity: 0, scale: 0.5 },
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
  },
  container: {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 10,
        staggerChildren: 4,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        delayChildren: 1.4,
        staggerChildren: 0.2,
      },
    },
  },
  modeTab: {
    left: {
      left: "14px",
      right: "auto",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
    center: {
      left: "auto",
      right: "auto",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
    right: {
      right: "14px",
      left: "auto",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
    whileHoverDrinking: {
      right: "auto",
      left: "40px",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
    whileHoverStandard: {
      right: "40px",
      left: "auto",
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.3,
        stiffness: 100,
      },
    },
  },
  // staggered pop up animation for avatars
  popUpVariants: {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.5,
        stiffness: 70,
        delay: i * 0.02,
      },
    }),
    hidden: { opacity: 0, scale: 0.9 },
    hover: {
      scale: 1.15,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.2,
        stiffness: 80,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 40,
      },
    },
  },
};
