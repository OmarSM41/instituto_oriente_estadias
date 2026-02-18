import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-shop-page',
  imports: [RouterLink],
  templateUrl: './shop-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopPage {
addToCart(_t35: any) {
throw new Error('Method not implemented.');
}
cartCount() {
throw new Error('Method not implemented.');
}
cartTotal() {
throw new Error('Method not implemented.');
}
filteredProducts() {
throw new Error('Method not implemented.');
}
}
