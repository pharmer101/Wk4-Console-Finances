
//!!!!INSTRUCTIONS/////


// <!-- You have been given a dataset composed of arrays with two fields: Date and Profit/Losses.

// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// The total number of months included in the dataset.

// The net total amount of Profit/Losses over the entire period.

// The average of the changes in Profit/Losses over the entire period.

// You will need to track what the total change in profits is from month to month and then find the average.

// (Total/Number of months)

// The greatest increase in profits (date and amount) over the entire period.

// The greatest decrease in losses (date and amount) over the entire period.

// When you open your code in the browser your resulting analysis should look similar to the following:

// Financial Analysis
// ----------------------------
// Total Months: 25
// Total: $2561231
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)
// Your final code should print the analysis to the console.

// Hints:

// You will need to do some research on your own for this project!

// Remember, in order to combine strings and variables in the console, you will need to use concatenation.

// How do you only print to the nearest 100th in JavaScript? -->



var finances = [

['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Cut down dataset for testing 
var minifinances = [
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
   
        ];
    


// TASK 1: The total number of months included in the dataset.
// FORMAT: Total Months: 25


console.log("Total Months: " + finances.length)


// TASK 2: The net total amount of Profit/Losses over the entire period.
// FORMAT: Total: $2561231

var total = 0
for(var i= 0; i < finances.length;
     i++){

   total = total + finances[i][1]
//    console.log(total)
    
    }
    console.log("Total:  " + total);

    // TASK 3: The average of the changes in Profit/Losses over the entire period.
    // FORMAT: Average  Change: $-2315.12
    // convert to decminal forumula - (Math.round(num * 100) / 100).toFixed(2);
   
    var average = total/finances.length
    //console.log("Average Change:  " + average);
    console.log("Average Change:  " + (Math.round(average * 100) / 100).toFixed(2));


    // TASK 4: The greatest increase in profits (date and amount) over the entire period.
    //FORMAT: Greatest Increase in Profits: Feb-2012 ($1926159)


    var thisMonth
    var nextMonth
    difference = 0
    var greatestLoss = 0
    var gDiffMonth
    for(var i=0;i<minifinances.length;i++){

        thisMonth = finances[i][1];
        nextMonth = finances[i+1][1];
        difference = nextMonth -thisMonth
        if((difference) > greatestLoss){
            greatestLoss = (nextMonth -thisMonth);
            // gDiffMonth = (finances[i][0] + "to" + finances[i+1][0])
            gDiffMonth = (finances[i][0])


        }
        difference = nextMonth -thisMonth;
        // console.log(finances[i][0])
        // console.log("This month is " +  thisMonth);
        // console.log("Next month is " + nextMonth)
        // console.log("The difference is " + difference)
        
    }
    // console.log("the greatest Profit is "  + greatestLoss);
    // console.log("the greatest Profit month is  "  + gDiffMonth);
    console.log("Greatest increase in Profits: " + gDiffMonth + " " + greatestLoss)


    // TASK 5: The greatest decrease in losses (date and amount) over the entire period.
    // Greatest Decrease in Profits: Sep-2013 ($-2196167)



    var thisMonth
    var nextMonth
    difference = 0
    var greatestLoss = 0
    var gDiffMonth
    for(var i=0;i<minifinances.length;i++){

        thisMonth = finances[i][1];
        nextMonth = finances[i+1][1];
        difference = nextMonth -thisMonth
        if((difference)< greatestLoss){
            greatestLoss = (nextMonth -thisMonth);
            // gDiffMonth = (finances[i][0] + "to" + finances[i+1][0])
            gDiffMonth = (finances[i][0])


        }
        difference = nextMonth -thisMonth;
        // console.log(finances[i][0])
        // console.log("This month is " +  thisMonth);
        // console.log("Next month is " + nextMonth)
        // console.log("The difference is " + difference)
        
    }
    // console.log("the greatest Loss is "  + greatestLoss);
    // console.log("the greatest Loss month is  "  + gDiffMonth);
    console.log("Greatest decrease in Profits: " + gDiffMonth + " " + greatestLoss)



  


   //----------------------WORKING OUT/OLD CODE-----------------------------------------------------------------------------------//

// console.log(finances.length)

// for(var i= 0; i < finances.length; i++){

// console.log( "this month is " + finances[i][0])

// }
// var total = 0
// for(var i= 0; i < finances.length;
//      i++){

//    total = total + finances[i][1]
//    console.log(total)
    
//     }
//     console.log(total)


  
//     for(var i= 0; i < finances.length;
//         i++){
   
//       total = total + finances[i][1]
//       console.log(total)
       
//        }

//        var average = total/finances.length
//        console.log("The average profit-loss per month is " + average)

    //    The greatest increase in profits (date and amount) over the entire period



//  var jan = 1000
//  var feb = 800
//  var exampleMonthlyDifference =jan-feb
//  console.log(exampleMonthlyDifference)


// var monthlyDifference = 0
//  for(var i= 0; i < finances.length;
//         i++){
//             monthlyDifference = finances[i][1] - finances[i+1][1];
//       }
      
//     console.log(" The biggest monthly difference " + monthlyDifference)



//   var thisMonth
//     var nextMonth
//     difference = 0
//     var greatestProfit = 0
//     var gDiffMonth
//     for(var i=0;i<minifinances.length;i++){

//         thisMonth = finances[i][1];
//         nextMonth = finances[i+1][1];
//         difference = nextMonth -thisMonth
//         if((difference)> greatestProfit){
//             greatestProfit = (nextMonth -thisMonth);
//             gDiffMonth = (finances[i][0] + "to" + finances[i+1][0])


//         }
//         // difference = nextMonth -thisMonth;
//         console.log("This month is " +  thisMonth);
//         console.log("Next month is " + nextMonth)
//         console.log("The difference is " + difference)
        
//     }
//     console.log("the greatest Profit is "  + greatestProfit);
//     console.log("the greatest Profit month is  "  + gDiffMonth);


    // var thisMonth
    // var nextMonth
    // difference = 0
    // var greatestLoss = 0
    // var gDiffMonth
    // for(var i=0;i<minifinances.length;i++){

    //     thisMonth = finances[i][1];
    //     nextMonth = finances[i+1][1];
    //     difference = nextMonth -thisMonth
    //     if((difference)< greatestLoss){
    //         greatestLoss = (nextMonth -thisMonth);
    //         gDiffMonth = (finances[i][0] + "to" + finances[i+1][0])


    //     }
    //     // difference = nextMonth -thisMonth;
    //     console.log("This month is " +  thisMonth);
    //     console.log("Next month is " + nextMonth)
    //     console.log("The difference is " + difference)
        
    // }
    // console.log("the greatest Loss is "  + greatestLoss);
    // console.log("the greatest Loss month is  "  + gDiffMonth);




    // var total = 0

    // var greatestIncreaseAmount = 0
    // var greatestIncreaeseMonth

    // for(var i= 0; i < finances.length;
    //     i++){
   
    //   if(finances[i][1] > greatestIncreaseAmount){
    //         greatestIncreaseAmount = finances[i][1]
    //         greatestIncreaeseMonth = finances[i][0]
    //   }
    //   console.log(finances[i][1])
    //   console.log(finances[i][0])
      
    //    }

    //    console.log("Greatest Increase in Profits " + greatestIncreaseAmount)
    //    console.log("the month with the biggest increase in profit is " + greatestIncreaeseMonth)
      
    //    console.log("Greatest Increase in Profits: " + greatestIncreaeseMonth + " " +  greatestIncreaseAmount)