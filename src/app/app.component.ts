import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Students } from './students';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
		
}

	
	
	
// 	bChanged : boolean = false;
// 	userList = [
// 		{ uid: 101, name : "Rajeev", location : "Dehradun"},
// 		{ uid: 102, name : "Raj", location : "Delhi"},
// 		{ uid: 103, name : "Raju", location : "Dehradun"},
// 		{ uid: 104, name : "Rajni", location : "Mumbai"},
// 		{ uid: 105, name : "Rajneesh", location : "Lucknow"}
// 	]
// 	bEditArray : boolean[] = new Array<boolean>(this.userList.length).fill(false);
// 	bEdit : boolean = false;
// 	onEdit(){
// 		this.bEdit=true;
// 	}
	
// 	onSave(){
// 		this.bEdit=false;
// 	}

// 	onDelete(id :number){
// 		this.userList.splice(id);
// 		this.bChanged=true;
// 	}
// }
