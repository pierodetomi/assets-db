import { Injectable } from '@nestjs/common';
import { Sequelize } from "sequelize";
import { Asset } from 'src/models/db/asset';
import * as uuid from "uuidv4";
import { AssetType } from 'src/models/db/asset-type';
import { AssetCategory } from 'src/models/db/asset-category';
import { AssetFile } from 'src/models/db/asset-file';
import { AssetFileData } from 'src/models/db/asset-file-data';
import { AppConfigService } from './app-config.service';

@Injectable()
export class DbService {
    private db: Sequelize;

    constructor(appConfig: AppConfigService) {
        var dbPath: string = appConfig.get("dbPath"); // (__dirname + "/../data/db.sqlite");
        console.log("DB PATH: " + dbPath);
        
        this.db = new Sequelize({
            dialect: "sqlite",
            storage: dbPath
        });

        var syncDb: boolean = false;

        AssetFile.initModel(this.db, syncDb);
        AssetFileData.initModel(this.db, syncDb);
        AssetType.initModel(this.db, syncDb);
        AssetCategory.initModel(this.db, syncDb);
        Asset.initModel(this.db, syncDb);
    }

    public addType(data: any, callback: (type: AssetType) => void): void {
        AssetType.create({
            id: uuid(),
            name: data.name
        }).then(type => {
            callback(type);
        });
    }

    public getAllTypes(callback: (types: Array<any>) => void): void {
        AssetType.findAll().then(types => {
            callback(types);
        });
    }

    public updateType(data: any, callback: (type: AssetType) => void): void {
        AssetType.update(data, {
            where: { id: data.id },
            fields: [ "name" ]
        }).then(type => {
            callback(type);
        });
    }

    public deleteType(id: string, callback: () => void): void {
        AssetType.destroy({
            where: { id: id }
        }).then(() => {
            callback();
        });
    }

    public addCategory(data: any, callback: (category: AssetCategory) => void): void {
        AssetCategory.create({
            id: uuid(),
            name: data.name
        }).then(category => {
            callback(category);
        });
    }

    public getAllCategories(callback: (categories: Array<any>) => void): void {
        AssetCategory.findAll().then(categories => {
            callback(categories);
        });
    }

    public updateCategory(data: any, callback: (category: AssetCategory) => void): void {
        AssetCategory.update(data, {
            where: { id: data.id },
            fields: [ "name" ]
        }).then(category => {
            callback(category);
        });
    }

    public deleteCategory(id: string, callback: () => void): void {
        AssetCategory.destroy({
            where: { id: id }
        }).then(() => {
            callback();
        });
    }

    public addAsset(data: any, callback: (asset: Asset) => void): void {
        data.id = uuid();
        Asset.create(data).then(asset => callback(asset));
    }

    public getAssetById(id: string, callback: (asset: Asset) => void): void {
        Asset.findByPk(id).then(asset => callback(asset));
    }

    public getAssets(filter: any, callback: (assets: Array<Asset>) => void): void {
        var typeFilter: string = "";

        for(var i: number = 0; i < filter.types.length; i++) {
            var f: string = "typeId = '" + filter.types[i] + "'";

            if(typeFilter.length == 0) typeFilter = f;
            else typeFilter += (" OR " + f);
        }

        if(typeFilter == "")
            typeFilter = "1=1";

        var categoryFilter: string = filter.category
            ? " AND (category1Id = '" + filter.category + "' OR category2Id = '" + filter.category + "' OR category3Id = '" + filter.category + "')"
            : "";
        
        var queryFilter: string = filter.query && filter.query != null && filter.query.length > 0
            ? " AND (name like '%" + filter.query + "%' OR tags like '%" + filter.query + "%' OR engine like '%" + filter.query + "%' OR engineVersion like '%" + filter.query + "%' OR note like '%" + filter.query + "%')"
            : "";

        var query = "SELECT * FROM assets WHERE ("+ typeFilter +") " + categoryFilter + queryFilter;

        Asset.sequelize.query(query).then(result => {
            callback(result[0]);
        });
    }

    public addAssetFile(assetId: string, file: any, callback: (assetFile: AssetFile) => void): void {
        AssetFile.create({
            id: uuid(),
            assetId: assetId,
            name: file.originalname,
            size: file.size,
            type: file.mimetype
        })
        .then(assetFile => {
            AssetFileData.create({
                id: assetFile.id,
                data: file.buffer
            })
            .then(assetFileData => callback(assetFile));
        });
    }

    public getAssetFile(id: string, callback: (assetFile: AssetFile) => void): void {
        AssetFile.findByPk(id).then(file => callback(file));
    }

    public getAssetFiles(assetId: string, callback: (files: Array<AssetFile>) => void): void {
        AssetFile.findAll({
            where: { assetId: assetId }
        })
        .then(files => callback(files));
    }

    public getAssetFileData(id: string, callback: (assetFileData: AssetFileData) => void): void {
        AssetFileData.findByPk(id).then(data => callback(data));
    }

    public deleteAssetFile(fileId: string, callback: () => void): void {
        AssetFileData.destroy({
            where: { id: fileId }
        })
        .then(() => {
            AssetFile.destroy({
                where: { id: fileId }
            })
            .then(() => callback());
        });
    }
}