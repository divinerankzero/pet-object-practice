const bella = {
    name: "Bellatrix Le Purr",
    species: "Cat",
    nicknames: [
        "Bella",
        "Tiniest Squish",
        "Little Helper",
        "Familiar",
        "Meowmers"
    ],
    pronoun: "She",
    age: 10,
    favoriteToys: [],
    meow: function() {
        console.log(`${this.name} meows loudly`)
    },
    heelClick: function(){
        console.log(`${this.name}'s nails click on the floor like high heels`)
    },
    zoom: function(){
        console.log(`${this.name} has the zooms!`);
        console.log(`${this.pronoun} zooms past you this way, then zooms past you that way.`);
    },
    play: function(toy) {
        console.log(`${this.name} plays with ${toy}.`)
        if (toy.includes("real fur")) {
            console.log(`${this.name} decided ${toy} is a new favorite.`);
            this.favoriteToys.push(toy);
        } else {
            console.log(`${this.name} doesn't seem to care for ${toy}.`)
        }
    }
}

bella.meow();
bella.heelClick();
bella.zoom();
bella.play("plastic mouse");
bella.play("real fur mouse");