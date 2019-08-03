import { Model, Sequelize, DataTypes } from "sequelize";

export class AssetFile extends Model {
    public static initModel(db: Sequelize, syncDb: boolean = false): void {
        AssetFile.init(
            {
                id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
                assetId: { type: DataTypes.UUIDV4, allowNull: false },
                name: { type: DataTypes.STRING, allowNull: false },
                size: { type: DataTypes.NUMBER, allowNull: false },
                type: { type: DataTypes.STRING, allowNull: true }
            },
            {
                sequelize: db,
                modelName: "assetFile"
            }
        );
        
        if(syncDb)
            AssetFile.sync({ force: true });
    }

    public static syncSchema(): void {
        AssetFile.sync({ force: true });
    }
}