//declare class Flight 
var Flight = (function() { // outer
    // context เทียบเท่า private attribute
    // var this.air : จะเป็น public variable
	var airportsOfCities = new Map([['Bangkok',['Don Mueang', 'Suvannabhum']],['Paris',['CDG']]]) ; // map 'key',[array];                    
	var allAirports = ['Don Mueang','Suvannabhum','CDG'] ;

    
	//define FlightDetail class 
	function FlightConstructor(price, airline, fromAirport, toAirport, takeoffTime, landingTime) { //return inner //ConStructor has Convention
        // public  variable
	    var flight = this;
	    flight.price = price;
	    flight.airline = airline;
	    flight.fromAirport = fromAirport;
	    flight.toAirport = toAirport;
	    flight.takeoffTime = takeoffTime;
	    flight.landingTime = landingTime;
	    flight.travelHours = flight.calculateTime(landingTime, takeoffTime);
	    flight.transitNumber = 0; //มีทั้งหมดกี่จุด
	    //keep transit airports between fromAirport and toAirport
	    flight.transits = [];
	}
    // เป็นกรประกาศเมธอดเพิ่มให้คลาสแล้วเพิ่มฟังก์ชันให้เมธอทได้
	FlightConstructor.prototype.addTransit = function (transitAirport,transitCountry, transitHours) {
	    var transit = Object.create({transitAirport: transitAirport, transitCountry: transitCountry, transitHours: transitHours});
	    this.transits.push(transit);
	}
    //clone opject ใน class เพิ่มฟังก์ชั้นได้ prototype has calculateTime,
	FlightConstructor.prototype.calculateTime = function (landingTime, takeoffTime) {
	    var date1 = new Date(landingTime);
	    var date2 = new Date(takeoffTime);
	    var hour = date1.getHours() - date2.getHours();
	    return hour;
	}
	
	FlightConstructor.prototype.getAirportsOfCity = function(city) {
		//code get airport ของเมือง มาจาก map
        if(airportsOfCities !== null){ // null == false , === เท่ากันและชนิดเดียวกัน
            if(airportsOfCities.has(city)) // มี city เป็น key ตรงกันไหมถ้ามี get value ออกมา
                return airportsOfCities.get(city);
                else return null;
        }
        else return null;
	}
	

	FlightConstructor.prototype.getAllAirports = function(){
		return allAirports ;
	}
	
	return FlightConstructor ; //return inner
})() ; // ใส่ () เพื่อให้ return ConStructor

//Style.visibility

var f1 = new Flight(3519, "Singapore Air", "BKK"
    , "CDG", "September 7, 2016 6:00:00"
    , "September 8, 2016 18:00:00"); //ใส่เพื่อ() ส่งค่าไป
    
//alert(f1.price);
//f1.addTransit("SIN", "Singapore", 2.30);
//alert(f1.transits[0].transitAirport);
//alert(f1.getAllAirports());
//alert(f1.getAirportsOfCity('Bangkok')); //เข้าถึง bangkok ผ่าน getairportofCity

//ถ้าอยุ่คนล่ะ file ถือว่าเป้น global var หลังจาก script มา

function setAllListOfAirports(listItemElm_ID){ //ใช้ในการจัดการเหตุการณ์ ใน ปกติจะแยกออกไปอีก js file
	var list = document.getElementById(listItemElm_ID) ; // เอา eliment มาหา node
	//Code
    var allAirports = f1.getAllAirports();
    var textNode,node;
    for(var i=0 ; i< allAirports.length;i++){ // childen ได้ node ของลุกมันยังไม่ใช่ value
        var value = allAirports[i];
        node = document.createElement('option'); // include แปลว่าเป็นสมาชิกมน array
        node.setAttribute("value",value);
        textNode = document.createTextNode(allAirports[i]);
        node.appendChild(textNode);
        list.appendChild(node);
        
    }
}

function setAirports(listItemElm_ID, city){
	var list = document.getElementById(listItemElm_ID) ;
	var airports = f1.getAirportsOfCity(city) ;
    alert(airports+list[0].textContent);
	//Code
//    if(airports !== null){
//        var length = list.getAirportsOfCity(city);
//        for(var i = 0 ; i < length ; i++){
//            if(airports.includes(list.children[i].value)){
//                list.children[i].style.visibility = "visible";
//            }
//            else{
//                list.children[i].style.visibility = "hidden";
//            }
//        }
//    }
    for(var i=0;i<list.length;i++){
        if(airports.includes(list[i].textContent)){
            list.options[i].style.display = 'block';
        }
        else list.options[i].style.display = 'none';
    }
}