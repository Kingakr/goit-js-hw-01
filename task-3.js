function getElementWidth(content, padding, border) {
  const a = content.replace("px", ""),
    b = padding.split("px")[0],
    c = border.slice(0, border.lenght - 2);

  console.log(a, b, c);
  const elementWidth = Number(a) + Number(b) + Number(c);
  console.log(elementWidth);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// Zrobiłam wg przykładu z drugich zajęć z Kubą ale nie wiem dlaczego nie wyświetla bordera.
// Kuba na tych zajęciach nie tłumaczył co to replace, split, slice i za co odpowiadają "0" w nawiasach
// więc zrobiłam ale nie do końca wiem o co chodzi.
// Mimo oglądania lekcji i czytania konspektu nadal nie do końca to rozumiem i potrzebuję żeby ktoś mi to logicznie wytłumaczył.
