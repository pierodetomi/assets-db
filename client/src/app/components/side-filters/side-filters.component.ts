import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssetsApi } from 'src/app/api/assets.api';
import { IAssetType } from 'src/app/models/asset-type';
import { IAssetCategory } from 'src/app/models/asset-category';
import { AssetViewerService } from 'src/app/services/asset-viewer.service';
import { AssetsFilter } from 'src/app/models/assets-filter';
import { UIService } from 'src/app/services/ui-service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "side-filters",
    templateUrl: "./side-filters.component.html",
    styleUrls: [ "./side-filters.component.scss" ]
})
export class SideFiltersComponent implements OnInit, OnDestroy {
    private typesSubscription: Subscription;
    private categoriesSubscription: Subscription;

    public types: Array<IAssetType>;

    public categories: Array<IAssetCategory>;

    public selectedCategory: IAssetCategory;

    constructor(private data: DataService, private assets: AssetsApi, private assetViewer: AssetViewerService, private ui: UIService) {
        this.types = [];
        this.categories = [];
        this.selectedCategory = null;
    }

    ngOnInit(): void {
        var self: SideFiltersComponent = this;

        this.typesSubscription = this.data.onAssetTypesChanged(function(types: Array<IAssetType>): void {
            for(var t: number = 0; t < types.length; t++)
                (<any>(types[t])).isChecked = true;
            
            self.types = types;

            var filter: AssetsFilter = new AssetsFilter();

            for(var i: number = 0; i < self.types.length; i++)
                filter.types.push(self.types[i].id);

            self.assetViewer.setFilter(filter);
        });

        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function(categories: Array<IAssetCategory>): void {
            self.categories = categories;
        });
    }

    ngOnDestroy(): void {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
    }

    public openNewAssetModal(): void {
        this.ui.setCurrentModal("new-asset");
    }

    public onFilterChanged(): void {
        var filter: AssetsFilter = new AssetsFilter();

        for(var i: number = 0; i < this.types.length; i++)
            if((<any>(this.types[i])).isChecked)
                filter.types.push(this.types[i].id);
        
        if(this.selectedCategory == null) filter.category = null;
        else filter.category = this.selectedCategory.id;

        this.assetViewer.setFilter(filter);
    }

    public selectCategory(category: IAssetCategory = null): void {
        this.selectedCategory = category;
        this.onFilterChanged();
    }
}