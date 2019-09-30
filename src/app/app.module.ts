import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { customerReducer } from "./reducers/customer.reducer";
import { CustomerViewComponent } from "./components/customer-view/customer-view.component";
import { CustomerAddComponent } from "./components/customer-add/customer-add.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, CustomerViewComponent, CustomerAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      customers: customerReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
