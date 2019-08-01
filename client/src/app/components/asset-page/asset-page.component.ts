import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAsset } from 'src/app/models/asset';
import { ActivatedRoute } from '@angular/router';
import { AssetsApi } from 'src/app/api/assets.api';
import { DataService } from 'src/app/services/data.service';
import { IAssetType } from 'src/app/models/asset-type';
import { IAssetCategory } from 'src/app/models/asset-category';
import { IAssetFile } from 'src/app/models/asset-file';

@Component({
    selector: "asset-page",
    templateUrl: "./asset-page.component.html",
    styleUrls: [ "./asset-page.component.scss" ]
})
export class AssetPageComponent implements OnInit, OnDestroy {
    private routeSubscription: Subscription;
    private typesSubscription: Subscription;
    private categoriesSubscription: Subscription;

    public id: string;

    public types: Array<IAssetType>;

    public categories: Array<IAssetCategory>;

    public asset: IAsset;
    
    public files: Array<IAssetFile>;

    public isLoading: boolean;

    private selectedFileForUpload: File;

    constructor(private route: ActivatedRoute, private data: DataService, private assetsApi: AssetsApi) {
        this.id = null;
        this.types = [];
        this.categories = [];
        this.asset = null;
        this.files = null;
        this.selectedFileForUpload = null;
        
        this.isLoading = true;
    }

    ngOnInit(): void {
        var self: AssetPageComponent = this;

        this.typesSubscription = this.data.onAssetTypesChanged(function(types: Array<IAssetType>): void {
            self.types = types;
        });

        this.categoriesSubscription = this.data.onAssetCategoriesChanged(function(categories: Array<IAssetCategory>): void {
            self.categories = categories;
        });

        this.routeSubscription = this.route.params.subscribe(params => {
            self.id = params["id"];

            self.assetsApi.getAssetById(self.id, function(asset: IAsset): void {
                self.asset = asset;
                
                self.assetsApi.getAssetFiles(self.id, function(files: Array<IAssetFile>): void {
                    self.files = files;
                    self.isLoading = false;
                });
            });
        });
    }

    ngOnDestroy(): void {
        this.typesSubscription.unsubscribe();
        this.categoriesSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

    public getThumbnailUrl(): string {
        var fallbackUrl: string = "/assets/img/image-not-found.jpg";
        var hasThumbnailUrl: boolean = (
            this.asset.thumbnailUrl !== undefined &&
            this.asset.thumbnailUrl !== null &&
            this.asset.thumbnailUrl.length > 0
        );

        return hasThumbnailUrl ? this.asset.thumbnailUrl : fallbackUrl;
    }

    public getTypeName(): string {
        var type: IAssetType = null;

        for(var i: number = 0; i < this.types.length; i++)
            if(this.types[i].id === this.asset.typeId) {
                type = this.types[i];
                break;
            }
        
        return type !== null ? type.name : "-";
    }

    public getCategoryName(categoryId: string): string {
        if(categoryId === undefined || categoryId === null || categoryId === "")
            return "-";
        
        var category: IAssetCategory = null;

        for(var i: number = 0; i < this.categories.length; i++)
            if(this.categories[i].id === categoryId) {
                category = this.categories[i];
                break;
            }
        
        return category !== null ? category.name : "-";
    }

    public onSelectedFileForUpload(event) {
        var hasFile: boolean = (event.target.files && event.target.files.length);

        if(!hasFile) {
            this.selectedFileForUpload = null;
            return;
        }
        
        this.selectedFileForUpload = event.target.files[0];
    }

    public canAddFile(): boolean {
        return (this.selectedFileForUpload !== undefined && this.selectedFileForUpload !== null);
    }

    public addFile(): void {
        var self: AssetPageComponent = this;
        
        this.assetsApi.addAssetFile(this.id, this.selectedFileForUpload, function(assetFile: IAssetFile): void {
            self.selectedFileForUpload = null;
            console.log(assetFile);
        });
    }

    public downloadFile(file: IAssetFile): void {
        this.assetsApi.downloadAssetFile(this.id, file.id);
    }

    public deleteFile(file: IAssetFile): void {
        var self: AssetPageComponent = this;

        this.assetsApi.deleteAssetFile(this.id, file.id, function(): void {
            var indexToRemove: number = self.files.indexOf(file);
            self.files.splice(indexToRemove, 1);
        });
    }
}