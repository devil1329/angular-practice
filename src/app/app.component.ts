import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	userList = [
		{ uid: 101, name : "Rajeev", location : "Dehradun"},
		{ uid: 102, name : "Raj", location : "Delhi"},
		{ uid: 103, name : "Raju", location : "Dehradun"},
		{ uid: 104, name : "Rajni", location : "Mumbai"},
		{ uid: 105, name : "Rajneesh", location : "Lucknow"}
	]

	onEdit(){
		alert("Edit")
	}

	onDelete(){
		alert("delete")
	}
}
