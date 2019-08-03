import { Model, Sequelize, DataTypes } from "sequelize";

export class AssetCategory extends Model {
    public static initModel(db: Sequelize, syncDb: boolean = false): void {
        AssetCategory.init(
            {
                id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
                name: { type: DataTypes.STRING, allowNull: false }
            },
            {
                sequelize: db,
                modelName: "assetCategory"
            }
        );

        if(syncDb)
            AssetCategory.sync({ force: true });
    }

    public static syncSchema(): void {
        AssetCategory.sync({ force: true });
    }
}