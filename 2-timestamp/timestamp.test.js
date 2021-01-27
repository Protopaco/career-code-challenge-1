const parser = require('./timestamp.js');
const { transactions } = require('./timestamp-data.js')
const { testData } = require('./test-data.js')

describe('timestamp', () => {
    it('parses transcription data object', () => {
        const parsedArray = parser(transactions)
        expect(parsedArray).toEqual(testData)
    })


})