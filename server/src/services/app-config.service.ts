import { Injectable } from "@nestjs/common";
import * as fs from "fs";

@Injectable()
export class AppConfigService {
    private config: any;

    constructor() {
        var json: string = fs.readFileSync(__dirname + "/../config/app.config.json", "utf-8");
        this.config = JSON.parse(json);
    }

    public get(key: string): any {
        return this.config[key];
    }
}