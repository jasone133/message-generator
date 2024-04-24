const nouns = [
    'He', 'The boy', 'She', 'The girl', 'Mom', 'Dad'
  ]
  
  const verbs = [
    'won', 'lost', 'survived', 'overcame'
  ]
  
  const ending = [
    'the race', 'the game', 'the war', 'the tournament'
  ];

  function writeMessage(first, second, third) {
    console.log(`${first[randomWord(first.length)]} ${second[randomWord(second.length)]} ${third[randomWord(third.length)]}.`)
  }

  function randomWord(num) {
    return Math.floor(Math.random() * num);
  }

  writeMessage(nouns, verbs, ending);
  

