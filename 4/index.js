'use strict'

class Arrays {
    constructor(arr1, arr2, arr3, arr4) {
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
        this.arr4 = arr4;
    }
    all_in_one() {
        let temp = [];
        temp.push(this.arr1, this.arr2, this.arr3, this.arr4);
        temp = temp.flat();
        temp.sort((b, a) => a - b);
        return temp
    }
    unique_elem(arr) {
        return arr.filter((elem, id) => arr.indexOf(elem) === id);
    }
    common_elements() {
        return this.arr1.filter(elem => {
            return this.arr2.includes(elem) &&
                   this.arr3.includes(elem) &&
                   this.arr4.includes(elem);
        });
    }
    is_prime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }
    prime_numbers() {
        let array = this.all_in_one();
        array = array.filter(num => this.is_prime(num));
        return this.unique_elem(array);
    }
}

let array1 = [54, 13, 4];
let array2 = [8, 13, 3];
let array3 = [5, 13, 9];
let array4 = [45, 13, 2];

const test = new Arrays(array1, array2, array3, array4);
let array5 = test.all_in_one();

console.log(test.all_in_one()); // 1
console.log(test.unique_elem(array5)); // 2
console.log(test.common_elements()); // 3
console.log(test.prime_numbers()); // 4