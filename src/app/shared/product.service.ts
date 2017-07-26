import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Array<Product> = [
      new Product(1001, '健力宝', 12, 1.5, '不错哦不错哦不错哦不错哦不错哦', ['饮料']),
      new Product(1002, '加多宝', 12, 3.5, '好喝好喝好喝好喝好喝好喝好喝', ['饮料']),
      new Product(1003, '多礼宝', 12, 2.5, '量足量足量足量足量足量足量足量足', ['饮料']),
      new Product(1004, '红牛', 12, 2.5, 'Nice', ['饮料']),
      new Product(1005, '奥利奥', 12, 4.5, '不错哦不错哦不错哦不错哦不错哦不错哦', ['饮料']),
      new Product(1006, '养乐多', 12, 3.5, '不错哦不错哦不错哦不错哦不错哦', ['饮料'])
    ];

  private comments: Array<Comment> = [
    new Comment(1006, 1001, "2017-01-29", 'anthony', 3.5, "用着不错"),
    new Comment(1007, 1001, "2017-01-29", 'danney', 4, "用着不错"),
    new Comment(1007, 1002, "2017-01-29", 'carl', 1, "用着不错用着不错"),
    new Comment(1007, 1003, "2017-01-29", 'carl', 3, "用着不错"),
    new Comment(1007, 1003, "2017-01-29", 'carl', 1, "用着不错"),
    new Comment(1007, 1003, "2017-01-29", 'carl', 4, "用着不错"),
    new Comment(1007, 1003, "2017-01-29", 'carl', 3, "用着不错"),
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
  getProduct(id): Product {
    return this.products.find( (product) => {
      return product.id == id;
    } );
  }

  getCommentForProduct(id): Array<Comment> {
    return this.comments.filter( (comment) => comment.productId == id);
  }


}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
