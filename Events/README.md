В этом упражнении нужно реализовать логику добавления [алертов](https://getbootstrap.com/docs/4.5/components/alerts/) по клику на кнопку.

Изначально на странице есть одна кнопка. Вёрсткаа выглядит так:

```html
<button id="alert-generator" class="btn btn-primary">Generate Alert</button>
<div class="alerts m-5"></div>
```
После клика на кнопку в контейнер с классом alerts добавляется алерт, с названием Alert 1:

```html
<div class="alerts m-5">
    <div class="alert alert-primary">Alert 1</div>
</div>
```

Последующий клик добавляет новый алерт сверху:

```html
<div class="alerts m-5">
    <div class="alert alert-primary">Alert 2</div>
    <div class="alert alert-primary">Alert 1</div>
</div>
```

Каждый клик добавляет новый алерт, меняя число в его имени.

# src/application.js

Реализуйте и установите обработчик события click на кнопке в соответствии с логикой выше.

# Подсказки
* Саму кнопку можно получить в коде через ее id
* После выполнения задания, подумайте над тем, как добавить возможность скрывать алерты.
* Поэкспериментируйте с отладкой в этом упражнении, опирайтесь на наш [гайд](https://help.hexlet.io/ru/articles/111525-otladka-v-uprazhneniyakh-po-frontendu), чтобы разобраться с тестами. 