import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService} from "../shared/product.service";
import { Comment } from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  public product: Product;
  public comments: Array<Comment>;
  public newComment: string;
  public showCommentAdder = false;
  public newRating = 5;
  constructor(
    private productService: ProductService,
    private routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentForProduct(productId);
  }

  ngOnChanges (changes) {
  }

  addComment() {
    this.comments.unshift(new Comment(0, this.product.id, new Date().toISOString(), 'jerry', this.newRating, this.newComment));
    this.newComment = '';
    this.newRating = 5;
    this.product.rating = this.comments.reduce( (sum, comment) => sum += comment.rating , 0 ) / this.comments.length;
    this.showCommentAdder = false;
  }

}
