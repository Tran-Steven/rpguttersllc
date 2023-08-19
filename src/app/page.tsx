import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header.tsx";
import Main from "@/components/main.tsx";
export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer></footer>
    </>
  );
}
