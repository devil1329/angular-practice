export class Products{
        productID! : number;
        productName! : string;
        productDescription! : string;
        cost! : number;

        constructor(productID : number, productName : string, productDescription : string, cost : number){
                this.productID=productID;
                this.productName=productName;
                this.productDescription=productDescription;
                this.cost=cost;
        }
}