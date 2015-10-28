(function (app) {
    /**
     * @param {ui.router.state.$stateProvider} $stateProvider
     */
    function _config($stateProvider) {

        /**
         * @param {angular.IScope} $scope
         * @param {angular.ILogService} $log
         */
        function _controller($scope, $log) {
            $log.debug('App::Calculator');
        }

        $stateProvider
            .state('app.calculator',
            {
                url: '/',
                views: {
                    app: {
                        controller: [
                            '$scope',
                            '$log',
                            _controller
                        ],
                        templateUrl: '/src/App/Calculator/Calculator.html'
                    }
                }
            });
    }

    app.config([
        '$stateProvider',
        _config
    ]);
})(angular.module('App'));