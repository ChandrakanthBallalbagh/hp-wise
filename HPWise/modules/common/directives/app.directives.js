/* =========================================================
 * Module       :
 * File Name    :
 * Description  :.
 * Copyright    : Copyright © 2017,
 *                Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */


﻿
(function() {

    'use strict';

    angular
        .module('sample.directives', [])
        .directive('header', header)
        .directive('footer', footer)
        // .directive('spinner', spinner)
        .directive('clickRedirect', clickRedirect)
        .directive('navigationDrawer', navigationDrawer);

  
    header.$inject = ['navigationDrawer'];

    function header(navigationDrawer) {
        var directive = {
            restrict: 'A',
            templateUrl: 'modules/common/views/header.html',
            link: link
        };
        return directive;

        function link($scope, $element, $attrs, $location) {
            $scope.navigationDrawer = navigationDrawer;
        }
    }

    footer.$inject = ['$location', '$timeout']

    function footer(navigationDrawer) {
        var directive = {
            restrict: 'A',
            templateUrl: 'modules/common/views/footer.html',
            link: link
        };
        return directive;

        function link($scope, $element, $attrs, $location) {
            $scope.navigationDrawer = navigationDrawer;
        }
    }


    navigationDrawer.$inject = ['$rootScope', '$log'];

    function navigationDrawer($rootScope, $log) {
        var directive = {
            restrict: 'A',
            replace: true,
            templateUrl: 'modules/common/views/navigationdrawer.html',
            link: link
        };
        return directive;

        function link($scope, $element, $attrs, $location) {
         
            $scope.logout = logout;
            $scope.onNotificationChange = onNotificationChange;
          


        }

        function logout() {
            bootbox.confirm({
                message: "Are you sure you want to quit?",
                callback: function(result) {
                    if (result) {
                        $rootScope.$broadcast('unauthorized');
                    }
                }
            });
        }


        function onNotificationChange(state) {
            console.log(state);
            $rootScope.$broadcast('notificationSettingsChanged', state);
        }

       
    }


    function spinner() {
        var directive = {
            restrict: 'A',
            templateUrl: 'modules/common/views/spinner.html',
            link: link
        };
        return directive;

        function link($scope, $element, $attrs) {}
    }


   

    clickRedirect.$inject = ['$location', '$rootScope', 'appText'];

    function clickRedirect($location, $rootScope, appText) {
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link($scope, $element, $attrs) {
            $element.bind('click', click);

            function click() {
                // var checkNetwork = [];

                var myVar = setTimeout(alertFunc, 1000);
                

                function alertFunc() {
                        // alert("$location");
                        $location.path($attrs.clickRedirect);
                        $scope.$apply();
                }
                // if ($.inArray($attrs.clickRedirect, checkNetwork) === -1) {
                    // $location.path($attrs.clickRedirect);
                    // $scope.$apply();
                // } else {
                //     if (!$rootScope.offline) {
                //         $location.path($attrs.clickRedirect);
                //         $scope.$apply();
                //     }
 

                // }
            }
        }
    }

  


})();