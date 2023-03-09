export class Todo {
  public value: string;
  public onEdit: boolean;

  constructor(value: string, onEdit: boolean) {
    this.value = value;
    this.onEdit = onEdit;
  }
}
