export class Product{
        productImg : string;
        productNam : string;
        productPri : number;
        productQun : number;
        id? : string;

        constructor(proImg : string, proN : string, proPri : number, proQun : number, peoId : string){
            this.productImg = proImg;
            this.productNam = proN;
            this.productPri = proPri;
            this.productQun = proQun;
            this.id = peoId;
        }
}