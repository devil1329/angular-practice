import { Component } from '@angular/core';
import { Images } from '../images';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private restService: RestService) { }
  imgData: Images[] = [];
  
  readData() {
    this.restService.getImages().subscribe({
      next: (data: Images[]) => { this.imgData = data},
      error: (err) => console.log(err)
    })
  }
}
