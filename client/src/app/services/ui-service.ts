import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({ providedIn: "root" })
export class UIService {
    private currentModal: BehaviorSubject<string>;

    constructor() {
        this.currentModal = new BehaviorSubject<string>(null);
    }

    public setCurrentModal(modalName: string): void {
        this.currentModal.next(modalName);
    }

    public onModalChanged(callback: (modalName: string) => void): Subscription {
        return this.currentModal.asObservable().subscribe(modal => callback(modal));
    }
}