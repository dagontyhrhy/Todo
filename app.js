angular.module( 'Todos',[])
  .service('Services',function(){
    var self = this

<<<<<<< HEAD
    self.contacts = [
      { fullname: 'Narez Jaroenphum', nickname: 'Ice', phone: '087-xxx-xxxx'},
      { fullname: 'Somchai Tungwinyoo', nickname: 'Zong', phone: '082-xxx-xxxx'},
      { fullname: 'Veerasak Supakrit', nickname: 'Good', phone: '083-xxx-xxxx'}
    ]
=======
    self.Todo = []

    self.list = function() {return self.Todo}
    self.add = function(Todo) {self.Todo.push(Todo)}
})

  .controller('ListMessageController',function ($scope, Services){
    $scope.Todo = Services.list()
})

  .controller('AddMessageController', function($scope, Services){
    $scope.title = ''
    $scope.save = function(){
      if($scope.title !== '')
      {
        var t = {title: $scope.title}
        var c = {done: $scope.done}
        Services.add(t)
        Services.add(c)
        resetForm()
      }

    }

    function resetForm(){$scope.title =''}
})
>>>>>>> 98f05a7ffd227295d4bb4556597d5931463c90b7
