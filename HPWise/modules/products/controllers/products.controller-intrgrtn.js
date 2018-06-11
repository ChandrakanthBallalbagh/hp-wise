
/* =========================================================
 * Module      : Transact
 * File Name   : enter-folio.controller.js
 * Description : Controller logic for Enter Folio page.
 * Copyright   : Copyright © 2015, UTI Mutual Fund
 *               Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */

// (function() {

//     'use strict';

//     angular
//         .module('sample.products')
//         .controller('productsController', productsController);


//     productsController.$inject = ['productServices', '$scope', '$rootScope', '$location', '$sce', '$routeParams','$http','appConfig'];

//     function productsController(productServices, $scope, $rootScope, $location, $sce, $routeParams,$http,appConfig) {
//         console.log("inside controlelr");

//         $http.get(appConfig.apiBaseURL+"/admin_details",{
//             headers: {
//                         'Content-Type':'application/json',
//                      }
//             })
//             .success(function(data){
//             // .then(function(response) {
//                // $scope.techinfo = response.data;
//                // $scope.result = data;
//                console.log("meaaa"+data.data);
                
//                 $scope.api_key = data.data.api_key;
//                 $scope.username = data.data.email;
//                 console.log("meaaa" + $scope.username);

//                 var member_id_token = $scope.api_key;
//                 localStorage.setItem("member_id_token", member_id_token);

//                // console.log("data"+ data.data.id);
//                // $scope.result = response.data.result;
//                // $scope.template = data.data.wise_template.name;
//                // localStorage.setItem("token", $scope.template);
//                // // $scope.userid = response.data.data.id;
//                // var userid = data.data.id;
//                // localStorage.setItem("u_id", userid);
//                // console.log(userid);
//                // console.log($scope.template+""+$scope.userid);

//             // if(data.result == "SUCCESS"){
//             //     console.log(" if");
//             //     $location.path("/info-products/"+$scope.template);
//             // }
//             })
//             .error(function (error){
//                 // $scope.data.error = { message: error, status: status};
//                 // console.log($scope.data.error.status);
//                 console.log("error"+error.result);
//                 // $location.path("/addProducts"); 
//             });



//         $scope.member_id = $routeParams.tempname;
//         console.log("id"+ $scope.member_id);

//         $rootScope.setid = localStorage.getItem("member_id_token");
//             console.log("member id:"+$rootScope.setid);
//             if($rootScope.setid == "undefined"){
//                 console.log("not set");
//             }
//             else{
//                  console.log("set");
//             }
//         // var req = {
//         //     'token': 'token'
//         // }
//         // productServices.getCategoryList(req).then(function(data) {
//         //         $scope.categories = data.product_categories;


//         //     },
//         //     function(error) {
//         //         console.log("error", error);
//         //     });

//         // $scope.upload = true;
//         // $scope.redirectTo = function() {
//         //     console.log("redirecting...");
//         //     $location.path('/addProducts');
//         // }

//         // var formdata = new FormData();

//         // $scope.getTheFiles = function($files) {
//         //     angular.forEach($files, function(value, key) {
//         //         formdata.append(key, value);
//         //     });

//         //     for (var key of formdata) {
//         //         console.log(key[0]);
//         //         console.log(key[1]);
//         //     }
//         // };

//         // // NOW UPLOAD THE FILES.
//         // $scope.uploadFiles = function() {
//         //     console.log("uploading from controller");
//         //     var request = {
//         //         data: formdata,
//         //         headers: {
//         //             name: "myFile"
//         //         }
//         //     };

//         //     productServices.uploadMyFile(request).then(function(data) {
//         //             console.log("success from controller", data);
//         //         },
//         //         function(error) {
//         //             console.log("error from controller", error);
//         //         });

//         // }
//         $scope.call = function() {
//             // productServices.callApi({}, 'films/1/').then(function(res) {
//              // console.log("Api response", +$scope.setid);
//             $scope.result= "";
//             $scope.template= "";
//             $rootScope.setid = localStorage.getItem("member_id_token");
//             // alert($scope.setid);
//             $http.get(appConfig.apiBaseURL+"/memberships",{
//             headers: {'x-api-key': $rootScope.setid,
//                         'Content-Type':'application/json',
//                      }
//             })
//             .success(function(data){
//             // .then(function(response) {
//                // $scope.techinfo = response.data;
//                // $scope.result = data;
//                console.log("result status"+data.result);
//                console.log("data"+ data.data.id);
//                // $scope.result = response.data.result;
//                $scope.template = data.data.wise_template.name;
//                localStorage.setItem("token", $scope.template);
//                localStorage.setItem("username", data.data.admin_email);
//                // $scope.userid = response.data.data.id;
//                var userid = data.data.id;
//                localStorage.setItem("u_id", userid);
//                console.log("user"+data.data.admin_email);
//                // console.log($scope.template+""+$scope.userid);

//             if(data.result == "SUCCESS"){
//                 console.log("if");
//                 $location.path("/info-products/"+$scope.template);
//             }
//             })
//             .error(function (error){
//                 // $scope.data.error = { message: error, status: status};
//                 // console.log($scope.data.error.status);
//                 console.log("error status"+error.result);
//                 $location.path("/addProducts"); 
//             }); 

//             // console.log("rewe"+ $scope.result);
//             // if($scope.result == "SUCCESS"){

//             //     $location.path("/info-products/templateA");
//             // }
//             // else{
//             //     $location.path("/addProducts");
//             // }

//             // $location.path("/addProducts");
//             // },
//             // function(error) {
//             //     console.log(error);
//             // });
//         }

//         //         var form = $('form')[0]; // You need to use standard javascript object here
//         // var formData = new FormData(form);
//         // or specify exact data for FormData()

//         // var formData = new FormData();
//         // formData.append('section', 'general');
//         // formData.append('action', 'previewImg');
//         // // Attach file
//         // formData.append('image', $('input[type=file]')[0].files[0]); 
//         // Sending form

//         // Ajax request with jquery will looks like this:

//         // $.ajax({
//         //     url: 'Your url here',
//         //     data: formData,
//         //     type: 'POST',
//         //     contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
//         //     processData: false, // NEEDED, DON'T OMIT THIS
//         //     // ... Other options like success and etc
//         // });
//         $scope.dirty = {};
//         var schemeList = [{
//                 schemename: "one",

//             },
//             {
//                 schemename: "two",

//             },
//             {
//                 schemename: "three",

//             },
//             {
//                 schemename: "four",

//             }
//         ];

//         function suggest_state_as_tag(term) {
//             var q = term.toLowerCase().trim();
//             var results = [];
//             var keys = Object.keys(schemeList);
//             for (var i = 0; i < keys.length; i++) {
//                 var schemes = schemeList[keys[i]];
//                 if (schemes.schemename.toLowerCase().indexOf(q) !== -1){
//                      results.push({
//                         label: schemes.schemename,
//                         value: schemes.schemename,
//                     });
//                 }
                   
//             }
//             console.log("results", results);

//             return results;
//         }

//         function add_tag(selected) {
//             // //Selected scheme from the scheme list is updated
//             // self.isCollapsed = false;
//             // self.recmndInvestor.plan = "Plan";
//             // self.recmndInvestor.option = "Option";
//             // self.options = null;
//             // self.plans = null;
//             // self.recmndInvestor.plancode = "";
//             // self.recmndInvestor.optioncode = "";
//             // self.recmndInvestor.scheme = selected.label;
//             // self.recmndInvestor.schemecode = selected.obj.schemecode;
//             // self.recmndInvestor.schemedesc = selected.obj.schemedesc;
//             $scope.dirty.selected_tag = undefined; // Clear model
//             $scope.dirty.value = '';
//             // self.getInvestor.options = null;
//             // self.getInvestor.plans = null;
//             alert(selected);
//         };

//         $scope.ac_option_tag_select = {
//             suggest: suggest_state_as_tag,
//             on_select: add_tag
//         };


//     }
//     // addProductsController.$inject = ['$scope', '$routeParams'];

//     // function addProductsController($scope, $routeParams) {
//     //      console.log("inside template");
//     //     $scope.message = 'Clicked template';
//     //     $scope.person = $routeParams.tempname;
//     // }

// })();