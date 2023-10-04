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

class Counter_words extends Counter_word {
    constructor(text) {
        super(text);
    }

    find_arr(words_arr) {
        const counts = {};

        for (const word of words_arr) {
            counts[word] = this.find(word);
        }

        return counts;
    }
}

const text = "text1, test, test=text2=test;";
const arr = ["text", "test"];

const result = new Counter_words(text).find_arr(arr);
for (const word in result) {
    console.log(`Word "${word}" appears ${result[word]} times in your text.`);
}