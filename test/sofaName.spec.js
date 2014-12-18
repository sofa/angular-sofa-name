'use strict';

describe('sofa.name', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.name'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should set name attribute and property on element', function() {
        $rootScope.controlNamespace = 'test';
        $rootScope.something = 'modelVal';
        element = $compile('<input type="text" ng-model="something" sofa-name="controlNamespace + \'Control\'">')($rootScope);
        
        expect(element[0].name).toBe('testControl');
        expect(element[0].getAttribute('name')).toBe('testControl');
    });

    it('should set the $name property on the ngModelController', function() {
        $rootScope.controlName = 'test';
        $rootScope.something = 'modelVal';
        element = $compile('<input type="text" ng-model="something" sofa-name="controlName">')($rootScope);

        var ctrl = element.data('$ngModelController');
        expect(ctrl.$name).toBe('test');
    });
});

