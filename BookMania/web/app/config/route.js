(function () {
    'use strict';

    /* recommended */
    angular
	    .module('bm')
	    .config(route);

	route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function route($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/list');
    
    	$stateProvider
		    .state('list', {
		      	url: "/list",
		      	templateUrl: "features/list/list.html"
	    	});

	}

}());