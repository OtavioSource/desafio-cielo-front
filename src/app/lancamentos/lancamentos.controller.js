(function () {
  'use strict';

  angular
    .module('cieloDesafio')
    .controller('LancamentosController', LancamentosController);

  LancamentosController.$inject = ['LancamentosService'];

  function LancamentosController(LancamentosService) {
    var vm = this;

    function init() {
      LancamentosService.buscarLancamentos().then(function (resp) {
        if (resp && resp.data) {
          vm.lancamentos = resp.data;
        }
      });
    }
    
    init();
  }

})();
