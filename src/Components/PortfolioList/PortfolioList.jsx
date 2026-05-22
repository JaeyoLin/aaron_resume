import BOK_1 from '@Assets/images/portfolio/bok_1.jpg';
import BOK_2 from '@Assets/images/portfolio/bok_2.jpg';
import BOK_3 from '@Assets/images/portfolio/bok_3.jpg';
import BOK_4 from '@Assets/images/portfolio/bok_4.jpg';
import BOK_5 from '@Assets/images/portfolio/bok_5.jpg';

import PORJECT_SECURITY from '@Assets/images/portfolio/project_security.jpg';
import PORJECT_COACHING_1 from '@Assets/images/portfolio/project_coaching_1.jpg';
import PORJECT_COACHING_2 from '@Assets/images/portfolio/project_coaching_2.jpg';
import PORJECT_OFFICE_1 from '@Assets/images/portfolio/project_office_1.jpg';
import PORJECT_OFFICE_2 from '@Assets/images/portfolio/project_office_2.jpg';
import PORJECT_OFFICE_3 from '@Assets/images/portfolio/project_office_3.jpg';
import PORJECT_OFFICE_4 from '@Assets/images/portfolio/project_office_4.jpg';
import PORJECT_COOK from '@Assets/images/portfolio/project_cook.jpg';
import PORJECT_SVM_1 from '@Assets/images/portfolio/project_svm_1.jpg';
import PORJECT_SVM_2 from '@Assets/images/portfolio/project_svm_2.jpg';
import PORJECT_SVM_3 from '@Assets/images/portfolio/project_svm_3.jpg';
import PORJECT_HIS_1 from '@Assets/images/portfolio/project_his_1.jpg';
import PORJECT_HIS_2 from '@Assets/images/portfolio/project_his_2.jpg';
import PORJECT_MOHW_1 from '@Assets/images/portfolio/project_mohw_1.jpg';
import PORJECT_MOHW_2 from '@Assets/images/portfolio/project_mohw_2.jpg';
import PORJECT_MOHW_3 from '@Assets/images/portfolio/project_mohw_3.jpg';
import PORJECT_MOHW_4 from '@Assets/images/portfolio/project_mohw_4.jpg';

import EVAAIR_TICKET_BOOKING from '@Assets/images/portfolio/evaair_ticket_booking.jpg';
import EVAAIR_SKY_SHOP from '@Assets/images/portfolio/evaair_sky_shop.jpg';

const sections = [
  {
    title: 'Bank of Kaohsiung',
    summary: 'Banking websites and internal workflow tools with a focus on reliability and operations.',
    accent: 'Finance systems',
    items: [
      {
        title: 'Office Website',
        description: 'Public-facing corporate website work.',
        images: [BOK_1],
      },
      {
        title: 'SWIFT Alliance',
        description: 'Operational banking workflow screens and maintenance work.',
        images: [BOK_2],
      },
      {
        title: 'Trust Reservation',
        description: 'Trust reservation service screens and supporting flows.',
        images: [BOK_3],
      },
      {
        title: 'Questionnaire System',
        description: 'Questionnaire UI and related administrative pages.',
        images: [BOK_4, BOK_5],
      },
    ],
  },
  {
    title: 'Wistron Corporation',
    summary: 'Enterprise systems, coaching tools, and internal product delivery across multiple business teams.',
    accent: 'Manufacturing',
    items: [
      {
        title: 'Security System',
        description: 'Security workflow and access-related system work.',
        images: [PORJECT_SECURITY],
      },
      {
        title: 'Supervisor Coaching',
        description: 'Coaching experience screens and training-related content.',
        images: [PORJECT_COACHING_1, PORJECT_COACHING_2],
      },
      {
        title: 'Office Position',
        description: 'Office position management screens.',
        images: [PORJECT_OFFICE_1, PORJECT_OFFICE_2, PORJECT_OFFICE_3, PORJECT_OFFICE_4],
      },
      {
        title: 'Taipei COOK',
        description: 'Consumer-oriented application work for Taipei COOK.',
        images: [PORJECT_COOK],
      },
      {
        title: 'Smart Vending Machine',
        description: 'Vending machine management interface and related flows.',
        images: [PORJECT_SVM_1, PORJECT_SVM_2, PORJECT_SVM_3],
      },
      {
        title: 'HIS System',
        description: 'Hospital information system screens and workflows.',
        images: [PORJECT_HIS_1, PORJECT_HIS_2],
      },
      {
        title: 'MOHW HIS System',
        description: 'Ministry of Health and Welfare HIS related screens.',
        images: [PORJECT_MOHW_1, PORJECT_MOHW_2, PORJECT_MOHW_3, PORJECT_MOHW_4],
      },
    ],
  },
  {
    title: 'Dimerco Data System Corporation',
    summary: 'Travel and logistics product work for airline booking and shopping systems.',
    accent: 'Travel tech',
    items: [
      {
        title: 'EVA Air Ticket Booking',
        description: 'Ticket booking flow and supporting UI.',
        images: [EVAAIR_TICKET_BOOKING],
      },
      {
        title: 'EVA Air Sky Shop',
        description: 'Airline e-commerce shopping experience.',
        images: [EVAAIR_SKY_SHOP],
      },
    ],
  },
];

const PortfolioList = () => {
  return (
    <section className="space-y-6">
      <div className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(18,32,27,0.06)] print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Portfolio
        </p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">
              Selected Work
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-700">
              A visual snapshot of banking, manufacturing, travel, and healthcare projects built across my previous roles.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-green-dark/10 px-4 py-2 text-sm font-semibold text-green-dark">
            Enterprise web delivery
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[32px] border border-black/5 bg-white/85 p-6 shadow-sm print:break-inside-avoid print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none md:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {section.accent}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                  {section.title}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">
                {section.summary}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-black/5 bg-slate-50/80 p-4 shadow-sm print:break-inside-avoid"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-green-dark shadow-sm">
                      Gallery
                    </span>
                  </div>

                  <div
                    className="mt-4 grid gap-3"
                    style={{ gridTemplateColumns: item.images.length > 1 ? 'repeat(auto-fit, minmax(180px, 1fr))' : '1fr' }}
                  >
                    {item.images.map((image, imageIndex) => (
                      <img
                        key={`${item.title}-${imageIndex}`}
                        src={image}
                        alt={item.title}
                        className="aspect-[16/10] w-full rounded-2xl border border-black/5 object-cover shadow-sm"
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;
