export interface SliderImage {
  imageUrl: string;
  label: string;
  onSelect?: () => void;
  selectedUrl?: string;
  index?: number;
}

export interface ImageSliderImageProps {
  isSelected?: boolean;
}

export interface ImageSliderProps {
  images: SliderImage[];
}
