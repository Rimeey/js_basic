'use strict'

class Retext {
    constructor(text, search, replace) {
        this.original = text;
        this.search = search;
        this.replace = replace;
        this.stat = {};
    }

    Rename() {
        let result = this.original;

        this.search.forEach((searchWord, index) => {

            const replacedWord = this.replace[index];

            while (result.includes(searchWord)) {
                result = result.replace(searchWord, replacedWord);

                const key = `${searchWord}/${replacedWord}`;
                this.stat[key] = (this.stat[key] || 0) + 1;
            }

        });

        console.log("Original text:", this.original);
        console.log("Text after replace:", result);
        console.log("Statistics:", this.stat);
    }
}

new Retext("One Zero Zero One One Zero", ["One", "Zero"], ["1", "0"]).Rename();