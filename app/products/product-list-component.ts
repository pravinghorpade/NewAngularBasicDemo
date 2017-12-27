import { Component } from '@angular/core';
import { IProduct } from "./product";


@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
}
)


export class ProductListComponent {

    
    pageTitle: string = 'Product List';
    showImage: boolean;
    imageurl: String = '../images/angularconnect-shield.png';
    filterProducts: IProduct[];
    _listFilter:string='cart';

    private _productService;
constructor(products:IProduct[]){
    this.filterProducts = products;
}


constructor(products:IProduct[]){
    this.filterProducts = products;
}
    toggelImage(): void {
        this.showImage = !this.showImage;

    }

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter=value;
       this.filterProducts= this.performFilter(value)
        console.log(value);
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];

    
}


