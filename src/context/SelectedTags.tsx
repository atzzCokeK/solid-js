import { createContext, JSX, useContext } from "solid-js";
import { Component } from "solid-js";
import { createStore, Store } from "solid-js/store";
import Tag from "~/domain/Tag";

//  TODO: Setのやつ試してみる

type Stores = [
  Tag[],
  { addTag: (targetTag: Tag) => void; removeTag: (targetTag: Tag) => void }
];

const SelectedTagsContext = createContext<Stores>([
  [],
  {
    addTag: () => {},
    removeTag: () => {},
  },
]);

const SelectedTagsProvider: Component<{ children: JSX.Element }> = (props) => {
  const [selectedTags, setSelectedTags] = createStore<Tag[]>([]);

  const addTag = (targetTag: Tag) => {
    setSelectedTags((tags) => {
      return [...tags, targetTag];
    });
  };

  const removeTag = (targetTag: Tag) => {
    setSelectedTags((tags) => {
      return [...tags].filter((tag) => tag.toName() !== targetTag.toName());
    });
  };

  const store: Stores = [selectedTags, { addTag, removeTag }];

  return (
    <SelectedTagsContext.Provider value={store}>
      {props.children}
    </SelectedTagsContext.Provider>
  );
};

const useSelectedTags = (): Stores => {
  return useContext(SelectedTagsContext);
};

export { useSelectedTags, SelectedTagsProvider };
