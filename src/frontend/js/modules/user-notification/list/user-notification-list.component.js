(function() {
  'use strict';

  angular.module('esn.user-notification')
    .component('esnUserNotificationList', esnUserNotificationList());

  function esnUserNotificationList() {
    return {
      bindings: {
        elementsPerPage: '=?',
        scrollInsideContainer: '@?',
        hidePopover: '&'
      },
      controller: 'EsnUserNotificationListController',
      controllerAs: 'ctrl',
      template: require("./user-notification-list.pug")
    };
  }
})();
