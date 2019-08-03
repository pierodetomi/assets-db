import { AssetFileType } from './asset-file-type';

export interface IAssetFile {
    id: string;
    assetId: string;
    name: string;
    size: number;
    type: string;
    fileType: AssetFileType;
    comment: string;
}