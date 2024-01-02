let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter a noun:')
let verb = prompt('Enter a verb:')
let adverb = prompt('Enter an adverb:')

let story = `Once upon a time, in a ${adjective} land, there was a ${noun} who loved to ${verb} with their trusty ${noun}. One day, ${adverb}, they decided to ${verb} through the enchanted forest.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`