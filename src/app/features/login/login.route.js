export function loginRoute ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/features/login/login.html',
      controller: 'LoginController',
      controllerAs: 'ctrl'
    });
}
