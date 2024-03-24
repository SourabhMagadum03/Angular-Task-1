import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Product } from "../model/product.model";
import { ProductService } from "./product-data.service";


@Injectable()

export class HttpService{
 
  constructor(private http : HttpClient, private productServ : ProductService){}
  
productUrl = 'https://task-1-buy-product-default-rtdb.firebaseio.com/product.json'
  postProduct(proData : any){
    this.http.post(this.productUrl, proData).subscribe({
        next : (param : any)=>{
            console.log(param);
            this.getProduct();
        }
    })
  }

  getProduct(){
    this.http.get<Product>(this.productUrl).pipe(map((pro : any)=>{
      const productArr = [];
      for(let key in pro){
        productArr.push({...pro[key], id: key})
      }
      console.log(productArr);
      return productArr;
  })).subscribe((produc)=>{
    console.log(produc)
    this.productServ.setProduct(produc)
  })
  }

  deleletProduct(id:string){
    this.http.delete('https://task-1-buy-product-default-rtdb.firebaseio.com/product/'+ id +  '.json').subscribe((pro)=>{
     this.getProduct()
     console.log(pro);
    })
  }

  updateRecipe(id:string,data:any){
    this.http.put('https://task-1-buy-product-default-rtdb.firebaseio.com/product/' +id + '.json', data).subscribe((res)=>{
        console.log(res);
        this.getProduct();
    })
     
}
}