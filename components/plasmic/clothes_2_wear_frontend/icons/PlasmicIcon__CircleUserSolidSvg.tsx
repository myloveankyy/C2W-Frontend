// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleUserSolidSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleUserSolidSvgIcon(props: CircleUserSolidSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 11512 0 256 256 0 11-512 0zm256 16a72 72 0 100-144 72 72 0 100 144z"
        }
      ></path>
    </svg>
  );
}

export default CircleUserSolidSvgIcon;
/* prettier-ignore-end */
