/* global malarkey:false, moment:false */

import { config } from './index.config';
import { runBlock } from './index.run';

// Controllers
import { MainController } from './features/main/main.controller';
import { LoginController } from './features/login/login.controller';

// Routes
import { routerConfig } from './index.route';
import { mainRoute } from './features/main/main.route';
import { loginRoute } from './features/login/login.route';
import { AuthenticationService } from './features/general/authentication/authentication.service';

//Factories
import { FirebaseFactory } from './features/general/authentication/firebase.factory';

//Directives
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('photoNow', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr', 'firebase', 'camera'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .config(mainRoute)
  .config(loginRoute)
  .run(runBlock)
  .service('authenticationService', AuthenticationService)
  .factory('firebaseFactory', FirebaseFactory)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .directive('navbar', NavbarDirective)
