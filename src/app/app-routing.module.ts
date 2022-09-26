import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { AddressbookDisplayComponent } from './addressbook-display/addressbook-display.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const routes: Routes = [
  {path:'addressbook-display',component:AddressbookDisplayComponent},
  {path:'address-form',component:AddressFormComponent},
  {path:'',redirectTo:'addressbook-display',pathMatch:'full'},
  {path:'update-address/:id',component:UpdateAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
