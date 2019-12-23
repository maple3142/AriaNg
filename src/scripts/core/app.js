(function () {
    'use strict';

    var ariaNg = angular.module('ariaNg', [
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMessages',
        'ngCookies',
        'ngAnimate',
        'pascalprecht.translate',
        'angularMoment',
        'ngWebSocket',
        'utf8-base64',
        'LocalStorageModule',
        'ui-notification',
        'angularBittorrentPeerid',
        'cgBusy',
        'angularPromiseButtons',
        'oitozero.ngSweetAlert',
        'angular-clipboard',
        'inputDropdown',
        angularDragula(angular)
    ]).config(['$compileProvider', function($compileProvider){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension|moz-extension):/);
    }]);
	
}());
