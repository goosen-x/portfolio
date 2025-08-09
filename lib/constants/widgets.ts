import {
  Ruler,
  FileImage,
  Youtube,
  GitBranch,
  Box,
  Grid3X3,
  QrCode,
  Gauge,
  Key,
  Link as LinkIcon,
  BarChart3,
  Palette,
  Spline,
  FileText,
  SunMoon,
  Languages,
  Hash
} from 'lucide-react'
export interface WidgetFAQ {
  question: string
  answer: string
}

export interface Widget {
  id: string
  icon: React.ComponentType<{ className?: string }>
  category: 'css' | 'media' | 'dev' | 'productivity' | 'settings'
  translationKey: string
  path: string
  gradient: string
  recommendedTools?: string[] // Widget IDs that are related/recommended
  faqs?: {
    en: WidgetFAQ[]
    ru: WidgetFAQ[]
    he: WidgetFAQ[]
  }
  tags?: string[] // For SEO and search
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  useCase?: string // Brief description of when to use this tool
  metaDescription?: string // For SEO
}

export const widgets: Widget[] = [
  // CSS Tools
  {
    id: 'css-clamp-calculator',
    icon: Ruler,
    category: 'css',
    translationKey: 'clampCalculator',
    path: 'clamp-calculator',
    gradient: 'from-amber-500 to-orange-500',
    recommendedTools: ['flexbox-generator', 'grid-generator', 'bezier-curve'],
    difficulty: 'intermediate',
    tags: ['css', 'responsive', 'typography', 'fluid', 'clamp'],
    useCase: 'Perfect for creating responsive typography that scales smoothly between mobile and desktop',
    metaDescription: 'Generate CSS clamp() functions for fluid typography. Create responsive text that scales perfectly between viewports.',
    faqs: {
      en: [
        {
          question: 'What is CSS clamp() function?',
          answer: 'CSS clamp() function allows you to set a value that scales between a minimum and maximum, perfect for responsive typography.'
        },
        {
          question: 'How do I calculate the ideal values?',
          answer: 'Input your minimum and maximum font sizes along with viewport widths. The calculator handles the complex math for you.'
        }
      ],
      ru: [
        {
          question: 'Что такое функция CSS clamp()?',
          answer: 'Функция CSS clamp() позволяет задать значение, которое масштабируется между минимумом и максимумом, идеально для адаптивной типографики.'
        },
        {
          question: 'Как рассчитать идеальные значения?',
          answer: 'Введите минимальный и максимальный размеры шрифта вместе с шириной viewport. Калькулятор выполнит сложные вычисления за вас.'
        }
      ],
      he: [
        {
          question: 'מהי פונקציית CSS clamp()?',
          answer: 'פונקציית CSS clamp() מאפשרת להגדיר ערך שמתאים את עצמו בין מינימום למקסימום, מושלם לטיפוגרפיה רספונסיבית.'
        },
        {
          question: 'איך מחשבים את הערכים האידיאליים?',
          answer: 'הזן את גודל הגופן המינימלי והמקסימלי יחד עם רוחב התצוגה. המחשבון יטפל בחישובים המורכבים עבורך.'
        }
      ]
    }
  },
  {
    id: 'flexbox-generator',
    icon: Box,
    category: 'css',
    translationKey: 'flexboxGenerator',
    path: 'flexbox-generator',
    gradient: 'from-blue-500 to-indigo-500',
    recommendedTools: ['grid-generator', 'css-clamp-calculator', 'css-specificity'],
    difficulty: 'beginner',
    tags: ['css', 'flexbox', 'layout', 'responsive', 'alignment'],
    useCase: 'Visual flexbox playground for creating responsive layouts with proper alignment',
    metaDescription: 'Interactive Flexbox CSS generator. Visualize and generate flexbox layouts with real-time preview.',
    faqs: {
      en: [
        {
          question: 'What is CSS Flexbox?',
          answer: 'Flexbox is a CSS layout model that allows you to arrange elements in a flexible container with powerful alignment options.'
        },
        {
          question: 'When should I use Flexbox instead of Grid?',
          answer: 'Use Flexbox for one-dimensional layouts (row or column) and Grid for two-dimensional layouts. Flexbox is perfect for navigation bars, card layouts, and centering content.'
        },
        {
          question: 'How do I center content with Flexbox?',
          answer: 'Set justify-content: center for horizontal centering and align-items: center for vertical centering on the flex container.'
        }
      ],
      ru: [
        {
          question: 'Что такое CSS Flexbox?',
          answer: 'Flexbox - это модель компоновки CSS, которая позволяет располагать элементы в гибком контейнере с мощными опциями выравнивания.'
        },
        {
          question: 'Когда использовать Flexbox вместо Grid?',
          answer: 'Используйте Flexbox для одномерных макетов (строка или столбец) и Grid для двумерных. Flexbox идеально подходит для навигационных панелей, карточек и центрирования контента.'
        },
        {
          question: 'Как центрировать контент с помощью Flexbox?',
          answer: 'Установите justify-content: center для горизонтального центрирования и align-items: center для вертикального на flex-контейнере.'
        }
      ],
      he: [
        {
          question: 'מה זה CSS Flexbox?',
          answer: 'Flexbox הוא מודל פריסה של CSS המאפשר לסדר אלמנטים במכל גמיש עם אפשרויות יישור חזקות.'
        },
        {
          question: 'מתי להשתמש ב-Flexbox במקום Grid?',
          answer: 'השתמש ב-Flexbox לפריסות חד-ממדיות (שורה או עמודה) וב-Grid לפריסות דו-ממדיות. Flexbox מושלם לסרגלי ניווט, פריסות כרטיסים ומרכוז תוכן.'
        },
        {
          question: 'איך ממרכזים תוכן עם Flexbox?',
          answer: 'הגדר justify-content: center למרכוז אופקי ו-align-items: center למרכוז אנכי על מכל ה-flex.'
        }
      ]
    }
  },
  {
    id: 'grid-generator',
    icon: Grid3X3,
    category: 'css',
    translationKey: 'gridGenerator',
    path: 'grid-generator',
    gradient: 'from-green-500 to-emerald-500',
    recommendedTools: ['flexbox-generator', 'css-clamp-calculator', 'css-specificity'],
    difficulty: 'intermediate',
    tags: ['css', 'grid', 'layout', 'responsive', 'css-grid'],
    useCase: 'Build complex grid layouts visually with automatic CSS generation',
    metaDescription: 'CSS Grid layout generator with visual editor. Create complex responsive grid layouts easily.',
    faqs: {
      en: [
        {
          question: 'What is CSS Grid?',
          answer: 'CSS Grid is a powerful layout system that allows you to create two-dimensional layouts with rows and columns.'
        },
        {
          question: 'How is Grid different from Flexbox?',
          answer: 'Grid is for two-dimensional layouts (both rows and columns), while Flexbox is for one-dimensional layouts. Grid gives you more control over complex layouts.'
        },
        {
          question: 'What are fr units in CSS Grid?',
          answer: 'The fr unit represents a fraction of available space in the grid container. For example, 1fr 2fr creates two columns where the second is twice as wide as the first.'
        }
      ],
      ru: [
        {
          question: 'Что такое CSS Grid?',
          answer: 'CSS Grid - это мощная система компоновки, позволяющая создавать двумерные макеты с строками и столбцами.'
        },
        {
          question: 'Чем Grid отличается от Flexbox?',
          answer: 'Grid для двумерных макетов (строки и столбцы), а Flexbox для одномерных. Grid даёт больше контроля над сложными макетами.'
        },
        {
          question: 'Что такое единицы fr в CSS Grid?',
          answer: 'Единица fr представляет долю доступного пространства в grid-контейнере. Например, 1fr 2fr создаёт два столбца, где второй в два раза шире первого.'
        }
      ],
      he: [
        {
          question: 'מה זה CSS Grid?',
          answer: 'CSS Grid היא מערכת פריסה חזקה המאפשרת ליצור פריסות דו-ממדיות עם שורות ועמודות.'
        },
        {
          question: 'במה Grid שונה מ-Flexbox?',
          answer: 'Grid מיועד לפריסות דו-ממדיות (שורות ועמודות), בעוד Flexbox לפריסות חד-ממדיות. Grid נותן יותר שליטה על פריסות מורכבות.'
        },
        {
          question: 'מה הן יחידות fr ב-CSS Grid?',
          answer: 'יחידת fr מייצגת חלק מהמרחב הזמין במכל ה-grid. לדוגמה, 1fr 2fr יוצר שתי עמודות כאשר השנייה רחבה פי שניים מהראשונה.'
        }
      ]
    }
  },
  {
    id: 'css-specificity',
    icon: Hash,
    category: 'css',
    translationKey: 'cssSpecificity',
    path: 'css-specificity',
    gradient: 'from-indigo-500 to-blue-600',
    recommendedTools: ['html-tree', 'flexbox-generator', 'grid-generator'],
    difficulty: 'advanced',
    tags: ['css', 'specificity', 'selectors', 'debugging', 'cascade'],
    useCase: 'Debug CSS conflicts by calculating and comparing selector specificity',
    metaDescription: 'CSS Specificity calculator and analyzer. Understand cascade and debug CSS conflicts.',
    faqs: {
      en: [
        {
          question: 'What is CSS specificity?',
          answer: 'CSS specificity determines which styles are applied when multiple rules target the same element. It\'s calculated based on the types of selectors used.'
        },
        {
          question: 'How is specificity calculated?',
          answer: 'Specificity is calculated as (inline styles, IDs, classes/attributes/pseudo-classes, elements). For example, #header .nav has specificity 0-1-1-0.'
        },
        {
          question: 'Why is my CSS not working?',
          answer: 'Often it\'s due to specificity conflicts. A more specific selector will override less specific ones, regardless of order in your CSS file.'
        }
      ],
      ru: [
        {
          question: 'Что такое специфичность CSS?',
          answer: 'Специфичность CSS определяет, какие стили применяются, когда несколько правил нацелены на один элемент. Она рассчитывается на основе типов используемых селекторов.'
        },
        {
          question: 'Как рассчитывается специфичность?',
          answer: 'Специфичность рассчитывается как (встроенные стили, ID, классы/атрибуты/псевдоклассы, элементы). Например, #header .nav имеет специфичность 0-1-1-0.'
        },
        {
          question: 'Почему мой CSS не работает?',
          answer: 'Часто это из-за конфликтов специфичности. Более специфичный селектор переопределит менее специфичные, независимо от порядка в CSS файле.'
        }
      ],
      he: [
        {
          question: 'מהי ספציפיות CSS?',
          answer: 'ספציפיות CSS קובעת אילו סגנונות מוחלים כאשר מספר כללים מכוונים לאותו אלמנט. היא מחושבת על סמך סוגי הסלקטורים בשימוש.'
        },
        {
          question: 'איך מחשבים ספציפיות?',
          answer: 'ספציפיות מחושבת כ-(סגנונות inline, IDs, מחלקות/תכונות/pseudo-classes, אלמנטים). לדוגמה, #header .nav בעל ספציפיות 0-1-1-0.'
        },
        {
          question: 'למה ה-CSS שלי לא עובד?',
          answer: 'לעתים קרובות זה בגלל קונפליקטים בספציפיות. סלקטור ספציפי יותר יעקוף פחות ספציפיים, ללא קשר לסדר בקובץ CSS.'
        }
      ]
    }
  },
  {
    id: 'bezier-curve',
    icon: Spline,
    category: 'css',
    translationKey: 'bezierCurve',
    path: 'bezier-curve',
    gradient: 'from-purple-500 to-indigo-500',
    recommendedTools: ['css-clamp-calculator', 'flexbox-generator'],
    difficulty: 'intermediate',
    tags: ['css', 'animation', 'bezier', 'easing', 'transition'],
    useCase: 'Create custom easing functions for smooth CSS animations and transitions',
    metaDescription: 'Interactive cubic-bezier curve generator for CSS animations. Create custom easing functions visually.',
    faqs: {
      en: [
        {
          question: 'What is a cubic-bezier function?',
          answer: 'A cubic-bezier function defines custom easing for CSS transitions and animations, controlling the speed curve of the animation.'
        },
        {
          question: 'How do the control points work?',
          answer: 'The two control points (P1 and P2) define the curve shape. P1 controls the start acceleration, P2 controls the end deceleration.'
        },
        {
          question: 'What are common easing functions?',
          answer: 'Common easings include ease (default), ease-in (slow start), ease-out (slow end), ease-in-out (slow start and end), and linear (constant speed).'
        }
      ],
      ru: [
        {
          question: 'Что такое функция cubic-bezier?',
          answer: 'Функция cubic-bezier определяет пользовательское смягчение для CSS переходов и анимаций, контролируя кривую скорости анимации.'
        },
        {
          question: 'Как работают контрольные точки?',
          answer: 'Две контрольные точки (P1 и P2) определяют форму кривой. P1 контролирует начальное ускорение, P2 контролирует конечное замедление.'
        },
        {
          question: 'Какие есть распространённые функции смягчения?',
          answer: 'Распространённые функции: ease (по умолчанию), ease-in (медленный старт), ease-out (медленный конец), ease-in-out (медленные старт и конец), linear (постоянная скорость).'
        }
      ],
      he: [
        {
          question: 'מהי פונקציית cubic-bezier?',
          answer: 'פונקציית cubic-bezier מגדירה האטה מותאמת אישית למעברים ואנימציות CSS, תוך שליטה בעקומת המהירות של האנימציה.'
        },
        {
          question: 'איך עובדות נקודות הבקרה?',
          answer: 'שתי נקודות הבקרה (P1 ו-P2) מגדירות את צורת העקומה. P1 שולטת בתאוצה ההתחלתית, P2 שולטת בהאטה הסופית.'
        },
        {
          question: 'מהן פונקציות האטה נפוצות?',
          answer: 'פונקציות נפוצות כוללות ease (ברירת מחדל), ease-in (התחלה איטית), ease-out (סוף איטי), ease-in-out (התחלה וסוף איטיים), ו-linear (מהירות קבועה).'
        }
      ]
    }
  },

  // Media & Content
  {
    id: 'svg-encoder',
    icon: FileImage,
    category: 'media',
    translationKey: 'svgEncoder',
    path: 'svg-encoder',
    gradient: 'from-teal-500 to-cyan-500',
    recommendedTools: ['qr-generator', 'color-converter', 'youtube-thumbnail'],
    difficulty: 'beginner',
    tags: ['svg', 'encoder', 'base64', 'css', 'background'],
    useCase: 'Encode SVG images for CSS backgrounds without external files',
    metaDescription: 'SVG to CSS encoder. Convert SVG images to data URLs for CSS backgrounds.',
    faqs: {
      en: [
        {
          question: 'What is SVG encoding?',
          answer: 'SVG encoding converts SVG files into data URLs that can be embedded directly in CSS, eliminating the need for external files.'
        },
        {
          question: 'When should I use encoded SVGs?',
          answer: 'Use encoded SVGs for small icons and decorative elements in CSS to reduce HTTP requests and improve page load speed.'
        },
        {
          question: 'What are the limitations?',
          answer: 'Encoded SVGs increase CSS file size. Best for small graphics under 5KB. Larger files should remain external.'
        }
      ],
      ru: [
        {
          question: 'Что такое кодирование SVG?',
          answer: 'Кодирование SVG преобразует SVG-файлы в data URL, которые можно встраивать прямо в CSS, устраняя необходимость во внешних файлах.'
        },
        {
          question: 'Когда использовать закодированные SVG?',
          answer: 'Используйте закодированные SVG для маленьких иконок и декоративных элементов в CSS для уменьшения HTTP-запросов и улучшения скорости загрузки.'
        },
        {
          question: 'Какие есть ограничения?',
          answer: 'Закодированные SVG увеличивают размер CSS файла. Лучше всего для графики менее 5КБ. Большие файлы должны оставаться внешними.'
        }
      ],
      he: [
        {
          question: 'מהו קידוד SVG?',
          answer: 'קידוד SVG ממיר קבצי SVG ל-data URLs שניתן להטמיע ישירות ב-CSS, מבלי צורך בקבצים חיצוניים.'
        },
        {
          question: 'מתי להשתמש ב-SVG מקודדים?',
          answer: 'השתמש ב-SVG מקודדים לאייקונים קטנים ואלמנטים דקורטיביים ב-CSS כדי להפחית בקשות HTTP ולשפר מהירות טעינה.'
        },
        {
          question: 'מהן המגבלות?',
          answer: 'SVG מקודדים מגדילים את גודל קובץ ה-CSS. מומלץ לגרפיקה מתחת ל-5KB. קבצים גדולים צריכים להישאר חיצוניים.'
        }
      ]
    }
  },
  {
    id: 'youtube-thumbnail',
    icon: Youtube,
    category: 'media',
    translationKey: 'youtubeThumbnail',
    path: 'youtube-thumbnail',
    gradient: 'from-red-500 to-pink-500',
    recommendedTools: ['qr-generator', 'svg-encoder', 'utm-builder'],
    difficulty: 'beginner',
    tags: ['youtube', 'thumbnail', 'download', 'media', 'video'],
    useCase: 'Extract and download YouTube video thumbnails in all available resolutions',
    metaDescription: 'YouTube thumbnail downloader. Get video thumbnails in all resolutions from any YouTube URL.',
    faqs: {
      en: [
        {
          question: 'What resolutions are available?',
          answer: 'YouTube provides thumbnails in multiple resolutions: default (120x90), medium (320x180), high (480x360), standard (640x480), and maxres (1280x720).'
        },
        {
          question: 'Can I download thumbnails from any YouTube video?',
          answer: 'Yes, as long as the video is public. Private or deleted videos won\'t have accessible thumbnails.'
        },
        {
          question: 'Is this legal to use?',
          answer: 'Thumbnails are publicly accessible. However, respect copyright and fair use when using them in your projects.'
        }
      ],
      ru: [
        {
          question: 'Какие разрешения доступны?',
          answer: 'YouTube предоставляет миниатюры в нескольких разрешениях: default (120x90), medium (320x180), high (480x360), standard (640x480) и maxres (1280x720).'
        },
        {
          question: 'Можно ли скачать миниатюры любого видео YouTube?',
          answer: 'Да, если видео публичное. Приватные или удалённые видео не имеют доступных миниатюр.'
        },
        {
          question: 'Это законно использовать?',
          answer: 'Миниатюры публично доступны. Однако уважайте авторские права при использовании их в своих проектах.'
        }
      ],
      he: [
        {
          question: 'אילו רזולוציות זמינות?',
          answer: 'YouTube מספק תמונות ממוזערות במספר רזולוציות: default (120x90), medium (320x180), high (480x360), standard (640x480), ו-maxres (1280x720).'
        },
        {
          question: 'האם אפשר להוריד תמונות מכל סרטון YouTube?',
          answer: 'כן, כל עוד הסרטון ציבורי. סרטונים פרטיים או מחוקים לא יהיו עם תמונות זמינות.'
        },
        {
          question: 'האם זה חוקי להשתמש?',
          answer: 'התמונות נגישות לציבור. עם זאת, כבד זכויות יוצרים ושימוש הוגן בעת השימוש בהן בפרויקטים שלך.'
        }
      ]
    }
  },
  {
    id: 'qr-generator',
    icon: QrCode,
    category: 'media',
    translationKey: 'qrGenerator',
    path: 'qr-generator',
    gradient: 'from-violet-500 to-purple-500',
    recommendedTools: ['utm-builder', 'svg-encoder', 'youtube-thumbnail'],
    difficulty: 'beginner',
    tags: ['qr', 'qrcode', 'generator', 'wifi', 'mobile'],
    useCase: 'Generate QR codes for URLs, WiFi credentials, and app store links',
    metaDescription: 'QR code generator for URLs, WiFi, and apps. Create customizable QR codes with colors and logos.',
    faqs: {
      en: [
        {
          question: 'What can I encode in a QR code?',
          answer: 'You can encode URLs, text, WiFi credentials, email addresses, phone numbers, SMS messages, and app store links.'
        },
        {
          question: 'How do I scan QR codes?',
          answer: 'Most modern smartphones can scan QR codes using the built-in camera app. Just point and tap the notification that appears.'
        },
        {
          question: 'What\'s the maximum data capacity?',
          answer: 'QR codes can store up to 7,089 numeric or 4,296 alphanumeric characters. For best scanning, keep content under 300 characters.'
        }
      ],
      ru: [
        {
          question: 'Что можно закодировать в QR-код?',
          answer: 'Можно закодировать URL, текст, данные WiFi, email адреса, номера телефонов, SMS сообщения и ссылки на приложения.'
        },
        {
          question: 'Как сканировать QR-коды?',
          answer: 'Большинство современных смартфонов могут сканировать QR-коды через встроенную камеру. Просто наведите и нажмите на уведомление.'
        },
        {
          question: 'Какова максимальная вместимость?',
          answer: 'QR-коды могут хранить до 7089 цифр или 4296 буквенно-цифровых символов. Для лучшего сканирования используйте менее 300 символов.'
        }
      ],
      he: [
        {
          question: 'מה אפשר לקדד בקוד QR?',
          answer: 'אפשר לקדד כתובות URL, טקסט, פרטי WiFi, כתובות אימייל, מספרי טלפון, הודעות SMS וקישורים לחנויות אפליקציות.'
        },
        {
          question: 'איך סורקים קודי QR?',
          answer: 'רוב הסמארטפונים המודרניים יכולים לסרוק קודי QR באמצעות אפליקציית המצלמה המובנית. פשוט כוונו והקישו על ההתראה.'
        },
        {
          question: 'מהי הקיבולת המקסימלית?',
          answer: 'קודי QR יכולים לאחסן עד 7,089 ספרות או 4,296 תווים אלפאנומריים. לסריקה טובה יותר, השתמשו בפחות מ-300 תווים.'
        }
      ]
    }
  },
  {
    id: 'color-converter',
    icon: Palette,
    category: 'media',
    translationKey: 'colorConverter',
    path: 'color-converter',
    gradient: 'from-pink-500 to-purple-500',
    recommendedTools: ['svg-encoder', 'bezier-curve', 'css-clamp-calculator'],
    difficulty: 'beginner',
    tags: ['color', 'converter', 'hex', 'rgb', 'hsl', 'cmyk'],
    useCase: 'Convert colors between HEX, RGB, HSL, CMYK, LAB, and other formats',
    metaDescription: 'Universal color converter. Convert between HEX, RGB, HSL, CMYK, LAB, and XYZ color formats.',
    faqs: {
      en: [
        {
          question: 'What color formats are supported?',
          answer: 'The converter supports HEX, RGB, RGBA, HSL, HSLA, CMYK, LAB, and XYZ color formats with seamless conversion between them.'
        },
        {
          question: 'How accurate are the conversions?',
          answer: 'Conversions use industry-standard algorithms. Note that some formats like CMYK may vary slightly depending on color profiles.'
        },
        {
          question: 'Can I convert transparent colors?',
          answer: 'Yes! RGBA and HSLA formats support alpha transparency. The converter preserves transparency values during conversion.'
        }
      ],
      ru: [
        {
          question: 'Какие форматы цветов поддерживаются?',
          answer: 'Конвертер поддерживает HEX, RGB, RGBA, HSL, HSLA, CMYK, LAB и XYZ форматы с бесшовным преобразованием между ними.'
        },
        {
          question: 'Насколько точны преобразования?',
          answer: 'Преобразования используют отраслевые стандартные алгоритмы. Некоторые форматы, такие как CMYK, могут немного отличаться в зависимости от цветовых профилей.'
        },
        {
          question: 'Можно ли преобразовывать прозрачные цвета?',
          answer: 'Да! Форматы RGBA и HSLA поддерживают альфа-прозрачность. Конвертер сохраняет значения прозрачности при преобразовании.'
        }
      ],
      he: [
        {
          question: 'אילו פורמטים של צבעים נתמכים?',
          answer: 'הממיר תומך בפורמטים HEX, RGB, RGBA, HSL, HSLA, CMYK, LAB ו-XYZ עם המרה חלקה ביניהם.'
        },
        {
          question: 'עד כמה ההמרות מדויקות?',
          answer: 'ההמרות משתמשות באלגוריתמים סטנדרטיים בתעשייה. שימו לב שפורמטים כמו CMYK עשויים להשתנות מעט בהתאם לפרופילי צבע.'
        },
        {
          question: 'האם אפשר להמיר צבעים שקופים?',
          answer: 'כן! פורמטים RGBA ו-HSLA תומכים בשקיפות אלפא. הממיר שומר על ערכי השקיפות במהלך ההמרה.'
        }
      ]
    }
  },

  // Dev Tools
  {
    id: 'html-tree',
    icon: GitBranch,
    category: 'dev',
    translationKey: 'htmlTree',
    path: 'html-tree',
    gradient: 'from-purple-500 to-indigo-500',
    recommendedTools: ['css-specificity', 'speed-test', 'flexbox-generator'],
    difficulty: 'intermediate',
    tags: ['html', 'tree', 'bem', 'structure', 'visualization'],
    useCase: 'Visualize HTML structure and validate BEM naming conventions',
    metaDescription: 'HTML tree visualizer with BEM validation. Analyze HTML structure and class naming.',
    faqs: {
      en: [
        {
          question: 'What is BEM methodology?',
          answer: 'BEM (Block Element Modifier) is a naming convention for CSS classes that makes code more maintainable. It uses the pattern: block__element--modifier.'
        },
        {
          question: 'How does the HTML tree help?',
          answer: 'The tree visualizer shows your HTML structure hierarchically, making it easy to spot nesting issues, missing closing tags, and validate BEM naming patterns.'
        },
        {
          question: 'What BEM violations does it detect?',
          answer: 'It detects incorrect BEM syntax, nested blocks, orphaned elements, and modifier misuse, helping maintain consistent naming conventions.'
        }
      ],
      ru: [
        {
          question: 'Что такое методология BEM?',
          answer: 'BEM (Блок Элемент Модификатор) - это соглашение об именовании CSS-классов, которое делает код более поддерживаемым. Использует паттерн: блок__элемент--модификатор.'
        },
        {
          question: 'Как помогает HTML дерево?',
          answer: 'Визуализатор дерева показывает структуру HTML иерархически, упрощая поиск проблем с вложенностью, незакрытых тегов и валидацию BEM-паттернов.'
        },
        {
          question: 'Какие нарушения BEM определяет?',
          answer: 'Определяет неправильный BEM-синтаксис, вложенные блоки, осиротевшие элементы и неправильное использование модификаторов, помогая поддерживать единообразие.'
        }
      ],
      he: [
        {
          question: 'מהי מתודולוגיית BEM?',
          answer: 'BEM (Block Element Modifier) היא קונבנציית שמות למחלקות CSS שהופכת קוד לניתן יותר לתחזוקה. היא משתמשת בדפוס: block__element--modifier.'
        },
        {
          question: 'איך עץ ה-HTML עוזר?',
          answer: 'מציג העץ מראה את מבנה ה-HTML בצורה היררכית, מקל על זיהוי בעיות קינון, תגיות חסרות ואימות דפוסי BEM.'
        },
        {
          question: 'אילו הפרות BEM הוא מזהה?',
          answer: 'מזהה תחביר BEM שגוי, בלוקים מקוננים, אלמנטים יתומים ושימוש לא נכון במודификаторים, עוזר לשמור על קונבנציות עקביות.'
        }
      ]
    }
  },
  {
    id: 'speed-test',
    icon: Gauge,
    category: 'dev',
    translationKey: 'speedTest',
    path: 'speed-test',
    gradient: 'from-slate-500 to-gray-600',
    recommendedTools: ['html-tree', 'css-specificity', 'svg-encoder'],
    difficulty: 'beginner',
    tags: ['speed', 'performance', 'internet', 'bandwidth', 'latency'],
    useCase: 'Test your internet connection speed and latency',
    metaDescription: 'Internet speed test tool. Measure download, upload speeds and latency.',
    faqs: {
      en: [
        {
          question: 'How does the speed test work?',
          answer: 'The test downloads and uploads data chunks to measure throughput, then calculates latency by timing server responses. Results show real-world connection performance.'
        },
        {
          question: 'What affects internet speed?',
          answer: 'Speed is affected by your ISP plan, network congestion, WiFi signal strength, device capabilities, and distance from servers. Wired connections typically perform better than WiFi.'
        },
        {
          question: 'What speeds do I need?',
          answer: 'Basic browsing needs 5-10 Mbps, HD streaming requires 25 Mbps, 4K streaming needs 50+ Mbps, and online gaming benefits from low latency more than high bandwidth.'
        }
      ],
      ru: [
        {
          question: 'Как работает тест скорости?',
          answer: 'Тест загружает и выгружает порции данных для измерения пропускной способности, затем вычисляет задержку, измеряя время ответа сервера. Результаты показывают реальную производительность.'
        },
        {
          question: 'Что влияет на скорость интернета?',
          answer: 'На скорость влияет тарифный план, загруженность сети, сила WiFi-сигнала, возможности устройства и расстояние до серверов. Проводное соединение обычно быстрее WiFi.'
        },
        {
          question: 'Какая скорость мне нужна?',
          answer: 'Для базового сёрфинга нужно 5-10 Мбит/с, HD-стриминг требует 25 Мбит/с, 4K-стриминг нужно 50+ Мбит/с, а для онлайн-игр важнее низкая задержка, чем высокая скорость.'
        }
      ],
      he: [
        {
          question: 'איך בדיקת המהירות עובדת?',
          answer: 'הבדיקה מורידה ומעלה נתונים למדידת תפוקה, ואז מחשבת השהיה על ידי מדידת זמני תגובה של השרת. התוצאות מראות ביצועי חיבור אמיתיים.'
        },
        {
          question: 'מה משפיע על מהירות האינטרנט?',
          answer: 'המהירות מושפעת מתוכנית הספק, עומס רשת, עוצמת אות WiFi, יכולות המכשיר ומרחק מהשרתים. חיבורים קוויים בדרך כלל מהירים מ-WiFi.'
        },
        {
          question: 'איזו מהירות אני צריך?',
          answer: 'גלישה בסיסית צריכה 5-10 Mbps, סטרימינג HD דורש 25 Mbps, סטרימינג 4K צריך 50+ Mbps, ומשחקים אונליין נהנים יותר מהשהיה נמוכה מאשר רוחב פס גבוה.'
        }
      ]
    }
  },

  // Productivity
  {
    id: 'password-generator',
    icon: Key,
    category: 'productivity',
    translationKey: 'passwordGenerator',
    path: 'password-generator',
    gradient: 'from-emerald-500 to-teal-600',
    recommendedTools: ['qr-generator', 'utm-builder'],
    difficulty: 'beginner',
    tags: ['password', 'security', 'generator', 'random', 'secure'],
    useCase: 'Generate secure passwords with customizable complexity',
    metaDescription: 'Secure password generator. Create strong passwords with custom length and character sets.',
    faqs: {
      en: [
        {
          question: 'What makes a password strong?',
          answer: 'Strong passwords are at least 12 characters long, use a mix of uppercase, lowercase, numbers, and symbols, and avoid common words or patterns.'
        },
        {
          question: 'How are passwords generated?',
          answer: 'The generator uses cryptographically secure random number generation to ensure true randomness, making passwords extremely difficult to predict or crack.'
        },
        {
          question: 'Should I use the same password everywhere?',
          answer: 'Never! Use unique passwords for each account. Consider using a password manager to securely store all your different passwords.'
        }
      ],
      ru: [
        {
          question: 'Что делает пароль надёжным?',
          answer: 'Надёжные пароли имеют минимум 12 символов, используют сочетание заглавных, строчных букв, цифр и символов, избегают распространённых слов или паттернов.'
        },
        {
          question: 'Как генерируются пароли?',
          answer: 'Генератор использует криптографически безопасную генерацию случайных чисел для обеспечения истинной случайности, делая пароли крайне сложными для предсказания или взлома.'
        },
        {
          question: 'Можно ли использовать один пароль везде?',
          answer: 'Никогда! Используйте уникальные пароли для каждого аккаунта. Рассмотрите использование менеджера паролей для безопасного хранения всех ваших паролей.'
        }
      ],
      he: [
        {
          question: 'מה הופך סיסמה לחזקה?',
          answer: 'סיסמאות חזקות הן באורך של לפחות 12 תווים, משתמשות בשילוב של אותיות גדולות, קטנות, מספרים וסמלים, ונמנעות ממילים או דפוסים נפוצים.'
        },
        {
          question: 'איך נוצרות הסיסמאות?',
          answer: 'המחולל משתמש ביצירת מספרים אקראיים מאובטחת קריפטוגרפית להבטחת אקראיות אמיתית, מה שהופך סיסמאות לקשות מאוד לניחוש או לפיצוח.'
        },
        {
          question: 'האם להשתמש באותה סיסמה בכל מקום?',
          answer: 'לעולם לא! השתמשו בסיסמאות ייחודיות לכל חשבון. שקלו להשתמש במנהל סיסמאות לאחסון מאובטח של כל הסיסמאות השונות שלכם.'
        }
      ]
    }
  },
  {
    id: 'utm-builder',
    icon: LinkIcon,
    category: 'productivity',
    translationKey: 'utmBuilder',
    path: 'utm-builder',
    gradient: 'from-pink-500 to-rose-500',
    recommendedTools: ['qr-generator', 'seo-markdown-generator', 'youtube-thumbnail'],
    difficulty: 'beginner',
    tags: ['utm', 'marketing', 'analytics', 'tracking', 'campaign'],
    useCase: 'Build UTM-tagged URLs for marketing campaign tracking',
    metaDescription: 'UTM link builder for marketing campaigns. Track traffic sources in Google Analytics.'
  },
  {
    id: 'seo-markdown-generator',
    icon: FileText,
    category: 'productivity',
    translationKey: 'seoMarkdownGenerator',
    path: 'seo-markdown-generator',
    gradient: 'from-yellow-500 to-amber-500',
    recommendedTools: ['utm-builder', 'password-generator', 'html-tree'],
    difficulty: 'intermediate',
    tags: ['seo', 'markdown', 'blog', 'content', 'generator'],
    useCase: 'Generate SEO-optimized markdown files for blog posts',
    metaDescription: 'SEO markdown generator for blogs. Create optimized blog post templates with metadata.'
  },

  // Settings
  {
    id: 'theme-settings',
    icon: SunMoon,
    category: 'settings',
    translationKey: 'themeSettings',
    path: 'theme-settings',
    gradient: 'from-gray-500 to-slate-600',
    recommendedTools: ['language-settings', 'color-converter'],
    difficulty: 'beginner',
    tags: ['theme', 'dark', 'light', 'settings', 'preferences'],
    useCase: 'Switch between light and dark theme modes',
    metaDescription: 'Theme switcher for light and dark modes. Customize your viewing experience.'
  },
  {
    id: 'language-settings',
    icon: Languages,
    category: 'settings',
    translationKey: 'languageSettings',
    path: 'language-settings',
    gradient: 'from-blue-500 to-cyan-500',
    recommendedTools: ['theme-settings'],
    difficulty: 'beginner',
    tags: ['language', 'i18n', 'locale', 'settings', 'translation'],
    useCase: 'Change interface language between English, Russian, and Hebrew',
    metaDescription: 'Language settings for multilingual support. Switch between English, Russian, and Hebrew.'
  }
]

export const widgetCategories = {
  css: 'CSS Tools',
  media: 'Media & Content',
  dev: 'Dev Tools',
  productivity: 'Productivity',
  settings: 'Settings'
} as const

export function getWidgetsByCategory(category: Widget['category']): Widget[] {
  return widgets.filter(widget => widget.category === category)
}

export function getWidgetById(id: string): Widget | undefined {
  return widgets.find(widget => widget.id === id)
}

export function getWidgetByPath(path: string): Widget | undefined {
  return widgets.find(widget => widget.path === path)
}

export function getRecommendedWidgets(widgetId: string): Widget[] {
  const widget = getWidgetById(widgetId)
  if (!widget?.recommendedTools) return []
  
  return widget.recommendedTools
    .map(id => getWidgetById(id))
    .filter((w): w is Widget => w !== undefined)
}

export function getWidgetsByDifficulty(difficulty: Widget['difficulty']): Widget[] {
  return widgets.filter(widget => widget.difficulty === difficulty)
}

export function getWidgetsByTag(tag: string): Widget[] {
  return widgets.filter(widget => widget.tags?.includes(tag))
}

export function getWidgetFAQs(widgetId: string, locale: 'en' | 'ru' | 'he'): WidgetFAQ[] {
  const widget = getWidgetById(widgetId)
  return widget?.faqs?.[locale] || []
}