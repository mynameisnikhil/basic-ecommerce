const creditCardRegex = {
  visaCard: new RegExp("^4[0-9]{0,15}$"),
  masterCard: new RegExp("^[5|2]$|^[5|2][1-5][0-9]{0,14}$"),
  amexCard: new RegExp("^3$|^3[47][0-9]{0,13}$"),
  discoverCard: new RegExp(
    "^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$"
  )
};

// return an array of card types that matches the passed card number
export const detectCreditCard = number => {
  const svgTypeArray = Object.keys(creditCardRegex).filter(
    type => number && number.match(creditCardRegex[type])
  );
  const [svgType] = svgTypeArray;
  return svgType;
};

export const removeNonDigits = string => string.replace(/\D/g, "");
