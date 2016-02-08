'use strict';

angular.module('rgaAssessmentApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    var self = this;

    self.data = { 'Male': '', 'Female': '' };
    self.dataAvailable2 = false;
    self.dataAvailable1 = false;


    self.add = function() {
      var percentage = document.getElementById('percentageValue');
      var percentageValue = percentage.options[percentage.selectedIndex].value;

      if (genderValue === 'Male') {
        self.data['Male'] = percentageValue;
        self.maleAvailable = true;
        console.log(self.data['Male'])
      } else if (genderValue === 'Female') {
        self.data['Female'] = percentageValue;
        self.femaleAvailable = true;
      }
    };

    self.remove = function(data) {

      if (genderValue === 'Male') {
        self.data['Male'] = percentageValue;
        self.dataAvailable = true;
      } else if (genderValue === 'Female') {
        self.data['Female'] = percentageValue;
        self.dataAvailable = true;
      }
    };

}]);
