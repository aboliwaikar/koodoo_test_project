const {
    standardDeviation,
    sanitizeAmounts,
    roundToTwoDp,
    analysePayments
} = require('./analyze.js')
const test = require('ava')

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([1, 2, 2, 2, 1, 1]), 0.5)
})

// test cases added by aboli//

test('Verify Input Data consitency in example.json',t =>{
//verify whether for each transaction, the 'Amount' spent and the 'TrasactionInformation' is present
})

test('verify that the amount stored is in integer format and not in string or char',t =>{
//verify that the value stored under Amount is not in character format
})

test('verify that the amount fetched is not negative,t =>{
})

test('min is calculated correctly for basic data',t=>{

})

test('max is calculated correctly for basic data', t=>{

})

test('mean is calculated correctly for basic data', t=>{

})

test('median is calculated correctly for basic data', t=>{

})

test('min,max,mean,median and standard deviation should be displayed of integer type', t =>{

})

test('result is rounded correctly upto 2 decimal places', t=>{

})

test('verify min,max,median,mean and standard deviation if no amount is fetched from transaction history by TRSNMUFS', t=>{

})

test(' verify if the output data is formatted correctly in json format',t=>{

})



test('Payments are analysed correctly', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
            "Amount": 1,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 3,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 4,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 2.5,
        median: 2.5,
        min: 1,
        standardDeviation: 1.12,
    })
})