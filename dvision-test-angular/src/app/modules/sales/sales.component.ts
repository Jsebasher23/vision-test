import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Customer } from 'src/app/shared/services/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { SaleDetails } from 'src/app/shared/services/sale-details.model';
import { SaleDetailsService } from 'src/app/shared/services/sale-details.service';
import { Sale } from 'src/app/shared/services/sale.model';
import { SaleService } from 'src/app/shared/services/sale.service';
import { Trader } from 'src/app/shared/services/trader/trader.model';
import { TraderService } from 'src/app/shared/services/trader/trader.service';
import { SaleDetailsComponent } from './sale-details/sale-details.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  // formData : Sale = new  Sale();
  customerList: Customer[] = [];
  traderList: Trader[] = [];
  isValid: boolean;
  saleDetailsList : SaleDetails[] = [];
  constructor(private customerService:CustomerService,
    private traderService: TraderService,
    private dialog : MatDialog,
    private saleService : SaleService,
    private detailsService:SaleDetailsService  
    ) { }

  ngOnInit(): void {
    this.isValid = true;
    this.customerService.getCustomerList().subscribe((res :any) => {this.customerList = res});    
    this.traderService.getTraderList().subscribe((res :any) => {this.traderList = res});  
    this.saleService.formData={
      SaleID:0,
      SaleCustomerID:0,
      SaleTraderID:0,
      SaleDate:'',
      SaleTOTAL:0
    };
    this.saleService.saleDetail = [];
    this.updateDetails();
  }

  resetForm(form?: NgForm) {
    let date = new Date();
    if (form = null)
      form.resetForm();
    this.saleService.formData = {
      SaleID: 0,
      SaleDate: '',
      SaleCustomerID: 0,
      SaleTraderID: 0,
      SaleTOTAL: 0      
    };
    this.saleService.saleDetail = [];
  }
  editDetails(saleDetailndex, SaleID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { saleDetailndex, SaleID };
    this.dialog.open(SaleDetailsComponent, dialogConfig)
    .afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }

  deleteSaleDetails(saleDetailID: number, i: number) {    
    this.saleService.saleDetail.splice(i, 1);
    this.updateGrandTotal();
  }

  deleteDetail(id:number){
    this.detailsService.removeSaleDetails(id).subscribe(res => {
      this.updateDetails();
    })
  }

  updateGrandTotal() {
    this.saleService.formData.SaleTOTAL = this.saleService.saleDetail.reduce((prev, curr) => {      
      return prev + curr.SDetailTOTAL;
    }, 0);

    this.saleService.formData.SaleTOTAL = parseFloat(this.saleService.formData.SaleTOTAL.toFixed(2));
  }

  updateDetails(){
    return  this.detailsService.getSaleDetails().subscribe((res:any) => {this.saleDetailsList = res;});
  }
  validateForm() {
    this.isValid = true;
    if (this.saleService.formData.SaleCustomerID == 0)
      this.isValid = false;
    else if (this.saleService.saleDetail.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      debugger;
      this.saleService.saveSale().subscribe(res => {
        this.resetForm();
        this.updateDetails();
        //this.toastr.success('Submitted Successfully', 'Restaurent App.');        
      });
    }
  }
}
