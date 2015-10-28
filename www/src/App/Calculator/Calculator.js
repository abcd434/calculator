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

            $scope.buttons = {};

            $scope.btnLayout = [
                ['C', '/', 'X', 'CE'],
                ['7', '8', '9', '-'],
                ['4', '5', '6', '+'],
                ['1', '2', '3', '()'],
                ['.', '0', '+/-', '=']
            ];
        }

        $stateProvider
            .state('calculator',
            {
                url: '/',
                views: {
                    main: {
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