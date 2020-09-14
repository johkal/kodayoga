import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    StoreComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
