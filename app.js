angular.module('ContactApp' , [])
  .service('contactService',function(){
    var self = this

    self.contacts = [
      { fullname: 'Narez Jaroenphum', nickname: 'Ice', phone: '087-xxx-xxxx'},
      { fullname: 'Somchai Tungwinyoo', nickname: 'Zong', phone: '082-xxx-xxxx'},
      { fullname: 'Veerasak Supakrit', nickname: 'Good', phone: '083-xxx-xxxx'}
    ]

    self.list = function() {
      return self.contacts
    }
    self.add = function (contact){
      self.contacts.push(contact)
    }
  })
  .controller('ListContactController', function ($scope,contactService) {
    $scope.contacts = contactService.list();
  })
  .controller('AddContactController' , function($scope,contactService){
    $scope.save = function(){
      var contact = {
        fullname: $scope.fullname,
        nickname: $scope.nickname,
        phone: $scope.phone
      }

      contactService.add(contact)
      resetForm();
    }
    function resetForm(){
      $scope.fullname = ''
      $scope.nickname = ''
      $scope.phone = ''
    }
  });
