import { OptimizedImage } from "@/components/ui/optimized-image";
import Link from "next/link";
import React from "react";
import { Block } from "@/components/ui/block";
import {
  Sparkles,
  Code2,
  Palette,
  Zap,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import avatarImg from "@/public/images/avatar.jpeg";

export const HeaderBlock = () => {
  const email = "dmitryborisenko.msk@gmail.com";
  const subject = "Возможность работы: Позиция фронтенд разработчика";
  const body =
    "Дорогой Дмитрий Борисенко,\\n\\nЯ наткнулся на ваше портфолио и был впечатлен вашими навыками и опытом. Я хотел бы обсудить с вами потенциальную возможность работы.\\n\\nМожем ли мы запланировать звонок, чтобы поговорить о [кратко опишите позицию или проект]?\\n\\nЖду с нетерпением ответа.\\n\\nС наилучшими пожеланиями,\\n[Ваше имя]\\n[Ваша компания]";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <Block className="col-span-12 row-span-2 md:col-span-8 relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        {/* Avatar */}
        <div className="relative mb-8">
          <OptimizedImage
            className="relative size-24 rounded-full object-cover border-2 border-border group-hover/block:w-32 group-hover/block:h-32 transition-all duration-500 shadow-lg"
            src={avatarImg.src}
            width={500}
            height={500}
            alt="Borisenko Dmitry"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-background flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 text-foreground">
            Борисенко Дмитрий
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-2">
            Fullstack разработчик
          </p>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Создаю выдающиеся цифровые продукты с современными инструментами и
            технологиями. Увлечён разработкой и созданием инновационных
            веб-решений
          </p>
        </div>
        {/* Feature Highlights */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            {
              icon: Code2,
              label: "Full-Stack Dev",
            },
            {
              icon: Palette,
              label: "UI/UX Design",
            },
            {
              icon: Zap,
              label: "Performance",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted border border-border"
            >
              <div className="p-1.5 rounded-full bg-primary">
                <item.icon className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href={mailtoLink}>
              <Mail className="w-5 h-5" />
              Написать мне
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        {/* Social Links */}
      </div>
    </Block>
  );
};
