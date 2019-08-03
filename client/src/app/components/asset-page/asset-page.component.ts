import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAsset } from 'src/app/models/asset';
import { ActivatedRoute } from '@angular/router';
import { AssetsApi } from 'src/app/api/assets.api';
import { DataService } from 'src/app/services/data.service';
import { IAssetType } from 'src/app/models/asset-type';
import { IAssetCategory } from 'src/app/models/asset-category';
import { IAssetFile } from 'src/app/models/asset-file';
import { AssetFileType } from 'src/app/models/asset-file-type';

@Component({
    selector: "asset-page",
    templateUrl: "./asset-page.component.html",
    styleUrls: [ "./asset-page.component.scss" ]
})
export class AssetPageComponent implements OnInit, OnDestroy {
    private routeSubscription: Subscription;
    private typesSubscription: Subscription;
    private categoriesSubscription: Subscription;

    private imageNotFoundUrl: string = "data:image/jpeg;base64,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46sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAhAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAFAAAAAAAAAAAAAAAAAAAABFAAAAAAAAAAIoAAAAAAAAEUEUAAAAAAAACKAAAAAAAAAAQoAAAAAAAAAECgAAAAAAAAJSAsUAAAAAAAABABQAAAAAAAAQAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";

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

    get fileTypes(): Array<string> {
        var fileTypes: Array<string> = [];

        for(var key in AssetFileType)
            if(parseInt(key, 10) >= 0)
                fileTypes.push(AssetFileType[key]);

        return fileTypes;
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
        var hasThumbnailUrl: boolean = (
            this.asset.thumbnailUrl !== undefined &&
            this.asset.thumbnailUrl !== null &&
            this.asset.thumbnailUrl.length > 0
        );

        return (hasThumbnailUrl ? this.asset.thumbnailUrl : this.imageNotFoundUrl);
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
            self.files.push(assetFile);
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

    public editFile(file: IAssetFile): void {
        var f: any = file;
        f.editingFileType = file.fileType;
        f.editingComment = file.comment;
        f.isEditing = true;
    }

    public cancelEditFile(file: IAssetFile): void {
        var f: any = file;
        f.isEditing = false;
    }

    public saveFile(file: IAssetFile): void {
        var f: any = file;
        file.fileType = f.editingFileType;
        file.comment = f.editingComment;

        this.assetsApi.updateAssetFile(file, function(updatedFile: IAssetFile): void {
            f.isEditing = false;
        });
    }
}