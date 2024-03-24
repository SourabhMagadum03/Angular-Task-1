import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import { BehaviorSubject } from "rxjs";
import { TabProduct } from "../model/add-product.model";

@Injectable()
export class ProductService{
private productArray : Product[] = [];
private tabProductArray : TabProduct[] = [];

productArrayBehaviourSubject = new BehaviorSubject(this.productArray.slice());
setProduct(product : Product[]){
  this.productArray = product;
  this.productArrayBehaviourSubject.next(product.slice())
}

getSingleRecipeUsingId(idp : string){
    return this.productArray.slice().find((pro)=>{return pro.id === idp})
}

TabArrayBehaviourSubject = new BehaviorSubject(this.tabProductArray.slice());
addTabProduct(Product:any){
  const myNewRec = new TabProduct( Product?.productNam, Product?.productPri, Product?.productQun, (Product?.productPri * Product?.productQun), Product?.id);
  this.tabProductArray.push(myNewRec);
  this.TabArrayBehaviourSubject.next(this.tabProductArray.slice());
}


deleteCard(param:any){
  this.tabProductArray.splice(param,1)
}
}
