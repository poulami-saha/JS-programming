class HashTable {
    storage: any[];
    limit: number;
    constructor(limit = 14) {
        this.storage = [];
        this.limit = limit;
    }

    _hash(key: string, max: number) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % max;
    }

    printTable() {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] !== undefined) {
                console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`)
            } else {
                console.log(`Bucket ${i} Empty`)
            }
        }
    }

    set(key: any, value: any) {
        const index = this._hash(key, this.limit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] === value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value])
            }
        }
    }

    get(key: any) {
        const index = this._hash(key, this.limit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1]
                }
            }
        }
    }

    remove(key: string) {
        const index = this._hash(key, this.limit);

        if (this.storage[index]) {
            if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
                delete (this.storage[index])
            } else {
                for (let i = 0; i < this.storage[index].length; i++) {
                    if (this.storage[index][i][0] === key) {
                        delete (this.storage[index][i])
                    }
                }
            }
        }
    }

    has(key: string): boolean {
        const index = this._hash(key, this.limit);
        if (this.storage[index]) {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return true
                }
            }
        }
        return false;
    }
    clear(): void {
        this.storage = [];
    }

    getValues(): string[] {
        const values: any[] = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]) {
                for (const [key, value] of this.storage[i]) {
                    values.push(value);
                }
            }
        }
        return values;
    }
}

// const myHashTable = new HashTable();
// myHashTable.set("John", "123-345-567")
// myHashTable.set("James", "123-345-567")

// console.log(myHashTable.get("John"))
// myHashTable.remove("John")
// myHashTable.printTable()

// console.log(myHashTable.has("James"))
// console.log(myHashTable.has("John"))

//Word instance Counter

const wordCounter = (str: string, key: string) => {
    const words = str.toLowerCase().split(/\W+/);
    console.log(words)
    const wordFrequency = new HashTable();
    let targetWord = key.toLowerCase();
    let counter = 0
    for (let word of words) {
        if (word === "") continue;
        if (wordFrequency.has(word)) {
            wordFrequency.set(word, wordFrequency.get(word) + 1)
        } else {
            wordFrequency.set(word, 1)
        }
        if (word === targetWord) {
            ++counter
        }
    }
    return counter
}

console.log(wordCounter("The quick brown fox the", "the"))

//Custom Anagram grouping

function anagramGroupingWithHashTable(words: string[]): string[] {
    const anagramGroups = new HashTable();
    for (const word of words) {
        const sortedChar = word.split("").sort().join("");
        if (anagramGroups.has(sortedChar)) {
            anagramGroups.get(sortedChar).push(word)
        } else {
            anagramGroups.set(sortedChar, [word])
        }
    }
    return anagramGroups.getValues();
}

const val = ["cat", "act", "silent", "listen", "tac", "hello", "foo", "bar"]
console.log(anagramGroupingWithHashTable(val))