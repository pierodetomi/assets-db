import { Routes } from '@angular/router';

import { AssetsPageComponent } from "../components/assets-page/assets-page.component";
import { AssetTypesPageComponent } from '../components/asset-types-page/asset-types-page.component';
import { AssetCategoriesPageComponent } from '../components/asset-categories-page/asset-categories-page.component';
import { AssetPageComponent } from '../components/asset-page/asset-page.component';
//import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
    { path: "", redirectTo: "/assets", pathMatch: "full" },
    { path: "assets", component: AssetsPageComponent },
    { path: "asset/:id", component: AssetPageComponent },
    { path: "types", component: AssetTypesPageComponent },
    { path: "categories", component: AssetCategoriesPageComponent }
    // ,
    // { path: "**", component: PageNotFoundComponent }
];