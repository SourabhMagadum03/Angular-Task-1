export class TabProduct{
   
    productNam : string;
    productPri : number;
    productQun : number;
    productTotalPri : number;
    id? : string;

    constructor( proN : string, proPri : number, proQun : number, protp:number, peoId : string){
     
        this.productNam = proN;
        this.productPri = proPri;
        this.productQun = proQun;
        this.productTotalPri =protp;
        this.id = peoId;
    }
}