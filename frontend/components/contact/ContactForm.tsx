"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/lib/api";
import type { ContactFormData } from "@/lib/types";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Please tell us a bit more (min 20 characters)"),
});

const services = [
  "Paid Media & PPC",
  "SEO & Content Marketing",
  "Analytics & Data",
  "Conversion Rate Optimisation",
  "Social Media Advertising",
  "Email & CRM Marketing",
  "Full-Service Growth Partnership",
];

const budgets = [
  "£1,000 – £3,000 / month",
  "£3,000 – £7,500 / month",
  "£7,500 – £15,000 / month",
  "£15,000+ / month",
  "Not sure yet",
];

type State = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setState("submitting");
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setState("success");
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
      setState("error");
    }
  };

  return (
    <div className="card-glass rounded-3xl p-8 lg:p-10 border border-white/[0.08]">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-3xl font-semibold text-white mb-3">Message Received!</h3>
            <p className="text-smoke mb-8">
              Thank you for reaching out. A member of our team will be in touch within 24 hours.
            </p>
            <button onClick={() => setState("idle")} className="btn-outline">
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-8">
              Tell Us About Your Business
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name")}
                  placeholder="Alex Reynolds"
                  className="input-dark"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="alex@company.co.uk"
                  className="input-dark"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                  Company Name
                </label>
                <input
                  {...register("company")}
                  placeholder="Your Company Ltd"
                  className="input-dark"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+44 7700 000 000"
                  className="input-dark"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                  Service Interested In *
                </label>
                <select {...register("service")} className="input-dark">
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.service.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                  Monthly Budget *
                </label>
                <select {...register("budget")} className="input-dark">
                  <option value="">Select budget range…</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.budget.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mb-7">
              <label className="block text-xs font-mono-alt text-smoke uppercase tracking-widest mb-2">
                Tell Us About Your Goals *
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="What are your main marketing challenges? What does success look like in 12 months?"
                className="input-dark resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>
              )}
            </div>

            {/* Error */}
            {state === "error" && (
              <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "submitting" ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Book Free Strategy Session
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-xs text-smoke/50 text-center mt-4">
              No commitment. 100% confidential. Response within 24 hours.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
