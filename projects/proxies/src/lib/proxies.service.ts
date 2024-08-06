import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProxiesService {
  retailProxyBaseUrl!: string;
  shopProxyBaseUrl!: string;

  setRetailProxyBaseUrl(url: string): void {
    this.retailProxyBaseUrl = url;
  }
  setShopProxyBaseUrl(url: string): void {
    this.shopProxyBaseUrl = url;
  }
}
