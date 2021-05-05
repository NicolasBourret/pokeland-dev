import Header from "./header/header";
import Footer from "./footer/footer";
import SideBar from "./sidebar/sideBar";
import MainContent from "./mainContent";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <MainContent>{children}</MainContent>
      </main>
      <Footer />
    </div>
  );
}
