export class AssetsFilter {
    public query: string;
    public types: Array<string>;
    public category: string;

    constructor() {
        this.query = null;
        this.types = [];
        this.category = null;
    }
}