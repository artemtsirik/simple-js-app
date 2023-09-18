let pokemonList = [
  { name: 'Charmander', height: 0.6, type: ['fire'] },
  { name: 'Squirtle', height: 0.5, type: ['water'] },
  { name: 'Jigglypuff', height: 0.5, type: ['normal', 'fairy'] },
  { name: 'Machop', height: 0.8, type: ['fighting'] },
  { name: 'Geodude', height: 0.4, type: ['rock', 'ground'] },
  { name: 'Meowth', height: 0.4, type: ['normal'] },
  { name: 'Psyduck', height: 0.8, type: ['water'] },
  { name: 'Machoke', height: 1.5, type: ['fighting'] },
  { name: 'Abra', height: 0.9, type: ['psychic'] },
  { name: 'Machamp', height: 1.6, type: ['fighting'] },
  { name: 'Tentacool', height: 0.9, type: ['water', 'poison'] },
  { name: 'Gastly', height: 1.3, type: ['ghost', 'poison'] },
  { name: 'Onix', height: 8.8, type: ['rock', 'ground'] },
  { name: 'Drowzee', height: 1, type: ['psychic'] },
  { name: 'Hypno', height: 1.6, type: ['psychic'] },
  { name: 'Krabby', height: 0.4, type: ['water'] },
  { name: 'Voltorb', height: 0.5, type: ['electric'] },
  { name: 'Cubone', height: 0.4, type: ['ground'] },
  { name: 'Koffing', height: 0.6, type: ['poison'] },
  { name: 'Ditto', height: 0.3, type: ['normal'] },
  { name: 'Eevee', height: 0.3, type: ['normal'] },
  { name: 'Porygon', height: 0.8, type: ['normal'] },
  { name: 'Omanyte', height: 0.4, type: ['rock', 'water'] },
  { name: 'Kabuto', height: 0.5, type: ['rock', 'water'] },
  { name: 'Dratini', height: 1.8, type: ['dragon'] },
];

let maxheight = 0;

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > maxheight) {
    maxheight = pokemonList[i].height;
  }
}

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height === maxheight) {
    document.write(
      '<b>' +
        pokemonList[i].name +
        '</b>' +
        ' (height: ' +
        pokemonList[i].height +
        ") - Wow, that's Big"
    );
  } else {
    document.write(
      '<b>' +
        pokemonList[i].name +
        '</b>' +
        ' (height: ' +
        pokemonList[i].height +
        ')'
    );
  }

  document.write('</br>');
}
