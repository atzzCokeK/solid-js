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
import Header from "./components/Header";
import { SolidNProgress } from "solid-progressbar";

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
          <SolidNProgress color="#0CDC73" />
          <Header />
          <Suspense>
            <ErrorBoundary>
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
