В Bootstrap есть компонент [nav](https://getbootstrap.com/docs/5.0/components/navs-tabs/) (Обязательно перейдите по ссылке и покликайте по нему). Один из вариантон этого компонента - это табы, которые переключаются по нажатию, без перезагрузки страницы.

```html
<nav>
    <div class="nav nav-tabs">
        <button class="nav-link active" id="home-tab" data-bs-toogle="tab" data-bs-target="#home" type="button">Home</button>
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
    </div>
</nav>
<div class="tab-content">
    <div class="tab-pane active" id="home">Home tab</div>
    <div class="tab-pane" id="profile">Profile tab</div>
</div>
```

По клику на таб происходит следующее:
* Класс `active` снимается с текущего элемента меню и активного блока с данными.
* Класс `active` добавляется табу, по которому кликнули и соответствующему блоку с данными

Сопоставление таба и блокаа данных идёт по идентификатору, который прописывается в атрибут `data-bs-target` табов. По клику на таб, код должен извлечь `id`, найти соответствующий элемент и сделать его активным, не забыв при этом снять класс `active` с таба и блока, которые были активными до клика.

# src/application.js
Реализуйте логику переключения табов.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентнов nav.

## Подсказки
* В коде можно использовать глобальный объект `document`
* Селектор по `data` элементам `[data-toggle]`, например: `document.querySelectorAll('h1[data-key]');`
* Получить необходимый data-атрибут можно через [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
* Постарайтесь не завязываться на конкретные идентификаторы и элементы
* Если вы используете другой метод извлечения списка, например `document.getElementsByClassName()`, то обратите внимание, что он возвращает `HTMLCollection`, а не `NodeList`. `HTMLCollection` не поддерживает метод `forEach()`, однако вы можете привести такой список к массиву, например используя `Array.from()`
* Переключение должно работать на любой реализации: с использованием `button` и на `div`