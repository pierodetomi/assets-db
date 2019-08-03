import { Model, Sequelize, DataTypes } from "sequelize";

export class Asset extends Model {
    public static initModel(db: Sequelize, syncDb: boolean = false): void {
        Asset.init(
            {
                id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
                name: { type: DataTypes.STRING, allowNull: false },
                typeId: { type: DataTypes.UUIDV4, allowNull: false },
                thumbnailUrl: { type: DataTypes.STRING(1000000000), allowNull: true },
                category1Id: { type: DataTypes.UUIDV4, allowNull: false },
                category2Id: { type: DataTypes.UUIDV4, allowNull: true },
                category3Id: { type: DataTypes.UUIDV4, allowNull: true },
                tags: { type: DataTypes.STRING, allowNull: true },
                engine: { type: DataTypes.STRING, allowNull: true },
                engineVersion: { type: DataTypes.STRING, allowNull: true },
                note: { type: DataTypes.STRING({ length: 4000 }), allowNull: true }
            },
            {
                sequelize: db,
                modelName: "asset"
            }
        );
        
        if(syncDb)
            Asset.sync({ force: true });
    }

    public static syncSchema(): void {
        Asset.sync({ force: true });
    }
}