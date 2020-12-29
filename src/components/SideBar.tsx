import styles from "./Sidebar.module.scss";
import SidebarContents, { SidebarContentsProps } from "./SidebarContents";
import Link from "next/link";

export const Sidebar: React.FC = () => {
  const pageList: SidebarContentsProps[] = [
    { title: "About me", path: "/aboutme", imgSrc: "aboutme.png" },
    { title: "Works", path: "/works", imgSrc: "works.png" },
    { title: "Hobby", path: "/hobby", imgSrc: "hobby.png" },
    { title: "Diary", path: "/diary", imgSrc: "diary.png" },
  ];
  return (
    <>
      <section className={styles.sidebar}>
        <Link href="/">
          <a>
            <img src="logo.png" className={styles.sidebar__logo} />
          </a>
        </Link>
        {pageList.map((page) => {
          return <SidebarContents {...page} key={page.title} />;
        })}
      </section>
    </>
  );
};
