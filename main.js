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
    meow: function() {
        console.log(`${this.name} meows loudly`)
    },
    heelClick: function(){
        console.log(`${this.name}'s nails click on the floor like high heels`)
    },
    zoom: function(){
        console.log(`${this.name} has the zooms!`);
        console.log(`${this.pronoun} zooms past you this way, then zooms past you that way.`);
    }
}

bella.meow();
bella.heelClick();
bella.zoom();