/* =========================================================
 * Module      : Transact
 * File Name   : enter-folio.controller.js
 * Description : Controller logic for Enter Folio page.
 * Copyright   : Copyright © 2015, UTI Mutual Fund
 *               Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */

(function() {

    'use strict';

    angular
        .module('sample.products')
        .controller('choiceProductsController', choiceProductsController)
        .controller('addProductsController', addProductsController)
        .controller('mediaController', mediaController)
        .controller('integrateController', integrateController)
        .controller('contentController', contentController)
        .controller('paymentController', paymentController);
        

    choiceProductsController.$inject = ['productServices','$rootScope','$routeParams','$scope','appConfig']; 

    function choiceProductsController(productServices,$rootScope,$routeParams,$scope,appConfig) {
            var token = ""
            localStorage.setItem("token", token);
            $rootScope.loginuser = localStorage.getItem("username");
            console.log("template name"+token);

            $scope.choiceTemplate = function(a) {
            $scope.master = {
                    wise_template_id: a,
            };
            $http.put(appConfig.apiBaseURL+"/memberships",{ "tech_info": $scope.master },
            {
            headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                      }
            })
            .then(function(response) {
               console.log("put response"+response);
            });
            }
    }

    addProductsController.$inject = ['productServices','$rootScope','$routeParams','$scope','$http','appConfig'];

    function addProductsController(productServices,$rootScope,$routeParams,$scope,$http,appConfig) {
	   console.log("inside template");
       $scope.user = {};
       $scope.results = [];
       var token = $routeParams.tempname;
       localStorage.setItem("token", token);
       $rootScope.settemp = localStorage.getItem("token");
       $rootScope.setid = localStorage.getItem("member_id_token");
       $scope.u_id = localStorage.getItem("u_id");
       $rootScope.loginuser = localStorage.getItem("username");
       console.log("template namme:"+ $rootScope.settemp)
       console.log("memberships id:"+$rootScope.setid+"uid"+$scope.u_id)

        if($rootScope.settemp == null){
            console.log("hello");
            $rootScope.settemp = $routeParams.tempname;
            $scope.temp = $routeParams.tempname;
            var token = $routeParams.tempname;
            localStorage.setItem("token", token);
            console.log("temp choice"+$rootScope.settemp);
        }

        $http.get(appConfig.apiBaseURL+"/tech_info/"+$scope.u_id,{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
            .then(function(response) {
               $scope.techinfo = response.data.data;
               console.log(response);
               console.log($scope.techinfo.host_username);
            });
            // $http.get("https://www.w3schools.com/angular/welcome.htm")
            //         .then(function(response) {
            //          $scope.myWelcome = response.data;
            //          console.log("results"+$scope.myWelcome);
            // });
          
        // console.log("template name"+token);
        // console.log($rootScope.settemp);
        $scope.update = function(tech) {
            // $scope.master = angular.copy(tech);
            // $rootScope.master= angular.copy(tech);
            console.log(tech.db_username);
            $scope.master = {
                    host_name: tech.host_name,
                    host_username:tech.host_username,
                    host_password: tech.host_password,
                    host_domain_name: tech.host_domain_name,
                    host_ssl_certificate: tech.host_ssl_certificate,
                    ftp_host: tech.ftp_host,
                    ftp_username: tech.ftp_username,
                    ftp_password: tech.ftp_password,
                    ftp_port_number: tech.ftp_port_number,
                    ftp_ssh_key_path: tech.ftp_ssh_key_path,
                    db_host: tech.db_host,
                    db_username: tech.db_username
    };

            $http.put(appConfig.apiBaseURL+"/tech_info/"+$scope.u_id,{ "tech_info": $scope.master },
                {
                headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                })
            .then(function(response) {
               console.log("put response"+response);
            });
        };
        // $scope.uploadFile = function(files){
        // var file1 =  files[0].type; 
        // $scope.sshfile = files[0].name;
        // $scope.tech.sshfile = angular.copy($scope.sshfile);
        // };
        // $scope.uploadFtpFile = function(files){
        // var file1 =  files[0].type; 
        // $scope.ftpFile = files[0].name;
        // alert($scope.ftpFile);
        // $scope.tech.ftpFile = angular.copy($scope.ftpFile);
        // };
    }

    mediaController.$inject = ['productServices','$rootScope','$routeParams','$scope','$http','appConfig'];

    function mediaController(productServices,$rootScope,$routeParams,$scope,$http,appConfig) {
        console.log("inside media template");
        console.log($rootScope.settemp);
        $rootScope.settemp = localStorage.getItem("token");
        $rootScope.loginuser = localStorage.getItem("username");
        $scope.u_id = localStorage.getItem("u_id");
        $rootScope.setid = localStorage.getItem("member_id_token");



        $http.get(appConfig.apiBaseURL+"/tech_info/"+$scope.u_id,{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
        .then(function(response) {
               $scope.mediainfo = response.data.data;
               console.log("$scope.mediainfo"+$scope.mediainfo);
               console.log("api key"+$scope.mediainfo.fotolia_api_key);
        });

        // if($rootScope.patternapikey == undefined){
        //     $rootScope.patternapikey=$rootScope.patternHmac=$rootScope.fotoliaApi="";
        // }
         $scope.saveMedia = function(a,b,c) {

            $scope.master = {
                    pattern_design_api_key: a,
                    pattern_design_hmac_key:b,
                    fotolia_api_key: c,
    };

            $http.put(appConfig.apiBaseURL+"/tech_info/"+$scope.u_id,{ "tech_info": $scope.master },
                {
                headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                })
            .then(function(response) {
               console.log("put response"+response);
            });

            // var patternapikey = a;
            // localStorage.setItem("patternapikey", patternapikey);
            // $rootScope.patternapikey = localStorage.getItem("patternapikey");

            // var patternHmac = b;
            // localStorage.setItem("patternHmac", patternHmac);
            // $rootScope.patternHmac = localStorage.getItem("patternHmac");

            // var fotoliaApi = c;
            // localStorage.setItem("fotoliaApi", fotoliaApi);
            // $rootScope.fotoliaApi = localStorage.getItem("fotoliaApi");
        }

        $scope.optionlist = ["Pattern design","Fotolia","Media gallery"];

        $http.get(appConfig.apiBaseURL+"/"+$scope.u_id+"/products",{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
        .then(function(response) {
               // $scope.mediainfo = response.data.data;
               console.log("$scope.media fetch pro"+response.data.data);
                $scope.product = response.data.data;
               // console.log($scope.mediainfo.product);
        });

        // if(!$rootScope.media_dummy){
       //  $scope.items = [
       //  {
       //          "name":"wallcovering",
       //          "use": false,
       //          "bgMedia": "",
       //          "fgMedia" : ""
       //      }, {
       //          "name":"Poster",
       //          "use": false,
       //          "bgMedia": "",
       //          "fgMedia" : ""
       //      }, {
       //          "name":"wall-decals",
       //          "use": false,
       //          "bgMedia": "",
       //          "fgMedia" : ""
       //      }
       //  ]
       // }
       // else {
       //      $scope.items= angular.copy($rootScope.media_dummy);
       //  }
       //  console.log($scope.items);

        $scope.mediaChange = function(item,bg,fg){
            // $rootScope.media_dummy= angular.copy($scope.items);
            // console.log($rootScope.media_dummy);

            console.log(bg);
            console.log("bk"+bg+"ggdg"+fg);

            $scope.master = {
                    background_imagery: bg,
                    objects_imagery: fg,
            };

            $http.put(appConfig.apiBaseURL+"/products/"+item.id,{ "wise_product": $scope.master },
                {
                headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                })
            .then(function(response) {
               console.log("put response"+response);
            });
        }
        //declare sku array here 
  
    //     $scope.save = function(){
    //         $scope.albumNameArray = [];
    //         angular.forEach($scope.sku, function(x){
    //         if (x.use) $scope.albumNameArray.push(x.name);
    //         });
    //     }
    // console.log($scope.albumNameArray);
    }

    integrateController.$inject = ['productServices','$rootScope','$routeParams','$scope','$http','appConfig'];

    function integrateController(productServices,$rootScope,$routeParams,$scope,$http,appConfig) {
        console.log("inside integrate Controller");
        
        $rootScope.setid = localStorage.getItem("member_id_token");
        console.log($rootScope.setid);
        $rootScope.settemp = localStorage.getItem("token");
        $scope.u_id = localStorage.getItem("u_id");

        $http.get(appConfig.apiBaseURL+"/"+$scope.u_id+"/products",{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
        .then(function(response) {
               // $scope.mediainfo = response.data.data;
               console.log("$scope.integrate"+response.data.data);
                $scope.products = response.data.data;
               // console.log($scope.mediainfo.product);
        });
        // $scope.dummy = {};
        // if(!$rootScope.dummy){
        //    $scope.products = [
        // {
        //         "name":"wallcovering",
        //         "rename": "",
        //         "activate": 1,
        //         "status" : ""
        //     }, {
        //         "name":"Poster",
        //         "rename": "",
        //         "activate": 1,
        //         "status" : ""
        //     }, {
        //         "name":"wall-decals",
        //         "rename": "",
        //         "activate": 0,
        //         "status" : ""
        //     }, {
        //         "name":"floor-graphics",
        //         "rename": "",
        //         "activate": 0,
        //         "status" : ""
        //     }
        //     ] 
        // }
        // else {
        //     $scope.products= angular.copy($rootScope.dummy);
        // }
        console.log($scope.products+ ","+$rootScope.dummy);
        $scope.updateName = function(item, newstatus, rename){
            if(item.enabled == true)
            {
                item.status = ''; 
                item.rename = '';
                rename = rename;
            }
            else
            {
               item.enabled = newstatus;
                console.log("rename"+rename);

                if(rename == '' || rename == undefined){
                    console.log("if null"+item.product.name);
                    rename= item.product.name;
                }
                else{
                    item.rename = rename;
                    console.log("if null else"+item.rename);
                }
                // $rootScope.status = item.status;
            }
            console.log(item.id+"gdgd"+item.product.name);
            $scope.master = {
                    product_name: rename,
                    enable: newstatus,
            };

            $http.put(appConfig.apiBaseURL+"/products/"+item.id,{ "wise_product": $scope.master },
                {
                headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                })
            .then(function(response) {
               console.log("put response"+response);
            });

            $rootScope.dummy= angular.copy($scope.products);
            console.log($rootScope.dummy);
        } 
    }

    contentController.$inject = ['productServices','$rootScope','$routeParams','$scope','$http','appConfig'];
        function contentController(productServices,$rootScope,$routeParams,$scope,$http,appConfig) {

            $scope.showsecond =false;
            $scope.showthird =false;
            $scope.u_id = localStorage.getItem("u_id");
            $rootScope.setid = localStorage.getItem("member_id_token");
            console.log($scope.showsecond);
            $scope.websites = ['Home', 'Application', 'wall'];

            $scope.addTo = function(array, template) {
                    array.push(template);
            };

            $http.get(appConfig.apiBaseURL+"/memberships/",{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
        .then(function(response) {
               $scope.menu = response.data.data.wise_template;
               console.log("$scope.mediainfo"+$scope.menu);
        });

        $http.get(appConfig.apiBaseURL+"/tech_info/"+$scope.u_id,{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
            .then(function(response) {
               $scope.techinfo = response.data.data;
               console.log(response);
               console.log("sitetitle"+$scope.techinfo.site_description);
            });

            $scope.sitedeals = function(sites){
            // $rootScope.media_dummy= angular.copy($scope.items);
            // console.log($rootScope.media_dummy);

            console.log(sites.site_title);

            $scope.master = {
                    site_title: sites.site_title,
                    site_description: sites.site_description,
            };

            $http.put(appConfig.apiBaseURL+"/tech_info/"+$scope.u_id,{ "tech_info": $scope.master },
                {
                headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                })
            .then(function(response) {
               console.log("put response"+response);
            });
        }
           
    }

    paymentController.$inject = ['productServices','$rootScope','$routeParams','$scope','$http','appConfig'];
        function paymentController(productServices,$rootScope,$routeParams,$scope,$http,appConfig) {
            
            $rootScope.settemp = localStorage.getItem("token");
            $scope.u_id = localStorage.getItem("u_id");
            $rootScope.setid = localStorage.getItem("member_id_token");

            $scope.billVisible= $scope.editBill = false;
            $scope.payInfo =false;
            $scope.display = false;
            $scope.personalVisible = true;
            $scope.seen = "blur";
            var token;

            $http.get(appConfig.apiBaseURL+"/personal_detail/"+$scope.u_id,{
            headers: {'x-api-key': $rootScope.setid,
                        'Content-Type':'application/json',
                     }
        })
            .then(function(response) {
               $scope.personal = response.data.data;
               console.log(response);
               console.log("personal"+$scope.personal.email);
            });

           // clicking 1st next button 
            $scope.showBill = function (personal) {
                if($scope.personalForm.$valid){
                    $scope.billVisible = true;
                    $scope.personalVisible = false;
                    $scope.seen = "dark";
                    $scope.editPersonal = true;

                    console.log("put person="+personal.name);
                    $scope.master = {
                    name: personal.name,
                    surname:personal.surname,
                    email: personal.email,
                    };

                    $http.put(appConfig.apiBaseURL+"/personal_detail/"+$scope.u_id,{ "personal_detail": $scope.master },
                        {
                           headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                        })
            .then(function(response) {
               console.log("put response"+response);
            });
                }
            }
            $scope.showPay = function (personal) {
                if($scope.billForm.$valid){
                    $scope.seen = "dark";
                    $scope.billVisible = false;
                    $scope.payInfo = true;
                    $scope.editBill = true;

                    $scope.master = {
                    address: personal.address,
                    number:personal.number,
                    door: personal.door,
                    country:personal.country,
                    postal_code: personal.postal_code,
                    city: personal.city,
                    };

                    $http.put(appConfig.apiBaseURL+"/personal_detail/"+$scope.u_id,{ "personal_detail": $scope.master },
                        {
                          headers: {'x-api-key': $rootScope.setid,
                          'Content-Type':'application/json',
                         }
                        })
            .then(function(response) {
               console.log("put response"+response);
            });
                }
            }
             $scope.editForm = function (value) {
                $scope.payInfo = false;
                if(value == "personal"){
                    $scope.personalVisible = true;
                    $scope.billVisible = false;
                }
                if(value == "bill"){
                    $scope.billVisible = true;
                    $scope.personalVisible = false;
                    $scope.seen = "dark";
                }                    
                }

                $scope.changeClass = function () {
                    $scope.display = true;
                }
                $scope.changeTemplate = function (template) {
                    $scope.display = false;
                    $rootScope.settemp = template;
                    token = $rootScope.settemp;
                    localStorage.setItem("token", token);
                }
            }

})();
