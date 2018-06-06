/* =========================================================
 * Module       :Common
 * File Name    :app.config.js
 * Description  :Configuration information of the whole project
 * Copyright    :Copyright © 2015, UTI Mutual Fund
 *               Written under contract by Robosoft Technologies Pvt. Ltd.
 * ========================================================= */
﻿
(function() {

    'use strict';

    angular.module('sample.config', [])
        .constant('appConfig', {
            'debug': true,
            'apitimeout': 30000,

            'headerdetails': {
                '/products': { id: "login", title: "HP Wise", subtitle: "Web Integration Services",template: "",username: "chandra", lefticon: 1, righticon: 1, titleClass: "", lefticonaction: 1, righticonaction: 1, backgroundClass: "noHeader", pageBackground: "back-image" },
                '/addProducts': { id: "home", title: "HP Wise", subtitle: "Web Integration Services",template: "Choose your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 1, backgroundClass: "homeheaderloggedIn", notifyIcon: 1, notifyiconaction: 1, pageBackground: "back-image" },
                '/info-products': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/info-products/templateA': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/info-products/templateB': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/info-products/templateC': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/media-products': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/integrate-products': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/content-list': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" },
                '/payment-details': { id: "offline", title: "HP Wise", subtitle: "Web Integration Services",template: "You've choosen your template",username: "chandra", lefticon: 2, righticon: 1, titleClass: "", lefticonaction: 2, righticonaction: 2, backgroundClass: "homeheaderloggedIn", notifyIcon: "", notifyiconaction: "" }
            },
            'pagesWithleftSideMenu': ['/home'],
            'pagesWithbackbutton': [],
            'pagesWithoutHeader': ['/login'],
            'pagesWithoutPageTitle': ['/login', '/queries'],
            'pagesWithoutSearchHeader': ['/search', '/offlineSearch'],
            'back': {

            },
            'maxLoginAttempts': 5,
        })
})();
