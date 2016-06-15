(function () {
    'use strict';

    /* recommended */
    angular
        .module('bm.list')
        .controller('BookListController', BookListController);

    BookListController.$inject = [];

    function BookListController() {
        var vm = this;

        init();

        /////////////////

        function init() {
            
        };
    }

}());