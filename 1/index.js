'use strict'

class Counter_word {
    constructor(text) {
        this.text = text.toLowerCase();
    }

    find(word) {
        const set = word.toLowerCase();
        const words_arr = this.text.split(/[^a-zA-Zа-яА-ЯёЁ]+/).filter(Boolean);

        let count = 0;

        for (const item of words_arr) {
            if (item.includes(set)) {
                const words = item.split(set);
                count += words.length - 1;
            }
        }

        return count;
    }
}

const text = "text1, test, test=text2=test;";
const test = new Counter_word(text);

console.log(`Word "${"text"}" appears ${test.find("text")} times in your text.`);
