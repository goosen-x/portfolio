---
title: "CSS Flexbox: Полное руководство с практическими примерами"
excerpt: "Исчерпывающее руководство по CSS Flexbox. Изучите flex-контейнеры, flex-элементы, выравнивание и примеры использования в реальных проектах."
coverImage: "/images/avatar.png"
date: "2024-12-08T10:00:00.000Z"
author:
  name: Dmitry Borisenko
  picture: "/images/avatar.png"
ogImage:
  url: "/images/avatar.png"
---

Flexbox (Flexible Box Layout) — это одномерный метод компоновки, который превосходно справляется с распределением пространства и выравниванием элементов в контейнере. Он идеален для макетов компонентов, навигационных панелей и любых сценариев, где нужны гибкие, адаптивные расположения.

## Основы Flex-контейнера

Чтобы создать flex-контейнер, примените `display: flex`:

```css
.container {
  display: flex;
  /* или display: inline-flex; для инлайн-контейнеров */
}
```

## Главная ось и поперечная ось

Понимание осей критически важно для Flexbox:

```css
.container {
  display: flex;
  flex-direction: row; /* Главная ось: горизонтальная, Поперечная ось: вертикальная */
  /* Другие значения: row-reverse, column, column-reverse */
}
```

## Свойства Flex-контейнера

### 1. justify-content (Выравнивание по главной оси)

```css
.container {
  display: flex;
  justify-content: flex-start; /* По умолчанию */
  /* Другие значения: flex-end, center, space-between, space-around, space-evenly */
}

/* Практический пример: Навигация */
.nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #2c3e50;
}

.nav-logo {
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

### 2. align-items (Выравнивание по поперечной оси)

```css
.container {
  display: flex;
  align-items: stretch; /* По умолчанию */
  /* Другие значения: flex-start, flex-end, center, baseline */
}

/* Практический пример: Карточка с иконкой */
.card {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-right: 1rem;
}
```

### Интерактивный пример Flexbox

Попробуйте этот интерактивный flexbox макет карточек:

```html:live
// title: Демо Flexbox карточек
<div class="flex-container">
  <div class="flex-card">
    <div class="card-icon">🚀</div>
    <div class="card-content">
      <h3>Скорость</h3>
      <p>Молниеносная производительность</p>
    </div>
  </div>
  <div class="flex-card">
    <div class="card-icon">💎</div>
    <div class="card-content">
      <h3>Качество</h3>
      <p>Премиум функции</p>
    </div>
  </div>
  <div class="flex-card">
    <div class="card-icon">🎨</div>
    <div class="card-content">
      <h3>Дизайн</h3>
      <p>Красивые интерфейсы</p>
    </div>
  </div>
</div>
```

```css:live
.flex-container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.flex-card {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.flex-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-icon {
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e3f2fd;
  border-radius: 8px;
}

.card-content h3 {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  color: #2c3e50;
}

.card-content p {
  margin: 0;
  font-size: 0.875rem;
  color: #7f8c8d;
}
```

### 3. flex-wrap

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* По умолчанию */
  /* Другие значения: wrap, wrap-reverse */
}

/* Практический пример: Список тегов */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: #3498db;
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
}
```

### 4. align-content (Многострочная поперечная ось)

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  /* Другие значения: flex-end, center, space-between, space-around, stretch */
  height: 300px;
}
```

### 5. gap (Расстояние между элементами)

```css
.container {
  display: flex;
  gap: 20px; /* Промежуток между рядами и колонками */
  /* Или отдельно: row-gap: 10px; column-gap: 20px; */
}
```

## Свойства Flex-элементов

### 1. flex-grow, flex-shrink, flex-basis

```css
.item {
  flex-grow: 0;    /* Не растет */
  flex-shrink: 1;  /* Может сжиматься */
  flex-basis: auto; /* Начальный размер */

  /* Сокращенная запись */
  flex: 1; /* Эквивалентно: flex: 1 1 0 */
}

/* Практический пример: Макет с боковой панелью */
.layout {
  display: flex;
  gap: 2rem;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 250px; /* Не растет и не сжимается, фиксированные 250px */
  background: #ecf0f1;
  padding: 1rem;
}

.main-content {
  flex: 1; /* Занимает оставшееся пространство */
  padding: 1rem;
}
```

### 2. align-self (Индивидуальное выравнивание по поперечной оси)

```css
.item {
  align-self: auto; /* По умолчанию - использует значение align-items */
  /* Другие значения: flex-start, flex-end, center, baseline, stretch */
}

/* Практический пример: Hero-секция */
.hero {
  display: flex;
  align-items: center;
  min-height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-content {
  flex: 1;
  padding: 2rem;
  color: white;
}

.hero-image {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}
```

### 3. order (Визуальный порядок)

```css
.item {
  order: 0; /* По умолчанию */
  /* Отрицательные значения идут первыми, положительные - последними */
}

/* Практический пример: Mobile-first макет */
.article {
  display: flex;
  flex-direction: column;
}

.article-content { order: 2; }
.article-sidebar { order: 1; }
.article-related { order: 3; }

@media (min-width: 768px) {
  .article {
    flex-direction: row;
  }

  .article-content { order: 1; flex: 2; }
  .article-sidebar { order: 2; flex: 1; }
  .article-related { order: 3; flex: 1; }
}
```

## Распространенные паттерны Flexbox

### 1. Центрирование контента

```css
/* Идеальное центрирование */
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Только горизонтальное центрирование */
.h-center {
  display: flex;
  justify-content: center;
}

/* Только вертикальное центрирование */
.v-center {
  display: flex;
  align-items: center;
}
```

### 2. Колонки одинаковой высоты

```css
.columns {
  display: flex;
  gap: 2rem;
}

.column {
  flex: 1;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  /* Все колонки автоматически будут одинаковой высоты */
}
```

### 3. Прилипающий футер

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

main {
  flex: 1; /* Занимает все доступное пространство */
}

footer {
  background: #2c3e50;
  color: white;
  padding: 2rem;
  /* Всегда прилипает к низу */
}
```

### 4. Медиа-объект

```css
.media {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.media-image {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.media-content {
  flex: 1;
}
```

### 5. Адаптивная навигация

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #2c3e50;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-item a:hover {
  opacity: 0.8;
}

/* Мобильное меню */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: #2c3e50;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }
}
```

### 6. Сетка карточек с Flexbox

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  flex: 1 1 300px; /* Растет, сжимается, минимальная ширина 300px */
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
}

.card-image {
  height: 200px;
  object-fit: cover;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.card-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

.card-description {
  flex: 1;
  color: #666;
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}
```

## Flexbox vs Grid

Используйте Flexbox когда:
- Работаете с одномерными макетами
- Размер контента должен определять макет
- Нужно выравнивание и распределение пространства
- Создаете навигационные панели, тулбары или небольшие компоненты

Используйте Grid когда:
- Работаете с двумерными макетами
- Нужен точный контроль над рядами и колонками
- Создаете сложные макеты страниц
- Хотите накладывать элементы друг на друга

## Поддержка браузерами и префиксы

Современные браузеры полностью поддерживают Flexbox, но для старых браузеров:

```css
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
```

Flexbox стал незаменимым инструментом для современной веб-разработки. Освойте эти концепции, и вы сможете создавать гибкие, адаптивные макеты с легкостью!
