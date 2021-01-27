const operators = {
    's': 1000,
    'm': (1000 * 60),
    'h': (1000 * 60 * 60),
    'd': (1000 * 60 * 60 * 24),
    'w': (1000 * 60 * 60 * 24 * 7),
}

const add = (passedDate, diff) => {
    const diffOperator = diff[diff.length - 1]
    const diffNum = diff.split(diffOperator)[0]

    if (operators[diffOperator]) {
        const newDate = passedDate.getTime() + (operators[diffOperator] * diffNum)
        return new Date(newDate)
    }

    let splitDate = passedDate.toISOString().split('-')

    if (diffOperator === 'M') {
        splitDate[1] = String(Number(splitDate[1]) + Number(diffNum))
        if (splitDate[1].length === 1) splitDate[1] = '0' + splitDate[1]
        return new Date(splitDate.join('-'))
    }

    splitDate[0] = Number(splitDate[0]) + Number(diffNum)
    return new Date(splitDate.join('-'))
}

module.exports = add
