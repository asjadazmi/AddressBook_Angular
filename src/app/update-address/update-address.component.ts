import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressModal } from '../address-modal';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  adressmodoles:AddressModal[]=[]
 address:AddressModal=new AddressModal
 addressform:FormGroup
 id:number
//  submitted:boolean=false
//  buttonText:string="submit"
//  dboops:any=DBOperation
 
  constructor(private _fb:FormBuilder,private _addressService:AddressService,private router:Router,
    private routersactivated:ActivatedRoute) { }

  ngOnInit(): void {
    this.setFormState();
    this.id=this.routersactivated.snapshot.params['id'];
    this._addressService.getAddressBookById(this.id).subscribe(data=>{
      this.address=data
    })
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
    // console.log(this.addressform.value);
    //   this._addressService.createAddress(this.addressform.value).subscribe(res=>{
    //     this.goToAddressList();
    //     this.onCancel()
    //   })
    }
    onCancel(){
       this.addressform.reset();

    }

}
