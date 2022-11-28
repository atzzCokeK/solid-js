import { Component, ComponentProps } from "solid-js";
import Button from "~/components/uiParts/Button";

interface newProps extends ComponentProps<any> {
  // add props here
}

const Item = (props: { labelName: string }) => {
  return (
    <li>
      <label class="mr-2 w-40 inline-block">{props.labelName}</label>
      <input class="border-2 border-gray-300 rounded-md"></input>
    </li>
  );
};

const New: Component<newProps> = (props: newProps) => {
  return (
    <>
      <div>
        <h1>ゲーセン登録</h1>
        <div>
          <h2>新規ゲーセン情報</h2>
          <form class="bg-white rounded-lg p-5">
            <ul class="flex flex-col space-y-2">
              <Item labelName="施設名" />
              <Item labelName="電話番号" />
              <li>
                <label class="mr-2 w-40 inline-block">タグ</label>
                <select multiple class="border-2 border-gray-300 rounded-md">
                  <option>hoge</option>
                  <option>hoge</option>
                  <option>hoge</option>
                </select>
              </li>
              <div class="text-center">
                <Button type="submit" text="送信" onClick={() => {}} />
              </div>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default New;
