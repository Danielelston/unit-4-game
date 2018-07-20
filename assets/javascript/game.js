const character = {
    charName:"filler", 
    HP:1, 
    attk:0,
    heavyAttk:0,
    specialAttk:0, 
    counterAttk:0
};

// Fight logic-----------------


  var cloud = Object.assign({charName: "Cloud", hp: 4, attk: 5, heavyAttk:0, specialAttk:0, counterAttk:0}, character);
  var sephiroth= Object.assign({charName: "Sephiroth", hp: 4, attk: 5, heavyAttk:0, specialAttk:0, counterAttk:0}, character);
  var noctis = Object.assign({charName: "Noctis", hp: 4, attk: 5, heavyAttk:0, specialAttk:0, counterAttk:0}, character);
  var lightning = Object.assign({charName: "Lightning", hp: 4, attk: 5, heavyAttk:0, specialAttk:0, counterAttk:0}, character);


  
  console.log(cloud.hp, cloud.attk);
  console.log(sephiroth.hp, sephiroth.attk);
  console.log(noctis.hp, noctis.attk);
  console.log(lightning.hp, lightning.attk);


  // expected output: 3 5

