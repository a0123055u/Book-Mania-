(function () {
    'use strict';

    /* recommended */
    angular.
		module('bm').
		factory('$exceptionHandler', ['$log', function($log) {
			return function myExceptionHandler(exception, cause) {
			$log.warn(exception, cause);
			};
		}]);

}());