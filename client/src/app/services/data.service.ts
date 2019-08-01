import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscribable, Subscription } from 'rxjs';
import { IAssetType } from '../models/asset-type';
import { IAssetCategory } from '../models/asset-category';
import { AssetsApi } from '../api/assets.api';

@Injectable({ providedIn: "root" })
export class DataService {
    private assetTypes: BehaviorSubject<Array<IAssetType>>;
    
    private assetCategories: BehaviorSubject<Array<IAssetCategory>>;

    constructor(private assetsApi: AssetsApi) {
        this.assetTypes = new BehaviorSubject<Array<IAssetType>>([]);
        this.assetCategories = new BehaviorSubject<Array<IAssetCategory>>([]);

        var self: DataService = this;

        this.assetsApi.getAllTypes(function(types: Array<IAssetType>): void {
            self.assetTypes.next(types);
        });

        this.assetsApi.getAllCategories(function(categories: Array<IAssetCategory>): void {
            self.assetCategories.next(categories);
        });
    }

    public refreshAssetTypes(types: Array<IAssetType>): void {
        this.assetTypes.next(types);
    }

    public refreshAssetCategories(categories: Array<IAssetCategory>): void {
        this.assetCategories.next(categories);
    }

    public onAssetTypesChanged(callback: (types: Array<IAssetType>) => void): Subscription {
        return this.assetTypes.asObservable().subscribe(types => callback(types));
    }

    public onAssetCategoriesChanged(callback: (categories: Array<IAssetCategory>) => void): Subscription {
        return this.assetCategories.asObservable().subscribe(categories => callback(categories));
    }
}