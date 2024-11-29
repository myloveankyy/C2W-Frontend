// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.429 15c0-.87.316-1.705.878-2.32.563-.615 1.326-.961 2.122-.961.795 0 1.558.346 2.12.96.563.616.88 1.45.88 2.321 0 .87-.317 1.705-.88 2.32-.562.616-1.325.961-2.12.961-.796 0-1.56-.345-2.122-.96A3.444 3.444 0 01.43 15zM9 15c0-.87.316-1.705.879-2.32.562-.615 1.325-.961 2.121-.961s1.559.346 2.121.96c.563.616.879 1.45.879 2.321 0 .87-.316 1.705-.879 2.32-.562.616-1.325.961-2.121.961s-1.559-.345-2.121-.96A3.444 3.444 0 019 15zm11.571-3.281c.796 0 1.56.346 2.122.96.562.616.878 1.45.878 2.321 0 .87-.316 1.705-.878 2.32-.563.616-1.326.961-2.122.961-.795 0-1.558-.345-2.12-.96A3.444 3.444 0 0117.57 15c0-.87.316-1.705.88-2.32.562-.615 1.325-.961 2.12-.961z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */
