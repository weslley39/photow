export class MainController {
  constructor ($rootScope, $scope, $firebaseArray, authenticationService, $timeout, toastr) {
    'ngInject';

    this.firebaseArray = $firebaseArray;
    this.authService   = authenticationService;

    this.dbRef         = firebase.database().ref();
    this.images        = $firebaseArray(this.dbRef);
    this.toastr        = toastr;
    $rootScope.isLogin = false;

    $timeout(() => {
      this.user = this.authService.getUser();
    });

    $scope.$watch('ctrl.picture', (newVal) => {
      if (newVal) {
        this.images.$add({
          userId: this.user.uid,
          comment: 'vazio',
          image: this.picture
        });
      }
    })
  }

  removeImage(image) {
    this.images.$remove(image).then(() => {
        this.toastr.success('Image removed')
      })
  }

}
