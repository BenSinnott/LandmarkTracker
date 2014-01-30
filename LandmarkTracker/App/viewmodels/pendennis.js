define(['services/logger'], function (logger) {
    var title = 'Pendennis Castle';
    var vm = {
        activate: activate,
        title: title,
        count: ko.observable(0)
    };

    vm.visit = function () {
        logger.log(title + ' visit recorded', null, title, true);
        var visits = getVisits();
        visits++;
        localStorage.pendennis = visits;
        vm.count(visits);
    };

    function getVisits() {
        var visits = 0;
        if (localStorage.pendennis && localStorage.pendennis != 'NaN')
            visits = parseInt(localStorage.pendennis);

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