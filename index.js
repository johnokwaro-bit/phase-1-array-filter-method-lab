// Code your solution here
const collection = [];

function findMatching(collection, driverName){
    const matchingNames = [];
    for(const driver of collection){
        if(driver.toUpperCase() === driverName.toUpperCase()){
            matchingNames.push(driver);
        }        
    }
    return matchingNames;
    
}

function fuzzyMatch(collection, driverName){
    const nameThatMatch = [];
    for (const driver of collection){
        if (driver[0] === driverName[0]){
            nameThatMatch.push(driver);
        }
    }
    return nameThatMatch;
    
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(drivers, driverName){
    const elementMatch = []
    for(const driver of drivers){
        if (driver.name === driverName){
            elementMatch.push(driver);
        }
    }
    return elementMatch;
}