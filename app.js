angular.module('ContactApp' , [])
  .service('contactService',function(){
    var self = this

    self.contacts = [
      { fullname: 'Narez Jaroenphum', nickname: 'Ice', phone: '087-xxx-xxxx'},
      { fullname: 'Somchai Tungwinyoo', nickname: 'Zong', phone: '082-xxx-xxxx'},
      { fullname: 'Veerasak Supakrit', nickname: 'Good', phone: '083-xxx-xxxx'}
    ]
