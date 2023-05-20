import { gradients } from "../../../constants"

export const getRandomGradient = () => {
  const min = 0;
  const max =  gradients.length - 1;

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return gradients[randomNumber];
}