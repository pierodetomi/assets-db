import { Injectable } from '@angular/core';
import { AssetsFilter } from '../models/assets-filter';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AssetViewerService {
    private filter: BehaviorSubject<AssetsFilter>;

    constructor() {
        this.filter = new BehaviorSubject<AssetsFilter>(null);
    }

    public getFilter(): AssetsFilter {
        return this.filter.getValue();
    }

    public setFilter(filter: AssetsFilter): void {
        this.filter.next(filter);
    }

    public updateFilter(fragment: any): void {
        var actual: AssetsFilter = this.filter.getValue();

        for(var key in fragment)
            actual[key] = fragment[key];
        
        this.filter.next(actual);
    }

    public onFilterChanged(callback: (filter: AssetsFilter) => void): Subscription {
        return this.filter.asObservable().subscribe(filter => callback(filter));
    }
}