import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductComponent } from './product/product.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path : "", component:AboutUsComponent},
  {path : "About", component:AboutUsComponent},
  {path : "Contact", component:ContactUsComponent},
  {path : "Product", component:ProductComponent},
  {path : "Student", component:StudentsComponent},
  {path : "**", component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
