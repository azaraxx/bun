import { describe, expect, test, beforeAll } from 'bun:test';

beforeAll(() => {

});

describe('math', () => {
    test('addition', () => {
        expect(2 + 2).toBe(4);
    })
    test('divide', () => {
        expect(10 / 5).toBe(2);
    })
})