import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AssetViewerService } from 'src/app/services/asset-viewer.service';
import { AssetsFilter } from 'src/app/models/assets-filter';
import { AssetsApi } from 'src/app/api/assets.api';
import { IAsset } from 'src/app/models/asset';
import { IAssetType } from 'src/app/models/asset-type';
import { DataService } from 'src/app/services/data.service';
import { IAssetCategory } from 'src/app/models/asset-category';

@Component({
    selector: "assets-viewer",
    templateUrl: "./assets-viewer.component.html",
    styleUrls: [ "./assets-viewer.component.scss" ]
})
export class AssetsViewerComponent implements OnInit, OnDestroy {
    private typesSubscription: Subscription;
    private categoriesSubscription: Subscription;
    private filterSubscription: Subscription;

    private types: Array<IAssetType>;

    private categories: Array<IAssetCategory>;

    public searchQuery: string;

    public assets: Array<IAsset>;

    constructor(private assetViewer: AssetViewerService, private data: DataService, private assetsApi: AssetsApi) {
        this.types = [];
        this.assets = [];
    }

    ngOnInit(): void {
        var self: AssetsViewerComponent = this;

        this.typesSubscription = this.data.onAssetTypesChanged(function(types: Array<IAssetType>): void {
            self.types = types;
        });

        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function(categories: Array<IAssetCategory>): void {
            self.categories = categories;
        });

        this.filterSubscription = this.assetViewer.onFilterChanged(function(filter: AssetsFilter): void {
            self.loadAssets(filter);
        });
    }

    ngOnDestroy(): void {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
        this.filterSubscription.unsubscribe();
    }

    get hasAssets(): boolean {
        return (
            this.assets !== undefined &&
            this.assets !== null &&
            this.assets.length > 0
        );
    }

    public getAssetThumbnailUrl(asset: IAsset): string {
        var fallbackUrl: string = "/assets/img/image-not-found.jpg";
        var hasThumbnailUrl: boolean = (
            asset.thumbnailUrl !== undefined &&
            asset.thumbnailUrl !== null &&
            asset.thumbnailUrl.length > 0
        );

        return hasThumbnailUrl ? asset.thumbnailUrl : fallbackUrl;
    }

    public getAssetTypeName(typeId: string): string {
        var type: IAssetType = null;

        for(var i: number = 0; i < this.types.length; i++)
            if(this.types[i].id === typeId) {
                type = this.types[i];
                break;
            }
        
        return type !== null ? type.name : "-";
    }

    public getAssetCategoryName(categoryId: string): string {
        if(categoryId === undefined || categoryId === null || categoryId === "")
            return "";
        
        var category: IAssetCategory = null;

        for(var i: number = 0; i < this.categories.length; i++)
            if(this.categories[i].id === categoryId) {
                category = this.categories[i];
                break;
            }
        
        return category !== null ? category.name : "-";
    }

    public onSearchKeyPress(event: KeyboardEvent): void {
        var isEnter: boolean = (event.which === 13);

        if(!isEnter)
        return;

        this.assetViewer.updateFilter({ query: this.searchQuery });
    }

    private loadAssets(filter: AssetsFilter): void {
        if(filter == undefined || filter == null || filter.types == undefined || filter.types == null)
            return;
        
        var self: AssetsViewerComponent = this;

        this.assetsApi.getAssets(filter, function(assets: Array<IAsset>): void {
            self.assets = assets;
        });
    }
}