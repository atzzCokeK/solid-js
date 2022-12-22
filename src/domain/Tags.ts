import Tag from "./Tag";

export default class Tags {
  private readonly tags: Set<Tag>;
  constructor(tags: Tag[]) {
    this.tags = new Set(tags);
  }

  toArray(): Tag[] {
    return Array.from(this.tags);
  }

  findById(targetId: string): Tag | undefined {
    return Array.from(this.tags).find((tag) => tag.isEqualToById(targetId));
  }
}
