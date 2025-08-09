interface LocaleFAQ {
  question: string
  answer: string
}

type WidgetFAQ = {
  en: LocaleFAQ[]
  ru: LocaleFAQ[]
  he: LocaleFAQ[]
}

export const widgetFAQ: Record<string, WidgetFAQ> = {
  'css-clamp-calculator': {
    en: [
      {
        question: "What is CSS clamp() function?",
        answer: "The CSS clamp() function allows you to set a value that scales between a minimum and maximum based on the viewport size. It's perfect for creating responsive typography and spacing that adapts smoothly to different screen sizes."
      },
      {
        question: "How do I use clamp() for responsive fonts?",
        answer: "Use clamp() with three values: minimum size, preferred size (usually with vw units), and maximum size. For example: font-size: clamp(1rem, 2vw + 0.5rem, 3rem);"
      },
      {
        question: "What browsers support CSS clamp()?",
        answer: "CSS clamp() is supported in all modern browsers including Chrome 79+, Firefox 75+, Safari 13.1+, and Edge 79+. For older browsers, you may need fallbacks."
      },
      {
        question: "Can I use negative values in clamp()?",
        answer: "Yes, clamp() can accept negative values, which is useful for properties like margin or transform. However, be careful as some properties don't accept negative values."
      }
    ],
    ru: [
      {
        question: "Что такое CSS функция clamp()?",
        answer: "CSS функция clamp() позволяет задать значение, которое масштабируется между минимумом и максимумом в зависимости от размера вьюпорта. Идеально подходит для создания адаптивной типографики."
      },
      {
        question: "Как использовать clamp() для адаптивных шрифтов?",
        answer: "Используйте clamp() с тремя значениями: минимальный размер, предпочтительный размер (обычно с vw единицами) и максимальный размер. Например: font-size: clamp(1rem, 2vw + 0.5rem, 3rem);"
      },
      {
        question: "Какие браузеры поддерживают CSS clamp()?",
        answer: "CSS clamp() поддерживается всеми современными браузерами: Chrome 79+, Firefox 75+, Safari 13.1+ и Edge 79+. Для старых браузеров могут потребоваться фоллбэки."
      }
    ],
    he: [
      {
        question: "מה זה פונקציית CSS clamp()?",
        answer: "פונקציית CSS clamp() מאפשרת להגדיר ערך שמתאים את עצמו בין מינימום למקסימום בהתאם לגודל החלון. מושלם ליצירת טיפוגרפיה רספונסיבית."
      },
      {
        question: "איך משתמשים ב-clamp() לגופנים רספונסיביים?",
        answer: "השתמש ב-clamp() עם שלושה ערכים: גודל מינימלי, גודל מועדף (בדרך כלל עם יחידות vw), וגודל מקסימלי."
      }
    ]
  },
  'color-converter': {
    en: [
      {
        question: "What color formats does this converter support?",
        answer: "Our color converter supports HEX, RGB, HSL, HSB/HSV, CMYK, LAB, and XYZ color formats. You can convert between any of these formats instantly."
      },
      {
        question: "How accurate is the CMYK conversion?",
        answer: "CMYK conversion is an approximation since CMYK is for print and RGB/HEX are for screens. The actual printed color may vary depending on the printer and paper."
      },
      {
        question: "What's the difference between HSL and HSB?",
        answer: "HSL (Hue, Saturation, Lightness) and HSB/HSV (Hue, Saturation, Brightness/Value) are similar but calculate the color differently. HSL is often more intuitive for web design."
      },
      {
        question: "Can I use these color values in CSS?",
        answer: "Yes! HEX, RGB, and HSL values can be used directly in CSS. CMYK, LAB, and XYZ are not natively supported in CSS but are useful for other applications."
      }
    ],
    ru: [
      {
        question: "Какие форматы цветов поддерживает конвертер?",
        answer: "Наш конвертер поддерживает форматы HEX, RGB, HSL, HSB/HSV, CMYK, LAB и XYZ. Вы можете конвертировать между любыми из этих форматов мгновенно."
      },
      {
        question: "Насколько точна конвертация в CMYK?",
        answer: "Конвертация CMYK является приближенной, так как CMYK предназначен для печати, а RGB/HEX для экранов. Фактический печатный цвет может отличаться."
      },
      {
        question: "В чем разница между HSL и HSB?",
        answer: "HSL (тон, насыщенность, светлота) и HSB/HSV (тон, насыщенность, яркость) похожи, но вычисляют цвет по-разному. HSL часто более интуитивен для веб-дизайна."
      }
    ],
    he: [
      {
        question: "אילו פורמטים של צבעים הממיר תומך?",
        answer: "הממיר שלנו תומך בפורמטים HEX, RGB, HSL, HSB/HSV, CMYK, LAB ו-XYZ. ניתן להמיר בין כל הפורמטים באופן מיידי."
      },
      {
        question: "האם אפשר להשתמש בערכים האלה ב-CSS?",
        answer: "כן! ערכי HEX, RGB ו-HSL ניתנים לשימוש ישיר ב-CSS. CMYK, LAB ו-XYZ אינם נתמכים ב-CSS אך שימושיים ליישומים אחרים."
      }
    ]
  },
  'flexbox-generator': {
    en: [
      {
        question: "What is CSS Flexbox?",
        answer: "Flexbox (Flexible Box Layout) is a CSS layout method that allows you to arrange elements in a row or column, with powerful alignment and distribution options."
      },
      {
        question: "When should I use Flexbox vs Grid?",
        answer: "Use Flexbox for one-dimensional layouts (row OR column) and when you need flexible sizing. Use Grid for two-dimensional layouts (rows AND columns) and when you need precise control."
      },
      {
        question: "What does flex-wrap do?",
        answer: "Flex-wrap controls whether flex items wrap to new lines when they run out of space. 'nowrap' keeps them on one line, 'wrap' allows wrapping, and 'wrap-reverse' wraps in reverse order."
      },
      {
        question: "How do I center elements with Flexbox?",
        answer: "To center elements both horizontally and vertically, use: display: flex; justify-content: center; align-items: center; on the parent container."
      }
    ],
    ru: [
      {
        question: "Что такое CSS Flexbox?",
        answer: "Flexbox (гибкая блочная разметка) - это метод CSS разметки, который позволяет располагать элементы в строке или столбце с мощными опциями выравнивания."
      },
      {
        question: "Когда использовать Flexbox vs Grid?",
        answer: "Используйте Flexbox для одномерных макетов (строка ИЛИ столбец) и когда нужны гибкие размеры. Используйте Grid для двумерных макетов (строки И столбцы)."
      },
      {
        question: "Как центрировать элементы с Flexbox?",
        answer: "Для центрирования элементов по горизонтали и вертикали используйте: display: flex; justify-content: center; align-items: center; на родительском контейнере."
      }
    ],
    he: [
      {
        question: "מה זה CSS Flexbox?",
        answer: "Flexbox היא שיטת פריסה ב-CSS המאפשרת לסדר אלמנטים בשורה או עמודה, עם אפשרויות יישור וחלוקה מתקדמות."
      },
      {
        question: "איך ממרכזים אלמנטים עם Flexbox?",
        answer: "כדי למרכז אלמנטים אופקית ואנכית, השתמש ב: display: flex; justify-content: center; align-items: center; על המיכל ההורה."
      }
    ]
  }
}