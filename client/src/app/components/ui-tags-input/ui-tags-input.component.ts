import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "ui-tags-input",
    templateUrl: "./ui-tags-input.component.html",
    styleUrls: [ "./ui-tags-input.component.scss" ]
})
export class UITagsInputComponent {
    @Input() public tags: Array<string>;

    @Output() public tagsChange = new EventEmitter();

    public tag: string;

    constructor() {

    }

    public onKeyDown(evt: KeyboardEvent): any {
        var isBackspace: boolean = (evt.which === 8);
        
        if(!isBackspace)
            return;
        
        var hasTagText: boolean = !(this.tag == undefined || this.tag == null || this.tag.length == 0);
            
        if(hasTagText)
            return;
        
        var hasTags: boolean = !(this.tags == undefined || this.tags == null || this.tags.length == 0);

        if(!hasTags)
            return;
        
        this.tags.pop();
        this.tagsChange.emit(this.tags);

        return false;
    }

    public onKeyPress(evt: KeyboardEvent): void {
        var isEnterKey: boolean = (evt.which === 13);
        var isCommaKey: boolean = (evt.which === 44);

        if(!isEnterKey && !isCommaKey)
            return;
            
        if(this.tag == undefined || this.tag == null || this.tag.length == 0)
            return;

        if(this.tags == undefined || this.tags == null)
            this.tags = [];

        this.tags.push(this.tag);
        this.tagsChange.emit(this.tags);

        this.tag = null;
    }
}