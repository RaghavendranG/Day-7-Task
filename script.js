//Get all the countries from the Asia continent /region using the Filter function
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    var result1 = result.filter((element) => element.region == "Asia")
    .map((element) => element.name.common);
    console.log(result1);
}
//------------------------------------------------------------------------------------------------
//Get all the countries with a population of less than 2 lakhs using Filter function
var requestOne = new XMLHttpRequest;
requestOne.open("GET","https://restcountries.com/v3.1/all","true");
requestOne.send();
requestOne.onload = function(){
    var data = requestOne.response;
    var resultData = JSON.parse(data);
    var resultOne = resultData.filter((element) => element.population <= 200000)
    .map((element) => element.name.common);
    console.log(resultOne);
}
//-------------------------------------------------------------------------------------------------
//Print the following details name, capital, flag using forEach function
var requestTwo = new XMLHttpRequest;
requestTwo.open("GET","https://restcountries.com/v3.1/all","true");
requestTwo.send();
requestTwo.onload = function(){
    var data = requestTwo.response;
    var resultDataOne = JSON.parse(data);
    var resultTwo = resultDataOne.forEach((element) => console.log(`Name : ${element.name.common}, 
Capital : ${element.capital}, flag : ${element.flags.png}`));
    
}
//-------------------------------------------------------------------------------------------------
//Print the total population of countries using reduce function
var requestThree = new XMLHttpRequest;
requestThree.open("GET","https://restcountries.com/v3.1/all","true");
requestThree.send();
requestThree.onload = function(){
    var data = requestThree.response;
    var resultDataTwo = JSON.parse(data);
    var resultThree = resultDataTwo.reduce((acc,currentValue) => acc + currentValue.population,0);
    console.log(`Total population : ${resultThree}`);    
}
//-------------------------------------------------------------------------------------------------
//Print the country which uses US Dollars as currency.
var requestFour = new XMLHttpRequest;
requestFour.open("GET","https://restcountries.com/v3.1/all","true");
requestFour.send();
requestFour.onload = function(){
    var data = requestFour.response;
    var resultDataThree = JSON.parse(data);
    var resultFour = resultDataThree.filter((elementOne) => elementOne?.currencies?.USD?.name == "United States dollar" )
    .map((element) => element.name.common);
    console.log(resultFour);
}
//-------------------------------------------------------------------------------------------------