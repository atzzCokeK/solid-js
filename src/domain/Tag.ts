export default class Tag {
  private readonly name: string;

  constructor(id: number) {
    const tagName = this.fromTagId(id);

    if (tagName === undefined) {
      throw new Error("Tagname is something wrong.");
    }

    this.name = tagName;
  }

  private fromTagId(id: number) {
    switch (id) {
      case 1:
        return "メダルゲーム";
      case 2:
        return "音ゲー";
      case 3:
        return "格ゲー";
      default:
        return undefined;
    }
  }

  toName = () => this.name;
}
