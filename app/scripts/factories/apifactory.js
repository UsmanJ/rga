'use strict';

angular.module('rgaAssessmentApp')
  .factory('Pharmacies', ['$http', function($http){
    var queryUrl = 'https://data.gov.uk/data/api/service/health/pharmacies/partial_postcode?partial_postcode=TW8';
    return {
      get: function(){
        return $http({
          url: queryUrl,
          method: 'GET',
        });
      }
    };
  }]);
