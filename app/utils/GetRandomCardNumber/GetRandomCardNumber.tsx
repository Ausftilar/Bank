export const getRandomCardNumber = () => {
  let cardNumber = '';

  for (let index = 0; index < 4; index++) {
    const random4DigitNumber = Math.round(1000 + Math.random() * 9000);

    if (index !== 0) cardNumber += ' ';

    cardNumber += random4DigitNumber;
  }

  return cardNumber;
}