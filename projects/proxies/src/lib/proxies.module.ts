import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProxiesService, RetailProxyService, ShopProxyService } from "proxies";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProxiesService, ShopProxyService, RetailProxyService, HttpClient],
})
export class ProxiesModule {}
