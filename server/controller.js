const { builtInModules } = require("module");

const fortuneMenu = {
  101: {
    name: "A Fortune",
    response: [
      "You will be blessed with great health and longevity.",
      "Expect an exciting new change this month.",
      "You will soon be ready to make change for the better.",
      "You will need to make an important decision soon, lead with your first instinct.",
      "You have many abilities, choose to spend your time using them to do what brings you joy.",
      "You will notice that music will be an important part of your life this week.",
    ],
  },
  102: {
    name: "Daily Inpiration",
    response: [
      "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light within you.",
      "I feel that there is nothing more truly artistic than to love people. - Vincent van Gogh",
      "Whatever makes you feel the sun from the inside out, chase that. - Gemma Troy",
      "The most basic and powerful way to connect to another person is to listen. Just listen. Perhaps the most important thing we ever give each other is our attention. -Rachel Naomi Remen",
      "No amount of security is worth the suffering of a mediocre life chained to a routine that has killed your dreams. -Maya Mendoza",
    ],
  },
  103: {
    name: "Words of Advice",
    response: [
      "Just for today, focus on one thing at a time and notice how you feel.",
      "For today, spend 5 minutes sitting in a quiet place with your eyes closed and breathe.",
      "Whenever you eat today, put your utensils down in between bits. Notice how you feel after a slower meal.",
      "This evening before bed, put your phone away and listen to some calming music.",
      "Take some time this week to reach out to loved ones and express your gratitude for them.",
      "Try taking a break, go for a walk or move your body in some other way.",
    ],
  },
};
