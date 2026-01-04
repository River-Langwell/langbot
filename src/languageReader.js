import fs, { readFile } from 'node:fs';

export class LanguageLibrary {
    constructor() {

        this.map = this.getLibrary();

        this.map.forEach((value, key => {
            console.log(key);
        }));
    }

    getLibrary() {
        var map = new Map();

        const file = fs.readFileSync(`${import.meta.dirname}/languageValues.csv`, 'utf-8');
        //console.log(file);

        file.split(/r?\n/).forEach(line => {
            //console.log(line);
            map.set(line.split(',')[0], new languageEntry(line.split(',')));
        });

        return map;
    }
}

export class languageEntry {
    constructor(array) {
        //console.log(array[0]);
        this.language_en = array[0];
        this.language = array[1];
        this.iso_abbr = array[2];
        this.statement = array[3];
        this.general = array[4];
        this.expedition = array[5];
        this.agreement = array[6];
        this.north = array[7];
        this.south = array[8];
        this.east = array[9];
        this.west = array[10];
    }

    //getter ===> get variableName(){ return; }
    //method ===> methodName() { return; }
}

function AddLanguage() {

}