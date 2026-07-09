"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User, ExternalLink } from "lucide-react";

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ["location", "where", "awka", "abakaliki", "agbogazi", "iva valley", "owerri", "independence", "lake side"],
    answer: "Our estates are located across 6 prime locations:\n\n• AWKA – Ndiukwuenu, close to Amansea Gariki, Awka, Anambra State\n• ABAKALIKI – Ishieke, trekable distance to Ebonyi State University, Abakaliki, Ebonyi State\n• AGBOGAZI – Agbogazi Nike, Enugu East LGA, Enugu State. Close to Ugwogo Market\n• IVA VALLEY – Iva Valley, Pottery House, close to Enugu State Housing Estate, Enugu State\n• OWERRI – Along the Avu-Obosima road, Owerri, Imo State\n• INDEPENDENCE LAKE SIDE LAYOUT – Behind Centenary City, Awkunanaw, Enugu State"
  },
  {
    keywords: ["who", "owner", "developer", "company"],
    answer: "FIRSTCHOICE AFRO VILLA LIMITED is the developer – a leading Real Estate company with offices in Lagos, Owerri, Awka, Enugu and Ebonyi State."
  },
  {
    keywords: ["encumbrance", "government", "acquisition", "claim", "free"],
    answer: "The land is free from every known Government Acquisition or Interest/Claim."
  },
  {
    keywords: ["payment", "price", "cost", "plan", "outright", "installment", "how much"],
    answer: "We offer flexible payment plans across all estates:\n\n• Outright: Full payment at the best price\n• 3-Month Plan: Slight premium over outright\n• 6-Month Plan: Spread over 6 months\n• 12-Month Plan: Longest spread\n\nPrices vary by location (₦5M – ₦30M). Deed of Assignment fee is ₦500,000."
  },
  {
    keywords: ["title", "document", "c of o", "certificate", "governor consent", "deed", "land title"],
    answer: "All properties come with proper legal documentation including Deed of Assignment after full payment. For Enugu Smart City Estate specifically, the Land Title is: C of O (Certificate of Occupancy) and Governor's Consent."
  },
  {
    keywords: ["road", "motorable", "access"],
    answer: "Yes, the road to every estate is motorable and accessible."
  },
  {
    keywords: ["deposit", "initial", "after payment", "get", "receipt"],
    answer: "After your initial deposit, you receive a letter of acknowledgement of subscription and receipts of payment.\n\nAfter completing full payment, you receive: Completion Payment Receipt, Acknowledgement/Payment Notification letter, Contract of Sale, Free Plot Award Letter (where applicable), Deed of Assignment, Survey Plan & Deed of Gift (where applicable)."
  },
  {
    keywords: ["build", "construction", "start building", "fence"],
    answer: "You can start building after Physical Allocation, while fencing and gate-house construction is ongoing — provided you have building approval from the company."
  },
  {
    keywords: ["allocation", "when", "dry season"],
    "answer": "All physical allocations are done during the dry season in order of subscription."
  },
  {
    keywords: ["refund", "cancel", "withdraw", "money back"],
    answer: "Yes, you can request a refund if you cannot complete payment. Requirements:\n• Request must be in writing\n• 120-day waiting period (initial) + possible 90-day extension\n• Less 20% Administrative fee\n• No refund after physical allocation of property"
  },
  {
    keywords: ["transfer", "sell", "third party"],
    answer: "Transfer of interest is possible upon full payment and with company consent. Transfer charge: 10% of current property value. You bear the cost of new Survey Plans and Title Deeds."
  },
  {
    keywords: ["complaint", "grievance", "issue", "problem"],
    answer: "Channel written complaints to: firstchoiceafrovillalimited@gmail.com for immediate and amicable settlement via ADR before exploring other options."
  },
  {
    keywords: ["bank", "pay cash", "agent payment", "zenith", "fcmb"],
    answer: "Payments should ONLY be made to FIRSTCHOICE AFRO VILLA LIMITED's designated bank accounts:\n\n🏦 ZENITH BANK: 1214436382\n🏦 FCMB BANK: 7622600022"
  },
  {
    keywords: ["enugu smart city", "four corner", "smart city"],
    answer: "Enugu Smart City Estate is located at Four Corner, Enugu – just 10 minutes from Opera Square. It features C of O and Governor's Consent title, prime location, excellent road network, 24/7 security, electricity, high ROI potential, and smart city infrastructure."
  }
];

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Hi! 👋 I'm here to help you find the perfect plot. Ask me anything about our estates, pricing, or payment plans."
};

function findBestAnswer(query) {
  const lower = query.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  for (const item of FAQ_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      if (lower.includes(kw)) {
        score += kw.length / lower.length;
        if (kw.split(" ").length > 1 && lower.includes(kw)) score += 0.3;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && bestScore > 0.15) {
    return bestMatch.answer;
  }
  return null;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const localAnswer = findBestAnswer(userMsg);
      if (localAnswer) {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "assistant", content: localAnswer }]);
          setIsLoading(false);
        }, 600);
        return;
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMsg }]
        })
      });

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      const reply = data.reply || "I'm sorry, I couldn't process that. Please try again or speak with an agent.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble with my connection. Please reach out to our team directly for immediate assistance."
        },
        { role: "assistant", contentCTAFallback: true }
      ]);
    }
    setIsLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "opacity-0 pointer-events-none scale-0" : "opacity-100"
        } ${"bg-brand-500 text-charcoal-950 hover:bg-brand-400"}`}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ maxHeight: "min(600px, 80vh)" }}
          >
            <div className="flex items-center justify-between px-5 py-4 bg-charcoal-950 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-charcoal-950" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Afro Villa Assistant</p>
                  <p className="text-xs text-white/60">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4" style={{ maxHeight: "400px" }}>
              {messages.map((msg, i) => {
                if (msg.role === "user") {
                  return (
                    <div key={i} className="flex justify-end">
                      <div className="bg-brand-500 text-charcoal-950 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
                        <div className="flex items-start gap-2">
                          <p className="text-sm">{msg.content}</p>
                          <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  );
                }
                if (msg.contentCTAFallback) {
                  return (
                    <div key={i} className="flex justify-start">
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 max-w-[90%] space-y-3">
                        <p className="text-sm text-charcoal-700">Would you like to speak with a human agent?</p>
                        <div className="flex flex-col gap-2">
                          <a
                            href="https://wa.me/2347031147821"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Us
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 border border-charcoal-200 text-charcoal-700 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-charcoal-50"
                          >
                            Fill Contact Form
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={i} className="flex justify-start">
                    <div className="bg-gray-50 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%]">
                      <p className="text-sm text-charcoal-800 whitespace-pre-line">{msg.content}</p>
                    </div>
                  </div>
                );
              })}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 rounded-2xl rounded-bl-md px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin text-charcoal-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="border-t border-gray-100 px-4 py-3 flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about estates, pricing..."
                disabled={isLoading}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-brand-500 hover:bg-brand-400 text-charcoal-950 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}