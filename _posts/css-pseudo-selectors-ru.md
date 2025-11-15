---
title: "CSS Псевдоклассы и Псевдоэлементы: Освойте продвинутые селекторы"
excerpt: "Глубокое погружение в CSS псевдоклассы и псевдоэлементы. Научитесь создавать сложные взаимодействия и визуальные эффекты без JavaScript."
coverImage: "/images/avatar.png"
date: "2024-11-30T10:00:00.000Z"
author:
  name: Dmitry Borisenko
  picture: "/images/avatar.png"
ogImage:
  url: "/images/avatar.png"
---

CSS псевдоклассы и псевдоэлементы — это мощные селекторы, которые позволяют стилизовать элементы на основе их состояния или создавать виртуальные элементы. Понимание этих селекторов открывает продвинутые возможности стилизации без дополнительного HTML или JavaScript.

## Понимание различий

### Псевдоклассы (:)
Нацеливаются на элементы на основе состояния или позиции:
```css
button:hover { } /* Состояние */
li:first-child { } /* Позиция */
input:valid { } /* Валидация */
```

### Псевдоэлементы (::)
Создают или нацеливаются на виртуальные элементы:
```css
p::first-line { } /* Нацеливание на часть элемента */
div::before { } /* Создание нового элемента */
::selection { } /* Стилизация выделения пользователем */
```

## Основные псевдоклассы

### 1. Интерактивные состояния

```css
/* Состояние наведения */
.button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Состояние фокуса - важно для доступности */
.input:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
  border-color: #3498db;
}

/* Активное состояние - при клике */
.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Посещенные ссылки */
a:visited {
  color: #8e44ad;
}

/* Focus visible - показывает кольцо фокуса только для навигации с клавиатуры */
.button:focus-visible {
  outline: 3px solid #f39c12;
  outline-offset: 2px;
}

/* Убрать фокус для пользователей мыши */
.button:focus:not(:focus-visible) {
  outline: none;
}
```

### 2. Структурные псевдоклассы

```css
/* Первый и последний дочерний элемент */
.list-item:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.list-item:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* Паттерны Nth-child */
.table-row:nth-child(even) {
  background-color: #f8f9fa;
}

.table-row:nth-child(odd) {
  background-color: white;
}

/* Каждый 3-й элемент */
.grid-item:nth-child(3n) {
  margin-right: 0;
}

/* Первые 3 элемента */
.card:nth-child(-n+3) {
  background-color: #e3f2fd;
}

/* Все кроме первых 3 */
.card:nth-child(n+4) {
  opacity: 0.8;
}

/* Единственный дочерний элемент */
.alert:only-child {
  margin: 2rem auto;
  max-width: 600px;
}

/* Селекторы по типу */
p:first-of-type {
  font-size: 1.25rem;
  font-weight: 500;
}

h2:last-of-type {
  margin-bottom: 2rem;
}
```

### 3. Псевдоклассы форм

```css
/* Состояния input */
input:valid {
  border-color: #27ae60;
  background-color: #f0fdf4;
}

input:invalid {
  border-color: #e74c3c;
  background-color: #fef2f2;
}

input:required {
  border-left: 3px solid #f39c12;
}

input:optional {
  border-left: 3px solid #95a5a6;
}

input:disabled {
  background-color: #ecf0f1;
  cursor: not-allowed;
  opacity: 0.6;
}

input:enabled {
  background-color: white;
}

input:read-only {
  background-color: #f5f5f5;
  cursor: default;
}

input:read-write {
  background-color: white;
}

/* Состояния чекбоксов и радио */
input[type="checkbox"]:checked + label {
  color: #27ae60;
  font-weight: bold;
}

input[type="radio"]:checked + label::before {
  content: "✓ ";
  color: #27ae60;
}

/* Состояния числовых input */
input[type="number"]:in-range {
  border-color: #27ae60;
}

input[type="number"]:out-of-range {
  border-color: #e74c3c;
  background-color: #fee;
}

/* Показан placeholder */
input:placeholder-shown {
  border-style: dashed;
}

/* Пример валидации формы */
.form-group:has(input:invalid) {
  background-color: #fef2f2;
  padding: 1rem;
  border-radius: 4px;
}

.form-group:has(input:valid) {
  background-color: #f0fdf4;
  padding: 1rem;
  border-radius: 4px;
}
```

### 4. Продвинутые селекторы

```css
/* :is() - совпадает с любым селектором в списке */
:is(h1, h2, h3):hover {
  color: #3498db;
  cursor: pointer;
}

/* :where() - то же что :is() но с нулевой специфичностью */
:where(h1, h2, h3) {
  line-height: 1.2;
}

/* :has() - родительский селектор */
article:has(img) {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

/* Контейнер с отмеченным чекбоксом */
.option-card:has(input:checked) {
  border-color: #3498db;
  background-color: #ebf5ff;
}

/* :not() - отрицание */
.button:not(:disabled):hover {
  transform: translateY(-2px);
}

/* Множественные :not() */
input:not([type="submit"]):not([type="button"]):not([type="reset"]) {
  width: 100%;
  padding: 0.5rem;
}

/* :empty - элементы без дочерних элементов */
.message:empty {
  display: none;
}

.message:not(:empty) {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* :target - совпадает с элементом, на который указывает хеш URL */
section:target {
  background-color: #fffacd;
  padding: 2rem;
  border-left: 4px solid #f39c12;
}
```

## Мощные псевдоэлементы

### 1. ::before и ::after

```css
/* Декоративные элементы */
.quote::before {
  content: """;
  font-size: 3rem;
  color: #bdc3c7;
  position: absolute;
  top: -10px;
  left: -30px;
}

.quote::after {
  content: """;
  font-size: 3rem;
  color: #bdc3c7;
  position: absolute;
  bottom: -30px;
  right: -30px;
}

/* Иконки без шрифтов */
.external-link::after {
  content: " ↗";
  font-size: 0.8em;
  vertical-align: super;
}

/* Подсказки */
.tooltip {
  position: relative;
}

.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.tooltip:hover::after {
  opacity: 1;
}

/* Пользовательские счетчики */
.timeline-item {
  counter-increment: timeline;
  position: relative;
  padding-left: 3rem;
}

.timeline-item::before {
  content: counter(timeline);
  position: absolute;
  left: 0;
  top: 0;
  width: 2rem;
  height: 2rem;
  background: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
```

### 2. ::first-line и ::first-letter

```css
/* Буквица */
p::first-letter {
  font-size: 3rem;
  font-weight: bold;
  float: left;
  line-height: 1;
  margin-right: 0.5rem;
  color: #e74c3c;
}

/* Стилизованная первая строка */
article p::first-line {
  font-weight: 500;
  font-size: 1.1em;
  color: #2c3e50;
}
```

### 3. ::selection

```css
/* Пользовательское выделение текста */
::selection {
  background-color: #3498db;
  color: white;
}

/* Разное выделение для конкретных элементов */
.important::selection {
  background-color: #e74c3c;
  color: white;
}

/* Префикс Firefox */
::-moz-selection {
  background-color: #3498db;
  color: white;
}
```

### 4. Псевдоэлементы элементов управления форм

```css
/* Стилизация placeholder */
::placeholder {
  color: #95a5a6;
  font-style: italic;
}

input:focus::placeholder {
  color: transparent;
}

/* Кнопка выбора файла */
::file-selector-button {
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
}

::file-selector-button:hover {
  background: #2980b9;
}

/* Webkit scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

## Сложные примеры

### 1. Пользовательский чекбокс

```css
/* Скрыть стандартный чекбокс */
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}

/* Пользовательский чекбокс */
.checkbox-label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.checkbox-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 2px solid #3498db;
  border-radius: 4px;
  background: white;
  transition: all 0.3s;
}

.checkbox-label::after {
  content: "✓";
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s;
}

input[type="checkbox"]:checked + .checkbox-label::before {
  background: #3498db;
}

input[type="checkbox"]:checked + .checkbox-label::after {
  opacity: 1;
}

input[type="checkbox"]:focus + .checkbox-label::before {
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}
```

### 2. Продвинутая навигация

```css
/* Многоуровневая навигация с индикаторами */
.nav-item {
  position: relative;
}

.nav-item:hover > .nav-link {
  color: #3498db;
}

/* Индикатор dropdown */
.nav-item:has(.dropdown)::after {
  content: "▼";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8em;
  transition: transform 0.3s;
}

.nav-item:hover::after {
  transform: translateY(-50%) rotate(180deg);
}

/* Индикатор активной страницы */
.nav-link:is(.active, [aria-current="page"])::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: #3498db;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-link:is(.active, [aria-current="page"])::before,
.nav-link:hover::before {
  transform: scaleX(1);
}
```

### 3. Состояния загрузки

```css
/* Эффект скелетной загрузки */
.skeleton {
  position: relative;
  overflow: hidden;
  background: #eee;
}

.skeleton::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.5) 50%,
    transparent 100%
  );
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Точки загрузки */
.loading::after {
  content: "";
  animation: dots 1.5s steps(4, end) infinite;
}

@keyframes dots {
  0% { content: ""; }
  25% { content: "."; }
  50% { content: ".."; }
  75% { content: "..."; }
  100% { content: ""; }
}
```

## Советы по производительности

1. **Псевдоэлементы создают реальные элементы**: Они влияют на дерево рендеринга
2. **Сложные селекторы могут быть медленными**: Держите специфичность разумной
3. **Избегайте дорогих свойств**: Тени, фильтры в псевдоэлементах
4. **Используйте CSS containment**: Ограничьте область пересчета стилей

## Совместимость с браузерами

Большинство псевдоклассов и псевдоэлементов имеют отличную поддержку, но более новые требуют проверки:
- `:has()` - Только современные браузеры
- `:is()` / `:where()` - Хорошая поддержка
- `::marker` - Хорошая поддержка
- `:focus-visible` - Современные браузеры

Освойте псевдоклассы и псевдоэлементы, чтобы писать более чистый HTML, достигая при этом сложных дизайнов и взаимодействий исключительно с помощью CSS!
