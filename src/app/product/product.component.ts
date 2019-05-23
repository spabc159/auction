import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这事一个商品，是我在学习慕课网angular时候创建的', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 4.5, '这事二个商品，是我在学习慕课网angular时候创建的', ['化妆品', '个人用品']),
      new Product(3, '第三个商品', 3.99, 3.5, '这事三个商品，是我在学习慕课网angular时候创建的', ['服饰', '个人用品']),
      new Product(4, '第四个商品', 4.99, 2.5, '这事四个商品，是我在学习慕课网angular时候创建的', ['日用品', '日常用品']),
      new Product(5, '第五个商品', 5.99, 1.5, '这事五个商品，是我在学习慕课网angular时候创建的', ['古玩', '收藏品']),
      new Product(6, '第六个商品', 6.99, 3.5, '这事六个商品，是我在学习慕课网angular时候创建的', ['汽车', '家用品']),
    ];
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
};