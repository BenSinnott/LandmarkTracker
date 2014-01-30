define(['services/logger'], function (logger) {
    var title = 'St Michael\'s Mount';
    var vm = {
        activate: activate,
        title: title,
        count: ko.observable(0)
    };

    vm.visit = function () {
        logger.log(title + ' visit recorded', null, title, true);
        var visits = getVisits();
        visits++;
        localStorage.mount = visits;
        vm.count(visits);
    };

    function getVisits() {
        var visits = 0;
        if (localStorage.mount && localStorage.mount != 'NaN')
            visits = parseInt(localStorage.mount);

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