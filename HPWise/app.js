/* =========================================================
 * Module       : Utimf (main module)
 * File Name    : app.js
 * Description  : Main module (UTIMF) module initialization and its routers. 
 * Copyright    : Copyright © 2015, UTI Mutual Fund
 *                Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */

(function() {

    'use strict';

    angular
        .module('sample', [
            'ngRoute',
            'ngResource',
            'MassAutoComplete',
            'sample.config',
            'sample.services',
            'sample.text',
            'sample.directives',
            'sample.products',
            'sample.maps',


        ])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$httpProvider', '$logProvider', 'appConfig', '$locationProvider'];

    function config($routeProvider, $httpProvider, $logProvider, appConfig, $locationProvider) {

        // $routeProvider
        //    .when('/', {
        //        title: 'products',
        //        templateUrl: '/modules/products/views/products.html',
        //        controller: 'productsController',
        //        controllerAs: 'products'

        //    });
        //    $location

        $httpProvider.interceptors.push('UtimfHttpIntercepter');
        // if (!$httpProvider.defaults.headers.get) {
        //     $httpProvider.defaults.headers.common = {};
        // }

        $logProvider.debugEnabled(appConfig.debug);
        $locationProvider.hashPrefix('');
        // $httpProvider.interceptors.push('UtimfHttpIntercepter');
        // $httpProvider.defaults.headers.common['cache-control'] = 'no-cache, no-store, max-age=0, must-revalidate';
    }

    //INJECT $cordovaPush, $cordovaDevice when intergrating PUSH BOTIFICATION
    //Download these plugins using PhoneGap cli command format is mention in lib/ng-cordova.js file

    run.$inject = ['$rootScope', '$location', '$timeout', 'appConfig', 'navigationDrawer', '$log','$http'];

    function run($rootScope, $location, $timeout, appConfig, navigationDrawer, $log, $http) {
        // $location.path('/products');
        $rootScope.menuStatus = "close";

        // $http.get(appConfig.apiBaseURL+"/memberships",{
        //     headers: {'x-api-key': "268801c17b7166c6757a96041aae0d3f",
        //                 'Content-Type':'application/json',
        //              }
        //     })
        //     .success(function(data){
        //     // .then(function(response) {
        //        // $scope.techinfo = response.data;
        //        // $scope.result = data;
        //        console.log("run call"+data.result);
        //        $rootScope.setid = "268801c17b7166c6757a96041aae0d3f";
        //        console.log("run call"+$rootScope.setid);
        //     })
        //     .error(function (error){
        //         // $scope.data.error = { message: error, status: status};
        //         // console.log($scope.data.error.status);
        //         console.log("run call error status"+error.result);
        //         // $location.path("/addProducts"); 
        //     }); 

        var history = [];
        $timeout(function() {
            $rootScope.checkHeader();
        }, 10);

        $rootScope.$on('$locationChangeStart', function(event, current, previous) {

        });

        $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
            $timeout(function() {
                $rootScope.checkHeader();
            }, 10);
            history.push($location.$$path);
            if (history[history.length - 1] == history[history.length - 3]) {
                history.splice(-3, 1);
            }

            $log.debug("history path", history);


            $rootScope.previousPage = history[history.length - 2];
            // $rootScope.pageTitle = $route.current.title;
        });

        $rootScope.checkHeader = function() {
            if (appConfig.headerdetails[$location.path()] != undefined)
                $rootScope.headerDetails = appConfig.headerdetails[$location.path()];
            else {
                $rootScope.headerDetails = { id: "unknown", title: "", lefticon: "", righticon: "", titleClass: "isave-fg-white", lefticonaction: 10, righticonaction: 10, backgroundClass: "" };
            }

            console.log("checkHeader",$location.path());

            switch ($rootScope.headerDetails.lefticonaction) {
                // open navigation drawer
                case 1:
                    {

                        $rootScope.headerDetails.leftMenuAction = function() {
                            navigationDrawer.enable();
                            navigationDrawer.toggle();
                        };
                    }
                    break;
                    // navigate back 
                case 2:
                    {
                        $rootScope.headerDetails.leftMenuAction = function() {
                            $rootScope.back();
                        };
                    }
                    break;
                default:
                    {
                        $rootScope.headerDetails.leftMenuAction = function() {};

                    }
            }
            switch ($rootScope.headerDetails.righticonaction) {
                // goto search page
                case 1:
                    {
                        $rootScope.headerDetails.rightMenuAction = function() {
                            $location.path("/search");
                        };
                    }
                    break;
                case 2:
                    {
                        $rootScope.headerDetails.rightMenuAction = function() {
                            $location.path("/offlineSearch");
                        };
                    }
                    break;
                case 4:
                    {
                        $rootScope.headerDetails.rightMenuAction = function(data) {
                            $rootScope.onlineSearch(data);
                        };
                    }
                    break;
                case 5:
                    {
                        $rootScope.headerDetails.rightMenuAction = function(data) {
                            $rootScope.offlineSearch(data);
                        };
                    }
                    break;
                default:
                    {
                        $rootScope.headerDetails.rightMenuAction = function() {};
                    }
                    break;
            }

            switch ($rootScope.headerDetails.lefticon) {
                // goto notification page
                case 1:
                    {
                        $rootScope.headerDetails.getLeftIcon = function() {
                            return "btn-menu";
                        };
                    }
                    break;
                case 2:
                    {
                        $rootScope.headerDetails.getLeftIcon = function() {
                            return "back-menu";
                        };
                    }
                    break;
                default:
                    {
                        $rootScope.headerDetails.getLeftIcon = function() {};
                        // var currentPage = $location.$$path;
                    }
                    break;
            }

            switch ($rootScope.headerDetails.righticon) {
                // goto notification page
                case 1:
                    {
                        $rootScope.headerDetails.getRightIcon = function() {
                            return "btn-menu";
                        };
                    }
                    break;
                default:
                    {
                        $rootScope.headerDetails.getRightIcon = function() {};
                        // var currentPage = $location.$$path;
                    }
                    break;
            }
        }

        document.addEventListener("backbutton", function(event) {
            bootbox.hideAll();
            // $log.debug("$route.current.originalPath".$route);
            // if ($route.current.originalPath == "/login") {
            //     navigator.app.exitApp();
            // }
            // if ($route.current.originalPath == "/home") {

            //     bootbox.hideAll();
            //     if ($rootScope.menuStatus == "open") {
            //         navigationDrawer.close();
            //     } else {
            //         bootbox.confirm(appText.info.exit_message, function(result) {
            //             if (!!result) {
            //                 navigator.app.exitApp();
            //             }
            //         });
            //     }

            //     return;
            // }

            //     if ($("body").hasClass("modal-open")) {
            //         event.preventDefault(); //disabled back button incase modal is open.(issue was raised in android 4.0 that blank screen will be displayed.)
            //         return false;
            //         $rootScope.closeModaliSave();
            //         $timeout(function() {
            //             $(".modal-backdrop").remove();
            //             $("body").removeClass("modal-open");
            //         }, 0);
            //         return false;
            //     } else {
            $rootScope.back();
            // }
            // }


            $rootScope.$apply();
        }, false);

        $rootScope.back = function() {

            if (busyIndicator.isShown()) {
                return false;
            }

            // if ($rootScope.appendHistory != undefined && $rootScope.appendHistory.length > 0) {
            //     history = $rootScope.appendHistory;
            //     $rootScope.appendHistory = [];
            // }

            var currentPage = $location.$$path;
            var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
            $rootScope.redirectTo(prevUrl);

            
            // window.history.back();
            // navigator.app.backHistory();

        };

        $rootScope.redirectTo = function(url) {
            $timeout(function() {
                $location.path(url);
            }, 0);

        }

        //clear history items
        $rootScope.clearHistory = function(count) {

            if (count == 0) {
                history = [];
            } else {
                history.splice(-(count));
            }

        };

    }

})();