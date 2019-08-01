import { Component, ElementRef, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: "ui-thumbnail-picker",
    templateUrl: "./ui-thumbnail-picker.component.html",
    styleUrls: ["./ui-thumbnail-picker.component.scss"]
})
export class UIThumbnailPickerComponent {
    @Input() public thumbnailUrl: string;

    @Output() public thumbnailUrlChange =new EventEmitter();

    public hasThumbnail: boolean;

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
            console.log(reader.result);

            self.thumbnailUrl = <any>(reader.result);
            self.thumbnailUrlChange.emit(self.thumbnailUrl);

            self.hasThumbnail = true;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}