/* =========================================================
 * Module      : Transact
 * File Name   : transact.js
 * Description : Transact Module initialization and routing(Switch,Redeemption,SIP,Purchase modules). 
 * Copyright   : Copyright © 2015, UTI Mutual Fund
 *               Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */
(function() {

    'use strict';

    angular
        .module('sample.maps', [])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/maps', {
                title: 'maps',
                templateUrl: 'modules/maps/views/maps.html',
                controller: 'mapsController'
            })
           
           
    }
})();
