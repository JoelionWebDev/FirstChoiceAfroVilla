"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  CreditCard,
  File,
  RefreshCw,
  MessageCircle,
  MessageSquare
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pricingData = [
  { location: "Awka", size: "50x100ft", outright: "5,000,000", three: "5,250,000", six: "5,500,000", twelve: "5,750,000", deed: "500,000" },
  { location: "Abakaliki", size: "50x100ft", outright: "5,000,000", three: "5,250,000", six: "5,500,000", twelve: "5,750,000", deed: "500,000" },
  { location: "Agbogazi", size: "50x100ft", outright: "5,000,000", three: "5,150,000", six: "5,300,000", twelve: "5,450,000", deed: "500,000" },
  { location: "Iva Valley", size: "50x100ft", outright: "25,000,000", three: "25,750,000", six: "26,500,000", twelve: "27,250,000", deed: "500,000" },
  { location: "Owerri", size: "50x100ft", outright: "25,000,000", three: "25,500,000", six: "26,000,000", twelve: "26,500,000", deed: "500,000" },
  { location: "Independence Lake Side", size: "50x100ft", outright: "30,000,000", three: "31,500,000", six: "33,000,000", twelve: "34,500,000", deed: "500,000" },
];

const faqGroups = [
  {
    id: "location",
    icon: MapPin,
    label: "Location & Estates",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    items: [
      {
        q: "Q1. Where are First Choice Afro Villa estates located?",
        a: "AWKA: Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State\nABAKALIKI: Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State\nAGBOGAZI: Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market\nIVA VALLEY: At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu state\nOWERRI: Along the Avu - Obosima road, Owerri, Imo State\nINDEPENDENCE: Behind Centenary City, sharing fence boundary with Police College, Lake Side Layout, Awkunanaw, Enugu State"
      },
      {
        q: "Q2. Who are the owners/developer of First Choice Afro Villa estates?",
        a: "FIRSTCHOICE AFRO VILLA LIMITED, a leading Real Estate company with offices in Lagos, Owerri, Awka, Enugu and Ebonyi State."
      },
      {
        q: "Q5. Is the road to the estate motorable?",
        a: "Yes, the road to the estate is motorable."
      },
    ]
  },
  {
    id: "payment",
    icon: CreditCard,
    label: "Payment & Pricing",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    items: [
      {
        q: "Q4. What are the payment structure and title?",
        a: "pricing-table"
      },
      {
        q: "Q10. When do I make the other payments?",
        a: "Payment for Survey Plan, Deed of Assignment and Plot Demarcation should be made before Physical Allocation. Development fees should be paid either outrightly or in installments. Note that installment payment of development fee will attract surcharges."
      },
      {
        q: "Q11. Can I pay cash to your agent?",
        a: "WE STRONGLY ADVISE that payments should ONLY be made to FIRSTCHOICE AFRO VILLA LIMITED's designated BANKS with:\nZENITH BANK - 1214436382\nFCMB BANK - 7622600022"
      },
    ]
  },
  {
    id: "documentation",
    icon: File,
    label: "Documentation & Allocation",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    items: [
      {
        q: "Q3. Are there any encumbrances on the land?",
        a: "The land is free from every known Government Acquisition or Interest/Claim."
      },
      {
        q: "Q6. What do I get after the initial deposit?",
        a: "A letter of acknowledgement of subscription and receipts of payment."
      },
      {
        q: "Q7. What do I get after completing payment for the land?",
        a: "Completion Payment Receipt, Acknowledgement/Payment Notification letter, Contract of Sale (where applicable), Free Plot Award Letter (Where Applicable), Deed of Assignment, Survey Plan & Deed of Gift (where applicable). NB: Applicants shall be availed with documents after payment of documentation fee. Subscribers must comply with Estate Rules and Regulations."
      },
      {
        q: "Q8. Can I start construction or building on the land now?",
        a: "You can start building on the land after Physical Allocation, while Fencing and gate-house construction is ongoing. Provided applicant has sought and obtained building approval from the company."
      },
      {
        q: "Q9. When is allocation done?",
        a: "All physical allocations shall be done during the dry season in order of subscription."
      },
    ]
  },
  {
    id: "refunds",
    icon: RefreshCw,
    label: "Refunds, Transfers & Disputes",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    items: [
      {
        q: "Q12. What happens if I cannot continue with my payment? Can I request for a refund?",
        a: "Yes, you can request a refund only if you are unable to complete payment within the subscribed payment period or within the 3 months immediately after. All requests shall be made in writing and subject to a 120-day waiting period with a possible 90-day extension and a further 60 days. After processing refund, disbursement shall be according to the payment plan used less 20% Administrative fee and other disbursements."
      },
      {
        q: "Q13. When are default charges payable?",
        a: "Default fees are payable where the customer fails to complete payment within the subscribed payment period. The Company shall be at liberty to revoke subscription at any time if the Applicant fails to meet the purchase requirements. Revocation shall attract a 20% deduction (10% Agency Fee & 10% Administrative Fee) of the Applicant's total deposit."
      },
      {
        q: "Q14. Can you request for refund after completing payment?",
        a: "NO. Refund can only be done before completion of payment or within 3 months immediately after the Subscribed payment period. Provided always that such refund shall not be made after physical allocation of property has been conducted."
      },
      {
        q: "Q15. How do I channel my complaints or grievances?",
        a: "Written complaints to: firstchoiceafrovillalimited@gmail.com for immediate and amicable settlement with ADR before exploring other options. Dispute Resolution shall be subject to the Arbitration and Conciliation Act, 2004."
      },
      {
        q: "Q16. Can I transfer my property?",
        a: "Transfer of interest in property by clients is only possible upon full payment with prior express consent of the Company and payment of transfer charges. The applicable transfer charge shall be 10% of the current value of the property."
      },
    ]
  },
];

function PricingTable() {
  return (
    <div>
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-charcoal-950 text-white">
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Estate Location</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Plot Size</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Outright</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">3 Months</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">6 Months</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">12 Months</th>
              <th className="px-4 py-3.5 text-left text-sm font-semibold">Deed Fee</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, i) => (
              <tr key={row.location} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-brand-50 transition-colors`}>
                <td className="px-4 py-3 text-sm font-semibold text-charcoal-900">{row.location}</td>
                <td className="px-4 py-3 text-sm text-charcoal-600">{row.size}</td>
                <td className="px-4 py-3 text-sm font-medium">₦{row.outright}</td>
                <td className="px-4 py-3 text-sm">₦{row.three}</td>
                <td className="px-4 py-3 text-sm">₦{row.six}</td>
                <td className="px-4 py-3 text-sm">₦{row.twelve}</td>
                <td className="px-4 py-3 text-sm font-semibold text-brand-600">₦{row.deed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {pricingData.map((row) => (
          <div key={row.location} className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-charcoal-900 text-base">{row.location}</h4>
              <span className="text-xs bg-charcoal-100 px-2.5 py-1 rounded-full font-medium">{row.size}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-brand-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">Outright</span>
                <p className="font-bold text-charcoal-900">₦{row.outright}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">3 Months</span>
                <p className="font-bold text-blue-700">₦{row.three}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">6 Months</span>
                <p className="font-bold text-purple-700">₦{row.six}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-2.5">
                <span className="text-charcoal-500 text-xs">12 Months</span>
                <p className="font-bold text-orange-700">₦{row.twelve}</p>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-2.5 flex justify-between text-sm">
              <span className="text-charcoal-500">Deed of Assignment</span>
              <span className="font-bold text-brand-600">₦{row.deed}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openGroup, setOpenGroup] = useState(null);
  const [openItems, setOpenItems] = useState({});
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggleGroup = (id) => {
    setOpenGroup(openGroup === id ? null : id);
    setOpenItems({});
  };

  const toggleItem = (groupId, itemIndex) => {
    const key = `${groupId}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">FAQ</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-charcoal-500 max-w-xl mx-auto">
            Find answers about our locations, pricing, documentation, and policies.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqGroups.map((group, gi) => {
            const GroupIcon = group.icon;
            const isGroupOpen = openGroup === group.id;
            return (
              <motion.div
                key={group.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={gi}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleGroup(group.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${group.bgColor}`}>
                      <GroupIcon className={`w-5 h-5 ${group.color}`} />
                    </div>
                    <span className="font-semibold text-charcoal-800">{group.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${group.bgColor} ${group.color}`}>
                      {group.items.length}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-charcoal-400 transition-transform duration-300 ${isGroupOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isGroupOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 space-y-2">
                        {group.items.map((item, ii) => {
                          const key = `${group.id}-${ii}`;
                          const isOpen = openItems[key];
                          return (
                            <div key={ii} className={`rounded-xl border ${group.borderColor} overflow-hidden`}>
                              <button
                                onClick={() => toggleItem(group.id, ii)}
                                className="w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-gray-50"
                              >
                                <span className="text-sm font-medium text-charcoal-700 pr-4">{item.q}</span>
                                <ChevronDown className={`w-4 h-4 flex-shrink-0 text-charcoal-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                              </button>
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-4 pb-4">
                                      <div className="pt-3 border-t border-gray-100">
                                        {item.a === "pricing-table" ? (
                                          <PricingTable />
                                        ) : (
                                          <p className="text-sm text-charcoal-600 whitespace-pre-line leading-relaxed">{item.a}</p>
                                        )}
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={5}
          className="text-center mt-12 p-8 bg-gradient-to-br from-brand-50 to-amber-50 rounded-2xl border border-brand-200"
        >
          <h3 className="text-xl font-semibold text-charcoal-900 mb-3">Still have questions?</h3>
          <p className="text-charcoal-500 mb-6">Our team is here to help you find the perfect solution.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/2347031147821"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-charcoal-300 text-charcoal-700 px-6 py-3 rounded-xl font-semibold hover:bg-charcoal-50 transition-colors"
            >
              Contact Form
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}