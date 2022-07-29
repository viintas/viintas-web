import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';
import { Product } from '../../shared/models/product';
import { CategoryService } from '../../shared/services/category.service';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(
    private _productsService: ProductsService,
    private _categoryService: CategoryService
  ) { }

  products: Product[] = []
  categories: Category[] = []

  hideShoppingCar: boolean = true;

  ngOnInit(): void {
    this.loadProducts();
    // this.loadCategories();
  }

  newCount(any: any) {
    console.log(any);
    let element = document.getElementsByClassName('mini-shopping-car');

    element[0].classList.add('animation-mini-car');
    setTimeout(() => {
      element[0].classList.remove('animation-mini-car');
    }, 600);
    // console.log(elements);
  }

  loadProducts() {
    this._productsService.getProducts().subscribe(
      data => {
        this.products = data.records;
        // console.log(data.records)
      }
    )
  }

  loadCategories() {
    this._categoryService.getCategories().subscribe(
      data => {
        this.categories = data.records
        console.log(data.records)
      }
    )
  }

  getCategory(product: Product): Category | undefined {
    return this.categories.find((e: { id: string; }) => e.id == product.fields.category)
  }

}
