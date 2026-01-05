import calcCashback from '../cashback';
test('calcCashback test for 500', ()=>{
    const result = calcCashback(500);
    expect(result).toBe(0);
});
const dataList = [
    [ 'gold', 100000, 5000 ],
    [ 'silver', 10000, 200 ],
    [ 'regular', 1000, 10 ],
    [ 'no', 500, 0 ]
];
// // template
// const handler = test.each(dataList);
// handler(prefix, (status, amount, expected)=>{
// const result = calcCashback()
// });
const handler = test.each(dataList);
handler('cashback for %s status and %i amount', (status, amount, expected)=>{
    const result = calcCashback(amount);
    expect(result).toBe(expected);
});
