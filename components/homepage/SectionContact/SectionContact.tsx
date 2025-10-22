"use client";

import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { SectionTitle } from "@/components/global/SectionTitle";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, Send } from "lucide-react";

export const SectionContact = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"section">) => {
  const locale = "ru";

  return (
    <section className={cn("mb-24", className)} {...rest}>
      <SectionTitle className="mb-12 text-center" title="Свяжитесь со мной" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10 text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Готов обсудить ваш проект
            </h3>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Есть идея или проект? Давайте создадим что-то удивительное вместе.
              Я всегда открыт для новых возможностей и сотрудничества.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Начать разговор</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`mailto:dmitryborisenko.msk@gmail.com?subject=${encodeURIComponent("Привет! Хочу обсудить проект")}`}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 rounded-xl transition-all hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span className="font-medium">Написать email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
