function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (tailwind)", () => {
    const input = [
      { id: 1, url: "https://wove-v2.vercel.app/" },
      { id: 2, url: "https://wove-v2.vercel.app/" },
      { id: 3, url: "https://tailwinduikit.com/" },
    ];
    const output = [{ id: 3, url: "https://tailwinduikit.com/" }];
    expect(filterByTerm(input, "tailwind")).toEqual(output);
  });
});
