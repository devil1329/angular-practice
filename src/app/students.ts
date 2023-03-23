import { destroyPlatform } from "@angular/core";

export class Students{
        id! : number;
        name! : string;
        standard! : number;
        stream! : string;

        constructor(id : number, name : string, standard : number, stream : string){
                this.id=id;
                this.name=name;
                this.stream=stream;
                this.standard=standard;
        }
}