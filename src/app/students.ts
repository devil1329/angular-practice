import { destroyPlatform } from "@angular/core";

export class Students{
        id! : number;
        name! : string;
        stream! : string;
        marks! : number;

        constructor(id : number, name : string, stream : string, marks : number){
                this.id=id;
                this.name=name;
                this.stream=stream;
                this.marks=marks
        }
}