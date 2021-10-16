/* eslint-disable @next/next/no-img-element */
import { SignInButton } from "../SignInButton";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/imagens/logo.svg" alt="ig.new" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
