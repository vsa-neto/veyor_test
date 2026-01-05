import { calculateTotal } from '../calculate';

test('basic test', ()=>{
    let result = 4;
    expect(result).toBe(4);
});

test('calcTotal', ()=>{
    const list = [
        {

            id: 468,
            name: 'Война и мир',
            count: 3,
            price: 500
        },
        {
            id: 100,
            name: 'Javascript 2025',
            count: 1,
            price: 2000
        },
    ];

    const result = calculateTotal(list);
    expect(result).toBe(3500);
});