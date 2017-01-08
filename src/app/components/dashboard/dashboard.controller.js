;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['$q'];

    function DashboardController($q) {
        var vm = this;
        var defer = $q.defer();
        defer.promise
            .then(function(msg) {
                alert(msg);
                return "Message from first callback.";
            })
            .then(function(msg) {
                alert(msg);
                return "Message from second callback.";
            })
            .then(function(msg) {
                alert(msg);
                return "Message from third callback.";
            })
        defer.resolve("Promise Resolved")
    }
}(window, angular, undefined));
