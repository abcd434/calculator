(function (app) {

    /**
     * @name App
     *
     * @param {angular.ILogService} $log
     * @param {angular.IScope} $rootScope
     *
     * @constructor
     */
    function App($log, $rootScope) {

        $log.debug('App::run');

        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                var data = error && error.data;
                $log.error('$stateChangeError: ' + toState.name);
                $log.error(data);
            });

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $log.debug('$stateChangeSuccess: ' + toState.name + ' ' + JSON.stringify(toParams));
            });
    }

    app.run(['$log', '$rootScope', App]);

    /**
     * @name App.Config
     *
     * @param $locationProvider
     * @param {ui.router.state.$stateProvider} $stateProvider
     *
     * @constructor
     */
    function Config($locationProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('app',
            {
                url: '',
                abstract: true,
                views: {
                    main: {
                        controller: function(){},
                        templateUrl: '/src/App/App.html'
                    }
                }
            });
    }

    app.config([
        '$locationProvider',
        '$stateProvider',
        Config]);

})(angular.module('App', [
    'ui.router',
    'ngAssert'
]));
