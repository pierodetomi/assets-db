import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssetsApi } from 'src/app/api/assets.api';
import { IAssetCategory } from 'src/app/models/asset-category';
import { DataService } from 'src/app/services/data.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
    selector: "asset-categories-page",
    templateUrl: "./asset-categories-page.component.html",
    styleUrls: [ "./asset-categories-page.component.scss" ]
})
export class AssetCategoriesPageComponent implements OnInit, OnDestroy {
    private dataSubscription: Subscription;

    public categories: Array<IAssetCategory>;

    public isLoading: boolean;

    public newCategoryName: string;

    constructor(private assetsApi: AssetsApi, private data: DataService) {
        this.categories = null;
        this.newCategoryName = null;
        this.isLoading = true;
    }

    ngOnInit(): void {
        var self: AssetCategoriesPageComponent = this;

        this.dataSubscription = this.dataSubscription = this.data.onAssetCategoriesChanged(function(categories: Array<IAssetCategory>): void {
            self.categories = categories;
            self.isLoading = false;
        });
    }

    ngOnDestroy(): void {
        this.dataSubscription.unsubscribe();
    }

    public canAdd(): boolean {
        return (
            this.newCategoryName !== undefined &&
            this.newCategoryName !== null &&
            this.newCategoryName.length > 0
        );
    }

    public add(): void {
        var self: AssetCategoriesPageComponent = this;

        this.assetsApi.addCategory(
            {
                id: null,
                name: this.newCategoryName
            },
            function(category: IAssetCategory): void {
                self.newCategoryName = null;
                self.categories.push(category);
                self.data.refreshAssetCategories(self.categories);
            }
        );
    }

    public rename(category: IAssetCategory): void {
        var c: any = category;
        c.editingName = c.name;
        c.isEditing = true;
    }

    public cancelRename(category: IAssetCategory): void {
        var c: any = category;
        c.isEditing = false;
    }

    public confirmRename(category: IAssetCategory): void {
        var c: any = category;
        
        if(!c.editingName || c.editingName == null || c.editingName == "")
            return;

        c.name = c.editingName;

        this.assetsApi.updateCategory(category, function(updatedCategory: IAssetCategory): void {
            c.isEditing = false;
        });
    }
}