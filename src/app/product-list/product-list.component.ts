import { Component, OnInit } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;
  Share() {
    window.alert("Product has been shared");
  }
  onNotify() {
    window.alert("you will be Notified when product price goes above 50000");
  }
}
