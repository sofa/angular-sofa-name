/**
 * @sofadoc overview
 * @name sofa.name
 * @package angular-sofa-name
 * @distFile dist/sofaName.js
 *
 * @description
 * `sofa.name` Angular module.
 */
angular.module('sofa.name', [])
/**
 * @sofadoc directive
 * @name sofa.name.directive:sofaName
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Handle evaluation of angular expressions for control names. 
 * Create a directive that sets the element's name as well as the control's name,
 * prior to the control being added to the form.
 */
.directive('sofaName', function () {
    'use strict';
    // Taken from https://github.com/angular/angular.js/pull/6569
    // Credits to https://github.com/sjbarker
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
