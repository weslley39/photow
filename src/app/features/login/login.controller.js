export class LoginController {
  constructor ($rootScope, authenticationService, firebaseFactory, toastr, $state) {
    'ngInject';

    this.auth                   = firebaseFactory;
    this.toastr                 = toastr;
    this.state                  = $state;
    $rootScope.isLogin          = true;
  }

  signIn() {
    this.firebaseUser = null;
    this.error        = null;

    this.auth.$signInWithPopup('google').then(() => {
      this.state.go('home')
    }).catch((error) => {
      this.toastr.error(`Authentication Failed: ${error}`)
    })
  }


}
