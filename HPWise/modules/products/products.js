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
        .module('sample.products', [])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/products', {
                title: 'products',
                templateUrl: 'modules/products/views/products.html',
                controller: 'productsController',
                controllerAs: 'products'
            })
            .when('/products/:tempname', {
                title: 'products',
                templateUrl: 'modules/products/views/products.html',
                controller: 'productsController',
                controllerAs: 'products'
            })
            .when('/addProducts',{
                title:'Add Products',
                templateUrl: 'modules/products/views/addProducts.html',
                controller: 'choiceProductsController',
                controllerAs: 'addProducts'
            })
            .when('/info-products',{
                title:'set Products',
                templateUrl: 'modules/products/views/infoProducts.html',
                controller: 'addProductsController',
                controllerAs: 'addProducts'
            })
            .when('/info-products/:tempname',{
                title:'set Products',
                templateUrl: 'modules/products/views/infoProducts.html',
                controller: 'addProductsController',
                controllerAs: 'addProducts'
            })
             .when('/media-products',{
                title:'set Products',
                templateUrl: 'modules/products/views/mediaProducts.html',
                controller: 'mediaController',
                controllerAs: 'mediaProducts'
            })
             .when('/integrate-products',{
                title:'set Products',
                templateUrl: 'modules/products/views/integrateProducts.html',
                controller: 'integrateController',
                controllerAs: 'addProducts'
            })
             .when('/content-list',{
                title:'set Products',
                templateUrl: 'modules/products/views/ContentList.html',
                controller: 'contentController',
                controllerAs: 'addProducts'
            })
             .when('/payment-details',{
                title:'set Products',
                templateUrl: 'modules/products/views/paymentProducts.html',
                controller: 'paymentController',
                controllerAs: 'addProducts'
            })
            .otherwise ('/products')
    }

})();
    // var app = angular.module('sample', []);
    
