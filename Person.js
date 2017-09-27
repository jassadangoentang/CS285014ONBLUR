var Person = (function(){
	function PersonConstructor(fName, lName){
		var person = this ;
		person.firstName = fName ; 
		person.lastName = lName ; 
	}
	
	PersonConstructor.prototype.greeting = function(lang){ // LOgic การทำงาน ใช้ ng-init
		switch (lang){
			case 'thai' : 
				return "สวัสวดี " + this.firstName + " " + this.lastName ; 
			case 'eng' : 
			default :
				return "Hello " + this.firstName + " " + this.lastName ;
		}
		 
	} ;


	return PersonConstructor ; 
})() ; 

var p3 = new Person("fName","lName") ;
alert(p3.firstName + p3.lastName);
alert(p3.greeting('thai'));
