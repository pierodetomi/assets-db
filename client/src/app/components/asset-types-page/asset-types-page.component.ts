import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssetsApi } from 'src/app/api/assets.api';
import { IAssetType } from 'src/app/models/asset-type';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "asset-types-page",
    templateUrl: "./asset-types-page.component.html",
    styleUrls: [ "./asset-types-page.component.scss" ]
})
export class AssetTypesPageComponent implements OnInit, OnDestroy {
    private dataSubscription: Subscription;

    public types: Array<IAssetType>;

    public isLoading: boolean;

    public newTypeName: string;

    constructor(private assetsApi: AssetsApi, private data: DataService) {
        this.types = null;
        this.newTypeName = null;
        this.isLoading = true;
    }

    ngOnInit(): void {
        var self: AssetTypesPageComponent = this;

        this.dataSubscription = this.data.onAssetTypesChanged(function(types: Array<IAssetType>): void {
            self.types = types;
            self.isLoading = false;
        });
    }

    ngOnDestroy(): void {
        this.dataSubscription.unsubscribe();
    }

    public canAdd(): boolean {
        return (
            this.newTypeName !== undefined &&
            this.newTypeName !== null &&
            this.newTypeName.length > 0
        );
    }

    public add(): void {
        var self: AssetTypesPageComponent = this;

        this.assetsApi.addType(
            {
                id: null,
                name: this.newTypeName
            },
            function(type: IAssetType): void {
                self.newTypeName = null;
                self.types.push(type);
                self.data.refreshAssetTypes(self.types);
            }
        );
    }
}