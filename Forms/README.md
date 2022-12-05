В предыдущих уроках мы познакомились со свойством `textContent`, которое позволяет безопасно вставлять данные на страницу, чтобы избежать уязвимостей. В этом упражнении мы отработаем "ручное" экранирование данных при установке их через свойство `innerHTML`.

# src/application.js
В задании дана форма обратной связи, состоящая из трех полей: email, name и comment. Напишите и экспортируйте функцию по умолчанию, которая при отправке формы получает из неё данные и экранирует их. Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо формы появляется документ с такой структурой (элемент формы заменяется на другой элемент):

```html
<div>
    <p>Feedback has been sent</p>
    <div>Email: test@email.com</div>
    <div>Name: Matz</div>
    <div>Comment: My Comment</div>
</div>
```

Для экранирования введённых данных используйте функцию `htmlEscape()` из библиотеки [escape-goat](https://github.com/sindresorhus/escape-goat).

# Подсказки
* Проще всего подготовить необходимый HTML, и подставлять в него данные через `innerHTML`.
* [Экранирование символов](https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D1%80%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2)