import { Model, Sequelize, DataTypes } from "sequelize";

export class AssetFileData extends Model {
    public static initModel(db: Sequelize, syncDb: boolean = false): void {
        AssetFileData.init(
            {
                id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
                data: { type: DataTypes.BLOB("long"), allowNull: false }
            },
            {
                sequelize: db,
                modelName: "assetFileData"
            }
        );
        
        if(syncDb)
            AssetFileData.sync({ force: true });
    }
}