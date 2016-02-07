'use strict';

angular.module('rgaAssessmentApp')
  .controller('MainCtrl', ['$scope', 'Pharmacies', function ($scope, Pharmacies) {

    var self = this;

    self.pharmacies = {};

    self.getPharmacies = function() {
      Pharmacies.get()
        .then(function(response) {
          self.pharmacies = response.data;
      });
    };

    angular.element(document).ready(function () {
      self.getPharmacies();
    });

}]);
