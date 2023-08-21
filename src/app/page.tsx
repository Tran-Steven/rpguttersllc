import Image from "next/image";
import styles from "page.module.css";
import Header from "components/header";
import Contact from "components/contactheader";
export default function Home() {
  return (
    <>
      <header>
        <Contact />
        <Header />
      </header>
      <main>Hi</main>
    </>
  );
}
