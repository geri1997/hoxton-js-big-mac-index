let usMacPrice = 5.56;
let swissMacPrice = 6.50;
let swedenMacPrice = 52.88;
let norwayMacPrice = 52.00;
let israelMacPrice = 17.00;
let canadaMacPrice = 6.77;
let us_swissActualExchangeRate= 0.92
let us_swedenActualExchangeRate= 8.74
let us_norwayActualExchangeRate= 8.67
let us_israelActualExchangeRate= 3.10
let us_canadaActualExchangeRate= 1.25
let us_swissMacRate = swissMacPrice/usMacPrice;
let us_swedenMacRate = swedenMacPrice/usMacPrice;
let us_norwayMacRate = norwayMacPrice/usMacPrice;
let us_israelMacRate = israelMacPrice/usMacPrice;
let us_canadaMacRate = canadaMacPrice/usMacPrice;
let swissIndex = (us_swissActualExchangeRate - us_swissMacRate)/us_swissMacRate * 100;
let swedenIndex = (us_swedenActualExchangeRate - us_swedenMacRate)/us_swedenMacRate *100;
let norwayIndex = (us_norwayActualExchangeRate - us_norwayMacRate)/us_norwayMacRate *100;
let israelIndex = (us_israelActualExchangeRate - us_israelMacRate)/us_israelMacRate * 100;
let canadaIndex = (us_canadaActualExchangeRate - us_canadaMacRate)/us_canadaMacRate *100;



console.log("The Swiss Franc is " + -swissIndex + '% overvalued compared to USD')
console.log("The Swedish Krona is " + -swedenIndex + '% overvalued compared to USD')
console.log("The Norwegian Krone is " + -norwayIndex + '% overvalued compared to USD')
console.log("The Israeli New Shekel is " + israelIndex + '% undervalued compared to USD')
console.log("The Canadian Dollar is " + canadaIndex + '% undervalued compared to USD')
