const express = require('express');
cors = require('cors');


const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 })
  

const facts = [
  "Dogs have three eyelids, including one that helps keep their eyes moist and protected.",
  "The Norwegian Lundehund is the only dog breed with six toes on each foot.",
  "Dogs can detect certain types of cancer, such as prostate cancer, with up to 98% accuracy.",
  "The Basenji is the only breed of dog that can't bark, but they can still make a variety of other vocalizations.",
  "The Labrador Retriever is the most popular breed of dog in the United States, Canada, and the United Kingdom.",
  "Dogs can understand over 100 words and gestures, and some can even count up to five.",
  "The smallest dog breed in the world is the Chihuahua, which can weigh as little as two pounds.",
  "Dogs can get jealous and exhibit behaviors similar to human jealousy, such as attention-seeking and aggression.",
  "Dogs' noses are up to 100,000 times more sensitive than humans, which allows them to detect odors we can't even perceive.",
  "The tallest dog breed in the world is the Great Dane, which can stand over three feet tall at the shoulder."
]