angular.module('bedBlockingProject')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;

  function logout() {
    $auth.logout()
      .then(() => {
        $state.go('home');

      });
  }

  main.logout = logout;

  main.message = null;
  const protectedStates = ['usersEdit', 'usersNew', 'usersShow'];

  function secureState(e, toState) {
    main.message = null;
    main.stateName = toState.name;
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('login');
      main.message = 'You must be logged in to go there!';
    }

    if($auth.isAuthenticated()) {
      main.currentUserId = $auth.getPayload().id;
    }
  }

  $rootScope.$on('$stateChangeStart', secureState);
}
