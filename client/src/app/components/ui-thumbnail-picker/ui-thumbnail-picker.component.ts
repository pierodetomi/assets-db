import { Component, ElementRef, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: "ui-thumbnail-picker",
    templateUrl: "./ui-thumbnail-picker.component.html",
    styleUrls: ["./ui-thumbnail-picker.component.scss"]
})
export class UIThumbnailPickerComponent {
    @Input() public thumbnailUrl: string;

    @Output() public thumbnailUrlChange =new EventEmitter();

    get hasThumbnail(): boolean {
        return (
            this.thumbnailUrl !== undefined &&
            this.thumbnailUrl !== null &&
            this.thumbnailUrl.length > 0
        );
    }

    constructor(private elementRef: ElementRef) { }

    public onThumbChange(event: any): void {
        var file = this.elementRef.nativeElement.querySelector('input[type="file"]');
        this.getBase64(file.files[0]);
    }

    private getBase64(file: File) {
        var reader: FileReader  = new FileReader();
        reader.readAsDataURL(file);
        
        var self: UIThumbnailPickerComponent = this;

        reader.onload = function () {
            self.thumbnailUrl = <any>(reader.result);
            self.thumbnailUrlChange.emit(self.thumbnailUrl);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}