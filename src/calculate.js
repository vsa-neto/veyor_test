export default function calculateTotal(purchases){
// const result = 0;
    const result = purchases.reduce((accum, item)=>{
        return accum + item.price * item.count;
    }, 0);
    return result;
}
