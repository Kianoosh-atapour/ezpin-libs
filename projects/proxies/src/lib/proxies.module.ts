import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProxiesService, RetailProxyService, ShopProxyService } from "./index";

@NgModule({
  declarations: [],
  imports: [],
  providers: [ProxiesService, ShopProxyService, RetailProxyService, HttpClient],
})
export class ProxiesModule {}
