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
            console.info('Loaded Book list controller');

            vm.booklist = [{
                bookName: 'The Tree muskerteers',
                contactDetails: '99887766',
                price: '$1000'
            }, {
                bookName: 'Fairy Tail',
                contactDetails: '91122334',
                price: '$0.50'
            }];
        };
    }

}());