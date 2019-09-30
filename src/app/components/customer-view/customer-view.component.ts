import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CustomerStore, Customer } from "../../models/customer";
import { Observable } from "rxjs";
import { CustomerRemove } from "src/app/Actions/customer.actions";

@Component({
  selector: "app-customer-view",
  templateUrl: "./customer-view.component.html",
  styleUrls: ["./customer-view.component.scss"]
})
export class CustomerViewComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerStore>) {
    this.customers$ = store.select("customers");
  }

  ngOnInit() {}

  onRemove(index: number) {
    this.store.dispatch(new CustomerRemove(index));
  }
}
