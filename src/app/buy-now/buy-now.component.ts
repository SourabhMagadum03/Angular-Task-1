import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../shared/services/http-data-services';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product-data.service';
import { TabProduct } from '../shared/model/add-product.model';


@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrl: './buy-now.component.scss'
})
export class BuyNowComponent implements OnInit{
  @ViewChild('myForm') myFormObj : any;
constructor(private httpServ : HttpService, private productServ : ProductService){};
AllProductArry : Product[]= [];
TabProductArry: TabProduct[]=[]
allPriceArray:[] | any = [];
allprice:any = 0;
deltprice:any = 0; 
ngOnInit(): void {
this.productServ.productArrayBehaviourSubject.subscribe({
  next : (param : any)=> {
    this.AllProductArry = param;
  }
});

this.productServ.TabArrayBehaviourSubject.subscribe({
  next : (param : any)=> {
    this.TabProductArry = param;  
  }
})
}



addProduct(param:any, id : any){
  this.productServ.addTabProduct(param)
for(var val of this.TabProductArry){
  console.log(val.productTotalPri)
  if(!this.allPriceArray.includes(val.productTotalPri)){
    this.allPriceArray.push(val.productTotalPri)
  }
}
this.allprice = this.allPriceArray.reduce((acc: number, cur: any)=> acc + Number(cur), 0)
console.log(this.allprice)

param.productQun = 0;
}

deletCard(param:any,delPri:any){
  console.log(param)
 
if(this.allprice != 0  && delPri != 0){
  this.deltprice =  delPri
}
 console.log(this.deltprice)
           
this.productServ.deleteCard(param)
this.TabProductArry.splice(param, 1)
if(this.allprice != 0){
  this.allprice - delPri
}
}

dec(prod: { productQun: any; }){
  if(prod.productQun != 0){
    prod.productQun -= 1;
  }
}

inc(prod: { productQun: any; }){
  if(prod.productQun != 5){
    prod.productQun++;
  }
}

deleteProduct(id:any){
  this.httpServ.deleletProduct(id);
} 
}
