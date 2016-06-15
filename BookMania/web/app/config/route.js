(function () {
	'use strict';

	/* recommended */
	angular
		.module('bm')
		.config(route);

	route.$inject = ['$stateProvider', '$urlRouterProvider'];

	function route($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home/list');
	
		$stateProvider
		
		.state('dashboard', {
			url: '/home',
			abstract: true,
			views: {
				'': {
					templateUrl: 'app/features/layout/layout.html',
				},
				'header@dashboard': {
					templateUrl: 'app/components/header/header.html'
				}
			}
		})
		.state('dashboard.list', {
			url: '/list',
			views: {
				'content@dashboard': {
					templateUrl: 'app/features/list/list.html',
					controller: 'BookListController',
					controllerAs: 'vm'
				}
			}
		});

	}

}());