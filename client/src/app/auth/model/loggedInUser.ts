export class LoggedInUser {
  constructor(private id: string,
              private firstName: string,
              private lastName: string,
              private email: string) {

  }

  /**
   * get display name
   *
   *
   * @returns {string}
   */

  getDisplayName() {
    return this.firstName + ' ' + this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getId(){
    return this.id;
  }


}
