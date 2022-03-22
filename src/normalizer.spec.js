import normalize from "./normalizers";

const {
  routingNumber,
  accountNumber,
  cardNumber,
  name,
  apt,
  zipCode,
  city,
  cvv
} = normalize;

describe("The normalizer functions", () => {
  it("should normalize cardNumber", () => {
    let cardValue = "1234";
    let result = cardNumber(cardValue);
    expect(result).toBe("1234");
    cardValue = "abc111";
    result = cardNumber(cardValue);
    expect(result).toBe("111");
    cardValue = "aaaaa3434123456123458888888";
    result = cardNumber(cardValue);
    expect(result.length).toBe(19);
    cardValue = "34788585 12478 25668524 111";
    result = cardNumber(cardValue).toString();
    expect(result.length).toEqual(17);
    cardValue = "3478";
    result = cardNumber(cardValue).toString();
    expect(result === cardValue).toEqual(true);
    let value = "";
    result = cardNumber(value);
    expect(result.length === 0).toBe(true);
  });

  it("check cvvNum key after card Number change", () => {
    let cardValue = "1234"; // Any Card
    cardNumber(cardValue);
    expect(normalize.cvvNum).toBe(3);
    cardValue = "377858585"; // Amex Card
    cardNumber(cardValue);
    expect(normalize.cvvNum).toBe(4);
  });
  it("check Cvv Value after cardNumber function applied", () => {
    let cvvValue = "1234";
    cardNumber(cvvValue); // Any Card
    let result = cvv(cvvValue);
    expect(result.length).toBe(3);
    cvvValue = "34788";
    cardNumber(cvvValue); // Amex Card
    result = cvv(cvvValue);
    expect(result.length).toBe(4);
    cvvValue = "";
    cardNumber(cvvValue);
    result = cvv(cvvValue);
    expect(result === cvvValue).toBe(true);
  });

  it("should normalize Account Number", () => {
    let value = "123aaaa25252525254";
    let result = accountNumber(value);
    expect(result.length <= 50).toBe(true);
    value = "123aaaa4";
    result = accountNumber(value);
    expect(result.length <= 50).toBe(true);
    value = "hhjfjhfjhfhjjhfhj";
    result = accountNumber(value);
    expect(result.length === 0).toBe(true);
    value = "";
    result = accountNumber(value);
    expect(result === value).toBe(true);
  });

  it("should normalize Routing Number", () => {
    let value = "123aaaa25252525254";
    let result = routingNumber(value);
    expect(result.length <= 10).toBe(true);
    value = "123aaaa4";
    result = routingNumber(value);
    expect(result.length <= 10).toBe(true);
    value = "hhjfjhfjhfhjjhfhj";
    result = routingNumber(value);
    expect(result.length === 0).toBe(true);
    value = "";
    result = routingNumber(value);
    expect(result.length === 0).toBe(true);
  });

  it("should normalize Zip Code", () => {
    let value = "123aaaa25252525254";
    let result = zipCode(value);
    expect(result.length <= 6).toBe(true);
    value = "123a      *//  aaa4";
    result = zipCode(value);
    expect(result.length <= 6).toBe(true);
    value = "hhjfjhfjhfhjjhfhj";
    result = zipCode(value);
    expect(result.length === 0).toBe(true);
    value = "";
    result = zipCode(value);
    expect(result.length === 0).toBe(true);
  });

  it("should normalize City", () => {
    let value = "12325252525254";
    let result = city(value);
    expect(result.length === 0).toBe(true);
    value = "abcd1234abcd12abcd1254555555abcd";
    result = city(value);
    expect(result).toBe("abcdabcdabcdabcd");
    value = "hhjfjhfjhfhjjhkhfjksksj  fksfksjfkjsfhjskfjkhfjkhsjkfhkjfjhfhj";
    result = city(value);
    expect(result.length <= 30).toBe(true);
    value = "";
    result = city(value);
    expect(result.length === 0).toBe(true);
  });

  it("should normalize Name", () => {
    let value = "12325252525254";
    let result = name(value);
    expect(result.length === 0).toBe(true);
    value = "abcd1234abcd12abcd1254555555abcd";
    result = name(value);
    expect(result).toBe("abcdabcdabcdabcd");
    value = "hhjfjhfjhfhjjhkhfjksksj  fksfksjfkjsfhjskfjkhfjkhsjkfhkjfjhfhj";
    result = name(value);
    expect(result.length <= 30).toBe(true);
    value = "";
    result = name(value);
    expect(result.length === 0).toBe(true);
  });

  it("should normalize Apt", () => {
    let value = "55a-d";
    let result = apt(value);
    expect(result === value).toBe(true);
    value = "abcd1234abcd12abcd1254555555abcd";
    result = apt(value);
    expect(result.length <= 10).toBe(true);
    value = "";
    result = apt(value);
    expect(result.length === 0).toBe(true);
  });
});
