---
title: "CSS Анимации: От основ до продвинутых техник"
excerpt: "Научитесь создавать потрясающие анимации с помощью CSS. От простых переходов до сложных keyframe-анимаций, оптимизации производительности и примеров из реальной практики."
coverImage: "/images/avatar.png"
date: "2024-12-06T10:00:00.000Z"
author:
  name: Dmitry Borisenko
  picture: "/images/avatar.png"
ogImage:
  url: "/images/avatar.png"
---

CSS анимации оживляют веб-интерфейсы, создавая увлекательный пользовательский опыт без JavaScript. Это руководство охватывает всё от базовых переходов до продвинутых техник анимации.

## CSS Переходы

Переходы — это простейшая форма CSS анимации, идеальная для эффектов при наведении и изменений состояния.

### Базовый синтаксис переходов

```css
.button {
  background: #3498db;
  color: white;
  padding: 10px 20px;
  transition: background 0.3s ease;
}

.button:hover {
  background: #2980b9;
}

/* Несколько свойств */
.card {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

### Свойства переходов

```css
.element {
  /* Сокращенная запись */
  transition: property duration timing-function delay;

  /* Индивидуальные свойства */
  transition-property: transform, opacity;
  transition-duration: 0.3s, 0.5s;
  transition-timing-function: ease-in-out, linear;
  transition-delay: 0s, 0.1s;
}
```

### Функции времени

```css
.examples {
  /* Предопределенные */
  transition-timing-function: ease;        /* медленно-быстро-медленно */
  transition-timing-function: linear;      /* постоянная скорость */
  transition-timing-function: ease-in;     /* медленный старт */
  transition-timing-function: ease-out;    /* медленное окончание */
  transition-timing-function: ease-in-out; /* медленный старт и окончание */

  /* Пользовательская cubic-bezier */
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Эффект отскока */

  /* Шаги */
  transition-timing-function: steps(4, end);
}
```

## CSS Keyframe Анимации

Keyframe анимации предлагают больше контроля для сложных анимаций.

### Базовый @keyframes

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slide-in 0.5s ease-out;
}
```

### Множественные ключевые кадры

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.bouncing-element {
  animation: bounce 1s ease-in-out infinite;
}
```

### Свойства анимации

```css
.element {
  /* Сокращенная запись */
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;

  /* Индивидуальные свойства */
  animation-name: slide-in;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-iteration-count: infinite; /* или число */
  animation-direction: alternate; /* normal, reverse, alternate, alternate-reverse */
  animation-fill-mode: forwards; /* none, forwards, backwards, both */
  animation-play-state: running; /* running, paused */
}
```

## Практические примеры анимации

### 1. Спиннер загрузки

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### 2. Эффект пульсации

```css
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pulse-button {
  background: #e74c3c;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  animation: pulse 2s ease-in-out infinite;
}
```

### Интерактивный пример анимации

Попробуйте эти интерактивные CSS анимации:

```html:live
// title: Демо CSS Анимаций
<div class="animation-demo">
  <div class="demo-spinner"></div>
  <button class="demo-pulse-button">Кнопка с пульсацией</button>
  <div class="demo-bounce">Прыжок</div>
</div>
```

```css:live
.animation-demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  min-height: 150px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.demo-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ecf0f1;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

.demo-pulse-button {
  background: #e74c3c;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.demo-bounce {
  background: #2ecc71;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  animation: bounce 1s ease-in-out infinite;
}
```

### 3. Анимация текста

```css
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.typewriter {
  font-family: monospace;
  overflow: hidden;
  border-right: 3px solid;
  white-space: nowrap;
  animation:
    typing 3.5s steps(40, end),
    blink 0.75s step-end infinite;
}
```

### 4. Анимация переворачивания карточки

```css
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  background: #3498db;
  color: white;
}

.flip-card-back {
  background: #2ecc71;
  color: white;
  transform: rotateY(180deg);
}
```

### 5. Поэтапная анимация

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-container .item {
  opacity: 0;
  animation: fade-in-up 0.5s ease forwards;
}

.stagger-container .item:nth-child(1) { animation-delay: 0.1s; }
.stagger-container .item:nth-child(2) { animation-delay: 0.2s; }
.stagger-container .item:nth-child(3) { animation-delay: 0.3s; }
.stagger-container .item:nth-child(4) { animation-delay: 0.4s; }

/* Или используйте CSS custom properties для динамических задержек */
.stagger-container .item {
  animation-delay: calc(var(--i) * 0.1s);
}
```

### 6. Трансформирующаяся фигура

```css
@keyframes morph {
  0% {
    border-radius: 50%;
    background: #3498db;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 0%;
    background: #e74c3c;
    transform: rotate(180deg) scale(0.5);
  }
  100% {
    border-radius: 50%;
    background: #3498db;
    transform: rotate(360deg) scale(1);
  }
}

.morph-shape {
  width: 100px;
  height: 100px;
  animation: morph 4s ease-in-out infinite;
}
```

## Продвинутые техники

### 1. Анимация с CSS переменными

```css
.dynamic-animation {
  --rotation: 0deg;
  --scale: 1;
  transform: rotate(var(--rotation)) scale(var(--scale));
  transition: transform 0.3s ease;
}

/* Обновление через JavaScript */
element.style.setProperty('--rotation', '180deg');
element.style.setProperty('--scale', '1.5');
```

### 2. Анимация при прокрутке

```css
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.scroll-element {
  opacity: 0;
}

.scroll-element.visible {
  animation: slide-in-left 0.6s ease forwards;
}

/* Intersection Observer в JavaScript добавляет класс .visible */
```

### 3. Анимация SVG-пути

```css
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
```

## Оптимизация производительности

### 1. Используйте Transform и Opacity

```css
/* Хорошо - ускоряется GPU */
.optimized {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Избегайте - вызывает пересчет макета */
.not-optimized {
  left: 100px;
  width: 200px;
}
```

### 2. Свойство Will-Change

```css
.will-animate {
  will-change: transform, opacity;
}

/* Удалите после анимации */
.animation-done {
  will-change: auto;
}
```

### 3. Уменьшите области перерисовки

```css
/* Изолируйте анимации */
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* Создает новый слой */
}
```

## Лучшие практики анимации

1. **Сохраняйте сдержанность**: Анимации должны улучшать, а не отвлекать
2. **Уважайте предпочтения движения**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
3. **Тестируйте производительность**: Используйте DevTools для проверки пропущенных кадров
4. **Используйте подходящую длительность**:
   - Микро-взаимодействия: 100-300мс
   - Переходы страниц: 300-500мс
   - Сложные анимации: 500-1000мс
5. **Обеспечивайте обратную связь**: Убедитесь, что анимации передают изменения состояния

## Отладка анимаций

```css
/* Замедлите все анимации для отладки */
* {
  animation-duration: 10s !important;
  transition-duration: 10s !important;
}
```

CSS анимации — мощные инструменты для создания увлекательного веб-опыта. Используйте их мудро, чтобы улучшить юзабилити и порадовать ваших пользователей!
