(function () {
  'use strict';

  angular
    .module('cieloDesafio')
    .config(stateConfig);

  stateConfig.$inject = ['$stateProvider', '$locationProvider'];

  function stateConfig($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider.state('app', {
      abstract: true
    });
  }
})();
