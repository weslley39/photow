export class AuthenticationService {
  constructor (firebaseFactory) {
    'ngInject';

    this.auth = firebaseFactory;
  }

  getAuth() {
    return this.auth;
  }

  getUser() {
    return this.auth.$getAuth()
  }

  isAuthenticated() {
    return this.auth.$getAuth() !== null
  }
}
