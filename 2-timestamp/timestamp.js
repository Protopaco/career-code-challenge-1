const parser = (transactions) => {
    let returnObject = {};

    for (let transaction of transactions) {
        const incomingTimestamp = new Date(Number(transaction.timestamp) + (1000 * 60 * 60 * 7)).toDateString()

        if (returnObject[incomingTimestamp]) {
            returnObject[incomingTimestamp] += transaction.price
        } else {
            returnObject[incomingTimestamp] = transaction.price
        }

    }
    return returnObject;
}

module.exports = parser
