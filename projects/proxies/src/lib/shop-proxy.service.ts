import { Injectable } from '@angular/core';
import {
  AuthenticationClient,
  BuyOrdersClient,
  CurrenciesClient,
  ProductsClient,
  RegionsClient,
  TeamClient,
} from './proxies/proxy';
import {
  DigitalDeliveriesClient,
  PhysicalCardsClient,
  SyncClient,
} from './proxies/shop-proxy';

@Injectable({
  providedIn: 'root',
})
export class ShopProxyService {
  constructor(
    readonly buyOrdersClient: BuyOrdersClient,
    readonly currenciesClient: CurrenciesClient,
    readonly digitalDeliveriesClient: DigitalDeliveriesClient,
    readonly physicalCardsClient: PhysicalCardsClient,
    readonly productsClient: ProductsClient,
    readonly regionsClient: RegionsClient,
    readonly syncClient: SyncClient,
    readonly teamClient: TeamClient,
    readonly authenticationClient: AuthenticationClient
  ) {}
}
