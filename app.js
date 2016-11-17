angular.module( 'Todoapp',[])
  .service('Services',function(){
    var self = this


    self.Todo = [{title:'Autsada',done:true},{title:'Tosapol',done:false}];
    self.list = function() {return self.Todo}
    self.add = function(t) {self.Todo.push(t)}

self.Check = function(ti) {
            if (ti.done=== false) {
                ti.done = true
            } else if (ti.done === true) {
                ti.done = false
            }
        }
})
  .controller('ListMessageController',function ($scope, Services){
    $scope.Todo = Services.list()
    $scope.Check = function(ti) {
            Services.Check(ti)
        }
})

  .controller('AddMessageController', function($scope, Services){
   $scope.title = '  '
        $scope.add = function() {
            if ($scope.title !== '  ') {
                var t = {title: $scope.title,done: false}
                Services.add(t);
                resetForm();
            }
        }

    function resetForm(){$scope.title =' '}
})
