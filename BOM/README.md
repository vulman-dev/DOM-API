В этом упражнении мы потренируемся работать с Browser Object Model (BOM).

# solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая при вызове делает переход на страницу и возвращает строку с кодовым имененем браузера, его версией и текущей открытой страницей.

Адрес страницы передаётся через параметр, а результат должен быть в виде строки и разделяться проблеами.

Пример:

```js
solution('https://hexlet.io'); // => 'Mozilla/5.0 https://hexlet.io'
// Версия браузера может отличаться, тесты не проверяют версию.
```