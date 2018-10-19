(function () {
  'use strict';

  angular
    .module('cieloDesafio')
    .config(stateConfig);

  stateConfig.$inject = ['$stateProvider'];

  function stateConfig($stateProvider) {
    $stateProvider
      .state('lancamentos', {
        parent: 'app',
        url: '/',
        data: {
          pageTitle: 'Lançamentos Controle Legado'
        },
        views: {
          'content@': {
            templateUrl: 'src/app/lancamentos/lancamentos.html',
            controller: 'LancamentosController',
            controllerAs: 'vm'
          }
        },
      });
  }

})();
