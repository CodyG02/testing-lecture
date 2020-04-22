const {sum, sayHello} = require('../functions')

// simple equality = toBe
test('Adds 1 and 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('sayHello says hello', () => {
    expect(sayHello()).toBe('hello')
})

test('test deep equality', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one:1, two: 2})
})

test('can use to toEqual on arrays', () =>{
    const data =[1,2,3]
    expect(data).toEqual([1,2,3])
})

const names = ['andrew', 'becca', 'scott']

test('names includes scott', () => {
    expect(names).toContain('scott')
})

test('names does not include brandon', () => {
expect('names').not.toContain('brandon')
})

test('true is truthy', () => {
    expect(true).toBeTruthy()
})