import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';
import { Product } from '../../shared/models/product';
import { CategoryService } from '../../shared/services/category.service';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';
import { ProductsService } from '../../shared/services/products.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(
    private _productsService: ProductsService,
    private _categoryService: CategoryService,
    private _helperShopping: HelperShoppingService
  ) { }

  products: Product[] = [];
  categories: Category[] = [];
  loaderActive: boolean = false;
  cantProductsTotal: number = 0;
  cardActive: boolean = false;

  ngOnInit(): void {
    this.loadProducts();
  }

  totalGetProducts(data: any) {
    this.cantProductsTotal = data;
  }

  listProductChosen() {
    this._helperShopping.customProduct.subscribe(
      product => {
        let indexProduct = this.products.findIndex(element => element.id == product.id);
        this.products[indexProduct].fields.amount = product.fields.amount;
      });
  }

  changeActiveCar() {
    let width = screen.width;
    if (width > 768) {
      document.getElementById("shopping-car")?.scrollIntoView();
    } else {
      this.cardActive = !this.cardActive;
    }
  }

  // newCount(any: any) {
  //   let element = document.getElementsByClassName('mini-shopping-car');

  //   element[0].classList.add('animation-mini-car');
  //   setTimeout(() => {
  //     element[0].classList.remove('animation-mini-car');
  //   }, 600);
  // }

  loadProducts() {
    this.loaderActive = true;
    this._productsService.getProductsSelected().subscribe(
      data => {
        this.products = data.records;
        this.loaderActive = false;
      })
  }

  loadCategories() {
    this._categoryService.getCategories().subscribe(
      data => {
        this.categories = data.records;
      }
    )
  }

  getCategory(product: Product): Category | undefined {
    return this.categories.find((e: { id: string; }) => e.id == product.fields.category)
  }

}
