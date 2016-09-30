export function mainRoute ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/features/main/main.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    });
}
