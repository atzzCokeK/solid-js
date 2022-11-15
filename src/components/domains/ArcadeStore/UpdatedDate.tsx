import { Component, ComponentProps } from "solid-js";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

interface UpdatedDateProps extends ComponentProps<any> {
  updatedAt: Date;
}

const UpdatedDate: Component<UpdatedDateProps> = (props: UpdatedDateProps) => {
  return (
    <div class="text-[#6d7172] text-xs">
      最終更新日:{format(props.updatedAt, "yyyy年M月d日", { locale: ja })}
    </div>
  );
};

export default UpdatedDate;
