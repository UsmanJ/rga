'use strict';

angular.module('rgaAssessmentApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    var self = this;

    self.gender = [ "male", "female" ];
    self.percentage = [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

}]);
