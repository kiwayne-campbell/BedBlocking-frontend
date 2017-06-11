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
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
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
      url: '/patients?q',
      templateUrl: '/templates/patientsIndex.html',
      controller: 'PatientsIndexController as patientsIndex'
    })
    .state('patientsNew', {
      url: '/patients/new',
      templateUrl: '/templates/patientsNew.html',
      controller: 'PatientsNewController as patientsNew'
    })
    .state('patientsShow', {
      url: '/patients/:id',
      templateUrl: '/templates/patientsShow.html',
      controller: 'PatientsShowController as patientsShow'
    })
    .state('patientsSearch', {
      url: '/search',
      templateUrl: '/templates/patientsSearch.html',
      controller: 'PatientsIndexController as patientsIndex'
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
    })
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'PatientsIndexController as patientsIndex'
    });

  $urlRouterProvider.otherwise('/home');
}
