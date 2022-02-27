var customerName = 'bob'
function names () {
    return customerName;
}

function upperCaseCustomerName () {
    customerName = 'BOB';
}

var bestCustomer = undefined
function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'name'
function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'marisa'
}