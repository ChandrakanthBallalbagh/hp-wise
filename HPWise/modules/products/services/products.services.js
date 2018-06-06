(function() {

    'use strict';

    angular
        .module('sample.products')
        .factory('productServices', productServices);

    /*
     * Function     : stripService
     * Detail       : This function communicates between application and service layer API's
     */

    productServices.$inject = ['$resource', 'appConfig', '$q'];

    function productServices($resource, appConfig, $q) {


                // var otherInvestorFolioPanCheck = {};

        var service = {
            // getCategoryList: getCategoryList,
            // uploadMyFile: uploadFile,
            callApi: callApi,
            //  clearOtherInvestorFolioPanCheck: clearOtherInvestorFolioPanCheck,
            // storeOtherInvestorFolioPanCheck: storeOtherInvestorFolioPanCheck,
            // getOtherInvestorFolioPanCheck: getOtherInvestorFolioPanCheck,
        };
 
        // var getCat = $resource('http://10.10.41.68:8000/CMS/API.svc/ProductCategoryList', {}, {
        //     get: {
        //         method: "POST"
        //     }
        // });

        // var upload = $resource('https://creator.zoho.com/api/xml/fileupload/', {}, {
        //     get: {
        //         method: "POST"
        //     }
        // });


        return service;

        function callApi(data, url) {
            var callApi = $resource("https://swapi.co/api/" + url, {}, {
                get: {
                    method: "GET"
                }
            });
            var deferred = $q.defer();
            callApi.get(data, function successCallback(response) {
                console.log("response");
                deferred.resolve(response);
            }, function errorCallback(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }



        return service;

        // /*
        //  * Function     : getFromSchemeList
        //  * Detail       : This function calls the API for STRIP and SWP "from schemes" list
        //  */


        // function getCategoryList(data) {
        //     var deferred = $q.defer();
        //     getCat.get(data, function successCallback(response) {
        //         deferred.resolve(response);
        //     }, function errorCallback(response) {
        //         deferred.reject(response);
        //     });
        //     return deferred.promise;
        // }

        // function uploadFile(data) {
        //     console.log("calling upload inside service", data);
        //     var deferred = $q.defer();
        //     upload.get(data, function successCallback(response) {
        //         deferred.resolve(response);
        //     }, function errorCallback(response) {
        //         deferred.reject(response);
        //     });
        //     return deferred.promise;
        // }

          /*
         * Function     : storeSwipFrequency
         * Detail       : This function stores the STRIP frequency list
         */

        // function storeOtherInvestorFolioPanCheck(value) {
        //     otherInvestorFolioPanCheck = value;
        // }

        // function getOtherInvestorFolioPanCheck() {
        //     return otherInvestorFolioPanCheck;
        // }

        // function clearOtherInvestorFolioPanCheck() {
        //     otherInvestorFolioPanCheck = {};
        // }
    }
})();