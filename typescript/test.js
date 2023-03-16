var IStack = /** @class */ (function () {
    function IStack() {
        this.numArr = [];
        this.index = 0;
    }
    IStack.prototype.push = function (num) {
        this.numArr[this.index] = num;
        ++this.index;
    };
    IStack.prototype.pop = function () {
        --this.index;
        return this.numArr[this.index];
    };
    IStack.prototype.display = function () {
        var i;
        for (i = this.index - 1; i >= 0; i--)
            console.log(this.numArr[i]);
    };
    return IStack;
}());
var st = new IStack();
st.push("hello");
st.push(10);
st.push(true);
st.push(10.01);
st.display();
