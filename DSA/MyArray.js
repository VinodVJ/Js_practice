class MyArray {

    constructor () {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
}

const myarr = new MyArray();

myarr.push('vinod');
myarr.push('is');
myarr.push('my');
myarr.push('name');

// console.log(myarr.get(2));
// console.log(myarr.pop());
console.log(myarr);
