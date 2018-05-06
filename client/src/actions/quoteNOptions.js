export const SET_QUOTE_N_OPTIONS = "SET_QUOTE_N_OPTIONS";

export const setQuoteNOptions = () => ({
  type: SET_QUOTE_N_OPTIONS,
  payload: { question: questions[0] }
});

const questions = [
  {
    title: "From where does Veeru propose to Basanti in Sholay?",
    options: [
      {
        value: "Top of a roof",
        is_correct: false
      },
      {
        value: "Top of a ladder",
        is_correct: false
      },
      {
        value: "Top of a hill",
        is_correct: false
      },
      {
        value: "Top of a water tank",
        is_correct: true
      },
      {
        value: "Top of a tree",
        is_correct: false
      }
    ]
  },
  {
    title: "Who plays the blind friend in the 1964 Dosti?",
    options: [
      {
        value: "Mohan",
        is_correct: false
      },
      {
        value: "Dinu",
        is_correct: false
      },
      {
        value: "Shyamu",
        is_correct: true
      },
      {
        value: "Ramesh",
        is_correct: false
      }
    ]
  }
];
