import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService} from "../shared/product.service";
import { Comment } from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public comments: Array<Comment>;
  constructor(
    private productService: ProductService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentForProduct(productId);
  }

}
