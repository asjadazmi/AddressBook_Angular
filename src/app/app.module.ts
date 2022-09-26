import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookDisplayComponent } from './addressbook-display/addressbook-display.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from '@angular/material/table';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAddressComponent } from './update-address/update-address.component';



@NgModule({
  declarations: [
    AppComponent,
    AddressbookDisplayComponent,
    HeaderComponent,
    AddressFormComponent,
    UpdateAddressComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
