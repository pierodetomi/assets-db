import { Controller, Get, Post, Body, Put, Delete, Param, Patch, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { DbService } from 'src/services/db.service';
import { AssetType } from 'src/models/db/asset-type';
import { AssetCategory } from 'src/models/db/asset-category';
import { Asset } from 'src/models/db/asset';
import { FileInterceptor } from "@nestjs/platform-express";
import { AssetFile } from 'src/models/db/asset-file';
import { AssetFileData } from 'src/models/db/asset-file-data';
import { Stream } from 'stream';

@Controller("api/assets")
export class AssetsController {
    constructor(private readonly dbService: DbService) { }

    @Get("create-db")
    createDb(): string {
        Asset.syncSchema();
        AssetType.syncSchema();
        AssetCategory.syncSchema();
        AssetFile.syncSchema();
        AssetFileData.syncSchema();

        return "OK";
    }

    @Put("type")
    async addType(@Body() data: any): Promise<AssetType> {
        var self: AssetsController = this;

        return new Promise<AssetType>(function(resolve, reject): void {
            self.dbService.addType(data, function(type: AssetType): void {
                resolve(type);
            });
        });
    }

    @Get("types")
    async getAllTypes(): Promise<Array<any>> {
        var self: AssetsController = this;

        return new Promise<Array<any>>(function(resolve, reject): void {
            self.dbService.getAllTypes(function(types: Array<any>): void {
                resolve(types);
            });
        });
    }

    @Patch("type")
    async updateType(@Body() data: any): Promise<AssetType> {
        var self: AssetsController = this;

        return new Promise<AssetType>(function(resolve, reject): void {
            self.dbService.updateType(data, function(type: AssetType): void {
                resolve(type);
            });
        });
    }

    @Delete("type/:id")
    async deleteType(@Param("id") id: string): Promise<void> {
        var self: AssetsController = this;

        return new Promise(function(resolve, reject): void {
            self.dbService.deleteType(id, function(): void {
                resolve();
            });
        });
    }

    @Put("category")
    async addCategory(@Body() data: any): Promise<AssetCategory> {
        var self: AssetsController = this;

        return new Promise<AssetCategory>(function(resolve, reject): void {
            self.dbService.addCategory(data, function(category: AssetCategory): void {
                resolve(category);
            });
        });
    }

    @Get("categories")
    async getAllCategories(): Promise<Array<any>> {
        var self: AssetsController = this;

        return new Promise<Array<any>>(function(resolve, reject): void {
            self.dbService.getAllCategories(function(categories: Array<any>): void {
                resolve(categories);
            });
        });
    }

    @Patch("category")
    async updateCategory(@Body() data: any): Promise<AssetCategory> {
        var self: AssetsController = this;

        return new Promise<AssetCategory>(function(resolve, reject): void {
            self.dbService.updateCategory(data, function(category: AssetCategory): void {
                resolve(category);
            });
        });
    }

    @Delete("category/:id")
    async deleteCategory(@Param("id") id: string): Promise<void> {
        var self: AssetsController = this;

        return new Promise(function(resolve, reject): void {
            self.dbService.deleteCategory(id, function(): void {
                resolve();
            });
        });
    }

    @Post()
    async getAssets(@Body() filter: any): Promise<Array<Asset>> {
        var self: AssetsController = this;

        return new Promise<Array<Asset>>(function(resolve, reject): void {
            self.dbService.getAssets(filter, function(assets: Array<Asset>): void {
                resolve(assets);
            });
        });
    }

    @Get(":id")
    async getAssetById(@Param("id") id: string): Promise<Asset> {
        var self: AssetsController = this;

        return new Promise<Asset>(function(resolve, reject): void {
            self.dbService.getAssetById(id, function(asset: Asset): void {
                resolve(asset);
            });
        });
    }

    @Put()
    async addAsset(@Body() data: any): Promise<Asset> {
        var self: AssetsController = this;

        return new Promise<Asset>(function(resolve, reject): void {
            self.dbService.addAsset(data, function(asset: Asset): void {
                resolve(asset);
            });
        });
    }

    @Put(":id/files")
    @UseInterceptors(FileInterceptor("file"))
    async addAssetFile(@UploadedFile() file, @Param("id") id: string): Promise<AssetFile> {
        var self: AssetsController = this;

        return new Promise<AssetFile>(function(resolve, reject): void {
            self.dbService.addAssetFile(id, file, function(assetFile: AssetFile): void {
                resolve(assetFile);
            });
        });
    }

    @Patch(":id/file")
    async updateAssetFile(@Param("id") id: string, @Body() data: any): Promise<AssetType> {
        var self: AssetsController = this;

        return new Promise<AssetFile>(function(resolve, reject): void {
            self.dbService.updateAssetFile(data, function(file: AssetFile): void {
                resolve(file);
            });
        });
    }

    @Get(":id/files")
    async getAssetFiles(@Param("id") assetId: string): Promise<Array<AssetFile>> {
        var self: AssetsController = this;

        return new Promise<Array<AssetFile>>(function(resolve, reject): void {
            self.dbService.getAssetFiles(assetId, function(files: Array<AssetFile>): void {
                resolve(files);
            });
        });
    }

    @Get(":id/files/:fileId/download")
    async downloadAssetFile(@Param("id") id: string, @Param("fileId") fileId: string, @Res() res: any): Promise<void> {
        var self: AssetsController = this;

        return new Promise(function(resolve, reject): void {
            self.dbService.getAssetFile(fileId, function(assetFile: AssetFile): void {
                var fileMetadata: any = assetFile.get({ plain: true });

                self.dbService.getAssetFileData(fileId, function(assetFileData: AssetFileData): void {
                    var fileData: any = assetFileData.get({ plain: true });
                    
                    res.set("Content-Type", fileMetadata.type);
                    res.set("Content-Length", fileMetadata.size);
                    res.setHeader("Content-disposition", "attachment; filename=" + fileMetadata.name);
                    
                    const buf: Buffer = new Buffer(fileData.data, "binary");
                    res.write(buf, "binary");
                    res.end(null, "binary");

                    resolve();
                });
            });
        });
    }

    @Delete(":id/files/:fileId")
    async deleteAssetFile(@Param("id") assetId: string, @Param("fileId") fileId: string): Promise<void> {
        var self: AssetsController = this;

        return new Promise(function(resolve, reject): void {
            self.dbService.deleteAssetFile(fileId, function(): void {
                resolve();
            });
        });
    }
}