const chai = require('chai');
const assert = chai.assert;
const functions = require('../functions');

describe('sum', function(){
    it('returns 6 when adding 3 and 3', function(){
        assert.equal(functions.sum(3,3), 6);
    });
    
    it('returns 0 when adding 6 and -6', function(){
        assert.equal(functions.sum(6,-6), 0);
    });
    it('returns 11.1when adding 9 and 2.1', function(){
        assert.equal(functions.sum(9,2.1), 11.1);
    });

});

describe('tail', functions() {
    it('returns null when the provided array is empty[]', functions(){
        let arr = [];
        assert.isNull(functions.tail(arr));
    });

    it('return 7 when the provided array is [5,6,7]', functions(){
        let arr = [5,6,7];
        assert.isequal(functions.tail(arr),7);
    });

    it('return hello when the provided array is [hello]', functions(){
        let arr = ['hello'];
        assert.isequal(functions.tail(arr),'hello');
    });

    describe('merge', functions(){
        it('return null when both provided arrays are empty', functions(){
            let arr1 = []
            let arr2 = []
            assert.isnull(functions.merge(arr1,arr2));
        }); 
        it('return [5,-8,6,0] when array1 is [5,6] and array2 is [-8,0]', functions(){
            let arr1 = [5,6]
            let arr2 = [-8,0]
            assert.isdeepEqual(functions.merge(arr1,arr2));
        });


        it('return [7,9] when array1[7,9] and array2 is  empty', functions(){
            let arr1 = [7,9]
            let arr2 = []
            assert.isnull(functions.merge(arr1,arr2));
        });
    