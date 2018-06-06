(function() {

    'use strict';

    angular
        .module('sample.services', ['ngResource'])
        .factory('navigationDrawer', navigationDrawer)

        .factory('UtimfHttpIntercepter', UtimfHttpIntercepter);


    navigationDrawer.$inject = ['$rootScope', '$log'];

    function navigationDrawer($rootScope, $log) {
        console.log("navigation");
        var drawer = {};
        var status = '';

        //This function toggles between open and close
        drawer.toggle = function() {
            if (status == 'enabled') {
                if ($rootScope.menuStatus == 'open') {
                    drawer.close();
                } else {
                    drawer.open();
                }
            }
        };

        //This function opens the navigation drawer
        drawer.open = function() {
            if (status == 'enabled') {
                // $('.modal').modal('hide');
                $('body').css('overflow', 'hidden');
                $('#pageWrapper').removeClass("drawerIsClose");
                $('#pageWrapper').addClass("drawerIsOpen");
                $rootScope.menuStatus = 'open';
            }
        };

        //This function closes the navigation drawer
        drawer.close = function() {
            $log.debug("status=", status == 'enabled');
            if (status == 'enabled') {
                // $('.modal').modal('hide');
                $('body').css('overflow', 'auto');
                $('#pageWrapper').removeClass("drawerIsOpen");
                $('#pageWrapper').addClass("drawerIsClose");
                $rootScope.menuStatus = 'close';
            }
        };

        //This function disables the navigation drawer
        drawer.disable = function() {
            status = 'disabled';
        };

        //This function enables the navigation drawer
        drawer.enable = function() {
            status = 'enabled';
        };

        return drawer;
    }







    UtimfHttpIntercepter.$inject = ['$q', '$location', '$timeout', '$rootScope', 'appConfig', 'appText'];

    function UtimfHttpIntercepter($q, $location, $timeout, $rootScope, appConfig, appText) {
        console.log("http interceptor");
        var authFactory = {};
        // var URL;
        // var promise = [];
        // var promiseExit = [];
        // var intercept = ["html", "less", "js", "css"];
        // var hideLoading = ["getip", "getserverdate", "registerdevice", "getnotifications", "getkarvynotifications", "transactinvestors", "getmarketinfo"];
        // var disableHideLoader = ["getlasttransactions", "trackregistration", "getvideobuckets", "getvideosbycategory", "getnfos","transactinvestors","getpendingtransactions"];

        var _request = function(config) {
            console.log("Interceptor", config);

            //  var ARNCode = "";
            //  var SessionToken = "";
            //  config.cache  = false;
            //  config.headers = config.headers || {};
            //  config.data = config.data || {};
            //  config.params = config.params || {};
            //  config.headers["Content-Type"] = "application/json";

            //  URL = config.url.split('/').pop().split("?")[0].toLowerCase();

            //  if(!!$rootScope.globals.currentUser){
            //      ARNCode = ($rootScope.globals.currentUser != 'undefined')?$rootScope.globals.currentUser.ARNNumber:"";
            //      SessionToken = ($rootScope.globals.currentUser != 'undefined')?$rootScope.globals.currentUser.SessionToken:"";
            //  }

            //  if($.inArray(config.url.split('.').pop().split("?")[0].toLowerCase(), intercept) === -1){
            //      if(URL == 'login'){
            //          $(".loader-text").html(appText.info.loading_auth);
            //      }else{
            //          $(".loader-text").html(appText.info.loading);
            //      }
            //      config.timeout = 120000;
            //      if($.inArray(URL, hideLoading) === -1){
            //          $("#spinner").show();
            //          (URL in promise)?$timeout.cancel(promise[URL]):"";
            //          (URL in promiseExit)?$timeout.cancel(promiseExit[URL]):"";
            //          promise[URL] = $timeout(function(){ // show timeout message after 20 s
            //              if(URL == 'login'){
            //                  $(".loader-text").html(appText.info.loading_timeout_auth);
            //              }else{
            //                  $(".loader-text").html(appText.info.loading_timeout);
            //              }
            //          }, 20000);
            //          promiseExit[URL] = $timeout(function(){ // show timeout message after 120 s
            //              $("#spinner").hide();
            //              bootbox.hideAll();
            //              bootbox.alert(appText.info.loading_timeout_exit);
            //          }, 120000);
            //      }

            //      if(appConfig.debug){
            //          console.log("\r\n\r\n******************** BEGIN REQUEST ***************************\r\n");
            //      }
            //      if(config.method.toLowerCase() == "get"){
            //          (ARNCode)?(config.params.ARNCode = ARNCode):"";
            //          (SessionToken)?(config.params.SessionToken = SessionToken):"";
            //          config.params.AppVersion = appConfig.version;
            //          config.params.Source = myDevice.get().source;
            //          if(myDevice.get().source == 'website'){
            //              config.params.DeviceDetails = myDevice.get().ip;
            //          }else{
            //              config.params.DeviceDetails = myDevice.get().device + "~" + myDevice.get().os_version;
            //              //config.params.DeviceDetails = myDevice.get().device + "~" + myDevice.get().os + "~" + myDevice.get().os_version + "~" + myDevice.get().browser + "~" + myDevice.get().browser_version;
            //          }

            //          if(appConfig.debug){
            //              console.log("Time: " + Date() + "\r\n");
            //              console.log("Request: " + JSON.stringify(config.url) + "\r\n");
            //              console.log("Params: " + JSON.stringify(config.params) + "\r\n");
            //          }
            //          if(appConfig.SafeEnable){
            //              if($.inArray(config.url.replace(appConfig.apiBaseURL, "").split("?")[0], appConfig.SafeAPI) != -1 || appConfig.SafeAPI.length == 0){
            //                  if(!!config.url.split("?")[1]){
            //                      var queryString = [];
            //                      Object.keys(config.url.split("?")[1].split("&")).map(function(value, index) {
            //                          var key = config.url.split("?")[1].split("&")[index].split("=")[0];
            //                          var value = config.url.split("?")[1].split("&")[index].split("=")[1];
            //                          if(!!value && ($.inArray(key, appConfig.SafeFields) != -1 || appConfig.SafeFields.length == 0)){
            //                              queryString.push(key + "=" + Encrypt(value));
            //                          }
            //                          else{
            //                              queryString.push(key + "=" + value);
            //                          }
            //                      });
            //                      config.url = config.url.split("?")[0] + ((queryString.length > 0 )?("?" + queryString.join("&")):"");
            //                  }

            //                  Object.keys(config.params).map(function(value, index) {
            //                      if(!!config.params[value] && ($.inArray(value, appConfig.SafeFields) != -1 || appConfig.SafeFields.length == 0)){
            //                          config.params[value] = Encrypt(config.params[value]);
            //                      }
            //                  });

            //                  if(appConfig.debug){
            //                      console.log("Encrypted URL: " + JSON.stringify(config.url) + "\r\n");
            //                      console.log("Encrypted Params: " + JSON.stringify(config.params) + "\r\n");
            //                      console.log("******************** END REQUEST *****************************\r\n");
            //                  }
            //              }
            //          }
            //          else{
            //              if(appConfig.debug){
            //                  console.log("******************** END REQUEST *****************************\r\n");
            //              }
            //          }
            //      }
            //      else{
            //          (ARNCode)?(config.data.ARNCode = ARNCode):"";
            //          (SessionToken)?(config.data.SessionToken = SessionToken):"";
            //          config.data.AppVersion = appConfig.version;
            //          config.data.Source = myDevice.get().source;
            //          if(myDevice.get().source == 'website'){
            //              config.data.DeviceDetails = myDevice.get().ip;
            //          }else{
            //              config.data.DeviceDetails = myDevice.get().device + "~" + myDevice.get().os_version;
            //              //config.data.DeviceDetails = myDevice.get().device + "~" + myDevice.get().os + "~" + myDevice.get().os_version + "~" + myDevice.get().browser + "~" + myDevice.get().browser_version;
            //          }

            //          if(appConfig.debug){
            //              console.log("Time: " + Date() + "\r\n");
            //              console.log("Request: " + JSON.stringify(config.url) + "\r\n");
            //              console.log("Payload: " + JSON.stringify(config.data) + "\r\n");
            //          }

            //          if(appConfig.SafeEnable){
            //              if($.inArray(config.url.replace(appConfig.apiBaseURL, "").split("?")[0], appConfig.SafeAPI) != -1 || appConfig.SafeAPI.length == 0){
            //                  if(!!config.url.split("?")[1]){
            //                      var queryString = [];
            //                      Object.keys(config.url.split("?")[1].split("&")).map(function(value, index) {
            //                          var key = config.url.split("?")[1].split("&")[index].split("=")[0];
            //                          var value = config.url.split("?")[1].split("&")[index].split("=")[1];
            //                          if(!!value && ($.inArray(key, appConfig.SafeFields) != -1 || appConfig.SafeFields.length == 0)){
            //                              queryString.push(key + "=" + Encrypt(value));
            //                          }
            //                          else{
            //                              queryString.push(key + "=" + value);
            //                          }
            //                      });
            //                      config.url = config.url.split("?")[0] + ((queryString.length > 0 )?("?" + queryString.join("&")):"");
            //                  }

            //                  Object.keys(config.data).map(function(value, index) {
            //                      if(!!config.data[value] && ($.inArray(value, appConfig.SafeFields) != -1 || appConfig.SafeFields.length == 0)){
            //                          config.data[value] = Encrypt(config.data[value]);
            //                      }
            //                  });
            //                  if(appConfig.debug){
            //                      console.log("Encrypted URL: " + JSON.stringify(config.url) + "\r\n");
            //                      console.log("Encrypted payload: " + JSON.stringify(config.data) + "\r\n");
            //                      console.log("******************** END REQUEST *****************************\r\n");
            //                  }
            //              }
            //          }
            //          else{
            //              if(appConfig.debug){
            //                  console.log("******************** END REQUEST *****************************\r\n");
            //              }
            //          }
            //      }
            //  }

            return config || $q.when(config);
        }

        var _requestError = function(rejection) {
            //  URL = rejection.url.split('/').pop().split("?")[0].toLowerCase();
            //  if($.inArray(rejection.url.split('.').pop().split("?")[0].toLowerCase(), intercept) === -1){

            //      if(appConfig.debug){
            //          console.log("\r\n\r\n******************** BEGIN REQUEST ***************************\r\n");
            //          console.log("Time: " + Date() + "\r\n");
            //          console.log("Request: " + JSON.stringify(rejection.url) + "\r\n");
            //          console.log("Request[ERROR]: " + JSON.stringify(rejection) + "\r\n");
            //          console.log("******************** END REQUEST *****************************\r\n");
            //      }

            //      (URL in promise)?$timeout.cancel(promise[URL]):"";
            //      (URL in promiseExit)?$timeout.cancel(promiseExit[URL]):"";

            //      if($.inArray(URL, hideLoading) === -1){
            //          $("#spinner").hide();
            //      }
            //  }
            return $q.reject(rejection);
        }

        var _response = function(response) {
            //  URL = response.config.url.split('/').pop().split("?")[0].toLowerCase();
            //  if($.inArray(response.config.url.split('.').pop().split("?")[0].toLowerCase(), intercept) === -1){
            //      (URL in promise)?$timeout.cancel(promise[URL]):"";
            //      (URL in promiseExit)?$timeout.cancel(promiseExit[URL]):"";

            //      if($.inArray(URL, hideLoading) === -1 && $.inArray(URL, disableHideLoader) === -1 ){
            //          $("#spinner").hide();
            //      }

            //      if(appConfig.debug){
            //          console.log("******************** BEGIN RESPONSE ***************************\r\n");
            //          console.log("Response URL: " + JSON.stringify(response.config.url) + "\r\n");
            //          console.log("Response: " + JSON.stringify(response.data) + "\r\n");
            //          console.log("******************** END RESPONSE *****************************\r\n");
            //      }
            //      if((response.data.StatusCode == 500 || response.data.StatusCode == 4001 || response.data.Statuscode == 500 || response.data.Statuscode == 4001)){
            //          bootbox.hideAll();
            //          bootbox.alert(appText.info.session_expired, function(){
            //              $rootScope.$broadcast('unauthorized');
            //              $rootScope.$apply();
            //          })
            //      }

            //      if(response.data.StatusCode == 452 || response.data.Statuscode == 452){
            //          $("#spinner").hide();
            //          bootbox.hideAll();
            //          bootbox.alert(appText.info.not_available, function() { 
            //              $rootScope.$broadcast('unauthorized');
            //              $rootScope.$apply();
            //          })
            //      }
            //  }
            return response || $q.when(response);
        }

        var _responseError = function(rejection) {
            //  URL = rejection.config.url.split('/').pop().split("?")[0].toLowerCase();
            //  if($.inArray(rejection.config.url.split('.').pop().split("?")[0].toLowerCase(), intercept) === -1){

            //      if(appConfig.debug){
            //          console.log("******************** BEGIN RESPONSE ***************************\r\n");
            //          console.log("Response[ERROR]: " + JSON.stringify(rejection) + "\r\n");
            //          console.log("******************** END RESPONSE *****************************\r\n");
            //      }

            //      (URL in promise)?$timeout.cancel(promise[URL]):"";
            //      (URL in promiseExit)?$timeout.cancel(promiseExit[URL]):"";

            //      if($.inArray(URL, hideLoading) === -1){
            //          $("#spinner").hide();
            //      }
            //      if(rejection.status === 0){ // no network
            //          if($.inArray(URL, hideLoading) === -1){
            //              if(!$rootScope.offline){
            //                  bootbox.hideAll();
            //                  bootbox.alert(appText.info.server_error);
            //              }else{
            //                  bootbox.hideAll();
            //                  bootbox.alert(appText.info.network_error_retry);
            //              }
            //          }
            //      }
            //  }
            return $q.reject(rejection);
        }

        authFactory.request = _request;
        authFactory.requestError = _requestError;
        authFactory.response = _response;
        authFactory.responseError = _responseError;
        return authFactory;
    }
})();