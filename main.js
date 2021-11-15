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
let swissInfo;
let swedenInfo;
let norwayInfo;
let israelInfo;
let canadaInfo;
if(swissIndex<0){
    swissIndex = -swissIndex;
    swissInfo = "The Swiss Franc is " + swissIndex.toFixed(2) + "% overvalued compared to USD"
}else{
    swissInfo = "The Swiss Franc is " + swissIndex.toFixed(2) + "% undervalued compared to USD"
}
if(swedenIndex<0){
    swedenIndex = -swedenIndex
    swedenInfo = "The Swedish Krona is " + swedenIndex.toFixed(2) + "% overvalued compared to USD"
}else{
    swedenInfo = "The Swedish Krona is " + swedenIndex.toFixed(2) + "% undervalued compared to USD"
}
if(norwayIndex<0){
    norwayIndex=-norwayIndex
    norwayInfo = "The Norwegian Krone is " + norwayIndex.toFixed(2) + "% overvalued compared to USD"
}else{
    norwayInfo = "The Norwegian Krone is " + norwayIndex.toFixed(2) + "% undervalued compared to USD"

}
if(israelIndex<0){
    israelIndex = -israelIndex
    israelInfo = "The Israeli New Shekel is " + israelIndex.toFixed(2) + "% overvalued compared to USD"
}else{
    israelInfo = "The Israeli New Shekel is " + israelIndex.toFixed(2) + "% undervalued compared to USD"
}
if(canadaIndex<0){
    canadaIndex = -canadaIndex
    canadaInfo = "The Canadian Dollar is " + canadaIndex.toFixed(2) + "% overvalued compared to USD"
}else{
    canadaInfo = "The Canadian Dollar is " + canadaIndex.toFixed(2) + "% undervalued compared to USD"
}



// console.log("The Swiss Franc is " + swissIndex.toFixed(2) + '% overvalued compared to USD')
// console.log("The Swedish Krona is " + swedenIndex.toFixed(2) + '% overvalued compared to USD')
// console.log("The Norwegian Krone is " + norwayIndex.toFixed(2) + '% overvalued compared to USD')
// console.log("The Israeli New Shekel is " + israelIndex.toFixed(2) + '% undervalued compared to USD')
// console.log("The Canadian Dollar is " + canadaIndex.toFixed(2) + '% undervalued compared to USD')

console.log(swissInfo);
console.log(swedenInfo);
console.log(norwayInfo);
console.log(israelInfo);
console.log(canadaInfo);
