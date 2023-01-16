const {doubleNumber,filterArray,TripleElementAndFIlter,TripleElements} = require('./numberUtils');

describe('Array utilities',()=>{
    describe('double every number', () => { 

        it('should double element when input is an array',()=>{

            expect(doubleNumber([1,2,3])).toEqual([2,4,6]);
        });

        it('should throw error when input is not an array',()=>{

            expect(()=>doubleNumber('aa')).toThrow(Error('Input is not an array'));
        });

        it('should double element when input is an array',()=>{

            expect(doubleNumber([-1,-2,-3])).toEqual([-2,-4,-6]);
        });

    });
});

describe('Array utilities',()=>{
    describe('filter even numbers from an array', () => { 

        it('should return even number array when input is an array ',()=>{

            expect(filterArray([2,1,8,7,2])).toEqual([2,8,2]);

        });

        it('should throw error when input is not an array ',()=>{

            expect(()=>filterArray('aa')).toThrow(Error('Input is not an array'));

        });

        it('should return even number array when input is an array',()=>{

            expect(filterArray([-1,-2,-3])).toEqual([-2]);
        });
    });
});


describe('Array utilities',()=>{
    describe('triple numbers and filter even numbers from an array', () => { 

        it('should return even number array when input is an array ',()=>{

            expect(TripleElementAndFIlter([1,3,4,5,2])).toEqual([12,6]);

        });

        it('should throw error when input is not an array',()=>{

            expect(()=>TripleElementAndFIlter('faiou')).toThrow(TypeError)

        });

        it('should return even number array when input is an array ',()=>{

            expect(TripleElementAndFIlter([-1,-2,2,3])).toEqual([-6,6]);

        });

        
    });
});

describe('Array utilities',()=>{
    describe('Using reduce method triple numbers and filter even numbers from an array', () => { 

        it('should return even number array when input is an array ',()=>{

            expect(TripleElements([1,3,4,5,2])).toEqual([ 12,6 ]);

        });

        it('should throw error when input is not an array ',()=>{

          expect(()=>TripleElements('aa')).toThrow(TypeError)

        });

        it('should return even number array when input is an array ',()=>{

            expect(TripleElementAndFIlter([-1,-2,2,3])).toEqual([-6,6]);

        });
        
        
    });
});