import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressModal } from './address-modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private base_url="http://localhost:8089/address/getall";
  private Add_Url="http://localhost:8089/address/add";
  private Getid_url="http://localhost:8089/address/get";
  private delete_url="http://localhost:8089/address/delete/";
  private update_url="http://localhost:8089/address/edit/id";

  constructor(private _httpclient:HttpClient) { }

  getAddressList(){
    return this._httpclient.get(`${this.base_url}`);
  }
  createAddress(address:AddressModal){
    return this._httpclient.post(this.Add_Url,address);
  }
  getAddressBookById(id:number):Observable<AddressModal>{
    return this._httpclient.get<AddressModal>(this.Getid_url+id);
  }
  deleteById(id:number){
    return this._httpclient.delete(this.delete_url+id)
  }
  updateUsers(address:AddressModal){
    return this._httpclient.put(this.update_url,address)
  }
  
}
