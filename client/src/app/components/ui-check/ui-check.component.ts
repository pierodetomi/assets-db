import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "ui-check",
    templateUrl: "./ui-check.component.html",
    styleUrls: [ "./ui-check.component.scss" ]
})
export class UICheckComponent {
    @Input() public checked: boolean;

    @Output() public checkedChange = new EventEmitter();

    public toggleChecked(): void {
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }
}