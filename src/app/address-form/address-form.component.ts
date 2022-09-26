import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressModal } from '../address-modal';
import { AddressService } from '../address.service';
import { DBOperation } from '../db-operations';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
 adressmodoles:AddressModal[]=[]
 address:AddressModal=new AddressModal
 addressform:FormGroup
//  submitted:boolean=false
//  buttonText:string="submit"
//  dboops:any=DBOperation
 
  constructor(private _fb:FormBuilder,private _addressService:AddressService,private router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }
setFormState(){
  this.addressform=this._fb.group({
    firstName:['',Validators.compose([Validators.required,Validators.minLength(3)])],
    mobileNo:[''],
  // lastname:[''],
    address:[''],
    city:[''],
    state:[''],
    zipNo:['']
  })
}

  goToAddressList(){
    this.router.navigate(['/addressbook-display'])
  }
  onSubmit(){
    console.log(this.addressform.value);
      this._addressService.createAddress(this.addressform.value).subscribe(res=>{
        this.goToAddressList();
        this.onCancel()
      })
    }
    onCancel(){
       this.addressform.reset();

    }
    
  }



