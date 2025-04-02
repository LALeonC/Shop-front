import { environment } from './../../../environments/environment.development';
import { Pipe, PipeTransform } from '@angular/core';


const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]): string {
    if (typeof value === 'string') {
      return `${baseUrl}/files/product/${value}`;
    }

    const image = value.at(0);

    if (!image) {
      return './assets/images/no-image.jpg';
    }

    return `${baseUrl}/files/product/${image}`;
  }
}
