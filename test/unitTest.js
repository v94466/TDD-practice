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


describe('product', function () {
    it('returns 4 when multiply 2 and 2', function () {
        assert.equal(functions.product(2, 2), 4);
    })
});
describe('product', function () {
    it('returns 0 when multiply 4 and 0', function () {
        assert.equal(functions.product(4, 0), 0);
    })
})

describe('product', function () {
    it('returns -12 when multiply 3 and -4', function () {
        assert.equal(functions.product(-4, 3), -12);
    })
})



describe('min', function () {
    it('returns 5 when  check minimum value between  5 and 7', function () {
        assert.equal(min(5, 7), 5);
    })

});

describe('min', function () {
    it('returns 1.1 when  check minimum value between  1.1 and 1.5', function () {
        assert.equal(min(1.1, 1.5), 1.1);
    })
})

it('returns 6when  check minimum value between  6 and 6', function () {
    assert.equal(functions.min(6, 6), 6);
})

describe('max', function () {
    it('returns 7 when  check maximum value between  4 and 7', function () {
        assert.equal(max(4, 7), 7);
    })
})

describe('max', function () {
    it('returns 5 when  check maximum welcome between  5 and 5', function () {
        assert.equal(max(5, 5, 5)
    })
})

describe('max', function () {
    it('returns 2.3when  check maximum welcome between  2.3 and 1.4', function () {
        assert.equal(max(2.3, 1.4), 2.3);
    })
})

describe('tail', function () {
    it('should return null when the provided array is empty[]', function () {
        let arr = [];
        assert.isNull(functions.tail(arr));
    });

});

describe('tail', function () {
    it('should return 7  when the provided array is [5,6,7]', function () {
        let arr = [1, 2, 3];
        assert.equal(functions.tail(arr), 3);
    });

});

describe('tail', function () {
    it('should return hello  when the provided array is [hello]', function () {
        let arr = ['hello'];
        assert.equal(functions.tail(arr), 'hello');
    });
});
                            
        
describe('head', function () {
    it('should return null when the provided array is empty[]', function () {
        let arr = [];
        assert.isNull(functions.head(arr));
    });

});

describe('head', function () {
    it('should return 4 when the provided array is [4,3,2]', function () {
        let arr = [4, 3, 2];
        assert.equal(functions.head(arr), 4);
    });

});

describe('head', function () {
    it('should return hello when the provided array is [hello]', function () {
        let arr = ['hello'];
        assert.equal(functions.head(arr), 'hello');
    });
});

describe('mid', function () {
    it('should return null when the provided array is empty[]', function () {
        let arr = [];
        assert.isNull(functions.mid.deepEqual(arr));
    });

});

describe('mid', function () {
    it('should return 7  when the provided array is [8,7,3]', function () {
        let arr = [8, 7, 3];
        assert.equal(functions.mid.deepEqual(arr), 7);
    });


    describe('mid', function () {
        it('should return ["paul", "sam"] when the provided array is ["johhny","paul", "sam","veer"]', function () {
            let arr = ["johhny","paul", "sam","veer"];
            assert.equal(functions.mid.deepEqual(arr), ["paul", "sam"]);
        });
    });
    
    describe('total', function () {
        it('should return null when the provided array is empty[]', function () {
            let arr = [];
            assert.isNull(functions.total(arr));
        });
    
    });
    
    describe('total', function () {
        it('should return 14  when the provided array is [4,4,6]', function () {
            let arr = [4, 4, 6];
            assert.equal(functions.total(arr), 14);
        });
    
    });
    
    describe('total', function () {
        it('should return 10.5  when the provided array is [5.5,2.0,3.0]', function () {
            let arr = [5.5, 2.0, 3.0];
            assert.equal(functions.total(arr), 10.5);
        });
    
    });
    
    describe('avg', function () {
        it('should return null when the provided array is empty[]', function () {
            let arr = [];
            assert.isNull(functions.avg(arr));
        });
    
    });
    
    describe('avg', function () {
        it('should return 6 when the provided array is [4,6,8]', function () {
            let arr = [4, 6, 8];
            assert.equal(functions.avg(arr), 6);
        });
    
    });
    
    describe('avg', function () {
        it('should return 3.5 when the provided array is [5.5,2.0,3.0]', function () {
            let arr = [5.5, 2.0, 3.0];
            assert.equal(functions.avg(arr), 3.5);
        });
    
    });
    
    describe('largest', function () {
        it('should return null when the provided array is empty[]', function () {
            let arr = [];
            assert.isNull(functions.largest(arr));
        });
    
    });
    
    
describe('largest', function () {
    it('should return 8  when the provided array is [8,5,3]', function () {
        let arr = [8, 5, 3];
        assert.equal(functions.largest(arr), 8);
    });

});

describe('largest', function () {
    it('should return 5.5 when the provided array is [5.5,2.0,3.0]', function () {
        let arr = [5.5, 2.0,3,0];
        assert.equal(functions.largest(arr), 5.5);
    });

});

describe('smallest', function () {
    it('should return null when the provided array is empty[]', function () {
        let arr = [];
        assert.isNull(functions.smallest(arr));
    });

});
describe('smallest', function () {
    it('should return  6 when the provided array is [7,8,6]', function () {
        let arr = [7, 8, 6];
        assert.equal(functions.smallest(arr), 6);
    });

});

describe('smallest', function () {
    it('should return 2.0 when the provided array is  [2.0,5.5,3.0]', function () {
        let arr = [2.0,5.5,3.0];
        assert.equal(functions.smallest(arr), 2.0);
    });

});

describe('merge', function () {
    it('should return null when the provided arrays are empty[]', function () {
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1, arr2));
    });

});

describe('merge', function () {
    it('should return [7,9] when the provided arr1 is arr[7,9] and arr2 is [] ', function () {
        let arr1 = [7,9];
        let arr2 = [];
        assert.deepEqual(functions.merge(arr1, arr2), [7,9]);
    });
});

describe('merge', function () {
    it('should return [5,-8,6,0] when the provided arr1 is [5,6] and arr2 is [-8,0] ', function () {
        let arr1 = [5, 6];
        let arr2 = [-8, 0];
        assert.deepEqual(functions.merge(arr1, arr2), [5,-8,6,0]);
    });
});
