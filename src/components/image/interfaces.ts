import { ImgHTMLAttributes } from "react";

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    image: string | undefined
    alt: string | undefined
    styles: string | undefined
};
