// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
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

      <path
        d={
          "M13 19a1 1 0 001.447.894l4-2A1 1 0 0019 17v-5.764a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V19zm4.211-10.724a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L6.789 6.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM6.447 10.342A1 1 0 005 11.236V17a1 1 0 00.553.894l4 2A1 1 0 0011 19v-5.764a1 1 0 00-.553-.894l-4-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
