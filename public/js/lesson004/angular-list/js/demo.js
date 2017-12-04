var model = {
    user: "Sonia",
    items:  [{ action: "外套", state: false },
             { action: "保暖衣", state: false },
             { action: "夹克男装", state: true },
             { action: "化妆品", state: false }]
  };

  var todoApp = angular.module("App",[]);
  todoApp.controller("ToDoCtrl",function($scope) {
    $scope.todo = model;

    //未采购统计
    $scope.notPurchaseCount = function() {
      $scope.count = 0;
      angular.forEach($scope.todo.items,function (item) {
        if(!item.state){
          $scope.count++
        }
      });
    };
    $scope.notPurchaseCount();
    //add
    $scope.addNewItem = function(actionText) {
      if(!actionText) return;
      $scope.todo.items.push({action:actionText,state:false});
      $scope.actionText = "";
      $scope.notPurchaseCount();
    };
  });