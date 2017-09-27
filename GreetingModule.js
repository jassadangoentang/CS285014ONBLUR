var app = angular.module('GreetingModule', []);


app.controller('ThaiGreetingController', function($scope) { // ประกาศ คอนโทลเลอร์
	var p1 = new Person("John", "Doe") ;
	$scope.personForForm = p1 ; //ชื่อตัวแปรหนึ่งที่ต้องการให้ข้างนอกเห็น
    $scope.greetingTxt = function() { // ฟช
    	return "สวัสดีคุณ " + p1.firstName  + ' ' + p1.lastName ;
    } ;
});

app.controller('EnglishGreetingController', function($scope) {
    var p1 = new Person("John", "Doe") ;
	$scope.personForForm = p1 ;
    $scope.greetingTxt = function() {
    	return "Hello " + p1.firstName  + ' ' + p1.lastName ;
    } ; 
});
