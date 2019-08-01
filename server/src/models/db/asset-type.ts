import { Model, Sequelize, DataTypes } from "sequelize";

export class AssetType extends Model {
    public static initModel(db: Sequelize, syncDb: boolean = false): void {
        AssetType.init(
            {
                id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
                name: { type: DataTypes.STRING, allowNull: false }
            },
            {
                sequelize: db,
                modelName: "assetType"
            }
        );

        if(syncDb)
            AssetType.sync({ force: true });
    }
}