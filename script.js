let quoteText = document.getElementById("quote-text"); // gets quote-text from html p tag
let quotes = [
  '"Cattle die, kinsmen die, you yourself will also die. I know one thing that never dies: the judgment of a dead man\'s life." - Odin',
  '"One\'s own house is best, small though it be; at home is everyone his own master. Though he have but two goats and a bark-thatched hut, even that is better than begging." - Odin',
  '"He welcomes the night who has enough provisions to last: short are the sails of a ship, too fast it moves with a favorable wind, and the distance is short to a poor man\'s home." - Odin',
  '"The wise guest has his way of dealing with those who taunt him at meals; he smiles through the meal, not seeming to hear the twaddle talked by his foes." - Odin',
  '"Better a humble house than none; a man is master at home. Though two goats his total wealth, and a thatched roof above his head, that is still better than begging." - Odin',
  "\"Praise day at evening, a wife when dead, a weapon when tried, a maid when married, ice when 'tis crossed, and ale when 'tis drunk.\" - Odin",
  '"Where you recognize evil, speak out against it, and give no truces to your enemies." - Odin',
  '"A coward believes he will ever live if he keeps himself safe from strife, but old age leaves him not long in peace though spears may spare him." - Odin',
  "\"Better to be alive than lifeless; the living can enjoy a cow. I saw fire consume the rich man's property, and death gnaw at the dying man's things.\" - Odin",
  '"The foolish man thinks he will live forever if he keeps away from fighting; but old age won\'t grant him a truce, even if the spears spare him." - Odin',
]; // havamal quote array

// add function to button in index.html
function displayQuote() {
  let forge = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = forge;
}
