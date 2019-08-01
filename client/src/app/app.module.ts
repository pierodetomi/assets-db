import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Config
import { ROUTES } from './config/app-routing.config';

// Components
import { AppComponent } from './app.component';
import { AssetsPageComponent } from './components/assets-page/assets-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideFiltersComponent } from './components/side-filters/side-filters.component';
import { AssetsViewerComponent } from './components/assets-viewer/assets-viewer.component';
import { UICheckComponent } from './components/ui-check/ui-check.component';
import { AssetTypesPageComponent } from './components/asset-types-page/asset-types-page.component';
import { AssetCategoriesPageComponent } from './components/asset-categories-page/asset-categories-page.component';
import { NewAssetComponent } from './components/new-asset/new-asset.component';
import { UITagsInputComponent } from './components/ui-tags-input/ui-tags-input.component';
import { UIThumbnailPickerComponent } from './components/ui-thumbnail-picker/ui-thumbnail-picker.component';
import { AssetPageComponent } from './components/asset-page/asset-page.component';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,

    UICheckComponent,
    UITagsInputComponent,
    UIThumbnailPickerComponent,
    
    NavbarComponent,
    SideFiltersComponent,
    AssetsViewerComponent,
    NewAssetComponent,
    
    AssetsPageComponent,
    AssetPageComponent,
    AssetTypesPageComponent,
    AssetCategoriesPageComponent,

    FileSizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  exports: [ RouterModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }