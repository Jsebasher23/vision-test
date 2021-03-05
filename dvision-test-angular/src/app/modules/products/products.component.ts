import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/services/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Product } from 'src/app/shared/services/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {

  products : Product[];
  category : Category;
  constructor(private service : ProductService,
    private categoryService : CategoryService) {
    this.service.getProductList().subscribe((pres : any) => {
      this.products = pres;    
      console.log(this.products) ;       
    });
    this.categoryService.getCategory().subscribe((cres : any) => {
      this.category = cres;            
    });
   }  

   addItem(){
     
   }
   deleteItem(e) {
    e.row.data.ProductID
   }
   updateItem(e) {
    let i = e.row.data.ProductID    
   }

}
