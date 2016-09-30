export function runBlock ($rootScope, authenticationService, $state, $timeout) {
	'ngInject';

	$rootScope.$on('$stateChangeSuccess', (event, toState) => {
		if (toState.name !== 'login') {
			$timeout(() => {
				if (!authenticationService.isAuthenticated()) {
					event.preventDefault();
					$state.go('login');
				}
			})
		}
	});
}
