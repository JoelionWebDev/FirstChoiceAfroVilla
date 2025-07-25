"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Q1. where are firstchoice afro villa estates located?",
      answer:
        "AWKA	 Ndiukwuenu, very close to Amansea Gariki, Awka, Anambra State ABAKALIKI	Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State AGBOGAZI	Agbogazi Nike, Enugu East LGA, Enugu State. Very close to Ugwogo Market. IVA VALLEY	At Iva Valley, Pottery House, very close to Enugu State Housing Estate, Enugu state. OWERRI		Along the Avu - Obosima road, Owerri, Imo State. INDEPENDENCE	Behind Centenary City, sharing fence boundary with Police College, LAKE SIDE LAYOUT.	 Awkunanaw, Enugu State",
    },
    {
      question:
        "Q2. Who are the owners/developer of firstchoice afro villa estates?",
      answer:
        " A. FIRSTCHOICE AFRO VILLA LIMITED, a leading Real Estate company with offices in Lagos, Owerri, Awka, Enugu and Ebonyi State.",
    },
    {
      question: "Q3. Are there any Encumberances on the land?",
      answer:
        "A. The land is free from every known Government Acquisition or Interest / Claim.",
    },
    {
      question: "Q4. What are their payment structure and title?",
      answer: "pricing-table",
    },
    {
      question: "Q5. Is the road to the estate motorable?",
      answer: "Yes, the road to the estate is motorable.",
    },
    {
      question: "Q6. What do I get after the initial deposit?",
      answer:
        "A letter of acknowledgement of subscription and receipts of payment.",
    },
    {
      question: "Q7. What do i get after completing payment for the land?",
      answer:
        "Completion Payment Receipt, Acknowledgement/Payment Notification letter, Contract of Sale (where applicable). Free Plot Award Letter (Where Applicable). Deed of Assignment, Survey Plan & Deed of Gift(where applicable).NB:Applicants shall be availed with the documents in paragraph (c) above after payment of documentation fee. Subscribers are also required to comply with the Estate Rules and Regulations as provided by the Company.",
    },
    {
      question: "Q8. Can i start construction or building on the land now?",
      answer:
        "You can start building on the land after Physical Allocation, while Fencing and gate‐house construction is on going. Provided applicant has sought and obtained building approval from the company.",
    },
    {
      question: "Q9. When is allocation done?",
      answer:
        "All physical allocation shall be done during the dry season in order of subscription.",
    },
    {
      question: "Q10. When do i make the other payments?",
      answer:
        "Payment for Survey Plan, Deed of Assignment and Plot Demarcation should be made before Physical Allocation. Development fees should be paid either outrightly or in installments. Note that Installment payment of development fee will attract surcharges.",
    },
    {
      question: "Q11. Can I pay cash to your agent?",
      answer:
        "WE STRONGLY ADVISE that payments should ONLY be made to FIRSTCHOICE AFRO VILLA LIMITED's designated BANKS with: ZENITH BANK - 1214436382 OR FCMB BANK ‐ 7622600022.",
    },
    {
      question:
        "Q12. What happens if I cannot continue with my payment? Can I request for a refund?",
      answer:
        "Yes, you can request for a refund only if you are unable to complete payment within the subscribed payment period or within the 3months immediately after the Subscribed payment period provided that: All requests for refund shall be made in writing and subject to a 120 days waiting period with a possible 90 days extension and a further 60days after the initial period.  For refunds that are requested after the expiration of the payment plan, demurrage/default fees will be deducted from the refundable amount.  NOTE:That after processing refund, disbursement shall be according to the payment plan used for the subscription by client/customer less 20% Administrative fee and other disbursements (demurrage/default charges where applicable).",
    },
    {
      question: "Q13. When are default charges payable?",
      answer:
        "Default fees are payable where the customer fails to complete payment within the subscribed payment period.  Note that the Company shall be at liberty to revoke the subscription of a client/customer at any time if the Applicant fails to meet the purchase requirements or adhere to the terms and conditions stated herein.  In the event of revocation, the Company shall not be liable to make any refund to the exiting subscriber until the Company has received funds corresponding in value to the amount to be refunded from a third‐party Applicant. For the avoidance of doubt, the Company shall not be obliged to procure a third‐party to acquire the subscriber's interest in the property. Revocation of allocation or termination of subscription arising because of failure of the Applicant to meet payment obligations shall attract a 20% deduction (10% Agency Fee & 10% Administrative Fee) of the Applicant's total deposit.",
    },
    {
      question: "Q14. Can you request for refund after completing payment?",
      answer:
        "NO. Refund can only be done before completion of payment or within 3months immediately after the Subscribed payment period. PROVIDED ALWAYS that such refund shall not be made after physical allocation of property has been conducted.  NOTE: In the event of a refund, you are required to give the company a One Hundred and Twenty  (120) days’ notice (initial period) in writing to process your refund and a further Ninety (90) days which may be extended to another 60 days if the processing not completed within initial period.   NOTE ALSO: That after processing refund, disbursement shall be according to the payment plan used for the subscription less 20% (Administrative fee and other disbursements).",
    },
    {
      question: "Q15. How do I channel my complaints or grievances?",
      answer:
        "The company is committed to a speedy and amicable settlement of issues brought to its attention by customers/clients. Customers/Clients shall channel their written complaints to: firstchoiceafrovillalimited@gmail.com for immediate and amicable settlement with the instrumentality of ADR before exploring other options.  NOTE: Dispute Resolution shall be subject to the Arbitration and Conciliation Act, 2004.",
    },
    {
      question: "Q16. Can i transfer my property?",
      answer:
        "Transfer of interest in property(ies) by clients/customers is only possible upon full payment and shall be done upon receipt of prior express consent of the Company and payment of transfer charges. Where a transfer of interest is to be made to a third party, the Applicant shall bear the cost of procuring new Survey Plans and Title Deeds (amongst others). The applicable transfer charge shall be 10% of the current value of the property.",
    },
  ];

  const pricingTable = (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[800px] border-collapse bg-white rounded-lg overflow-hidden text-black shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              Estate Location
            </th>
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              Plot Size
            </th>
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              Outright
            </th>
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              3months
            </th>
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              6 months
            </th>
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              12 Months
            </th>
            <th className="border border-gray-200 px-2 sm:px-4 py-3 text-left font-semibold text-gray-700 text-sm sm:text-base whitespace-nowrap">
              Deed of assignment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-medium text-blue-600 text-sm sm:text-base whitespace-nowrap">
              Awka
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              50 x 100ft
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              5,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              5,250,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              5,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              5,750,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              500,000
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-medium text-blue-600 text-sm sm:text-base whitespace-nowrap">
              Abakaliki
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              50 x 100ft
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              5,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              5,250,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              5,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              5,750,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              500,000
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-medium text-blue-600 text-sm sm:text-base whitespace-nowrap">
              Agbogazi
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              50 x 100ft
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              2,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              2,100,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              2,200,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              2,300,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              500,000
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-medium text-blue-600 text-sm sm:text-base whitespace-nowrap">
              Iva Valley
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              50 x 100ft
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              15,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              15,750,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              16,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              17,250,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              500,000
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-medium text-blue-600 text-sm sm:text-base whitespace-nowrap">
              Owerri
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              50 x 100ft
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              10,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              10,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              11,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              11,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              500,000
            </td>
          </tr>

          <tr className="hover:bg-gray-50 transition-colors">
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-medium text-blue-600 text-sm sm:text-base whitespace-nowrap">
              Independence <br /> Lake Side Layout
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              50 x 100ft
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 text-sm sm:text-base whitespace-nowrap">
              30,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              31,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              33,000,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              34,500,000
            </td>
            <td className="border border-gray-200 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base whitespace-nowrap">
              500,000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our services, pricing, and
          process. Can't find what you're looking for? Feel free to contact us.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800 pr-8">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(index) ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index)
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5">
                <div className="pt-2 border-t border-gray-100">
                  {item.answer === "pricing-table" ? (
                    <div className="mt-4">{pricingTable}</div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Our team is here to help you find the perfect solution for your needs.
        </p>
        <button
          onClick={() => window.open("https://wa.link/7bmwjs", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Contact Us Today
        </button>
      </div>
    </div>
  );
}
