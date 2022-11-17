// @refresh reload
import { Suspense } from "solid-js";
import { BiRegularGame } from "solid-icons/bi";

import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import { SelectedTagsProvider } from "./context/selectedTags";

export default function Root() {
  return (
    <Html lang="ja">
      <Head>
        <Title>ゲーセンイキタイ</Title>
        <Meta charset="utf-8" />
        <Meta
          name="description"
          content="Game Center Information built with Solid"
        />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <SelectedTagsProvider>
          <Suspense>
            <ErrorBoundary>
              <header class="flex sticky top-0 items-center p-5">
                <A href="/">
                  <BiRegularGame />
                </A>
                <A href="/about">ゲーセンイキタイとは？</A>
                <A href="/by-game-machine">Game Machine</A>
              </header>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </SelectedTagsProvider>
      </Body>
    </Html>
  );
}
