angular.module('bedBlockingProject')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/templates/usersIndex.html',
      controller: 'UsersIndexController as usersIndex'
    })
    .state('bedsIndex', {
      url: '/beds',
      templateUrl: '/templates/bedsIndex.html',
      controller: 'BedsIndexController as bedsIndex'
    })
    .state('pocsIndex', {
      url: '/pocs',
      templateUrl: '/templates/pocsIndex.html',
      controller: 'PocsIndexController as pocsIndex'
    })
    .state('assessmentsIndex', {
      url: '/assessments',
      templateUrl: '/templates/assessmentsIndex.html',
      controller: 'AssessmentsIndexController as assessmentsIndex'
    })
    .state('patientsIndex', {
      url: '/patients',
      templateUrl: '/templates/patientsIndex.html',
      controller: 'PatientsIndexController as patientsIndex'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('patientsShow', {
      url: '/patients/:id',
      templateUrl: '/templates/patientsShow.html',
      controller: 'PatientsShowController as patientsShow'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    });

  $urlRouterProvider.otherwise('/users');
}
