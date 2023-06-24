if ('speechSynthesis' in window) {
    // Speech synthesis is supported
    console.log('Speech synthesis is supported in this browser.');
  } else {
    // Speech synthesis is not supported
    console.log('Speech synthesis is not supported in this browser.');
  }

  function speak(word, speed) {
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = speed;
    speechSynthesis.speak(utterance);
  }

// Word list
var wordList = [
    "abominable", "abstain", "abundant", "accidently", "accommodate", "accomplice", "accountable", "accumulate",
    "accurate", "achieve", "achievement", "acknowledge", "acoustics", "acquire", "activity", "adjudicate",
    "adjustable", "administer", "administration", "adolescent", "advantageous", "advertisement", "advising", "affectionately",
    "affiliation", "afterthought", "agriculture", "amateur", "amendment", "analyzing", "ancient", "anemone",
    "anniversary", "annoyance", "anonymous", "antisocial", "apartment", "apologize", "apparel", "apparent",
    "appearance", "appliance", "appoint", "appreciate", "approve", "arrangement", "assistant", "assurance",
    "attendance", "attorney", "attractive", "authority", "awesome", "awkward", "bachelor", "baggage",
    "bankruptcy", "barometer", "beautiful", "beginner", "believable", "beneficial", "between", "bicycle",
    "biscuit", "bizarre", "blossoming", "bonafide", "borrowed", "boulevard", "boundary", "bouquet",
    "breathe", "brilliant", "bulletin", "burglar", "burglary", "business", "calculator", "calendar",
    "capably", "capital", "caption", "category", "ceiling", "cemetery", "channel", "chaperone",
    "characteristic", "chocolate", "circumstances", "cloudiness", "collision", "colonel", "colonists", "comical",
    "commerce", "competent", "competition", "complex", "compose", "compressor", "compromise", "compulsory",
    "concern", "condition", "conductor", "confident", "confirm", "congratulations", "conscious", "consensus",
    "consent", "consequence", "consequently", "consists", "constant", "constitution", "construct", "content",
    "contrary", "controversial", "controversy", "conundrum", "convenience", "cooperated", "cordially", "correspondence",
    "creature", "criticize", "crouton", "culminate", "currency", "curtain", "customer", "daughter",
    "deceive", "declared", "deficient", "delegates", "delicate", "delicious", "delight", "democracy",
    "denounce", "deplorable", "derived", "derogatory", "destination", "detrimental", "devotion", "dexterity",
    "dictionary", "digestive", "disappear", "disastrous", "discover", "disguise", "dishonest", "distance", "documents",
    "domesticate", "dominant", "dormitory", "education", "educator", "electrical", "eligible", "emphasize",
    "enchant", "enclosing", "encourage", "endeavor", "endurance", "engrossed", "entertain", "envelope",
    "escalator", "especially", "essence", "evaporate", "evidence", "evidently", "exactly", "excellent",
    "exchange", "exhibit", "experiment", "expression", "extension", "extinct", "extortion", "extravagant",
    "extreme", "fabricate", "facility", "familiar", "fascinating", "fashion", "favorite", "feasible",
    "feather", "feature", "fertilize", "fiction", "flagrant", "flamboyant", "flexible", "forbidden",
    "forever", "forfeit", "forgery", "fortune", "fragile", "friction", "friendship", "frightful",
    "frustrate", "fundamental", "funeral", "furnish", "futility", "garbled", "generally", "generate",
    "generosity", "gentlemen", "genuine", "ghostly", "gossiping", "government", "grammar", "grateful",
    "gratuity", "gravity", "grazing", "guarantee", "guardian", "gullible", "habitat", "heavily",
    "hesitate", "honorary", "horizontal", "horrible", "hostile", "household", "humility", "hygiene",
    "idolize", "illegal", "illustration", "imaginary", "imminent", "imperative", "implacable", "implore",
    "impressive", "imprudent", "inanimate", "incident", "inclusion", "inconvenience", "inconvenient", "incorrect",
    "increase", "incredulous", "indelible", "independence", "indulgence", "industrial", "industry", "infamous",
    "influences", "influenza", "informant", "infuriate", "initiation", "innocence", "inquire", "insensitive",
    "inspect", "instance", "institute", "intelligent", "interfere", "interview", "intimidate", "intrepid",
    "intrusion", "inundate", "invention", "inventory", "irrational", "irritable", "janitor", "jealous",
    "jealousy", "jeopardize", "jewelry", "journal", "jubilant", "junction", "jurisdiction", "justice",
    "kilogram", "kindness", "knitting", "knowledge", "laboratory", "lampoon", "landmark", "language",
    "laughter", "launching", "leather", "legibly", "legitimate", "liability", "license", "lightning",
    "liquidation", "longevity", "lubricate", "luckless", "lucrative", "malicious", "manageable", "management",
    "measure", "medallion", "medicinal", "melodious", "memorable", "mention", "mercenary", "merrily",
    "metamorphosis", "meticulous", "mightily", "mileage", "minimize", "minister", "miscellaneous", "miserable",
    "misplace", "mission", "modified", "moisture", "molecular", "monetary", "monopolize", "monument",
    "mortality", "mosquito", "mountain", "movement", "multiple", "musical", "mystery", "natural",
    "necessity", "neglect", "negligent", "negligible", "negotiate", "neighbor", "neither", "nervous",
    "neurotic", "nomadic", "nonessential", "nuisance", "nursing", "nurture", "obedient", "obituary",
    "obligation", "obscure", "obviously", "occasion", "occurred", "offense", "officious", "ominous",
    "omitted", "omnipotent", "operate", "opportunity", "opposite", "optimistic", "organization", "original",
    "originate", "ornaments", "outrageous", "overrule", "palatable", "parable", "parallel", "paramecium",
    "partial", "partner", "passage", "passenger", "patient", "pattern", "pensive", "perfect",
    "perhaps", "permeate", "persevere", "personal", "personification", "phantom", "pheasant", "phenomenon",
    "picture", "plaintiff", "plastic", "pleaded", "pleasure", "popular", "possess", "possible",
    "potpourri", "preacher", "precious", "precipitate", "preferred", "preparation", "prestigious", "proceed",
    "procrastinate", "prodigy", "produce", "professor", "profitable", "prominent", "pronounce", "pronounceable",
    "propeller", "property", "propose", "prospect", "protect", "provide", "psychology", "punishable",
    "purchase", "purpose", "qualifications", "quarantine", "quarter", "quartet", "questionnaire", "quotation",
    "radiate", "railway", "realized", "rebelling", "receive", "recessed", "recitation", "rectangular",
    "reduction", "religion", "remittance", "renewal", "repetition", "reprimand", "require", "resigned",
    "resources", "responsible", "retrieve", "reversible", "sandwich", "satisfied", "saturate", "scarcity",
    "schedule", "secretary", "sedentary", "sheriff", "shoulder", "shuddering", "significance", "similar",
    "simplicity", "simplification", "singular", "sinister", "situation", "skeptical", "sleight", "society",
    "sophomore", "spacious", "speaker", "spontaneous", "statistics", "stranger", "struggle", "studious",
    "subject", "suburban", "succulent", "sufficient", "superintendent", "superstition", "supplement", "support",
    "supporter", "supreme", "surveillance", "susceptible", "suspicious", "sweater", "sympathy", "tainted",
    "tantalize", "teachable", "technical", "televise", "television", "tendency", "terminate", "terribly",
    "territory", "texture", "theatre", "therapy", "thorough", "thread", "thrilling", "tolerate",
    "tongue", "toothache", "toward", "tragedy", "traitor", "transferred", "treachery", "treatment",
    "treaty", "triangle", "triumphant", "trivial", "troublesome", "tyranny", "ultimate", "unanimous",
    "unanimously", "unbearable", "uncertain", "uncomfortable", "uncompromising", "undoubtedly", "unexpected", "unfortunate",
    "ungrateful", "unhappiness", "uniform", "unimportant", "unique", "unison", "unlawful", "unreasonable",
    "unresponsive", "unsuccessful", "unwilling", "uphold", "vacancy", "vacation", "valuable", "vandalize",
    "variation", "various", "vegetable", "velocity", "verdict", "vicious", "vigilant", "village",
    "vindicate", "violate", "visible", "vocabulary", "volunteer", "voucher", "voyage", "vulnerable",
    "watercolor", "weird", "whereabouts", "whether", "whispering", "widespread", "wisdom", "withdraw",
    "witness", "wonderful", "worrying", "worthy", "writing", "yearly", "yielding", "youthful",
    "zealous"
]

  

// Random word generator
function getRandomWord() {
  var randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

var randomWord 

// Button click event handler
document.getElementById("playButton").addEventListener("click", function() {
  randomWord = getRandomWord();
  speak(randomWord , 0.6); // Function to speak the word (requires browser support for speech synthesis)
});

document.getElementById("repeat").addEventListener("click", function() {
   
    speak(randomWord , 0.5); // Function to speak the word (requires browser support for speech synthesis)
  });

var score = 0;
var correctt = 0;
var wrong = 0;
var totalWords= 0;

// Input change event handler
document.getElementById("Check").addEventListener("click", function() {
  var typedWord = document.getElementById("wordInput").value;
  if (typedWord.toLowerCase() === randomWord) {
    incrementScore();
    alert ("correct word");
    correct();
    totalWordss();
    getRandomWord();

  }else{
    wrongg();
    totalWordss();
    alert ("incorrect spelling , The correct word is " +  randomWord);
    getRandomWord();
  }

  document.getElementById("wordInput").value = "";

});

// Score tracking


function incrementScore() {
  score++;
  document.getElementById("score").textContent = "Score: " + score;
}

function correct() {
    correctt++;
    document.getElementById("correct").textContent = "correct: " + correctt;
  }

function wrongg() {
    wrong++;
    document.getElementById("wrong").textContent = "wrong: " + wrong;
  }

function totalWordss() {
    totalWords++;
    document.getElementById("totalWords").textContent = "totalWords: " + totalWords;
  }