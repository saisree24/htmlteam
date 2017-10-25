(function() {
  'use strict';

  angular
    .module('lmsApp')
    .controller('socialviewController', socialviewController);

  /** @ngInject */
  function socialviewController($scope,$timeout) {

    $scope.pageTitle = 'Social View';
    $timeout(function() {
        $('.resource_card').each(function(i){
            var row = $(this);
            $timeout(function() {
                  row.toggleClass('inme', !row.hasClass('inme'));
              }, $scope.timeoutinc*i);
        });
     }, 5);

  }
})();
