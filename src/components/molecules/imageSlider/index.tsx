import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { variants } from "../../../styles/variants";
import { ImageModal } from "./modal";
import { SliderImage, ImageSliderImageProps, ImageSliderProps } from "./types";

export const ImageSlider = ({ images, smartTransition }: ImageSliderProps) => {
  const [selectedUrl, setSelectedUrl] = useState("");

  const selectImage = (url: string) => {
    url === selectedUrl ? setSelectedUrl("") : setSelectedUrl(url);
  };

  return (
    <>
      <ImageModal
        onClose={() => selectImage("")}
        layoutId={selectedUrl}
        imageUrl={selectedUrl}
        isOpen={selectedUrl !== ""}
        smartTransition={smartTransition}
      />

      <ImageSliderWrapper layoutScroll>
        {images.map((image, index) => (
          <ImageSliderItem
            imageUrl={image.imageUrl}
            selectedUrl={selectedUrl}
            label={image.label}
            key={index}
            index={index}
            onSelect={() => selectImage(image.imageUrl)}
          />
        ))}
      </ImageSliderWrapper>
    </>
  );
};

const ImageSliderItem = ({
  imageUrl,
  label,
  onSelect,
  selectedUrl,
  index,
}: SliderImage) => {
  const dynamicLayoutId = useMemo(() => {
    return selectedUrl === imageUrl ? `selected-image` : `${imageUrl}-image`;
  }, [imageUrl, selectedUrl]);

  return (
    <>
      <ImageSliderItemWrapper>
        <HoverEffectWrapper
          layoutId={`${imageUrl}-wrapper`}
          variants={variants.widthGrow}
          initial={false}
          whileHover="parentHover"
          animate="animate"
          exit="exit"
        >
          <ImageSliderImage
            layoutId={dynamicLayoutId}
            src={imageUrl}
            variants={variants.widthGrow}
            initial="initial"
            animate="animate"
            whileHover="childHover"
            exit="exit"
            onClick={onSelect}
            custom={index}
          />
        </HoverEffectWrapper>
        <ImageLabel
          variants={variants.popUpVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {label}
        </ImageLabel>
      </ImageSliderItemWrapper>
    </>
  );
};

const HoverEffectWrapper = styled(motion.div)`
  /* height: fit-content; */
  width: fit-content;
  overflow: hidden;
  position: relative;

  height: 500px;
`;

const ImageLabel = styled(motion.p)`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #000000;
`;

const FullScreenImageStyles = css`
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 40px;
  height: calc(100% - 80px);
  margin: 0 auto;
  object-fit: cover;
  z-index: 25;
`;

const ImageSliderImage = styled(motion.img)<ImageSliderImageProps>`
  height: 500px;
  aspect-ratio: 390 / 500;
  object-fit: cover;

  ${(p) => p.isSelected && `${FullScreenImageStyles}`}
`;

const ImageSliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
`;

const ImageSliderWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;

  margin: 0 auto;
  overflow-x: scroll;

  position: relative;
`;
