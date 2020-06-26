

export class TestClass {
  private readonly i = 0;

  private readonly text: string;

  constructor(text: string) {
    this.text = text;
  }


  public getText(): string {
    return this.text;
  }
}
