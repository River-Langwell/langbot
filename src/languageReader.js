import fs, { readFile } from 'node:fs';

export class LanguageLibrary {
    constructor() {

        this.map = this.getLibrary();

        //this.map.forEach(key => {
        //    console.log(key);
        //});
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

export class languageGuildConfig {
    constructor(langEntry) {
        this.primaryRoleName = langEntry.language;
        this.roleList = [
            `leader-${langEntry.language}-north`,
            `leader-${langEntry.language}-south`,
            `leader-${langEntry.language}-east`,
            `leader-${langEntry.language}-west`,
            `member-${langEntry.language}-north`,
            `member-${langEntry.language}-south`,
            `member-${langEntry.language}-east`,
            `member-${langEntry.language}-west`
        ];

        this.r5_channel = `⊨ㆍr5-${langEntry.iso_abbr}ㆍ🜲ㆍ⫤`;
        this.general = `⤥ㆍ${langEntry.general}ㆍ𐁍`;
        this.expedition = `⥽ㆍ${langEntry.expedition}ㆍ𐙡ㆍ⥼`;
        this.agreement = `⥃ㆍ☆ㆍ${langEntry.agreement}ㆍ⥂`;
        this.north = `𐃇ㆍ🟦ᆢ${langEntry.north}ㆍ𐃘`;
        this.south = `𐃇ㆍ🟨ᆢ${langEntry.south}ㆍ𐃘`;
        this.east = `𐃇ㆍ🟧ᆢ${langEntry.east}ㆍ𐃘`;
        this.west = `𐃇ㆍ🟪ᆢ${langEntry.west}ㆍ𐃘`;
        this.nw = `🔵「･${langEntry.north}･𐃫･${langEntry.west}･」🟣`;
        this.ne = `🔵「･${langEntry.north}･𐃫･${langEntry.east}･」🟠`;
        this.ns = `🔵「･${langEntry.north}･𐃫･${langEntry.south}･」🟡`;
        this.sw = `🟡「･${langEntry.south}･𐃫･${langEntry.west}･」🟣`;
        this.se = `🟡「･${langEntry.south}･𐃫･${langEntry.east}･」🟠`;
        this.ew = `🟠「･${langEntry.east}･𐃫･${langEntry.west}･」🟣`;
    }
}


