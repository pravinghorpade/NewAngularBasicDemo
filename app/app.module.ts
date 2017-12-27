import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list-component";
import { FormsModule } from "@angular/forms"
import { ProductService } from "./products/products.service";



@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,ProductListComponent],
    bootstrap:[AppComponent],
    providers: [ProductService]
}
)
export class AppModule{
}