(function() {

    'use strict';

    angular
        .module('sample.maps')
        .controller('mapsController', mapsController);


    mapsController.$inject = ['mapsServices', '$scope'];

    function mapsController(mapsServices, $scope) {


        $scope.place = {};

        $scope.search = function() {
            $scope.apiError = false;
            mapsServices.search($scope.searchPlace)
                .then(
                    function(res) { // success
                        mapsServices.addMarker(res);
                        $scope.place.name = res.name;
                        $scope.place.lat = res.geometry.location.lat();
                        $scope.place.lng = res.geometry.location.lng();
                    },
                    function(status) { // error
                        $scope.apiError = true;
                        $scope.apiStatus = status;
                    }
                );
        }

        $scope.send = function() {
            alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);
        }

        mapsServices.init();
    }
})();