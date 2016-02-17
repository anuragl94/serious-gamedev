All questions are to be classified into various stages.
Each stage has its own specifications , such as no of options , no of correct answers which are in line with the game rules.
The format for the json is as follows :
"questionsRepo": [
    {
      "stage": "0", // Defines the stage , it can be used to derive the resource location. ie: stage0 folder
      "noOfOptions": "2", //Defines the no of options which will be presented to the user
      "noOfCorrectOptions": "1", //Defines the no of correct answers are there among the no of options
      "noOfClues": "1", //Defines the number of clues which will be provided to the user
      "passLimit": "3", //Defines the number of questions the user must get right to move to the next stage
    },
    ....
  ]

Each stage will have a sets of Questions (qset1...n)
  Each qset will have n questions, where n = passLimit property of that stage.
  Each qset will have m clues, where m = noOfClues property of that stage