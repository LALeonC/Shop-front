import { Component, computed, input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();

  imageUrl = computed(() => {
    return `https://proyecto-angular-shop-ll.onrender.com/api/files/product/${
      this.product().images[0]
    }`;
  });
}
