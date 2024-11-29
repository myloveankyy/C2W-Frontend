// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon14Icon(props: Icon14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M9 9h6v6H9V9z"} fill={"currentColor"}></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.293 3.293A1 1 0 009 4v1H7a2 2 0 00-2 2v2H4a1 1 0 000 2h1v2H4a1 1 0 000 2h1v2a2 2 0 002 2h2v1a1 1 0 102 0v-1h2v1a1 1 0 002 0v-1h2a2 2 0 002-2v-2h1a1 1 0 000-2h-1v-2h1a1 1 0 000-2h-1V7a2 2 0 00-2-2h-2V4a1 1 0 00-2 0v1h-2V4a1 1 0 00-1.707-.707zM17 7H7v10h10V7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
