import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="section-badge mb-4">Document légal</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#0F172A] mt-4 mb-2">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-[#94A3B8] text-sm">Dernière mise à jour : {lastUpdated}</p>
          )}
        </div>

        <div className="prose prose-slate max-w-none
          [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-gray-100
          [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:text-[#334155] [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-base
          [&_ul]:text-[#334155] [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5
          [&_li]:text-base [&_li]:leading-relaxed
          [&_strong]:text-[#0F172A] [&_strong]:font-semibold
          [&_a]:text-[#4F46E5] [&_a]:hover:underline
          [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm
          [&_th]:bg-[#F1F5F9] [&_th]:text-[#0F172A] [&_th]:font-semibold [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:border [&_th]:border-gray-200
          [&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-gray-200 [&_td]:text-[#334155]
        ">
          {children}
        </div>
      </div>
    </section>
  );
}
