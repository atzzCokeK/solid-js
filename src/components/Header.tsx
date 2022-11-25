import { BiRegularGame } from "solid-icons/bi";
import { Component } from "solid-js";
import { A, useLocation } from "solid-start";

const Header: Component = () => {
  const location = useLocation();

  return (
    <>
      <header class="flex items-center pt-5 pl-10 bg-white">
        <A href="/">
          <BiRegularGame />
        </A>
      </header>
      <nav class="font-bold flex items-center sticky pt-5 pl-10 top-0 border-b border-gray-200 bg-white">
        {/* TODO: これはコンポーネント化したい。 */}
        <A
          href="/"
          classList={{
            "border-primary": location.pathname === "/",
            "border-white": location.pathname !== "/",
            "pb-4 border-b-2": true,
          }}
        >
          ゲーセン一覧
        </A>
        <A
          href="/about"
          classList={{
            "border-primary": location.pathname === "/about",
            "border-white": location.pathname !== "/about",
            "pb-4 border-b-2": true,
          }}
        >
          ゲーセンイキタイとは？
        </A>
        {/* TODO: 一旦コメントアウト */}
        {/* <A
          href="/by-game-machine"
          classList={{
            "border-primary": location.pathname === "/by-game-machine",
            "border-white": location.pathname !== "/by-game-machine",
            "pb-4 border-b-2": true,
          }}
        >
          Game Machine
        </A> */}
      </nav>
    </>
  );
};

export default Header;
