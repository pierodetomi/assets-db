import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAssetType } from '../models/asset-type';
import { environment } from 'src/environments/environment';
import { IAssetCategory } from '../models/asset-category';
import { AssetsFilter } from '../models/assets-filter';
import { IAsset } from '../models/asset';
import { IAssetFile } from '../models/asset-file';

@Injectable({ providedIn: "root" })
export class AssetsApi {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiBaseUrl + "/api/assets";
    }

    public addType(type: IAssetType, callback: (type: IAssetType) => void): void {
        var url: string = this.baseUrl + "/type";
        this.http.put<IAssetType>(url, type)
            .subscribe(data => {
                callback(data);
            });
    }

    public getAllTypes(callback: (types: Array<IAssetType>) => void): void {
        var url: string = this.baseUrl + "/types";
        this.http.get<Array<IAssetType>>(url)
            .subscribe(data => {
                callback(data);
            });
    }

    public updateType(type: IAssetType, callback: (type: IAssetType) => void): void {
        var url: string = this.baseUrl + "/type";
        this.http.patch<IAssetType>(url, type)
            .subscribe(data => {
                callback(data);
            });
    }

    public deleteType(id: string, callback: () => void): void {
        var url: string = this.baseUrl + "/type/" + id;
        this.http.delete(url)
            .subscribe(() => {
                callback();
            });
    }

    public addCategory(category: IAssetCategory, callback: (category: IAssetCategory) => void): void {
        var url: string = this.baseUrl + "/category";
        this.http.put<IAssetCategory>(url, category)
            .subscribe(data => {
                callback(data);
            });
    }

    public getAllCategories(callback: (categories: Array<IAssetCategory>) => void): void {
        var url: string = this.baseUrl + "/categories";
        this.http.get<Array<IAssetCategory>>(url)
            .subscribe(data => {
                callback(data);
            });
    }

    public updateCategory(category: IAssetCategory, callback: (category: IAssetCategory) => void): void {
        var url: string = this.baseUrl + "/category";
        this.http.patch<IAssetCategory>(url, category)
            .subscribe(data => {
                callback(data);
            });
    }

    public deleteCategory(id: string, callback: () => void): void {
        var url: string = this.baseUrl + "/category/" + id;
        this.http.delete(url)
            .subscribe(() => {
                callback();
            });
    }

    public getAssets(filter: AssetsFilter, callback: (assets: Array<IAsset>) => void): void {
        var url: string = this.baseUrl;
        this.http.post<Array<IAsset>>(url, filter)
            .subscribe(data => {
                callback(data);
            });
    }

    public getAssetById(id: string, callback: (asset: IAsset) => void): void {
        var url: string = this.baseUrl + "/" + id;
        this.http.get<IAsset>(url)
            .subscribe(data => {
                callback(data);
            });
    }

    public addAsset(asset: IAsset, callback: (asset: IAsset) => void): void {
        var url: string = this.baseUrl;
        this.http.put<IAsset>(url, asset)
            .subscribe(data => {
                callback(data);
            });
    }

    public addAssetFile(id: string, file: File, callback: (assetFile: any) => void): void {
        var form: FormData = new FormData();
        form.append("file", file);

        var url: string = (this.baseUrl + "/" + id + "/files");
        var headers: HttpHeaders = new HttpHeaders().set("encoding", "multipart/form-data");
        this.http.put<IAssetFile>(url, form, { headers: headers })
            .subscribe(data => {
                callback(data);
            });
    }

    public getAssetFiles(assetId: string, callback: (files: Array<IAssetFile>) => void): void {
        var url: string = this.baseUrl + "/" + assetId + "/files";
        this.http.get<Array<IAssetFile>>(url)
            .subscribe(files => callback(files));
    }

    public downloadAssetFile(assetId: string, fileId: string) {
        var url: string = (this.baseUrl + "/" + assetId + "/files/" + fileId + "/download");
        window.location.href = url;
    }

    public deleteAssetFile(assetId: string, fileId: string, callback: () => void): void {
        var url: string = this.baseUrl + "/" + assetId + "/files/" + fileId;
        this.http.delete(url)
            .subscribe(() => callback());
    }
}