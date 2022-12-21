import {
  Component,
  ComponentProps,
  createResource,
  JSXElement,
} from "solid-js";
import { createStore } from "solid-js/store";
import Button from "~/components/uiParts/Button";
import Input from "~/components/uiParts/Input";
import Select from "~/components/uiParts/Select";
import db from "~/db";
import Address from "~/domain/Address";
import ArcadeStore from "~/domain/ArcadeStore";
import PhoneNumber from "~/domain/PhoneNumber";
import { prefectureNames } from "~/prefectures";
import ArcadeStoreRepository from "~/repository/ArcadeStoreRepository";

interface newProps extends ComponentProps<any> {
  // add props here
}

const Item = (props: { labelName: string; input: JSXElement }) => {
  return (
    <li>
      <label class="mr-2 w-40 inline-block font-bold">{props.labelName}</label>
      {props.input}
    </li>
  );
};

type FieldData = {
  storeName: string;
  phoneNumber: string;
  postalCode: string;
  address1?: string;
  address2?: string;
  prefecture: string;
  officialUrl?: string;
};

const New: Component<newProps> = (props: newProps) => {
  const arcadeStoreRepository = new ArcadeStoreRepository();
  const [storeInputData, setStoreInputData] = createStore<FieldData>({
    storeName: "",
    phoneNumber: "",
    postalCode: "",
    address1: "",
    address2: "",
    prefecture: "",
    officialUrl: "",
  });

  const [tags] = createResource(() => db.fetchAllTags());

  const onSubmit = async (_: Event) => {
    const newArcadeStore = new ArcadeStore({
      name: storeInputData.storeName,
      phoneNumber: new PhoneNumber(storeInputData.phoneNumber),
      address: new Address({
        postalCode: storeInputData.postalCode,
        prefecture: storeInputData.prefecture,
        address1: storeInputData.address1 || "",
        address2: storeInputData.address2 || "",
      }),
      updatedAt: new Date(),
      tags: tags() || [],
      officialUrl: storeInputData.officialUrl || "",
    });

    await arcadeStoreRepository.add(newArcadeStore);
  };

  const updateStoreInputData = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    setStoreInputData({ [fieldName]: inputElement.value });
  };

  return (
    <>
      <div>
        <h1>ゲーセン登録</h1>
        <div>
          <h2>新規ゲーセン情報</h2>
          <div class="bg-white rounded-lg p-5">
            <ul class="flex flex-col space-y-2">
              <Item
                labelName="施設名"
                input={<Input onChange={updateStoreInputData("storeName")} />}
              />
              <Item
                labelName="電話"
                input={<Input onChange={updateStoreInputData("phoneNumber")} />}
              />
              <Item
                labelName="郵便番号"
                input={<Input onChange={updateStoreInputData("postalCode")} />}
              />
              <Item
                labelName="都道府県"
                input={
                  <Select
                    options={prefectureNames()}
                    onChange={updateStoreInputData("prefecture")}
                  />
                }
              />
              <Item
                labelName="住所1"
                input={<Input onChange={updateStoreInputData("address1")} />}
              />
              <Item
                labelName="住所2"
                input={<Input onChange={updateStoreInputData("address2")} />}
              />
              <Item
                labelName="URL"
                input={
                  <Input
                    onChange={updateStoreInputData("officialUrl")}
                    inputMode="url"
                    type="url"
                  />
                }
              />
              <Item
                labelName="タグ"
                input={
                  <Select
                    multiple={true}
                    options={tags()?.map((tag) => tag.toName())}
                    onChange={updateStoreInputData("tags")}
                  />
                }
              />
              <div class="text-center">
                <Button
                  onClick={onSubmit}
                  text="送信"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
