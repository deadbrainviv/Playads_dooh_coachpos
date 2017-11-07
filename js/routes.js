angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('dOOHCoachPosition', {
    url: '/page1',
    templateUrl: 'templates/dOOHCoachPosition.html',
    controller: 'dOOHCoachPositionCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('loginToCoachPositionTool', {
    url: '/page5',
    templateUrl: 'templates/loginToCoachPositionTool.html',
    controller: 'loginToCoachPositionToolCtrl'
  })

  .state('manageCoachPosition', {
    url: '/page7',
    templateUrl: 'templates/manageCoachPosition.html',
    controller: 'manageCoachPositionCtrl'
  })

$urlRouterProvider.otherwise('')


});