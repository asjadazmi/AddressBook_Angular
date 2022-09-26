import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressFormComponent } from '../address-form/address-form.component';
import { AddressModal } from '../address-modal';
import { AddressService } from '../address.service';
import { DBOperation } from '../db-operations';



@Component({
  selector: 'app-addressbook-display',
  templateUrl: './addressbook-display.component.html',
  styleUrls: ['./addressbook-display.component.css']
})


export class AddressbookDisplayComponent implements OnInit {
  address:any

  constructor(private _addressService:AddressService,private route:Router) { }

  ngOnInit(): void {
    this.getAddresses();
  }
  public getAddresses(){
    this._addressService.getAddressList().subscribe(res=>{
      this.address=res;
      
      console.log(res) 
    })
  }  
  delete(id:number){
    this._addressService.deleteById(id).subscribe(arg=>{
      this.getAddresses();
      window.location.reload();
    });
    
  }
  edit(id:number){
    this.route.navigate(['update-address',id])
  }
  
  }
  
 


