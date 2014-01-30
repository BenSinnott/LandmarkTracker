define(['services/logger', 'plugins/router'], function (logger, router) {

    var vm = {
        activate: activate
    };

    vm.navigateTo = function (target) {        
        router.navigate(target);
    };

    return vm;

    //#region Internal Methods

    function activate() {
        return true;
    }

    //#endregion
});