import { useEffect, useRef } from "react";
import { gsapFadeTop } from "@/utils/gsapEffect";
import { BorderBrushTop } from "@/assets/styles/bordas";
import {
  ImageContainer,
  ImageContent,
  ImageTitle,
} from "@/assets/styles/background";

interface ImageBgTop {
  background: string
  title: string
}

const ImageBgTop = ({ background, title }: ImageBgTop) => {
  const animate = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsapFadeTop(animate.current);
  });

  return (
    <>
      <ImageContainer background={background} ref={animate}>
        <ImageContent>
          <ImageTitle>{title}</ImageTitle>
        </ImageContent>
      </ImageContainer>
      <BorderBrushTop />
    </>
  );
};

export default ImageBgTop;
