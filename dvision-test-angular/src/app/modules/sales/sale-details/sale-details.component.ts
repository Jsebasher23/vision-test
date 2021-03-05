import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/services/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { SaleDetails } from 'src/app/shared/services/sale-details.model';
import { SaleService } from 'src/app/shared/services/sale.service';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.scss']
})
export class SaleDetailsComponent implements OnInit {
  formData:SaleDetails;
  productList : Product[];
  isValid : boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef : MatDialogRef<SaleDetailsComponent>,
    private productService: ProductService,
    private saleService : SaleService
  ) { }

  ngOnInit(): void {
    this.isValid = true;
    this.productService.getProductList().subscribe((res : any) => {this.productList = res});
    if(this.data.saleDetailndex == null){
      this.formData = {
        SDetailID : null,
        SDetailBillID : null,
        SDetailSaleID : this.data.SaleID,
        SDetailProductID : 0,
        SDetailPrice:0,
        SDetailQuantity:0,
        SDetailTOTAL: 0,
        SDetailName:''
      }
    }else{
      this.formData = Object.assign({},this.saleService.saleDetail[this.data.saleDetailndex]);

    }
  }

  updatePrice(ctrl) {
    this.productService.getProductListById(ctrl.selectedIndex).subscribe((res:any) => this.formData.SDetailPrice = res.ProductUniPrice);
    if (ctrl.selectedIndex == 0) {
      this.formData.SDetailPrice = 0;
      this.formData.SDetailName = '';
    }
    else {
      this.formData.SDetailPrice = this.productList[ctrl.selectedIndex - 1].ProductUniPrice;
      this.formData.SDetailName = this.productList[ctrl.selectedIndex - 1].ProductName;
    }
    this.updateTotal();
  }
  updateTotal() {
    this.formData.SDetailTOTAL = parseFloat((this.formData.SDetailQuantity * this.formData.SDetailPrice).toFixed(2));
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.saleDetailndex == null){
        
        this.saleService.saleDetail.push(form.value);
      }
      else
      {

        this.saleService.saleDetail[this.data.saleDetailndex] = form.value;
      }
      this.dialogRef.close();
    }
  }

  validateForm(formData: SaleDetails) {
    this.isValid = true;
    if (formData.SDetailSaleID < 0)
      this.isValid = false;
    else if (formData.SDetailQuantity == 0)
      this.isValid = false;
    return this.isValid;
  }

}
