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
  Hash,
  Users,
  Timer,
  Mail,
  Database,
  Type,
  Dices,
  Percent,
  Monitor,
  Shuffle,
  List,
  Coins,
  Globe,
  Braces,
  MessageSquare,
  Smile,
  Volume2,
  Zap,
  Bug,
  Calculator,
  Thermometer,
  Weight,
  FileSearch,
  Clock,
  DollarSign,
  GitCompare,
  Code,
  Search,
  TestTube,
  Binary,
  Droplet,
  Square,
  Layers,
  Circle,
  Sparkles,
  FileJson,
  Lock,
  Fingerprint,
  TrendingUp,
  CreditCard,
  Fuel
} from 'lucide-react'
export interface WidgetFAQ {
  question: string
  answer: string
}

export interface Widget {
  id: string
  icon: React.ComponentType<{ className?: string }>
  category: 'css' | 'media' | 'dev' | 'productivity'
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
    path: 'css-clamp-calculator',
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
    path: 'css-specificity-calculator',
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
    path: 'css-bezier-curve-generator',
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
    path: 'svg-to-base64-encoder',
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
    path: 'youtube-thumbnail-downloader',
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
    path: 'html-tree-visualizer',
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
    path: 'internet-speed-test',
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
  {
    id: 'mock-data-generator',
    icon: Database,
    category: 'dev',
    translationKey: 'mockDataGenerator',
    path: 'mock-data-generator',
    gradient: 'from-emerald-500 to-teal-600',
    recommendedTools: ['html-tree', 'speed-test', 'qr-generator'],
    difficulty: 'beginner',
    tags: ['api', 'mock', 'data', 'json', 'testing', 'development'],
    useCase: 'Fetch sample data from popular free public APIs for testing and prototyping',
    metaDescription: 'Mock data generator using free public APIs. Get sample users, posts, products, and more.',
    faqs: {
      en: [
        {
          question: 'What APIs are included?',
          answer: 'Popular free APIs like JSONPlaceholder, RandomUser, FakeStore API, PokeAPI, and more. All are CORS-enabled and require no authentication.'
        },
        {
          question: 'Can I use this data in production?',
          answer: 'These APIs provide mock data for testing and development. For production, you should use your own data sources or check each API\'s terms of service.'
        },
        {
          question: 'Are there rate limits?',
          answer: 'Most APIs have generous or unlimited rate limits for basic usage. Specific limits are shown for each API endpoint.'
        }
      ],
      ru: [
        {
          question: 'Какие API включены?',
          answer: 'Популярные бесплатные API, такие как JSONPlaceholder, RandomUser, FakeStore API, PokeAPI и другие. Все поддерживают CORS и не требуют аутентификации.'
        },
        {
          question: 'Можно ли использовать эти данные в продакшене?',
          answer: 'Эти API предоставляют моковые данные для тестирования и разработки. Для продакшена используйте собственные источники данных или проверьте условия использования каждого API.'
        },
        {
          question: 'Есть ли ограничения по запросам?',
          answer: 'Большинство API имеют щедрые или неограниченные лимиты для базового использования. Конкретные лимиты показаны для каждой конечной точки API.'
        }
      ],
      he: [
        {
          question: 'אילו APIs כלולים?',
          answer: 'APIs חינמיים פופולריים כמו JSONPlaceholder, RandomUser, FakeStore API, PokeAPI ועוד. כולם תומכים ב-CORS ולא דורשים אימות.'
        },
        {
          question: 'האם אפשר להשתמש בנתונים האלה בייצור?',
          answer: 'ה-APIs האלה מספקים נתוני דמה לבדיקות ופיתוח. לייצור, השתמשו במקורות נתונים משלכם או בדקו את תנאי השימוש של כל API.'
        },
        {
          question: 'האם יש מגבלות קצב?',
          answer: 'לרוב ה-APIs יש מגבלות נדיבות או בלתי מוגבלות לשימוש בסיסי. מגבלות ספציפיות מוצגות לכל נקודת קצה של API.'
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
    path: 'utm-link-builder',
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
  {
    id: 'team-randomizer',
    icon: Users,
    category: 'productivity',
    translationKey: 'teamRandomizer',
    path: 'team-randomizer',
    gradient: 'from-indigo-500 to-purple-600',
    recommendedTools: ['password-generator', 'qr-generator', 'utm-builder', 'draw-lots'],
    difficulty: 'beginner',
    tags: ['team', 'random', 'groups', 'picker', 'fair'],
    useCase: 'Randomly distribute people into balanced teams for games, work or activities',
    metaDescription: 'Random team generator. Create fair and balanced teams from a list of names.',
    faqs: {
      en: [
        {
          question: 'How does the random distribution work?',
          answer: 'The tool uses a Fisher-Yates shuffle algorithm to ensure truly random and fair team distribution, preventing bias in team selection.'
        },
        {
          question: 'Can I create uneven teams?',
          answer: 'Yes! The tool handles remainder members by distributing them as evenly as possible across teams, ensuring no team is significantly larger.'
        },
        {
          question: 'What\'s the maximum number of people?',
          answer: 'The tool can handle hundreds of participants efficiently. For best results, keep individual names under 50 characters.'
        }
      ],
      ru: [
        {
          question: 'Как работает случайное распределение?',
          answer: 'Инструмент использует алгоритм перемешивания Фишера-Йетса для обеспечения действительно случайного и справедливого распределения команд, предотвращая предвзятость в выборе команд.'
        },
        {
          question: 'Можно ли создать неравные команды?',
          answer: 'Да! Инструмент обрабатывает оставшихся участников, распределяя их максимально равномерно по командам, гарантируя, что ни одна команда не будет значительно больше.'
        },
        {
          question: 'Какое максимальное количество людей?',
          answer: 'Инструмент может эффективно обрабатывать сотни участников. Для лучших результатов держите имена до 50 символов.'
        }
      ],
      he: [
        {
          question: 'איך עובד החלוקה האקראית?',
          answer: 'הכלי משתמש באלגוריתם ערבוב פישר-יטס להבטחת חלוקת צוותים אקראית והוגנת באמת, למניעת הטיה בבחירת הצוותים.'
        },
        {
          question: 'האם אפשר ליצור צוותים לא שווים?',
          answer: 'כן! הכלי מטפל בחברים הנותרים על ידי חלוקתם בצורה שווה ככל האפשר בין הצוותים, מבטיח שאף צוות לא יהיה גדול משמעותית.'
        },
        {
          question: 'מה המספר המקסימלי של אנשים?',
          answer: 'הכלי יכול לטפל במאות משתתפים ביעילות. לתוצאות טובות יותר, שמרו על שמות עד 50 תווים.'
        }
      ]
    }
  },
  {
    id: 'draw-lots',
    icon: Shuffle,
    category: 'productivity',
    translationKey: 'drawLots',
    path: 'draw-lots',
    gradient: 'from-purple-500 to-pink-600',
    recommendedTools: ['team-randomizer', 'random-number-generator', 'password-generator'],
    difficulty: 'beginner',
    tags: ['random', 'draw', 'lots', 'picker', 'selection', 'straws'],
    useCase: 'Draw lots digitally - pick names, make decisions, or select winners fairly',
    metaDescription: 'Digital draw lots tool. Draw straws, pick cards randomly for fair selection and decision making.',
    faqs: {
      en: [
        {
          question: 'How does the draw lots system work?',
          answer: 'Items are converted into cards and shuffled using the Fisher-Yates algorithm. You can then click any card to reveal your random selection.'
        },
        {
          question: 'Can I draw multiple lots?',
          answer: 'No, only one card can be selected per draw to ensure fairness. Reset and draw again for multiple selections.'
        },
        {
          question: 'Is this truly random?',
          answer: 'Yes! The Fisher-Yates shuffle algorithm provides mathematically proven random distribution, ensuring every item has an equal chance of being selected.'
        }
      ],
      ru: [
        {
          question: 'Как работает система жеребьёвки?',
          answer: 'Элементы преобразуются в карточки и перемешиваются с использованием алгоритма Фишера-Йетса. Затем вы можете нажать на любую карточку, чтобы открыть случайный выбор.'
        },
        {
          question: 'Можно ли вытянуть несколько жребиев?',
          answer: 'Нет, за один раз можно выбрать только одну карточку для обеспечения справедливости. Сбросьте и тяните снова для множественного выбора.'
        },
        {
          question: 'Это действительно случайно?',
          answer: 'Да! Алгоритм перемешивания Фишера-Йетса обеспечивает математически доказанное случайное распределение, гарантируя, что каждый элемент имеет равные шансы быть выбранным.'
        }
      ],
      he: [
        {
          question: 'איך מערכת ההגרלה עובדת?',
          answer: 'פריטים הופכים לכרטיסים ומעורבבים באמצעות אלגוריתם פישר-יטס. אז אתם יכולים ללחוץ על כל כרטיס כדי לחשוף את הבחירה האקראית שלכם.'
        },
        {
          question: 'האם אפשר למשוך כמה גורלות?',
          answer: 'לא, ניתן לבחור רק כרטיס אחד בכל הגרלה כדי להבטיח הוגנות. אפסו והגרילו שוב לבחירות מרובות.'
        },
        {
          question: 'האם זה באמת אקראי?',
          answer: 'כן! אלגוריתם הערבוב פישר-יטס מספק חלוקה אקראית מוכחת מתמטית, מבטיח שלכל פריט יש סיכוי שווה להיבחר.'
        }
      ]
    }
  },
  {
    id: 'pomodoro-timer',
    icon: Timer,
    category: 'productivity',
    translationKey: 'pomodoroTimer',
    path: 'pomodoro-timer',
    gradient: 'from-red-500 to-orange-600',
    recommendedTools: ['team-randomizer', 'password-generator', 'utm-builder'],
    difficulty: 'beginner',
    tags: ['timer', 'pomodoro', 'productivity', 'focus', 'time-management'],
    useCase: 'Boost productivity using the Pomodoro Technique with customizable work and break intervals',
    metaDescription: 'Pomodoro timer for productivity. Work in focused 25-minute intervals with regular breaks.',
    faqs: {
      en: [
        {
          question: 'What is the Pomodoro Technique?',
          answer: 'The Pomodoro Technique is a time management method that uses 25-minute focused work sessions (called "pomodoros") followed by 5-minute breaks. After 4 pomodoros, take a longer 15-30 minute break.'
        },
        {
          question: 'Can I customize the timer intervals?',
          answer: 'Yes! While the traditional Pomodoro uses 25/5/15 minute intervals, you can adjust work time, short breaks, and long breaks to suit your workflow.'
        },
        {
          question: 'Why is it effective for productivity?',
          answer: 'The technique helps maintain focus by breaking work into manageable chunks, prevents burnout with regular breaks, and creates a sense of urgency that combats procrastination.'
        }
      ],
      ru: [
        {
          question: 'Что такое техника Помодоро?',
          answer: 'Техника Помодоро - это метод управления временем, использующий 25-минутные сессии сфокусированной работы (называемые "помодоро"), за которыми следуют 5-минутные перерывы. После 4 помодоро делается длинный перерыв 15-30 минут.'
        },
        {
          question: 'Можно ли настроить интервалы таймера?',
          answer: 'Да! Хотя традиционный Помодоро использует интервалы 25/5/15 минут, вы можете настроить время работы, короткие и длинные перерывы под свой рабочий процесс.'
        },
        {
          question: 'Почему это эффективно для продуктивности?',
          answer: 'Техника помогает поддерживать фокус, разбивая работу на управляемые части, предотвращает выгорание регулярными перерывами и создаёт чувство срочности, которое борется с прокрастинацией.'
        }
      ],
      he: [
        {
          question: 'מהי טכניקת הפומודורו?',
          answer: 'טכניקת הפומודורו היא שיטת ניהול זמן המשתמשת במפגשי עבודה ממוקדים של 25 דקות (הנקראים "פומודורו") ואחריהם הפסקות של 5 דקות. אחרי 4 פומודורו, קחו הפסקה ארוכה של 15-30 דקות.'
        },
        {
          question: 'האם אפשר להתאים אישית את מרווחי הטיימר?',
          answer: 'כן! בעוד שהפומודורו המסורתי משתמש במרווחים של 25/5/15 דקות, אתם יכולים להתאים את זמן העבודה, ההפסקות הקצרות והארוכות לזרימת העבודה שלכם.'
        },
        {
          question: 'למה זה יעיל לפרודוקטיביות?',
          answer: 'הטכניקה עוזרת לשמור על מיקוד על ידי חלוקת העבודה לחלקים ניתנים לניהול, מונעת שחיקה עם הפסקות סדירות, ויוצרת תחושת דחיפות שנלחמת בדחיינות.'
        }
      ]
    }
  },
  {
    id: 'special-symbols-picker',
    icon: Type,
    category: 'productivity',
    translationKey: 'specialSymbolsPicker',
    path: 'special-symbols-picker',
    gradient: 'from-violet-500 to-indigo-600',
    recommendedTools: ['password-generator', 'qr-generator', 'utm-builder', 'fancy-text-generator'],
    difficulty: 'beginner',
    tags: ['symbols', 'unicode', 'characters', 'copy', 'paste'],
    useCase: 'Quickly copy special symbols and Unicode characters for use in any text',
    metaDescription: 'Special symbols picker with one-click copy. Access Unicode symbols, emojis, and special characters.',
    faqs: {
      en: [
        {
          question: 'What are Unicode symbols?',
          answer: 'Unicode symbols are standardized characters that work across different platforms and applications. They include mathematical symbols, arrows, currency signs, and decorative characters.'
        },
        {
          question: 'How do I use these symbols?',
          answer: 'Simply click any symbol to copy it to your clipboard, then paste it anywhere you need it - in documents, social media, emails, or any text field.'
        },
        {
          question: 'Will these symbols work everywhere?',
          answer: 'Most modern applications support Unicode symbols. However, display may vary depending on the font and platform being used.'
        }
      ],
      ru: [
        {
          question: 'Что такое символы Unicode?',
          answer: 'Символы Unicode - это стандартизированные символы, которые работают на разных платформах и в приложениях. Они включают математические символы, стрелки, знаки валют и декоративные символы.'
        },
        {
          question: 'Как использовать эти символы?',
          answer: 'Просто нажмите на любой символ, чтобы скопировать его в буфер обмена, затем вставьте его где угодно - в документах, социальных сетях, электронной почте или любом текстовом поле.'
        },
        {
          question: 'Будут ли эти символы работать везде?',
          answer: 'Большинство современных приложений поддерживают символы Unicode. Однако отображение может отличаться в зависимости от используемого шрифта и платформы.'
        }
      ],
      he: [
        {
          question: 'מה הם סמלי Unicode?',
          answer: 'סמלי Unicode הם תווים סטנדרטיים שעובדים על פני פלטפורמות ויישומים שונים. הם כוללים סמלים מתמטיים, חצים, סימני מטבע ותווים דקורטיביים.'
        },
        {
          question: 'איך משתמשים בסמלים האלה?',
          answer: 'פשוט לחצו על כל סמל כדי להעתיק אותו ללוח, ואז הדביקו אותו בכל מקום שאתם צריכים - במסמכים, רשתות חברתיות, אימיילים או כל שדה טקסט.'
        },
        {
          question: 'האם הסמלים האלה יעבדו בכל מקום?',
          answer: 'רוב היישומים המודרניים תומכים בסמלי Unicode. עם זאת, התצוגה עשויה להשתנות בהתאם לגופן ולפלטפורמה בשימוש.'
        }
      ]
    }
  },
  {
    id: 'fancy-text-generator',
    icon: Type,
    category: 'productivity',
    translationKey: 'fancyTextGenerator',
    path: 'fancy-text-generator',
    gradient: 'from-fuchsia-500 to-pink-600',
    recommendedTools: ['special-symbols-picker', 'password-generator', 'seo-markdown-generator'],
    difficulty: 'beginner',
    tags: ['text', 'unicode', 'fonts', 'style', 'generator'],
    useCase: 'Transform plain text into stylish Unicode fonts for social media and creative projects',
    metaDescription: 'Fancy text generator with Unicode fonts. Convert text to bold, italic, script, and decorative styles.',
    faqs: {
      en: [
        {
          question: 'How do fancy text fonts work?',
          answer: 'These aren\'t actual fonts but Unicode characters that look like different font styles. They work anywhere Unicode is supported without installing fonts.'
        },
        {
          question: 'Where can I use fancy text?',
          answer: 'Use fancy text on social media (Instagram, Twitter, Facebook), messaging apps, usernames, bios, and anywhere that supports Unicode text input.'
        },
        {
          question: 'Why do some styles look broken?',
          answer: 'Not all platforms support every Unicode character. If a style appears broken, try a different one or use it on a platform with better Unicode support.'
        }
      ],
      ru: [
        {
          question: 'Как работают красивые шрифты?',
          answer: 'Это не настоящие шрифты, а символы Unicode, которые выглядят как разные стили шрифтов. Они работают везде, где поддерживается Unicode, без установки шрифтов.'
        },
        {
          question: 'Где можно использовать красивый текст?',
          answer: 'Используйте красивый текст в социальных сетях (Instagram, Twitter, Facebook), мессенджерах, именах пользователей, био и везде, где поддерживается ввод Unicode.'
        },
        {
          question: 'Почему некоторые стили выглядят сломанными?',
          answer: 'Не все платформы поддерживают каждый символ Unicode. Если стиль выглядит сломанным, попробуйте другой или используйте на платформе с лучшей поддержкой Unicode.'
        }
      ],
      he: [
        {
          question: 'איך עובדים פונטים מעוצבים?',
          answer: 'אלה לא פונטים אמיתיים אלא תווי Unicode שנראים כמו סגנונות פונט שונים. הם עובדים בכל מקום שתומך ב-Unicode ללא התקנת פונטים.'
        },
        {
          question: 'איפה אפשר להשתמש בטקסט מעוצב?',
          answer: 'השתמשו בטקסט מעוצב ברשתות חברתיות (אינסטגרם, טוויטר, פייסבוק), אפליקציות הודעות, שמות משתמש, ביו ובכל מקום שתומך בקלט טקסט Unicode.'
        },
        {
          question: 'למה חלק מהסגנונות נראים שבורים?',
          answer: 'לא כל הפלטפורמות תומכות בכל תו Unicode. אם סגנון נראה שבור, נסו אחר או השתמשו בפלטפורמה עם תמיכה טובה יותר ב-Unicode.'
        }
      ]
    }
  },
  {
    id: 'random-number-generator',
    icon: Dices,
    category: 'productivity',
    translationKey: 'randomNumberGenerator',
    path: 'random-number-generator',
    gradient: 'from-cyan-500 to-blue-600',
    recommendedTools: ['password-generator', 'team-randomizer', 'fancy-text-generator'],
    difficulty: 'beginner',
    tags: ['random', 'number', 'generator', 'crypto', 'secure'],
    useCase: 'Generate cryptographically secure random numbers for games, lottery, or cryptographic applications',
    metaDescription: 'Cryptographically secure random number generator. Generate random numbers with no duplicates option.',
    faqs: {
      en: [
        {
          question: 'How secure are these random numbers?',
          answer: 'This generator uses the Web Crypto API (crypto.getRandomValues) which provides cryptographically secure random numbers suitable for most cryptographic applications.'
        },
        {
          question: 'What\'s the difference from Math.random()?',
          answer: 'Unlike Math.random() which is predictable and not secure, crypto.getRandomValues() uses the operating system\'s entropy source to generate truly random numbers.'
        },
        {
          question: 'Can I use this for lottery or gambling?',
          answer: 'While the numbers are cryptographically secure, please follow local laws and regulations. The user is responsible for any legal compliance.'
        }
      ],
      ru: [
        {
          question: 'Насколько безопасны эти случайные числа?',
          answer: 'Этот генератор использует Web Crypto API (crypto.getRandomValues), который предоставляет криптографически безопасные случайные числа, подходящие для большинства криптографических приложений.'
        },
        {
          question: 'В чём отличие от Math.random()?',
          answer: 'В отличие от Math.random(), который предсказуем и небезопасен, crypto.getRandomValues() использует источник энтропии операционной системы для генерации действительно случайных чисел.'
        },
        {
          question: 'Можно ли использовать для лотереи или азартных игр?',
          answer: 'Хотя числа криптографически безопасны, пожалуйста, следуйте местным законам и правилам. Пользователь несёт ответственность за соблюдение законодательства.'
        }
      ],
      he: [
        {
          question: 'כמה מאובטחים המספרים האקראיים האלה?',
          answer: 'מחולל זה משתמש ב-Web Crypto API (crypto.getRandomValues) המספק מספרים אקראיים מאובטחים קריפטוגרפית המתאימים לרוב היישומים הקריפטוגרפיים.'
        },
        {
          question: 'מה ההבדל מ-Math.random()?',
          answer: 'בניגוד ל-Math.random() שניתן לחיזוי ולא מאובטח, crypto.getRandomValues() משתמש במקור האנטרופיה של מערכת ההפעלה ליצירת מספרים אקראיים באמת.'
        },
        {
          question: 'האם אפשר להשתמש בזה להגרלה או הימורים?',
          answer: 'למרות שהמספרים מאובטחים קריפטוגרפית, אנא עקבו אחר החוקים והתקנות המקומיים. המשתמש אחראי לכל ציות לחוק.'
        }
      ]
    }
  },
  {
    id: 'percentage-calculator',
    icon: Percent,
    category: 'productivity',
    translationKey: 'percentageCalculator',
    path: 'percentage-calculator',
    gradient: 'from-amber-500 to-orange-600',
    recommendedTools: ['random-number-generator', 'password-generator'],
    difficulty: 'beginner',
    tags: ['calculator', 'percentage', 'math', 'finance', 'discount'],
    useCase: 'Calculate percentages for discounts, taxes, tips, investments, and price changes',
    metaDescription: 'Percentage calculator for multiple scenarios. Calculate discounts, taxes, tips, and percentage changes.',
    faqs: {
      en: [
        {
          question: 'What calculations can this tool perform?',
          answer: 'This calculator handles 6 common percentage scenarios: finding X% of Y, finding the base number, finding 100%, calculating percentage change, and adding/subtracting percentages.'
        },
        {
          question: 'How do I calculate a discount?',
          answer: 'Use the "Subtract %" tab. Enter the original price and the discount percentage to see the final price after discount.'
        },
        {
          question: 'How do I calculate tax?',
          answer: 'Use the "Add %" tab. Enter the price and the tax percentage to see the total price including tax.'
        }
      ],
      ru: [
        {
          question: 'Какие расчёты может выполнять этот инструмент?',
          answer: 'Этот калькулятор обрабатывает 6 распространённых сценариев с процентами: нахождение X% от Y, нахождение базового числа, нахождение 100%, расчёт процентного изменения и добавление/вычитание процентов.'
        },
        {
          question: 'Как рассчитать скидку?',
          answer: 'Используйте вкладку "Вычесть %". Введите исходную цену и процент скидки, чтобы увидеть итоговую цену после скидки.'
        },
        {
          question: 'Как рассчитать налог?',
          answer: 'Используйте вкладку "Добавить %". Введите цену и процент налога, чтобы увидеть общую цену с учётом налога.'
        }
      ],
      he: [
        {
          question: 'אילו חישובים הכלי הזה יכול לבצע?',
          answer: 'מחשבון זה מטפל ב-6 תרחישי אחוזים נפוצים: מציאת X% מ-Y, מציאת המספר הבסיסי, מציאת 100%, חישוב שינוי באחוזים והוספה/הפחתת אחוזים.'
        },
        {
          question: 'איך מחשבים הנחה?',
          answer: 'השתמשו בכרטיסייה "הפחת %". הזינו את המחיר המקורי ואת אחוז ההנחה כדי לראות את המחיר הסופי אחרי ההנחה.'
        },
        {
          question: 'איך מחשבים מס?',
          answer: 'השתמשו בכרטיסייה "הוסף %". הזינו את המחיר ואת אחוז המס כדי לראות את המחיר הכולל כולל מס.'
        }
      ]
    }
  },
  {
    id: 'random-list-generator',
    icon: List,
    category: 'productivity',
    translationKey: 'randomListGenerator',
    path: 'random-list-generator',
    gradient: 'from-violet-500 to-purple-600',
    recommendedTools: ['draw-lots', 'random-number-generator', 'team-randomizer'],
    difficulty: 'beginner',
    tags: ['random', 'list', 'shuffle', 'sort', 'generator', 'cryptographic'],
    useCase: 'Randomly shuffle and sort lists with cryptographically secure randomization',
    metaDescription: 'Random list generator using crypto.getRandomValues. Shuffle names, items, or numbers with true randomness.',
    faqs: {
      en: [
        {
          question: 'How does the randomization work?',
          answer: 'The tool uses the Fisher-Yates shuffle algorithm with crypto.getRandomValues() for cryptographically secure randomness, which is more random than Math.random().'
        },
        {
          question: 'Is my data safe?',
          answer: 'Yes! All processing happens in your browser. No data is sent to any server. Your lists remain completely private.'
        },
        {
          question: 'What\'s the maximum number of items?',
          answer: 'You can shuffle up to 10,000 items at once. For larger lists, consider splitting them into smaller batches for better performance.'
        },
        {
          question: 'Can I save my shuffled lists?',
          answer: 'Yes, you can download the shuffled results as a text file or copy them to your clipboard for use in other applications.'
        }
      ],
      ru: [
        {
          question: 'Как работает рандомизация?',
          answer: 'Инструмент использует алгоритм перемешивания Фишера-Йетса с crypto.getRandomValues() для криптографически безопасной случайности, что более случайно, чем Math.random().'
        },
        {
          question: 'Безопасны ли мои данные?',
          answer: 'Да! Вся обработка происходит в вашем браузере. Никакие данные не отправляются на сервер. Ваши списки остаются полностью конфиденциальными.'
        },
        {
          question: 'Какое максимальное количество элементов?',
          answer: 'Вы можете перемешать до 10 000 элементов за раз. Для больших списков рекомендуется разделить их на меньшие части для лучшей производительности.'
        },
        {
          question: 'Могу ли я сохранить перемешанные списки?',
          answer: 'Да, вы можете скачать результаты как текстовый файл или скопировать их в буфер обмена для использования в других приложениях.'
        }
      ],
      he: [
        {
          question: 'איך האקראיות עובדת?',
          answer: 'הכלי משתמש באלגוריתם הערבוב פישר-יטס עם crypto.getRandomValues() לאקראיות קריפטוגרפית מאובטחת, שהיא יותר אקראית מ-Math.random().'
        },
        {
          question: 'האם הנתונים שלי בטוחים?',
          answer: 'כן! כל העיבוד מתרחש בדפדפן שלך. שום נתונים לא נשלחים לשרת. הרשימות שלך נשארות פרטיות לחלוטין.'
        },
        {
          question: 'מה המספר המקסימלי של פריטים?',
          answer: 'ניתן לערבב עד 10,000 פריטים בבת אחת. לרשימות גדולות יותר, שקלו לחלק אותן לקבוצות קטנות יותר לביצועים טובים יותר.'
        },
        {
          question: 'האם אני יכול לשמור רשימות מעורבבות?',
          answer: 'כן, אתם יכולים להוריד את התוצאות כקובץ טקסט או להעתיק אותן ללוח העריכה לשימוש ביישומים אחרים.'
        }
      ]
    }
  },
  {
    id: 'coin-flip',
    icon: Coins,
    category: 'productivity',
    translationKey: 'coinFlip',
    path: 'coin-flip',
    gradient: 'from-amber-500 to-yellow-600',
    recommendedTools: ['draw-lots', 'random-number-generator', 'random-list-generator'],
    difficulty: 'beginner',
    tags: ['coin', 'flip', 'random', 'decision', 'heads', 'tails', '3d'],
    useCase: 'Flip a coin online with realistic 3D animation for making quick decisions',
    metaDescription: 'Online coin flip with 3D animation. Heads or tails with multiple coin types and statistics.',
    faqs: {
      en: [
        {
          question: 'Is the coin flip truly random?',
          answer: 'Yes! The tool uses crypto.getRandomValues() for cryptographically secure randomness, ensuring each flip has exactly 50% chance for heads or tails.'
        },
        {
          question: 'Can I use different types of coins?',
          answer: 'Yes, you can choose from US Dollar, Euro, Russian Ruble, or a generic coin. Each has authentic heads and tails designs.'
        },
        {
          question: 'Is my flip history saved?',
          answer: 'Your flip history is saved locally in your browser. It persists between sessions but is never sent to any server.'
        },
        {
          question: 'What do the statistics show?',
          answer: 'The statistics display the total number and percentage of heads vs tails outcomes, helping you verify the randomness over many flips.'
        }
      ],
      ru: [
        {
          question: 'Действительно ли бросок монеты случайный?',
          answer: 'Да! Инструмент использует crypto.getRandomValues() для криптографически безопасной случайности, обеспечивая ровно 50% шанс для орла или решки.'
        },
        {
          question: 'Могу ли я использовать разные типы монет?',
          answer: 'Да, вы можете выбрать доллар США, евро, российский рубль или обычную монету. У каждой есть аутентичный дизайн орла и решки.'
        },
        {
          question: 'Сохраняется ли история бросков?',
          answer: 'История бросков сохраняется локально в вашем браузере. Она сохраняется между сеансами, но никогда не отправляется на сервер.'
        },
        {
          question: 'Что показывает статистика?',
          answer: 'Статистика отображает общее количество и процент выпадений орла против решки, помогая проверить случайность на множестве бросков.'
        }
      ],
      he: [
        {
          question: 'האם הטלת המטבע באמת אקראית?',
          answer: 'כן! הכלי משתמש ב-crypto.getRandomValues() לאקראיות קריפטוגרפית מאובטחת, מבטיח שלכל הטלה יש בדיוק 50% סיכוי לעץ או פלי.'
        },
        {
          question: 'האם אני יכול להשתמש בסוגי מטבעות שונים?',
          answer: 'כן, אתם יכולים לבחור מדולר אמריקאי, יורו, רובל רוסי, או מטבע כללי. לכל אחד יש עיצוב אותנטי של עץ ופלי.'
        },
        {
          question: 'האם היסטוריית ההטלות נשמרת?',
          answer: 'היסטוריית ההטלות נשמרת מקומית בדפדפן שלך. היא נשמרת בין הפעלות אך לעולם לא נשלחת לשרת כלשהו.'
        },
        {
          question: 'מה הסטטיסטיקה מראה?',
          answer: 'הסטטיסטיקה מציגה את המספר הכולל והאחוז של תוצאות עץ מול פלי, עוזרת לאמת את האקראיות על פני הטלות רבות.'
        }
      ]
    }
  },
  {
    id: 'world-time',
    icon: Globe,
    category: 'productivity',
    translationKey: 'worldTime',
    path: 'world-time',
    gradient: 'from-blue-500 to-cyan-600',
    recommendedTools: ['pomodoro-timer', 'unit-converter', 'speed-test'],
    difficulty: 'beginner',
    tags: ['time', 'timezone', 'world', 'clock', 'converter', 'dst'],
    useCase: 'Track time across multiple cities and convert between timezones',
    metaDescription: 'World time converter with live clocks for multiple cities. Convert times between any timezone.',
    faqs: {
      en: [
        {
          question: 'How accurate are the timezone calculations?',
          answer: 'The tool uses the IANA timezone database through the browser\'s Intl API, providing accurate times that automatically account for daylight saving time changes.'
        },
        {
          question: 'Can I add custom cities?',
          answer: 'Yes! You can add any city from the dropdown menu. The tool includes major cities worldwide and supports all standard timezones.'
        },
        {
          question: 'What does the DST badge mean?',
          answer: 'DST stands for Daylight Saving Time. The badge appears when a location is currently observing daylight saving time.'
        },
        {
          question: 'Are my selected cities saved?',
          answer: 'Yes, your selected cities are saved in your browser\'s local storage and will persist between visits.'
        }
      ],
      ru: [
        {
          question: 'Насколько точны расчёты часовых поясов?',
          answer: 'Инструмент использует базу данных часовых поясов IANA через API браузера Intl, обеспечивая точное время с автоматическим учётом перехода на летнее время.'
        },
        {
          question: 'Могу ли я добавить свои города?',
          answer: 'Да! Вы можете добавить любой город из выпадающего меню. Инструмент включает крупные города по всему миру и поддерживает все стандартные часовые пояса.'
        },
        {
          question: 'Что означает значок DST?',
          answer: 'DST означает летнее время. Значок появляется, когда в данном месте действует летнее время.'
        },
        {
          question: 'Сохраняются ли выбранные города?',
          answer: 'Да, выбранные города сохраняются в локальном хранилище браузера и сохраняются между посещениями.'
        }
      ],
      he: [
        {
          question: 'עד כמה חישובי אזורי הזמן מדויקים?',
          answer: 'הכלי משתמש במסד הנתונים של אזורי זמן IANA דרך ה-API של הדפדפן Intl, מספק זמנים מדויקים שמתחשבים אוטומטית בשינויי שעון קיץ.'
        },
        {
          question: 'האם אני יכול להוסיף ערים מותאמות אישית?',
          answer: 'כן! ניתן להוסיף כל עיר מהתפריט הנפתח. הכלי כולל ערים מרכזיות ברחבי העולם ותומך בכל אזורי הזמן הסטנדרטיים.'
        },
        {
          question: 'מה משמעות התג DST?',
          answer: 'DST מייצג שעון קיץ. התג מופיע כאשר מיקום נמצא כעת בשעון קיץ.'
        },
        {
          question: 'האם הערים שבחרתי נשמרות?',
          answer: 'כן, הערים שנבחרו נשמרות באחסון המקומי של הדפדפן שלך וישארו בין ביקורים.'
        }
      ]
    }
  },
  {
    id: 'dice-roller',
    icon: Dices,
    category: 'productivity',
    translationKey: 'diceRoller',
    path: 'dice-roller',
    gradient: 'from-red-500 to-pink-600',
    recommendedTools: ['coin-flip', 'draw-lots', 'random-number-generator'],
    difficulty: 'beginner',
    tags: ['dice', 'random', 'game', '3d', 'probability', 'roll'],
    useCase: 'Roll virtual dice with 3D animation for games and decision making',
    metaDescription: 'Online dice roller with 3D animation. Roll up to 6 dice with true random numbers.',
    faqs: {
      en: [
        {
          question: 'Are the dice rolls truly random?',
          answer: 'Yes! The tool uses crypto.getRandomValues() which provides cryptographically secure random numbers, ensuring each roll is truly random and unpredictable.'
        },
        {
          question: 'What is the probability of rolling doubles?',
          answer: 'With 2 dice, the probability of doubles is 16.67% (1 in 6). With 3 dice, the probability of triples is 2.78% (1 in 36).'
        },
        {
          question: 'Does the 3D animation work on all browsers?',
          answer: 'The 3D animation uses CSS3 transforms and works on modern browsers (Chrome, Edge, Firefox). Older browsers automatically fall back to 2D animation.'
        },
        {
          question: 'Can I use this for board games?',
          answer: 'Absolutely! This tool is perfect for any game requiring dice rolls. The history feature helps track rolls during gameplay.'
        }
      ],
      ru: [
        {
          question: 'Действительно ли броски костей случайны?',
          answer: 'Да! Инструмент использует crypto.getRandomValues(), который обеспечивает криптографически безопасные случайные числа, гарантируя истинную случайность каждого броска.'
        },
        {
          question: 'Какова вероятность выпадения дубля?',
          answer: 'С 2 костями вероятность дубля составляет 16,67% (1 из 6). С 3 костями вероятность тройки составляет 2,78% (1 из 36).'
        },
        {
          question: 'Работает ли 3D анимация во всех браузерах?',
          answer: '3D анимация использует CSS3 трансформации и работает в современных браузерах (Chrome, Edge, Firefox). Старые браузеры автоматически переключаются на 2D анимацию.'
        },
        {
          question: 'Можно ли использовать для настольных игр?',
          answer: 'Конечно! Этот инструмент идеально подходит для любой игры, требующей бросков костей. Функция истории помогает отслеживать броски во время игры.'
        }
      ],
      he: [
        {
          question: 'האם הטלות הקוביות באמת אקראיות?',
          answer: 'כן! הכלי משתמש ב-crypto.getRandomValues() שמספק מספרים אקראיים מאובטחים קריפטוגרפית, מבטיח שכל הטלה היא באמת אקראית ובלתי צפויה.'
        },
        {
          question: 'מה ההסתברות לזרוק דאבלס?',
          answer: 'עם 2 קוביות, ההסתברות לדאבלס היא 16.67% (1 מתוך 6). עם 3 קוביות, ההסתברות לטריפלס היא 2.78% (1 מתוך 36).'
        },
        {
          question: 'האם האנימציה התלת-ממדית עובדת בכל הדפדפנים?',
          answer: 'האנימציה התלת-ממדית משתמשת בטרנספורמציות CSS3 ועובדת בדפדפנים מודרניים (Chrome, Edge, Firefox). דפדפנים ישנים עוברים אוטומטית לאנימציה דו-ממדית.'
        },
        {
          question: 'האם אפשר להשתמש בזה למשחקי לוח?',
          answer: 'בהחלט! הכלי הזה מושלם לכל משחק הדורש הטלת קוביות. תכונת ההיסטוריה עוזרת לעקוב אחר הטלות במהלך המשחק.'
        }
      ]
    }
  },
  {
    id: 'social-media-formatter',
    icon: MessageSquare,
    category: 'media',
    translationKey: 'socialMediaFormatter',
    path: 'social-media-formatter',
    gradient: 'from-blue-500 to-purple-600',
    recommendedTools: ['fancy-text-generator', 'special-symbols-picker', 'emoji-list'],
    difficulty: 'beginner',
    tags: ['social', 'media', 'facebook', 'instagram', 'format', 'spaces', 'text'],
    useCase: 'Format text with multiple spaces and line breaks for social media posts',
    metaDescription: 'Social media text formatter. Add multiple spaces and line breaks for Facebook, Instagram posts.',
    faqs: {
      en: [
        {
          question: 'How does this formatter work?',
          answer: 'The tool inserts invisible Unicode characters (zero-width spaces) between regular spaces and line breaks, preventing social media platforms from removing them.'
        },
        {
          question: 'Which platforms does this work on?',
          answer: 'It works on Facebook posts and comments, Instagram captions and bio, Twitter/X, LinkedIn, WordPress, and most other social platforms that support Unicode.'
        },
        {
          question: 'Will the formatting be visible to everyone?',
          answer: 'Yes, the formatting will be preserved and visible to anyone viewing your post, regardless of their device or app version.'
        },
        {
          question: 'Are there any limitations?',
          answer: 'Some platforms may have character limits that include invisible characters. The formatting works best with Latin text and may vary with different fonts.'
        }
      ],
      ru: [
        {
          question: 'Как работает этот форматировщик?',
          answer: 'Инструмент вставляет невидимые символы Unicode (пробелы нулевой ширины) между обычными пробелами и переводами строк, не позволяя соцсетям их удалять.'
        },
        {
          question: 'На каких платформах это работает?',
          answer: 'Работает в постах и комментариях Facebook, подписях и био Instagram, Twitter/X, LinkedIn, WordPress и большинстве других соцсетей с поддержкой Unicode.'
        },
        {
          question: 'Будет ли форматирование видно всем?',
          answer: 'Да, форматирование сохранится и будет видно всем, кто просматривает ваш пост, независимо от устройства или версии приложения.'
        },
        {
          question: 'Есть ли ограничения?',
          answer: 'Некоторые платформы имеют лимиты символов, включающие невидимые символы. Форматирование лучше работает с латинским текстом и может отличаться при разных шрифтах.'
        }
      ],
      he: [
        {
          question: 'איך הפורמטר הזה עובד?',
          answer: 'הכלי מוסיף תווי יוניקוד בלתי נראים (רווחים ברוחב אפס) בין רווחים רגילים ומעברי שורה, מונע מרשתות חברתיות להסיר אותם.'
        },
        {
          question: 'באילו פלטפורמות זה עובד?',
          answer: 'עובד בפוסטים ותגובות בפייסבוק, כיתובים וביו באינסטגרם, טוויטר/X, לינקדאין, וורדפרס ורוב הרשתות החברתיות האחרות עם תמיכת יוניקוד.'
        },
        {
          question: 'האם העיצוב יהיה גלוי לכולם?',
          answer: 'כן, העיצוב יישמר ויהיה גלוי לכל מי שצופה בפוסט שלך, ללא קשר למכשיר או גרסת האפליקציה.'
        },
        {
          question: 'האם יש מגבלות?',
          answer: 'חלק מהפלטפורמות יש להן מגבלות תווים הכוללות תווים בלתי נראים. העיצוב עובד הכי טוב עם טקסט לטיני ועשוי להשתנות עם גופנים שונים.'
        }
      ]
    }
  },
  {
    id: 'emoji-list',
    icon: Smile,
    category: 'media',
    translationKey: 'emojiList',
    path: 'emoji-list',
    gradient: 'from-yellow-400 to-orange-500',
    recommendedTools: ['special-symbols-picker', 'fancy-text-generator', 'social-media-formatter'],
    difficulty: 'beginner',
    tags: ['emoji', 'emoticons', 'unicode', 'copy', 'paste', 'symbols'],
    useCase: 'Browse and copy 1800+ emojis organized by categories',
    metaDescription: 'Complete emoji list with instant copy. Browse 1800+ emojis in 8 categories.',
    faqs: {
      en: [
        {
          question: 'How many emojis are available?',
          answer: 'The tool includes 1,800+ emojis from Unicode 14.0, organized into 8 categories: Smileys & People, People & Body, Animals & Nature, Food & Drink, Activities, Travel & Places, Objects, Symbols, and Flags.'
        },
        {
          question: 'Will emojis display correctly on all devices?',
          answer: 'Most modern devices (iOS, Android 4.4+, Windows 8.1+) support colorful emojis. If your device doesn\'t support certain emojis, they may appear as boxes or question marks.'
        },
        {
          question: 'Are my recent emojis saved?',
          answer: 'Yes, the tool automatically saves your last 30 used emojis locally in your browser for quick access.'
        },
        {
          question: 'Can I search for specific emojis?',
          answer: 'Yes, use the search bar to find emojis quickly. The search works across all categories.'
        }
      ],
      ru: [
        {
          question: 'Сколько эмодзи доступно?',
          answer: 'Инструмент включает более 1800 эмодзи из Unicode 14.0, организованных в 8 категорий: Смайлики и люди, Люди и тело, Животные и природа, Еда и напитки, Активности, Путешествия и места, Объекты, Символы и Флаги.'
        },
        {
          question: 'Будут ли эмодзи корректно отображаться на всех устройствах?',
          answer: 'Большинство современных устройств (iOS, Android 4.4+, Windows 8.1+) поддерживают цветные эмодзи. Если ваше устройство не поддерживает определенные эмодзи, они могут отображаться как квадраты или знаки вопроса.'
        },
        {
          question: 'Сохраняются ли недавние эмодзи?',
          answer: 'Да, инструмент автоматически сохраняет последние 30 использованных эмодзи локально в вашем браузере для быстрого доступа.'
        },
        {
          question: 'Можно ли искать конкретные эмодзи?',
          answer: 'Да, используйте строку поиска для быстрого поиска эмодзи. Поиск работает по всем категориям.'
        }
      ],
      he: [
        {
          question: 'כמה אימוג\'ים זמינים?',
          answer: 'הכלי כולל 1,800+ אימוג\'ים מ-Unicode 14.0, מאורגנים ב-8 קטגוריות: סמיילים ואנשים, אנשים וגוף, חיות וטבע, אוכל ומשקאות, פעילויות, נסיעות ומקומות, אובייקטים, סמלים ודגלים.'
        },
        {
          question: 'האם אימוג\'ים יוצגו נכון בכל המכשירים?',
          answer: 'רוב המכשירים המודרניים (iOS, Android 4.4+, Windows 8.1+) תומכים באימוג\'ים צבעוניים. אם המכשיר שלך לא תומך באימוג\'ים מסוימים, הם עשויים להופיע כקופסאות או סימני שאלה.'
        },
        {
          question: 'האם האימוג\'ים האחרונים נשמרים?',
          answer: 'כן, הכלי שומר אוטומטית את 30 האימוג\'ים האחרונים ששימשו מקומית בדפדפן שלך לגישה מהירה.'
        },
        {
          question: 'האם אפשר לחפש אימוג\'ים ספציפיים?',
          answer: 'כן, השתמשו בשורת החיפוש כדי למצוא אימוג\'ים במהירות. החיפוש עובד על פני כל הקטגוריות.'
        }
      ]
    }
  },
  {
    id: 'text-emoticons',
    icon: Type,
    category: 'media',
    translationKey: 'textEmoticons',
    path: 'text-emoticons',
    gradient: 'from-purple-500 to-pink-600',
    recommendedTools: ['emoji-list', 'special-symbols-picker', 'social-media-formatter'],
    difficulty: 'beginner',
    tags: ['emoticons', 'ascii', 'kaomoji', 'text', 'expressions', 'japanese'],
    useCase: 'Collection of ASCII emoticons and Japanese kaomoji for text expressions',
    metaDescription: 'Text emoticons and kaomoji collection. Copy ASCII art faces and Japanese emoticons.',
    faqs: {
      en: [
        {
          question: 'What are emoticons and kaomoji?',
          answer: 'Emoticons are text-based expressions using ASCII characters to show emotions. Kaomoji (顔文字) are Japanese emoticons that don\'t need to be rotated sideways to be read, like (^_^) or ¯\\_(ツ)_/¯.'
        },
        {
          question: 'Will these work on all platforms?',
          answer: 'Most basic emoticons work everywhere, but complex kaomoji using Unicode characters may not display correctly on older systems or platforms that don\'t support Unicode.'
        },
        {
          question: 'What\'s the difference between emoticons and emojis?',
          answer: 'Emoticons are made from keyboard characters and punctuation marks (like :-) ), while emojis are actual pictographic symbols (like 😊). Emoticons were invented first in 1982.'
        },
        {
          question: 'Can I create my own emoticons?',
          answer: 'Yes! Emoticons are created by combining keyboard characters creatively. Popular ones evolved naturally through internet culture and became widely recognized.'
        }
      ],
      ru: [
        {
          question: 'Что такое эмотиконы и каомодзи?',
          answer: 'Эмотиконы - это текстовые выражения из ASCII символов для показа эмоций. Каомодзи (顔文字) - японские эмотиконы, которые не нужно поворачивать на бок, как (^_^) или ¯\\_(ツ)_/¯.'
        },
        {
          question: 'Будут ли они работать на всех платформах?',
          answer: 'Большинство базовых эмотиконов работают везде, но сложные каомодзи с Unicode символами могут неправильно отображаться на старых системах без поддержки Unicode.'
        },
        {
          question: 'В чём разница между эмотиконами и эмодзи?',
          answer: 'Эмотиконы создаются из символов клавиатуры (как :-) ), а эмодзи - это настоящие пиктографические символы (как 😊). Эмотиконы изобрели первыми в 1982 году.'
        },
        {
          question: 'Могу ли я создать свои эмотиконы?',
          answer: 'Да! Эмотиконы создаются творческим сочетанием символов клавиатуры. Популярные возникли естественно в интернет-культуре и стали широко узнаваемыми.'
        }
      ],
      he: [
        {
          question: 'מה זה אמוטיקונים וקאומוג\'י?',
          answer: 'אמוטיקונים הם ביטויים טקסטואליים המשתמשים בתווי ASCII להצגת רגשות. קאומוג\'י (顔文字) הם אמוטיקונים יפניים שלא צריך לסובב אותם הצידה לקריאה, כמו (^_^) או ¯\\_(ツ)_/¯.'
        },
        {
          question: 'האם אלה יעבדו בכל הפלטפורמות?',
          answer: 'רוב האמוטיקונים הבסיסיים עובדים בכל מקום, אבל קאומוג\'י מורכבים עם תווי Unicode עשויים לא להציג נכון במערכות ישנות או פלטפורמות ללא תמיכת Unicode.'
        },
        {
          question: 'מה ההבדל בין אמוטיקונים לאמוג\'ים?',
          answer: 'אמוטיקונים נוצרים מתווי מקלדת וסימני פיסוק (כמו :-) ), בעוד אמוג\'ים הם סמלים פיקטוגרפיים אמיתיים (כמו 😊). אמוטיקונים הומצאו ראשונים ב-1982.'
        },
        {
          question: 'האם אני יכול ליצור אמוטיקונים משלי?',
          answer: 'כן! אמוטיקונים נוצרים על ידי שילוב יצירתי של תווי מקלדת. הפופולריים התפתחו באופן טבעי דרך תרבות האינטרנט והפכו מוכרים באופן נרחב.'
        }
      ]
    }
  },
  {
    id: 'text-to-speech',
    icon: Volume2,
    category: 'media',
    translationKey: 'textToSpeech',
    path: 'text-to-speech',
    gradient: 'from-green-500 to-teal-600',
    recommendedTools: ['special-symbols-picker', 'social-media-formatter', 'fancy-text-generator'],
    difficulty: 'beginner',
    tags: ['tts', 'speech', 'voice', 'audio', 'accessibility', 'synthesis'],
    useCase: 'Convert text to speech with customizable voice settings and multiple languages',
    metaDescription: 'Text to speech converter with voice customization. Convert any text to audio with different voices.',
    faqs: {
      en: [
        {
          question: 'How does text-to-speech work?',
          answer: 'The tool uses your browser\'s Speech Synthesis API to convert text into spoken audio. The available voices depend on your operating system and installed language packs.'
        },
        {
          question: 'Can I use different languages?',
          answer: 'Yes! The tool supports multiple languages based on the voices installed on your system. You can select voices for different languages from the dropdown menu.'
        },
        {
          question: 'Are there any text length limits?',
          answer: 'Most browsers can handle long texts, but very long passages may be split into chunks. For best performance, keep individual texts under 1000 words.'
        },
        {
          question: 'Can I save the audio output?',
          answer: 'The Speech Synthesis API generates audio in real-time and doesn\'t provide direct download functionality. You can use system audio recording software to capture the output.'
        }
      ],
      ru: [
        {
          question: 'Как работает синтез речи?',
          answer: 'Инструмент использует Speech Synthesis API браузера для преобразования текста в звук. Доступные голоса зависят от вашей операционной системы и установленных языковых пакетов.'
        },
        {
          question: 'Можно ли использовать разные языки?',
          answer: 'Да! Инструмент поддерживает несколько языков в зависимости от голосов, установленных в системе. Вы можете выбрать голоса для разных языков из выпадающего меню.'
        },
        {
          question: 'Есть ли ограничения по длине текста?',
          answer: 'Большинство браузеров могут обрабатывать длинные тексты, но очень длинные отрывки могут быть разделены на части. Для лучшей производительности держите тексты до 1000 слов.'
        },
        {
          question: 'Можно ли сохранить аудиовывод?',
          answer: 'Speech Synthesis API генерирует аудио в реальном времени и не предоставляет прямую возможность загрузки. Можно использовать системное ПО для записи звука.'
        }
      ],
      he: [
        {
          question: 'איך סינתזת הדיבור עובדת?',
          answer: 'הכלי משתמש ב-Speech Synthesis API של הדפדפן כדי להמיר טקסט לאודיו. הקולות הזמינים תלויים במערכת ההפעלה ובחבילות השפה המותקנות.'
        },
        {
          question: 'האם אפשר להשתמש בשפות שונות?',
          answer: 'כן! הכלי תומך במספר שפות בהתבסס על הקולות המותקנים במערכת שלך. אתם יכולים לבחור קולות לשפות שונות מהתפריט הנפתח.'
        },
        {
          question: 'האם יש מגבלות על אורך הטקסט?',
          answer: 'רוב הדפדפנים יכולים לטפל בטקסטים ארוכים, אבל קטעים ארוכים מאוד עשויים להתחלק לחלקים. לביצועים טובים יותר, שמרו על טקסטים עד 1000 מילים.'
        },
        {
          question: 'האם אפשר לשמור את פלט האודיו?',
          answer: 'ה-Speech Synthesis API מייצר אודיו בזמן אמת ולא מספק אפשרות הורדה ישירה. ניתן להשתמש בתוכנת הקלטת שמע של המערכת כדי ללכוד את הפלט.'
        }
      ]
    }
  },
  {
    id: 'email-html',
    icon: Mail,
    category: 'dev',
    translationKey: 'emailHtml',
    path: 'email-html',
    gradient: 'from-blue-500 to-indigo-600',
    recommendedTools: ['qr-code-generator', 'url-shortener', 'html-css-formatter'],
    difficulty: 'beginner',
    tags: ['email', 'html', 'mailto', 'clipboard', 'link', 'generator'],
    useCase: 'Generate modern email links with automatic copying instead of outdated mailto: format',
    metaDescription: 'Create modern email links with auto-copy functionality. Better than mailto: links for modern web.',
    faqs: {
      en: [
        {
          question: 'Why not use mailto: links?',
          answer: 'Mailto: links only work if users have a local email client configured. Many users rely on web-based email, making mailto: links ineffective.'
        },
        {
          question: 'How does auto-copy work?',
          answer: 'The generated links open a page that displays the email address and automatically copies it to the clipboard when clicked, providing better user experience.'
        },
        {
          question: 'Do these links work on mobile?',
          answer: 'Yes! The auto-copy functionality works across all devices and doesn\'t depend on having email apps installed.'
        },
        {
          question: 'Can I customize the link appearance?',
          answer: 'Yes, you can set custom link text and title attributes. The generator creates clean HTML that you can style with CSS.'
        }
      ],
      ru: [
        {
          question: 'Почему не использовать mailto: ссылки?',
          answer: 'Ссылки mailto: работают только если у пользователей есть настроенный локальный почтовый клиент. Многие используют веб-почту, что делает mailto: ссылки неэффективными.'
        },
        {
          question: 'Как работает автокопирование?',
          answer: 'Сгенерированные ссылки открывают страницу, которая показывает email-адрес и автоматически копирует его в буфер при клике, обеспечивая лучший UX.'
        },
        {
          question: 'Работают ли эти ссылки на мобильных?',
          answer: 'Да! Функция автокопирования работает на всех устройствах и не зависит от установленных почтовых приложений.'
        },
        {
          question: 'Можно ли настроить внешний вид ссылки?',
          answer: 'Да, можно задать произвольный текст ссылки и атрибуты title. Генератор создает чистый HTML, который можно стилизовать с помощью CSS.'
        }
      ],
      he: [
        {
          question: 'למה לא להשתמש בקישורי mailto:?',
          answer: 'קישורי mailto: עובדים רק אם למשתמשים יש לקוח דואר מקומי מוגדר. משתמשים רבים מסתמכים על דואר מבוסס-ווב, מה שהופך קישורי mailto: לא יעילים.'
        },
        {
          question: 'איך עובד העתקה אוטומטית?',
          answer: 'הקישורים שנוצרו פותחים דף המציג את כתובת האימייל ומעתיק אותה אוטומטית ללוח בעת לחיצה, מספק חוויית משתמש טובה יותר.'
        },
        {
          question: 'האם הקישורים עובדים במובייל?',
          answer: 'כן! פונקציית ההעתקה האוטומטית עובדת על כל המכשירים ולא תלויה בהתקנת אפליקציות דואר.'
        },
        {
          question: 'האם אפשר להתאים את מראה הקישור?',
          answer: 'כן, אפשר להגדיר טקסט קישור מותאם אישית ותכונות title. הגנרטור יוצר HTML נקי שאפשר לעצב עם CSS.'
        }
      ]
    }
  },
  {
    id: 'system-info',
    icon: Monitor,
    category: 'dev',
    translationKey: 'systemInfo',
    path: 'system-info',
    gradient: 'from-indigo-500 to-purple-600',
    recommendedTools: ['color-converter', 'qr-code-generator', 'css-specificity'],
    difficulty: 'beginner',
    tags: ['system', 'hardware', 'monitor', 'resolution', 'architecture', 'device'],
    useCase: 'Instantly detect system architecture (32/64-bit), screen resolution, and device specifications',
    metaDescription: 'System information detector. Check if your computer is 32-bit or 64-bit, get screen resolution and device specs.',
    faqs: {
      en: [
        {
          question: 'Why do I need to know if my system is 32-bit or 64-bit?',
          answer: 'When downloading software, you need to choose the correct version. 64-bit systems can run both 32-bit and 64-bit programs, but 32-bit systems can only run 32-bit software.'
        },
        {
          question: 'What is screen resolution and why does it matter?',
          answer: 'Screen resolution is the number of pixels displayed on your screen. It\'s important for web design, choosing wallpapers, gaming settings, and buying compatible accessories.'
        },
        {
          question: 'How accurate is the device detection?',
          answer: 'We maintain a database of thousands of popular devices for accurate detection. However, some newer or less common devices might not be perfectly identified.'
        },
        {
          question: 'Is this information collection safe?',
          answer: 'Yes, all information is gathered locally in your browser using standard web APIs. No data is sent to any server - everything stays on your device.'
        }
      ],
      ru: [
        {
          question: 'Зачем знать разрядность системы (32/64-бит)?',
          answer: 'При загрузке программ нужно выбирать правильную версию. 64-битные системы могут запускать как 32-битные, так и 64-битные программы, но 32-битные системы работают только с 32-битным ПО.'
        },
        {
          question: 'Что такое разрешение экрана и почему это важно?',
          answer: 'Разрешение экрана - количество пикселей на дисплее. Важно для веб-дизайна, выбора обоев, настроек игр и покупки совместимых аксессуаров.'
        },
        {
          question: 'Насколько точно определяется устройство?',
          answer: 'У нас есть база данных тысяч популярных устройств для точного определения. Однако некоторые новые или редкие устройства могут определяться неточно.'
        },
        {
          question: 'Безопасен ли сбор этой информации?',
          answer: 'Да, вся информация собирается локально в браузере через стандартные веб-API. Никаких данных не отправляется на сервер - всё остается на вашем устройстве.'
        }
      ],
      he: [
        {
          question: 'למה צריך לדעת אם המערכת 32-ביט או 64-ביט?',
          answer: 'בעת הורדת תוכנות, צריך לבחור את הגרסה הנכונה. מערכות 64-ביט יכולות להריץ תוכנות 32-ביט ו-64-ביט, אבל מערכות 32-ביט יכולות רק תוכנות 32-ביט.'
        },
        {
          question: 'מהי רזולוציית מסך ולמה זה חשוב?',
          answer: 'רזולוציית מסך היא מספר הפיקסלים המוצגים על המסך. חשוב לעיצוב ווב, בחירת רקעים, הגדרות משחקים וקניית אביזרים תואמים.'
        },
        {
          question: 'עד כמה מדויק זיהוי המכשיר?',
          answer: 'יש לנו מאגר נתונים של אלפי מכשירים פופולריים לזיהוי מדויק. עם זאת, מכשירים חדשים או נדירים עלולים שלא להיות מזוהים במדויק.'
        },
        {
          question: 'האם איסוף המידע הזה בטוח?',
          answer: 'כן, כל המידע נאסף מקומית בדפדפן באמצעות APIs סטנדרטיים. שום נתונים לא נשלחים לשרת - הכל נשאר על המכשיר שלך.'
        }
      ]
    }
  },
  {
    id: 'json-tools',
    icon: Braces,
    category: 'dev',
    translationKey: 'jsonTools',
    path: 'json-tools',
    gradient: 'from-orange-500 to-red-600',
    recommendedTools: ['html-css-formatter', 'base64-converter', 'url-encoder'],
    difficulty: 'beginner',
    tags: ['json', 'validator', 'formatter', 'beautifier', 'minifier', 'parser'],
    useCase: 'Validate, format, and analyze JSON data with detailed error reporting and structure analysis',
    metaDescription: 'JSON validator and formatter tool. Validate JSON syntax, format/beautify code, minify for production.',
    faqs: {
      en: [
        {
          question: 'What is JSON validation?',
          answer: 'JSON validation checks if your JSON data follows the correct syntax rules. Invalid JSON can cause errors in applications, so validation helps catch issues early.'
        },
        {
          question: 'What\'s the difference between formatting and minifying?',
          answer: 'Formatting adds indentation and line breaks for readability, while minifying removes all unnecessary whitespace to reduce file size for production use.'
        },
        {
          question: 'How accurate is the error detection?',
          answer: 'The tool uses JavaScript\'s native JSON parser, providing exact error messages with line and column numbers when syntax errors are found.'
        },
        {
          question: 'Can I upload large JSON files?',
          answer: 'Yes, you can upload JSON files directly. The tool handles large files efficiently and provides detailed structure analysis.'
        }
      ],
      ru: [
        {
          question: 'Что такое валидация JSON?',
          answer: 'Валидация JSON проверяет, соответствуют ли ваши JSON данные правилам синтаксиса. Невалидный JSON может вызвать ошибки в приложениях, поэтому валидация помогает выявить проблемы заранее.'
        },
        {
          question: 'В чем разница между форматированием и сжатием?',
          answer: 'Форматирование добавляет отступы и переносы строк для читаемости, а сжатие удаляет все лишние пробелы для уменьшения размера файла в production.'
        },
        {
          question: 'Насколько точно определяются ошибки?',
          answer: 'Инструмент использует встроенный JSON парсер JavaScript, предоставляя точные сообщения об ошибках с номерами строк и колонок при обнаружении синтаксических ошибок.'
        },
        {
          question: 'Можно ли загружать большие JSON файлы?',
          answer: 'Да, вы можете загружать JSON файлы напрямую. Инструмент эффективно обрабатывает большие файлы и предоставляет детальный анализ структуры.'
        }
      ],
      he: [
        {
          question: 'מהי אימות JSON?',
          answer: 'אימות JSON בודק אם נתוני ה-JSON שלך עוקבים אחר כללי התחביר הנכונים. JSON לא תקין יכול לגרום לשגיאות ביישומים, כך שאימות עוזר לתפוס בעיות מוקדם.'
        },
        {
          question: 'מה ההבדל בין עיצוב לכיווץ?',
          answer: 'עיצוב מוסיף הזחה ושורות חדשות לקריאות, בעוד כיווץ מסיר את כל הרווחים הלא נחוצים כדי להקטין את גודל הקובץ לשימוש בייצור.'
        },
        {
          question: 'עד כמה מדויק זיהוי השגיאות?',
          answer: 'הכלי משתמש במפרש JSON המובנה של JavaScript, מספק הודעות שגיאה מדויקות עם מספרי שורות ועמודות כאשר נמצאות שגיאות תחביר.'
        },
        {
          question: 'האם אפשר להעלות קבצי JSON גדולים?',
          answer: 'כן, אתם יכולים להעלות קבצי JSON ישירות. הכלי מטפל בקבצים גדולים ביעילות ומספק ניתוח מבנה מפורט.'
        }
      ]
    }
  },
  {
    id: 'js-css-compressor',
    icon: Zap,
    category: 'dev',
    translationKey: 'jsCssCompressor',
    path: 'js-css-compressor',
    gradient: 'from-yellow-500 to-orange-600',
    recommendedTools: ['json-tools', 'html-css-formatter', 'base64-converter'],
    difficulty: 'beginner',
    tags: ['minify', 'compress', 'javascript', 'css', 'optimization', 'performance'],
    useCase: 'Compress and minify JavaScript and CSS code to reduce file sizes for production',
    metaDescription: 'JavaScript and CSS compressor tool. Minify JS/CSS code, reduce file sizes, optimize for production.',
    faqs: {
      en: [
        {
          question: 'What is code compression and minification?',
          answer: 'Code compression removes unnecessary characters like whitespace, comments, and line breaks. Minification also shortens variable names and optimizes code structure to reduce file size.'
        },
        {
          question: 'Is compressed code safe to use?',
          answer: 'Yes, when done correctly. The tool preserves code functionality while only removing unnecessary elements. However, always test compressed code before deploying to production.'
        },
        {
          question: 'How much space can I save?',
          answer: 'Typical savings range from 20-70% depending on code style. JavaScript with many comments can see higher compression ratios than already optimized code.'
        },
        {
          question: 'Can I compress already minified code?',
          answer: 'Yes, but savings will be minimal since minified code already has most optimizations applied. The tool will still remove any remaining whitespace and comments.'
        }
      ],
      ru: [
        {
          question: 'Что такое сжатие и минификация кода?',
          answer: 'Сжатие кода удаляет ненужные символы как пробелы, комментарии и переносы строк. Минификация также сокращает имена переменных и оптимизирует структуру кода для уменьшения размера файла.'
        },
        {
          question: 'Безопасно ли использовать сжатый код?',
          answer: 'Да, при правильном выполнении. Инструмент сохраняет функциональность кода, удаляя только ненужные элементы. Однако всегда тестируйте сжатый код перед развертыванием в production.'
        },
        {
          question: 'Сколько места можно сэкономить?',
          answer: 'Типичная экономия составляет 20-70% в зависимости от стиля кода. JavaScript с множеством комментариев может показать большую степень сжатия, чем уже оптимизированный код.'
        },
        {
          question: 'Можно ли сжимать уже минифицированный код?',
          answer: 'Да, но экономия будет минимальной, поскольку минифицированный код уже имеет большинство оптимизаций. Инструмент всё равно удалит оставшиеся пробелы и комментарии.'
        }
      ],
      he: [
        {
          question: 'מה זה דחיסת קוד ומינימיזציה?',
          answer: 'דחיסת קוד מסירה תווים מיותרים כמו רווחים, הערות ושבירות שורה. מינימיזציה גם מקצרת שמות משתנים ומייעלת את מבנה הקוד כדי להקטין את גודל הקובץ.'
        },
        {
          question: 'האם בטוח להשתמש בקוד דחוס?',
          answer: 'כן, כשזה נעשה נכון. הכלי שומר על פונקציונליות הקוד תוך הסרת רק אלמנטים מיותרים. עם זאת, תמיד בדקו קוד דחוס לפני פריסה לייצור.'
        },
        {
          question: 'כמה מקום אפשר לחסוך?',
          answer: 'חיסכון טיפוסי נע בין 20-70% בהתאם לסגנון הקוד. JavaScript עם הרבה הערות יכול להראות יחס דחיסה גבוה יותר מקוד שכבר מותאם.'
        },
        {
          question: 'האם אפשר לדחוס קוד שכבר מוקטן?',
          answer: 'כן, אבל החיסכון יהיה מינימלי כיון שלקוד מוקטן כבר יש את רוב האופטימיזציות. הכלי עדיין יסיר רווחים והערות שנותרו.'
        }
      ]
    }
  },
  {
    id: 'js-validator',
    icon: Bug,
    category: 'dev',
    translationKey: 'jsValidator',
    path: 'js-validator',
    gradient: 'from-red-500 to-pink-600',
    recommendedTools: ['js-css-compressor', 'json-tools', 'html-css-formatter'],
    difficulty: 'beginner',
    tags: ['javascript', 'validator', 'syntax', 'linter', 'debugging', 'quality'],
    useCase: 'Static analysis tool for JavaScript code to check for syntax errors and quality issues',
    metaDescription: 'JavaScript validator and syntax checker. Detect JS errors, validate code quality, debug syntax issues.',
    faqs: {
      en: [
        {
          question: 'What does the JavaScript validator check?',
          answer: 'The validator checks for syntax errors, undefined variables, missing semicolons, assignment in conditions, unclosed brackets, and other common JavaScript issues.'
        },
        {
          question: 'Which JavaScript versions are supported?',
          answer: 'The tool supports ES5, ES2015, ES2017, ES2020, and ES2022, including modern features like async/await, classes, and modules.'
        },
        {
          question: 'What is the difference between errors and warnings?',
          answer: 'Errors are syntax issues that prevent code from running. Warnings are style/quality issues that may cause problems or make code harder to maintain.'
        },
        {
          question: 'Can I use this for React or Node.js code?',
          answer: 'Yes, the validator works with any JavaScript code including React JSX, Node.js modules, and modern ES6+ syntax.'
        }
      ],
      ru: [
        {
          question: 'Что проверяет JavaScript валидатор?',
          answer: 'Валидатор проверяет синтаксические ошибки, неопределенные переменные, пропущенные точки с запятой, присваивание в условиях, незакрытые скобки и другие распространенные проблемы JavaScript.'
        },
        {
          question: 'Какие версии JavaScript поддерживаются?',
          answer: 'Инструмент поддерживает ES5, ES2015, ES2017, ES2020 и ES2022, включая современные возможности как async/await, классы и модули.'
        },
        {
          question: 'В чем разница между ошибками и предупреждениями?',
          answer: 'Ошибки - это синтаксические проблемы, которые не позволяют коду работать. Предупреждения - это проблемы стиля/качества, которые могут вызвать проблемы или усложнить поддержку кода.'
        },
        {
          question: 'Можно ли использовать для React или Node.js кода?',
          answer: 'Да, валидатор работает с любым JavaScript кодом, включая React JSX, модули Node.js и современный синтаксис ES6+.'
        }
      ],
      he: [
        {
          question: 'מה בודק מאמת JavaScript?',
          answer: 'המאמת בודק שגיאות תחביר, משתנים לא מוגדרים, נקודה-פסיק חסרה, השמה בתנאים, סוגריים לא סגורים ובעיות JavaScript נפוצות אחרות.'
        },
        {
          question: 'אילו גרסאות JavaScript נתמכות?',
          answer: 'הכלי תומך ב-ES5, ES2015, ES2017, ES2020 ו-ES2022, כולל תכונות מודרניות כמו async/await, מחלקות ומודולים.'
        },
        {
          question: 'מה ההבדל בין שגיאות לאזהרות?',
          answer: 'שגיאות הן בעיות תחביר שמונעות מהקוד לרוץ. אזהרות הן בעיות סגנון/איכות שעלולות לגרום לבעיות או להקשות על תחזוקת הקוד.'
        },
        {
          question: 'האם אפשר להשתמש בזה עבור קוד React או Node.js?',
          answer: 'כן, המאמת עובד עם כל קוד JavaScript כולל React JSX, מודולי Node.js ותחביר ES6+ מודרני.'
        }
      ]
    }
  },
  {
    id: 'age-calculator',
    icon: Calculator,
    category: 'productivity',
    translationKey: 'ageCalculator',
    path: 'age-calculator',
    gradient: 'from-purple-500 to-pink-600',
    recommendedTools: ['temperature-converter', 'bmi-calculator', 'timer-countdown'],
    difficulty: 'beginner',
    tags: ['age', 'calculator', 'birthday', 'date', 'time'],
    useCase: 'Calculate exact age in years, months, days, hours, and minutes from birthdate',
    metaDescription: 'Age calculator with precise calculations. Get your exact age in years, months, days, hours.'
  },
  {
    id: 'temperature-converter',
    icon: Thermometer,
    category: 'productivity',
    translationKey: 'temperatureConverter',
    path: 'temperature-converter',
    gradient: 'from-blue-500 to-cyan-600',
    recommendedTools: ['age-calculator', 'bmi-calculator', 'currency-converter'],
    difficulty: 'beginner',
    tags: ['temperature', 'converter', 'celsius', 'fahrenheit', 'kelvin'],
    useCase: 'Convert between Celsius, Fahrenheit, and Kelvin temperature scales instantly',
    metaDescription: 'Temperature converter for Celsius, Fahrenheit, and Kelvin. Convert temperatures between scales.'
  },
  {
    id: 'bmi-calculator',
    icon: Weight,
    category: 'productivity',
    translationKey: 'bmiCalculator',
    path: 'bmi-calculator',
    gradient: 'from-green-500 to-emerald-600',
    recommendedTools: ['age-calculator', 'temperature-converter', 'percentage-calculator'],
    difficulty: 'beginner',
    tags: ['bmi', 'health', 'weight', 'calculator', 'fitness'],
    useCase: 'Calculate Body Mass Index (BMI) with health status interpretation',
    metaDescription: 'BMI calculator with health interpretation. Calculate your Body Mass Index and health status.'
  },
  {
    id: 'text-counter',
    icon: FileSearch,
    category: 'productivity',
    translationKey: 'textCounter',
    path: 'text-counter',
    gradient: 'from-indigo-500 to-purple-600',
    recommendedTools: ['social-media-formatter', 'text-to-speech', 'fancy-text-generator'],
    difficulty: 'beginner',
    tags: ['text', 'counter', 'seo', 'words', 'characters', 'social-media'],
    useCase: 'Count characters, words, sentences, and paragraphs for SEO and social media',
    metaDescription: 'Text counter for SEO and social media. Count characters, words, sentences with platform limits.'
  },
  {
    id: 'timer-countdown',
    icon: Clock,
    category: 'productivity',
    translationKey: 'timerCountdown',
    path: 'timer-countdown',
    gradient: 'from-orange-500 to-red-600',
    recommendedTools: ['pomodoro-timer', 'world-time', 'age-calculator'],
    difficulty: 'beginner',
    tags: ['timer', 'countdown', 'stopwatch', 'time', 'productivity'],
    useCase: 'Timer, countdown, and stopwatch with notifications for time management',
    metaDescription: 'Timer and countdown tool with notifications. Stopwatch, timer, and countdown in one tool.'
  },
  {
    id: 'currency-converter',
    icon: DollarSign,
    category: 'productivity',
    translationKey: 'currencyConverter',
    path: 'currency-converter',
    gradient: 'from-yellow-500 to-orange-600',
    recommendedTools: ['percentage-calculator', 'temperature-converter', 'compound-interest'],
    difficulty: 'beginner',
    tags: ['currency', 'converter', 'exchange', 'money', 'finance'],
    useCase: 'Convert between currencies with fixed exchange rates',
    metaDescription: 'Currency converter with fixed rates. Convert between 10 major world currencies.'
  },
  {
    id: 'text-diff',
    icon: GitCompare,
    category: 'dev',
    translationKey: 'textDiff',
    path: 'text-diff',
    gradient: 'from-purple-500 to-indigo-600',
    recommendedTools: ['json-tools', 'html-css-formatter', 'js-validator'],
    difficulty: 'intermediate',
    tags: ['diff', 'compare', 'text', 'code', 'changes'],
    useCase: 'Compare two texts and highlight differences line by line',
    metaDescription: 'Text difference tool. Compare two texts and see changes highlighted line by line.'
  },
  {
    id: 'php-syntax-checker',
    icon: Code,
    category: 'dev',
    translationKey: 'phpSyntaxChecker',
    path: 'php-syntax-checker',
    gradient: 'from-indigo-500 to-blue-600',
    recommendedTools: ['mysql-syntax-checker', 'javascript-syntax-checker', 'regex-tester'],
    difficulty: 'intermediate',
    tags: ['php', 'syntax', 'checker', 'validator', 'code'],
    useCase: 'Check PHP syntax for errors with support for PHP 5, 7, and 8',
    metaDescription: 'PHP syntax checker for PHP 5/7/8. Validate PHP code and find syntax errors.'
  },
  {
    id: 'mysql-syntax-checker',
    icon: Database,
    category: 'dev',
    translationKey: 'mysqlSyntaxChecker',
    path: 'mysql-syntax-checker',
    gradient: 'from-blue-500 to-teal-600',
    recommendedTools: ['php-syntax-checker', 'json-tools', 'regex-tester'],
    difficulty: 'intermediate',
    tags: ['mysql', 'sql', 'database', 'syntax', 'validator'],
    useCase: 'Validate MySQL queries and check for syntax errors',
    metaDescription: 'MySQL syntax checker and validator. Check SQL queries for syntax errors.'
  },
  {
    id: 'regex-tester',
    icon: Search,
    category: 'dev',
    translationKey: 'regexTester',
    path: 'regex-tester',
    gradient: 'from-green-500 to-teal-600',
    recommendedTools: ['javascript-syntax-checker', 'php-syntax-checker', 'text-diff'],
    difficulty: 'advanced',
    tags: ['regex', 'regular-expression', 'pattern', 'test', 'match'],
    useCase: 'Test regular expressions with support for JavaScript, PHP, and Python',
    metaDescription: 'Regex tester for JavaScript, PHP, Python. Test and debug regular expressions.'
  },
  {
    id: 'javascript-syntax-checker',
    icon: Code,
    category: 'dev',
    translationKey: 'javascriptSyntaxChecker',
    path: 'javascript-syntax-checker',
    gradient: 'from-yellow-500 to-red-600',
    recommendedTools: ['json-tools', 'js-css-compressor', 'regex-tester'],
    difficulty: 'intermediate',
    tags: ['javascript', 'es6', 'syntax', 'checker', 'validator'],
    useCase: 'Check JavaScript/ES6/ES2020+ syntax with JSX support',
    metaDescription: 'JavaScript syntax checker for ES6/ES2020+. Validate JS code with JSX support.'
  },
  {
    id: 'px-rem-converter',
    icon: Ruler,
    category: 'css',
    translationKey: 'pxRemConverter',
    path: 'px-rem-converter',
    gradient: 'from-pink-500 to-rose-600',
    recommendedTools: ['css-gradient', 'css-box-shadow', 'color-converter'],
    difficulty: 'beginner',
    tags: ['px', 'rem', 'em', 'converter', 'css', 'units'],
    useCase: 'Convert between px, rem, and em CSS units with custom base font size',
    metaDescription: 'PX to REM/EM converter for CSS. Convert between pixel, rem, and em units.'
  },
  {
    id: 'css-box-shadow',
    icon: Square,
    category: 'css',
    translationKey: 'cssBoxShadow',
    path: 'css-box-shadow-generator',
    gradient: 'from-gray-600 to-gray-800',
    recommendedTools: ['css-gradient', 'px-rem-converter', 'color-converter'],
    difficulty: 'intermediate',
    tags: ['css', 'box-shadow', 'shadow', 'generator', 'design'],
    useCase: 'Generate CSS box-shadow with visual preview and multiple shadows',
    metaDescription: 'CSS box-shadow generator with preview. Create custom shadows for your designs.'
  },
  {
    id: 'css-gradient',
    icon: Layers,
    category: 'css',
    translationKey: 'cssGradient',
    path: 'css-gradient-generator',
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    recommendedTools: ['css-box-shadow', 'color-converter', 'px-rem-converter'],
    difficulty: 'intermediate',
    tags: ['css', 'gradient', 'linear', 'radial', 'conic', 'generator'],
    useCase: 'Create linear, radial, and conic CSS gradients with visual editor',
    metaDescription: 'CSS gradient generator for linear, radial, conic gradients. Visual gradient editor.'
  },
  {
    id: 'color-contrast',
    icon: Circle,
    category: 'css',
    translationKey: 'colorContrast',
    path: 'color-contrast',
    gradient: 'from-black to-white',
    recommendedTools: ['color-converter', 'css-gradient', 'css-box-shadow'],
    difficulty: 'intermediate',
    tags: ['color', 'contrast', 'wcag', 'accessibility', 'a11y'],
    useCase: 'Check color contrast ratios for WCAG accessibility compliance',
    metaDescription: 'Color contrast checker for WCAG. Test color combinations for accessibility.'
  },
  {
    id: 'css-keyframes',
    icon: Sparkles,
    category: 'css',
    translationKey: 'cssKeyframes',
    path: 'css-keyframes-generator',
    gradient: 'from-blue-500 to-purple-600',
    recommendedTools: ['css-gradient', 'css-box-shadow', 'px-rem-converter'],
    difficulty: 'advanced',
    tags: ['css', 'animation', 'keyframes', 'generator', 'motion'],
    useCase: 'Generate CSS @keyframes animations with visual editor',
    metaDescription: 'CSS keyframes animation generator. Create custom animations visually.'
  },
  {
    id: 'json-yaml-formatter',
    icon: FileJson,
    category: 'dev',
    translationKey: 'jsonYamlFormatter',
    path: 'json-yaml-formatter',
    gradient: 'from-orange-500 to-yellow-600',
    recommendedTools: ['json-tools', 'base64-encoder', 'javascript-syntax-checker'],
    difficulty: 'beginner',
    tags: ['json', 'yaml', 'formatter', 'validator', 'converter'],
    useCase: 'Format, validate, and convert between JSON and YAML formats',
    metaDescription: 'JSON/YAML formatter and converter. Validate and convert between formats.'
  },
  {
    id: 'base64-encoder',
    icon: Lock,
    category: 'dev',
    translationKey: 'base64Encoder',
    path: 'base64-encoder',
    gradient: 'from-green-500 to-teal-600',
    recommendedTools: ['jwt-decoder', 'hash-generator', 'json-tools'],
    difficulty: 'beginner',
    tags: ['base64', 'encode', 'decode', 'converter', 'encryption'],
    useCase: 'Encode and decode data in Base64 format with file support',
    metaDescription: 'Base64 encoder/decoder with file support. Encode and decode Base64 data.'
  },
  {
    id: 'jwt-decoder',
    icon: Key,
    category: 'dev',
    translationKey: 'jwtDecoder',
    path: 'jwt-decoder',
    gradient: 'from-purple-500 to-pink-600',
    recommendedTools: ['base64-encoder', 'json-tools', 'uuid-generator'],
    difficulty: 'intermediate',
    tags: ['jwt', 'json', 'token', 'decoder', 'authentication'],
    useCase: 'Decode and analyze JSON Web Tokens (JWT) structure',
    metaDescription: 'JWT decoder and analyzer. Decode JSON Web Tokens and inspect claims.'
  },
  {
    id: 'uuid-generator',
    icon: Fingerprint,
    category: 'dev',
    translationKey: 'uuidGenerator',
    path: 'uuid-generator',
    gradient: 'from-indigo-500 to-blue-600',
    recommendedTools: ['hash-generator', 'password-generator', 'jwt-decoder'],
    difficulty: 'beginner',
    tags: ['uuid', 'guid', 'generator', 'unique', 'identifier'],
    useCase: 'Generate UUID/GUID in various versions (v1, v3, v4, v5)',
    metaDescription: 'UUID generator for all versions. Generate unique identifiers (UUID/GUID).'
  },
  {
    id: 'compound-interest',
    icon: TrendingUp,
    category: 'productivity',
    translationKey: 'compoundInterest',
    path: 'compound-interest',
    gradient: 'from-green-500 to-emerald-600',
    recommendedTools: ['loan-calculator', 'percentage-calculator', 'currency-converter'],
    difficulty: 'intermediate',
    tags: ['compound', 'interest', 'finance', 'calculator', 'investment'],
    useCase: 'Calculate compound interest with detailed breakdown and charts',
    metaDescription: 'Compound interest calculator with charts. Calculate investment growth over time.'
  },
  {
    id: 'loan-calculator',
    icon: CreditCard,
    category: 'productivity',
    translationKey: 'loanCalculator',
    path: 'loan-calculator',
    gradient: 'from-red-500 to-pink-600',
    recommendedTools: ['compound-interest', 'percentage-calculator', 'currency-converter'],
    difficulty: 'intermediate',
    tags: ['loan', 'mortgage', 'calculator', 'finance', 'annuity'],
    useCase: 'Calculate loan/mortgage payments with amortization schedule',
    metaDescription: 'Loan and mortgage calculator. Calculate monthly payments and amortization.'
  },
  {
    id: 'fuel-calculator',
    icon: Fuel,
    category: 'productivity',
    translationKey: 'fuelCalculator',
    path: 'fuel-consumption-calculator',
    gradient: 'from-blue-500 to-green-600',
    recommendedTools: ['currency-converter', 'percentage-calculator', 'temperature-converter'],
    difficulty: 'beginner',
    tags: ['fuel', 'consumption', 'calculator', 'car', 'gas', 'mileage'],
    useCase: 'Calculate fuel consumption, cost, and average consumption per 100 km',
    metaDescription: 'Fuel consumption calculator. Calculate fuel costs and consumption per 100 km.'
  }
]

export const widgetCategories = {
  css: 'CSS Tools',
  media: 'Media & Content',
  dev: 'Dev Tools',
  productivity: 'Productivity'
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

export function getWidgetFAQs(widgetId: string, locale: 'en' | 'ru'): WidgetFAQ[] {
  const widget = getWidgetById(widgetId)
  return widget?.faqs?.[locale] || []
}