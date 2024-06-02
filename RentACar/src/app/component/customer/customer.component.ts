import { Component, OnInit } from '@angular/core';
import { customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {


  customers:customer[]=[];
  dataLoaded=false;


  constructor(private customerservice:CustomerService) {

  }

  ngOnInit(): void {
   this.getCustomers()
  }

  getCustomers(){
    this.customerservice.getCustomer().subscribe(response=>{
      this.customers=response.data
      this.dataLoaded=true
    })
  }

}
