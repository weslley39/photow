export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment, authenticationService, $timeout) {
    'ngInject';

    $timeout(() => {
      this.auth = authenticationService;
      this.user = this.auth.getUser();
    });
  }
}
