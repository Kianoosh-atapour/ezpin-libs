import { Injectable } from '@angular/core';
import {
  AuthenticationClient,
  BanksClient,
  BranchesClient,
  BuyOrdersClient,
  CategoriesClient,
  CreditClient,
  CurrenciesClient,
  FinancialClient,
  GatewayListsClient,
  InvoicesClient,
  MerchantCurrencyLimitsClient,
  MerchantsClient,
  PaymentOrdersClient,
  PriceListsClient,
  ProductsClient,
  RegionsClient,
  ReportsClient,
  SaleManagersClient,
  SystemClient,
  TeamClient,
  WalletsClient,
  WebhookClient,
} from './proxies/proxy';

@Injectable({
  providedIn: 'root',
})
export class RetailProxyService {
  constructor(
    readonly banksClient: BanksClient,
    readonly branchesClient: BranchesClient,
    readonly buyOrdersClient: BuyOrdersClient,
    readonly categoriesClient: CategoriesClient,
    readonly creditClient: CreditClient,
    readonly currenciesClient: CurrenciesClient,
    readonly financialClient: FinancialClient,
    readonly gatewayListsClient: GatewayListsClient,
    readonly invoicesClient: InvoicesClient,
    readonly merchantCurrencyLimitsClient: MerchantCurrencyLimitsClient,
    readonly merchantsClient: MerchantsClient,
    readonly paymentOrdersClient: PaymentOrdersClient,
    readonly priceListsClient: PriceListsClient,
    readonly productsClient: ProductsClient,
    readonly regionsClient: RegionsClient,
    readonly reportsClient: ReportsClient,
    readonly saleManagersClient: SaleManagersClient,
    readonly systemClient: SystemClient,
    readonly teamClient: TeamClient,
    readonly walletsClient: WalletsClient,
    readonly webhookClient: WebhookClient,
    readonly authenticationClient: AuthenticationClient
  ) {}
}
