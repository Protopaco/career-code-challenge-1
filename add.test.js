const add = require('./add.js');

describe('add', () => {
    const oldDate = new Date('1-25-21')

    it('adds 30 seconds', () => {
        const diff = '30s'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2021-01-25T08:00:30.000Z')

        expect(newDate).toEqual(expectedDate)
    });


    it('adds 45 minutes', () => {
        const diff = '45m'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2021-01-25T08:45:00.000Z')

        expect(newDate).toEqual(expectedDate)
    });

    it('adds 8 hours', () => {
        const diff = '8h'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2021-01-25T16:00:00.000Z')

        expect(newDate).toEqual(expectedDate)
    });

    it('adds 5 days', () => {
        const diff = '5d'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2021-01-30T08:00:00.000Z')

        expect(newDate).toEqual(expectedDate)
    });

    it('adds 10 weeks', () => {
        const diff = '10w'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2021-04-05T08:00:00.000Z')

        expect(newDate).toEqual(expectedDate)
    });

    it('adds 3 months', () => {
        const diff = '3M'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2021-04-25T08:00:00.000Z')

        expect(newDate).toEqual(expectedDate)
    });

    it('adds 100 years', () => {
        const diff = '100y'
        const newDate = add(oldDate, diff)
        const expectedDate = new Date('2121-01-25T08:00:00.000Z')

        expect(newDate).toEqual(expectedDate)
    });


});
