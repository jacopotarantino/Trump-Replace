/**
 * Script that is actually executed on the page.
 * Iterates over every node on the page, finds text nodes, and run replacements on them.
 */

var trump_names = [
  'Racist Cheeto',
  'Melting Clay Sculpture of Jabba the Hutt',
  'Orange Hitler',
  'Pile of Garbage Covered in Vodka Sauce',
  'Butternut Squash Who Wished on a Shooting Star and Became a Real Live Boy',
  'Traffic Cone Soaked in Raw Sewage',
  'Day-old Mayonnaise Sculpture',
  'Chairman of the Saddam Hussein Fanclub',
  'Really Evil Little Kid',
  'Self-financed Melting Jack-O-Lantern',
  'Empty Sack of Hot Air',
  'Mutant from a Carrot-Juicing Accident',
  'Cancer-in-a-wig',
  'Pumpkin-in-a-suit',
  'Basically an African Dictator',
  'The Uncle Who Hits on Your Wife at Funerals',
  'Expired Bottle of Sunny Delight',
  'A Racist Clementine',
  'The Weirdest, Most Conspiratorial Nutjob on the Message Board',
  'Half-melted Pushpop',
  'Pile of Cheesy Slop Stuffed Inside a Thin Orange Shell',
  'Six-foot Pile of Angry Carrot Cake Vomit',
  'Racist Sunset',
  'Torture-Supporting, Muslim-Disparaging Horseman of the Apocalypse',
  'Racist Maniac, Danger to This Country and Its Freedoms',
  'Donald Drumpf',
  'Xenophobic Sweet Potato and Wispy Human Queef',
  'Dissident Bagpipe Powered by Farts',
  'Living Donald Trump Caricature',
  'Douchebag-Infested Hairpiece',
  'Bigoted Orangutan and Casino Mis-Manager',
  'Cranky Planetoid',
  'The Magnificent Orange One',
  'Orange Condom Filled with Rancid Stew',
  'Jersey Shore Ventriloquist Dummy',
  'Corn-husk Doll Cursed by a Witch',
  'Luminous Marmoset',
  'Tanjello Fruit Rollup Stretched Over Cat Litter',
  'Larval Stage of a Yam',
  'Constipated Cheeto',
  'Tangerine Covered in Cobwebs',
  'Feral Shouting Meatball',
  'Fancy Deli-meat Sculpture',
  'The Angriest Pumpkin',
  'America\'s #1 Racist Donald Trump Fan',
  'Shrieking Buffalo Wing That Fell Into a Toilet',
  'Jingoistic Bullfrog',
  'Narcissistic Human-Airhorn',
  'Orange Yelling-Machine',
  'The Tweeting Hole',
  'Hotel Magnate and Bloated Jack-O-Lantern in a Suit',
  'Lord Voldemort',
  'Golden Wrecking Ball',
  'Short-Fingered Vulgarian',
  'The Most Fabulous Whiner',
  'Fuckface von Clownstick',
  'Man-Baby',
  'Comedy Entrapment and Unrepentant Narcissistic Asshole',
  'The White Kanye',
  'Agent Orange',
  'Tangerine Tornado',
  'Cheeto-Dusted Bloviator',
  'Angry Cheeto',
  'Cheeto Jesus',
  'Cheez Whiz',
  'Gossamer-Skinned Bully',
  'The Teflon Don',
  'Darth Hater',
  'The Antichrist',
  'Bratman',
  'Hair Furor',
  'Vanilla ISIS',
  'Mr. Wiggy Piggy',
  'Trumplestiltskin',
  'Human Bullhorn',
  'Whiny Little Bitch',
  'Humpty Trumpty',
  'Deeply Disturbed Fuzzy Orange Goofball',
  'Snake Oil Salesman',
  'Orange Julius',
  'The Daft Draft Dodger',
  'K-Mart Caesar',
  'The Tanning Bed Warning Label',
  'Mango Mussolini',
  'Cinnamon Hitler',
  'The Combover Kid',
  'Captain Tantastic',
  'Cheddar Boy',
  'Clown Prince of Politics',
  'Trumple-Doodle-Do',
  'Late-Night Comedian Job Security',
  'Hemorrhoidal Has-Been',
  'StormTrumper',
  'The KKK',
  'Crybaby Prima Donald',
  'Debate Hater',
  'Little Donnie Sissypants',
  'America\'s Burst Appendix',
  'Barrel-Shouting Meatball',
  'Bumbledore',
  'Daddy Warbucks',
  'Damn Turd Pol',
  'DDT',
  'The Dick Tater',
  'Don Dementia',
  'Donald Dingbat',
  'Donald Dipshit',
  'Donald Dodo',
  'Donald Duck',
  'Emperor with no Balls',
  'Itty Bitty Ball Trump',
  'Fascist Carnival Barker',
  'The Germinator',
  'Genghis Cant',
  'Grandpa Fucko',
  'Grand Wizard of Snatching Defeat from the Jaws of Victory',
  'Great Orange Hairball of Fear',
  'Human Amplifier',
  'Human Combover',
  'Humble Cow Pie',
  'The im-POTUS',
  'John Boehner\'s Tanning Partner in Crime',
  'King of the Oompa Loompas',
  'King Twit',
  'Lord Dampnut',
  'Mr. Boinker Oinker',
  'Mussolini\'s Taint',
  'OranguTAN',
  'Poster Child of American Decline',
  'Puffed Up Daddy',
  'Putin\'s Pet',
  'Rabble-Rousing Demagogue',
  'Sack of Gilded Lunchmeat',
  'Screaming Carrot Demon',
  'Shitler',
  'Sociopathic 70-Year-Old Toddler',
  'Tan Dump Lord',
  'Stuporman',
  'Tangerine-Tinted Trash-Can Fire',
  'Teflon Don',
  'Tiny Fisted Emperor',
  'Trumptastrophe',
  'Trumpelthinskin',
  'Twitter Spitter',
  'Two-Bit Caesar',
  'The Twitter Terror',
  'Unrepentant Narcissistic Asshole',
  'Unreality King',
  'Venom-Drenched Regurgitated Slimy Orange Hairball',
  'Walking Talking Human Combover',
  'Zen Master of Hate',
  'Cheeto-dusted bloviator',
  'Walking, Talking Human Combover Sent to Earth to Seek Revenge by Hitler\'s Moustache',
  'Cowardly Lion\'s Enormous Orange Hairball of Fear Brought to Life by the Wicked Witch of the West',
  'Hee-Haw Hitler',
  'Manhattan Mussolini'
];

function replace_trumps () {
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var replacedText = text.replace(
          /((the_){0,}Donald.*?)?Trump/gi,
          trump_names[Math.floor(Math.random()*trump_names.length)]
        );

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}

// run the function immediately
replace_trumps();
// and also run it after a short delay to get some async sites
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    replace_trumps();
  }
};
window.onload = function () {
  replace_trumps();
};
window.setTimeout(function () {
  replace_trumps();
}, 200);
window.setTimeout(function () {
  replace_trumps();
}, 500);
window.setTimeout(function () {
  replace_trumps();
}, 1500);
