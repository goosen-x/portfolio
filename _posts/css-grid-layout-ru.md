---
title: "CSS Grid Layout: Полное руководство с примерами"
excerpt: "Освойте CSS Grid Layout с практическими примерами. Научитесь создавать сложные макеты с помощью grid-контейнеров, grid-элементов и адаптивных паттернов дизайна."
coverImage: "/images/avatar.png"
date: "2024-12-10T10:00:00.000Z"
author:
  name: Dmitry Borisenko
  picture: "/images/avatar.png"
ogImage:
  url: "/images/avatar.png"
---

CSS Grid Layout — это мощная двумерная система компоновки, которая революционизировала способы создания веб-макетов. В отличие от Flexbox, который в основном одномерный, Grid позволяет работать одновременно с рядами и колонками.

## Базовый Grid-контейнер

Чтобы создать grid-контейнер, просто примените `display: grid` к элементу:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}
```

Это создает сетку с 3 равными колонками и 2 рядами с определенной высотой.

## Grid Template Areas

Одна из самых интуитивных функций CSS Grid — это области шаблона:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 60px;
  gap: 10px;
}

.header {
  grid-area: header;
  background: #3498db;
}

.sidebar {
  grid-area: sidebar;
  background: #e74c3c;
}

.main {
  grid-area: main;
  background: #2ecc71;
}

.footer {
  grid-area: footer;
  background: #34495e;
}
```

### Интерактивный пример Grid макета

Попробуйте этот интерактивный grid-макет с template areas:

```html:live
// title: Демо Grid Template Areas
<div class="grid-container">
  <header class="grid-header">Заголовок</header>
  <aside class="grid-sidebar">Боковая панель</aside>
  <main class="grid-main">Основной контент</main>
  <footer class="grid-footer">Футер</footer>
</div>
```

```css:live
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px 1fr 60px;
  gap: 10px;
  min-height: 300px;
  padding: 1rem;
  background: #ecf0f1;
  border-radius: 8px;
}

.grid-header {
  grid-area: header;
  background: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.grid-sidebar {
  grid-area: sidebar;
  background: #e74c3c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.grid-main {
  grid-area: main;
  background: #2ecc71;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.grid-footer {
  grid-area: footer;
  background: #34495e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}
```

## Адаптивный Grid с auto-fit и minmax

Создавайте адаптивные сетки без медиа-запросов:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

Это создает адаптивную галерею, где элементы автоматически переносятся на новые ряды по мере необходимости.

## Продвинутое размещение элементов Grid

Контролируйте размещение элементов с точностью:

```css
.item {
  grid-column: 1 / 3; /* Занимает от колонки 1 до 3 */
  grid-row: 2 / 4;    /* Занимает от ряда 2 до 4 */
}

/* Использование ключевого слова span */
.wide-item {
  grid-column: span 2;
  grid-row: span 3;
}

/* Отрицательные номера линий */
.full-width {
  grid-column: 1 / -1; /* Занимает всю ширину */
}
```

## Неявная и явная сетка

CSS Grid автоматически создает треки когда это необходимо:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense; /* Автоматически заполняет пробелы */
}
```

## Практический пример: Макет дашборда

Вот полный макет дашборда с использованием CSS Grid:

```html
<div class="dashboard">
  <header class="dashboard-header">Заголовок</header>
  <nav class="dashboard-nav">Навигация</nav>
  <main class="dashboard-main">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card wide">Широкая карточка</div>
    <div class="card">Карточка 3</div>
  </main>
  <aside class="dashboard-sidebar">Боковая панель</aside>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main sidebar";
  grid-template-columns: 200px 1fr 250px;
  grid-template-rows: 60px 1fr;
  min-height: 100vh;
  gap: 1rem;
  padding: 1rem;
}

.dashboard-header {
  grid-area: header;
  background: #2c3e50;
  color: white;
  padding: 1rem;
}

.dashboard-nav {
  grid-area: nav;
  background: #34495e;
  color: white;
  padding: 1rem;
}

.dashboard-main {
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  grid-auto-rows: minmax(150px, auto);
}

.dashboard-sidebar {
  grid-area: sidebar;
  background: #ecf0f1;
  padding: 1rem;
}

.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card.wide {
  grid-column: span 2;
}

/* Адаптивность */
@media (max-width: 768px) {
  .dashboard {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "sidebar";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
  }

  .card.wide {
    grid-column: span 1;
  }
}
```

## Выравнивание Grid

Контролируйте выравнивание всей сетки и отдельных элементов:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;

  /* Выравнивание сетки */
  justify-content: center; /* Горизонтальное выравнивание */
  align-content: center;   /* Вертикальное выравнивание */

  /* Выравнивание элементов */
  justify-items: center;   /* Все элементы по горизонтали */
  align-items: center;     /* Все элементы по вертикали */
}

/* Выравнивание отдельного элемента */
.special-item {
  justify-self: start;
  align-self: end;
}
```

## Subgrid (Современные браузеры)

Subgrid позволяет вложенным сеткам выравниваться с треками родительской сетки:

```css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 2;
}
```

## Лучшие практики

1. **Используйте Grid для 2D макетов**: Когда нужно контролировать и ряды, и колонки
2. **Комбинируйте с Flexbox**: Используйте Grid для общего макета, Flexbox для внутренностей компонентов
3. **Подход Mobile-first**: Начинайте с простых макетов и улучшайте для больших экранов
4. **Семантический HTML**: Используйте правильные HTML-элементы независимо от размещения в grid
5. **Фоллбэки**: Предоставляйте фоллбэки для старых браузеров когда это необходимо

CSS Grid трансформировал возможности веб-макетов, делая сложные дизайны достижимыми с чистым и поддерживаемым кодом. Освойте его, и у вас будет мощный инструмент в вашем арсенале веб-разработки.
