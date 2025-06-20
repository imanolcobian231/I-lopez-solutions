function anagrams(words = []) {
    let ana = []
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let palabra1 = words[i].split("").sort().join("")
            let palabra2 = words[j].split("").sort().join("")
            
            if (palabra1 === palabra2) {
                ana.push([words[i], words[j]])
            }
        }
    }
    return ana
}

const words = ["amor", "roma", "listen", "silent", "narama", 'gdfg', 'fggfdfdg']
console.log(anagrams(words)) // [["anagrama", "anarama"], ["nagaram", "narama"]]