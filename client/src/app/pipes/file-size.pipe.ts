import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "fileSize"
})
export class FileSizePipe implements PipeTransform {

    transform(number: number, args?: any): any {
        if (isNaN(number))
            return null; // will only work value is a number
        
        if (number === null)
            return null;
        
        if (number === 0)
            return "0 Kb";
        
        let abs = Math.abs(number);
        
        if(abs < 1000)
            return "" + Math.round(number) + " Kb";

        const rounder = Math.pow(10, 1);
        const isNegative = number < 0; // will also work for Negative numbers
        let key = "";

        const powers = [
            //{ key: "Q", value: Math.pow(10, 15) },
            { key: "Tb", value: Math.pow(10, 12) },
            { key: "Gb", value: Math.pow(10, 9) },
            { key: "Mb", value: Math.pow(10, 6) },
            { key: "Kb", value: 1000 }
        ];

        for (let i = 0; i < powers.length; i++) {
            let reduced = abs / powers[i].value;
            reduced = Math.round(reduced * rounder) / rounder;
            
            if (reduced >= 1) {
                abs = reduced;
                key = powers[i].key;
                
                break;
            }
        }

        return (isNegative ? "-" : "") + abs + " " + key;
    }
}