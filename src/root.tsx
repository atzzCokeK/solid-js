// @refresh reload
import { Suspense } from "solid-js";
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
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/about">ゲーセンイキタイとは？</A>
            <A href="/by-game-machine">Game Machine</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
