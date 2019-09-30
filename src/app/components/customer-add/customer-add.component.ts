import { Component, OnInit } from "@angular/core";
import { Customer, CustomerStore } from "src/app/models/customer";
import { Store } from "@ngrx/store";
import { CustomerAdd } from "src/app/Actions/customer.actions";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.scss"]
})
export class CustomerAddComponent implements OnInit {
  customer: Customer;

  constructor(private store: Store<CustomerStore>) {
    this.customer = new Customer();
  }

  ngOnInit() {}

  onSubmit(f: Customer) {
    const c = new Customer();
    c.name = f.name;
    this.store.dispatch(new CustomerAdd(c));
  }
}
