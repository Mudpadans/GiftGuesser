var wishlist = [
    {name: "teddy bear", size: "large", clatters: "a bit", weight: "heavy"},
    {name: "1984", size: "small", clatters: "no", weight: "light"},
    {name: "lego millennium falcon", size: "medium", clatters: "yes", weight: "medium"}
]

var presents = [
    {size: "large", clatters: "a bit", weight: "heavy"},
    {size: "medium", clatters: "yes", weight: "medium"}
]

const guessGift = (wishlist, presents) => {
    let guessedGifts = []

    presents.forEach(function(p){
        wishlist.forEach(function(w){
            if (p.size == w.size && p.clatters == w.clatters && p.weight == w.weight && guessedGifts.indexOf(w.name) == -1) guessedGifts.push(w.name);
        })
    })
    return guessedGifts
}

console.log(guessGift(wishlist, presents))


