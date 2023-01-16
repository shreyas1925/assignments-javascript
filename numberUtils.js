const doubleNumber = (numbers) => {

    if(!Array.isArray(numbers)){

        throw new Error('Input is not an array');
    }

    const newarr = numbers.map(ele => ele*2 );

    return newarr;

};

const filterArray = (nums) => {

    if(!Array.isArray(nums))
    {
        throw new Error('Input is not an array');
    }

    const newNums = nums.filter(ele => ele%2===0);
    return newNums;
};

const TripleElementAndFIlter = (arr) => {

    if(!Array.isArray(arr)){

        throw new TypeError();
    }

    const res = arr.map(ele => ele*3 );

    const ans = res.filter(ele => ele%2===0);

    return ans;

};

function TripleElements(arr){

    if(!Array.isArray(arr))
    {
        throw new TypeError()
    }

     return  arr.reduce((accum,curValue)=>{
       
        
        if(curValue*3 % 2 == 0){

            accum.push(curValue*3);
        
        }
        return accum;

    },[]);


  
}


TripleElements([1,3,4,5,2])
console.log(TripleElementAndFIlter([1,2,3]));
// console.log(doubleNumber([-1,-2,-3]));
console.log(filterArray([-1,-2,-3]));


module.exports = {doubleNumber,filterArray,TripleElementAndFIlter,TripleElements};