export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public image: string,
    private token: string
  ) {}

  getToken() {
    return this.token;
  }
}
