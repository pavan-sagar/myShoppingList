var app = angular.module("myShoppingListMod", []);
app.controller("myShoppingListCtrl", function ($scope) {

    $scope.items = [];/* ["apple", "ball", "catz"]; */

    $scope.addItem = function () {
        if ($scope.newItem == undefined || $scope.newItem == "")
            return (alert('Item name cannot be blank'));

        $scope.items.push($scope.newItem);

        $scope.newItem = '';
    };
    $scope.strikeToggle = function (x) {

        $(function () {
            if (($("#" + x).css('text-decoration')).includes('line-through'))
                $("#" + x).css('text-decoration', 'none');
            else
                $("#" + x).css('text-decoration', 'line-through');
        });

    };
});