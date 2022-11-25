import { BiRegularGame } from "solid-icons/bi";
import { Component } from "solid-js";
import { A } from "solid-start";

const Header: Component = () => {
  return (
    <>
      <header class="flex items-center p-5">
        <A href="/">
          <BiRegularGame />
        </A>
      </header>
      <nav class="flex items-center sticky top-0 border-b-1 border-gray-400">
        <A href="/">ゲーセン一覧</A>
        <A href="/about">ゲーセンイキタイとは？</A>
        <A href="/by-game-machine">Game Machine</A>
      </nav>
    </>
  );
};

export default Header;
