export default class Tag {
  private readonly id: string;
  private readonly name: string;

  constructor(id: string, name: string) {
    // 要不要判断つかず
    if (!id || !name) {
      throw new Error("Tag params is something wrong.");
    }

    this.id = id;
    this.name = name;
  }

  toName = () => this.name;

  toId = () => this.id;

  isEqualTo = (tag: Tag): boolean => tag.toId() === this.toId();
}
