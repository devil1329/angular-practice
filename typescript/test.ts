class IStack <T> { 
        numArr : T[] = [];
        index : number = 0;

        push(num : T){
                this.numArr[this.index] = num;
                ++this.index;
        }

        pop() : T{
                --this.index;
                return this.numArr[this.index];
        }

        display() {
                var i : number;
                for(i = this.index-1; i>=0; i--)
                        console.log(this.numArr[i]);
        }
}

let st = new IStack ();
st.push("hello");
st.push(10);
st.push(true);
st.push(10.01);

st.display();