export class Todo {
  index: number;
  title: string;
  createdAt: Date;

  constructor(index: number, title: string) {
    this.index = index;
    this.title = title;
    this.createdAt = new Date();
  }
}
