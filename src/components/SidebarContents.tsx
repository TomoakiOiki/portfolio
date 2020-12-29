import React from "react";
import Link from "next/link";

import styles from "./SidebarContents.module.scss";

export interface SidebarContentsProps {
  title: string;
  path: string;
  imgSrc: string;
}
const SidebarContents: React.FC<SidebarContentsProps> = (props) => {
  return (
    <div className={styles.sidebarContents}>
      <Link href={props.path}>
        <a className={styles.sidebarContents__link}>
          <img
            src={props.imgSrc}
            className={styles.sidebarContents__link__img}
          />
          <p className={styles.sidebarContents__link__title}>{props.title}</p>
        </a>
      </Link>
    </div>
  );
};
export default SidebarContents;
