import { LinkHTMLAttributes } from "react";

export interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    text: string
    styles: string
};
