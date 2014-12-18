/**
 * angular-sofa-name - v0.1.0 - Thu Dec 18 2014 14:59:08 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
// Taken from https://github.com/angular/angular.js/pull/6569
// Credits to https://github.com/sjbarker
angular.module('sofa.name', [])
    .directive('sofaName', function () {

        'use strict';

        return {
            priority: 100,
            restrict: 'A',
            require: 'ngModel',
            link: {
                pre: function sofaNameLinkFn(scope, elem, attrs, ctrl) {
                    ctrl.$name = scope.$eval(attrs.sofaName);
                    attrs.$set('name', ctrl.$name);
                }
            }
        };
    });
}(angular));
