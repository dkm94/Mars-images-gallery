import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PerDaysPhotosComponent } from './pages/per-days-photos/per-days-photos.component';
import { ListImagesComponent } from './features/list-images/list-images.component';
import { ListImagesItemComponent } from './list-images-item/list-images-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarsImagesService } from './core/services/marsImages.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PerDaysPhotosComponent,
    ListImagesComponent,
    ListImagesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    MarsImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
