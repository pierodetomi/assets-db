import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssetsApi } from 'src/app/api/assets.api';
import { IAssetType } from 'src/app/models/asset-type';
import { IAsset } from 'src/app/models/asset';
import { IAssetCategory } from 'src/app/models/asset-category';
import { UIService } from 'src/app/services/ui-service';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "new-asset",
    templateUrl: "./new-asset.component.html",
    styleUrls: ["./new-asset.component.scss"]
})
export class NewAssetComponent implements OnInit, OnDestroy {
    private typesSubscription: Subscription;
    private categoriesSubscription: Subscription;
    private modalSubscription: Subscription;

    public types: Array<IAssetType>;

    public categories: Array<IAssetCategory>;

    public asset: IAsset;

    public isOpen: boolean;

    constructor(private data: DataService, private assetsApi: AssetsApi, private ui: UIService) {
        this.types = [];
        this.categories = [];
        
        this.asset = <any>{};
        
        this.isOpen = false;
    }

    ngOnInit(): void {
        var self: NewAssetComponent = this;

        this.typesSubscription = this.data.onAssetTypesChanged(function (types: Array<IAssetType>): void {
            self.types = types;
        });

        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function (categories: Array<IAssetCategory>): void {
            self.categories = categories;
        });

        this.modalSubscription = this.ui.onModalChanged(function(modalName: string): void {
            self.isOpen = (modalName === "new-asset");
        });
    }

    ngOnDestroy(): void {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
        this.modalSubscription.unsubscribe();
    }

    public close(): void {
        this.ui.setCurrentModal(null);
        this.asset = <any>{};
    }

    public save(): void {
        var data: IAsset = <any>{};
        
        for(var key in this.asset)
            data[key] = this.asset[key];

        var tags: Array<string> = <any>(data.tags);
        data.tags = tags.join(",");

        var self: NewAssetComponent = this;

        this.assetsApi.addAsset(data, function(asset: IAsset): void {
            console.log("Asset created: ", asset);
            
            self.close();
        });
    }
}