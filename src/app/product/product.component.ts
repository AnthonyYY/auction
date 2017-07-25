import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Array<Product>;

  constructor() {
    this.products = [
      new Product(1001, '健力宝', 12, 1.5, '不错哦', ['饮料']),
      new Product(1002, '加多宝', 12, 3.5, '好喝', ['饮料']),
      new Product(1003, '多礼宝', 12, 2.5, '量足', ['饮料']),
      new Product(1004, '红牛', 12, 2.5, 'Nice', ['饮料']),
      new Product(1005, '奥利奥', 12, 4.5, '不错哦', ['饮料']),
      new Product(1006, '养乐多', 12, 3.5, '不错哦', ['饮料'])
    ]
  }

  ngOnInit() {

  }
}

export class Product{
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ){}
}

