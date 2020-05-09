module.exports = class User {
  id: string;
  name: string;
  document: string;
  email: string;

  constructor (name: string, email: string, document: string) {
    this.name = name;
    this.email = email;
    this.document = document;
  }

  getName (): string {
    return this.name;
  }

  setName (name: string): void {
    this.name = name;
  }

  getDocument (): string {
    return this.document;
  }

  setDocument (document: string): void {
    this.document = document;
  }

  getEmail (): string {
    return this.email;
  }

  setEmail (email: string): void {
    this.email = email;
  }
}