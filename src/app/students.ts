export class Students{
        studentID! : number;
        name! : string;
        stream! : string;
        marks! : number;

        constructor(studentID : number, name : string, stream : string, marks : number){
                this.studentID=studentID;
                this.name=name;
                this.stream=stream;
                this.marks=marks;
        }
}