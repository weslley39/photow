export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/login');
}
