// Maps the files so Durandal knows where to find these.
require.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

// Durandal 2.x assumes no global libraries. It will ship expecting 
// Knockout and jQuery to be defined with requirejs. .NET 
// templates by default will set them up as standard script
// libs and then register them with require as follows: 
define('jquery', function() { return jQuery; });
define('knockout', ko);

define(['durandal/app', 'durandal/viewLocator', 'durandal/system'], boot);

function boot(app, viewLocator, system) {

    var useragent = navigator.userAgent.toLowerCase();

    if (useragent.match(/android/) || useragent.match(/iphone/) || useragent.match(/ipad/) || useragent.match('ios') || useragent.match('Windows Phone') || useragent.match('iemobile')) {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    else {
        onDeviceReady();
    }    

    function onDeviceReady() {
        app.title = 'Landmark Tracker';

        app.configurePlugins({
            router: true
        });

        app.start().then(function () {

            toastr.options.positionClass = 'toast-bottom-right';
            toastr.options.backgroundpositionClass = 'toast-bottom-right';            

            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();
            app.setRoot('viewmodels/shell', 'entrance');
        });
    }
}
