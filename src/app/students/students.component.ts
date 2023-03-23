import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Students } from '../students';

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.css']
})
export class StudentsComponent {

	constructor(private restService: RestService) { }
	studentData: Students[] = [];

	// This is used to toggle between fetch data and one student data
	bFetch: boolean = true;
	ngOnInit() {
		this.readData();
	}

	// get operation
	readData() {
		this.bFetch = true;
		this.restService.getData().subscribe({
			next: (data: Students[]) => { this.studentData = data.sort((a: Students, b: Students) => { return a.id - b.id }) },
			error: (err) => console.log(err)
		})
	}

	// get one student data
	id: number = 0;
	get() {
		this.bFetch = false;
	}

	studentObj!: Students;
	getStudentFun() {
		this.restService.getStudent(this.id).subscribe({
			next: (data: Students) => { this.studentObj = data },
			error: (err) => console.log(err)
		})
	}

	//post operation
	bAdd: boolean = false;
	idPost!: number;
	namePost!: string;
	standardPost!: number;
	streamPost!: string;
	add() {
		this.bAdd = true;
	}
	insertRecord() {
		this.bAdd = false;
		let stuObj: Students = new Students(this.idPost, this.namePost, this.standardPost, this.streamPost);
		this.restService.insertData(stuObj).subscribe({
			next: () => this.readData(),
			error: (err) => console.log(err)
		})
	}

	//put operation
	bEdit: boolean = false;
	edit() {
		this.bEdit = true;
	}
	updateRecord(stuObj: Students) {
		this.bEdit = false;
		this.restService.editRecord(stuObj).subscribe({
			next: (data) => {
				console.log("Received data is : " + data);
				this.readData();
			},
			error: (err) => console.log(err)
		})
	}

	//delete operation
	deleteRecord(id: number) {
		this.restService.deleteData(id).subscribe({
			next: (data) => {
				console.log(data);
				this.readData();
			},
			error: (err) => console.log(err)
		})
	}
}
