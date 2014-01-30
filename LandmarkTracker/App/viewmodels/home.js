define(['plugins/dialog', 'plugins/router', 'services/logger'], function(dialog, router, logger) {
    var title = 'Eden Project';
    var vm = {
        activate: activate,
        title: title,
        count: ko.observable(0)
    };

    vm.visit = function () {
        logger.log(title + ' visit recorded', null, title, true);
        var visits = getVisits();
        visits++;
        localStorage.eden = visits;
        vm.count(visits);
    };

    function getVisits() {
        var visits = 0;
        if (localStorage.eden && localStorage.eden != 'NaN')
            visits = parseInt(localStorage.eden);

        return visits;
    }

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        vm.count(getVisits());
        return true;
    }
    //#endregion
});