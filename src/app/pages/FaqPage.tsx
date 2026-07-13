import { useTranslation } from "react-i18next";
import { useSEOMeta } from "../hooks/useSEOMeta";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export function FaqPage() {
  useSEOMeta("faq");
  const { t } = useTranslation("faq");
  const groups = t("groups", { returnObjects: true }) as FaqGroup[];

  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
          {t("title")}
        </h1>
        <p className="text-lg text-neutral-600">{t("subtitle")}</p>
      </div>

      <div className="space-y-10">
        {groups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4">
              {group.title}
            </h2>
            <div className="bg-white rounded-2xl shadow-sm shadow-neutral-200/60 px-6">
              <Accordion type="single" collapsible>
                {group.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`g${groupIndex}-i${itemIndex}`}
                  >
                    <AccordionTrigger className="text-base font-semibold text-neutral-900">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-700 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
