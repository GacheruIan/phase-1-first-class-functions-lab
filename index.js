// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function () 
{
     return (['Antonia', 'Nuru']);
} 
returnFirstTwoDrivers(drivers)


function returnLastTwoDrivers() 
{
    return (['Amari', 'Mo']);
} 
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(x)
{
    return function(fare){
    return fare * x; 
    }
}

const fareDoubler = createFareMultiplier(2); const fareTripler = createFareMultiplier(3) ;



function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers);
}
selectDifferentDrivers(drivers,returnLastTwoDrivers);


