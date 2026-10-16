"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  RefreshCw,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Package,
} from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  pickupLocation: string;
  deliveryLocation: string;
  shipmentDetails: string;
  additionalMessage: string;
}

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  pickupLocation: "",
  deliveryLocation: "",
  shipmentDetails: "",
  additionalMessage: "",
};

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window !== "undefined") {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const serviceParam = searchParams.get("service");
        const vehicleParam = searchParams.get("vehicle");
        const industryParam = searchParams.get("industry");

        let details = "";
        if (serviceParam) {
          details = `Inquiry regarding Service: ${serviceParam}`;
        } else if (vehicleParam) {
          details = `Inquiry regarding Fleet Vehicle: ${vehicleParam}`;
        } else if (industryParam) {
          details = `Inquiry regarding Industry Logistics: ${industryParam}`;
        }

        if (details) {
          return { ...initialFormData, shipmentDetails: details };
        }
      } catch {
        // ignore
      }
    }
    return initialFormData;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

  // Listen to service preselection from services section custom event
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceTitle: string }>;
      if (customEvent.detail?.serviceTitle) {
        setFormData((prev) => ({
          ...prev,
          shipmentDetails: `Inquiry regarding: ${customEvent.detail.serviceTitle}`,
        }));
      }
    };
    window.addEventListener("select-service", handleServiceSelect);
    return () => window.removeEventListener("select-service", handleServiceSelect);
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name is required (at least 2 characters).";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Valid contact number is required (at least 10 digits).";
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup city or location is required.";
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = "Delivery destination is required.";
    }

    if (!formData.shipmentDetails.trim()) {
      newErrors.shipmentDetails = "Please specify cargo nature, weight, or service type.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please provide a valid email address.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(data.message || "Unable to submit inquiry. Please try again or use WhatsApp.");
      } else {
        setSubmitSuccess(true);
        setReferenceId(data.referenceId || "TLS-INQUIRY");
      }
    } catch {
      setServerError("Network error. Please try again or connect directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate URL-encoded message for direct WhatsApp sending
  const getWhatsAppUrl = () => {
    const lines = [
      "Hello TLS Logistics Team,",
      "I would like to request a transportation quote:",
      `• Name: ${formData.fullName || "Not specified"}`,
      formData.companyName ? `• Company: ${formData.companyName}` : null,
      `• Phone: ${formData.phone || "Not specified"}`,
      formData.email ? `• Email: ${formData.email}` : null,
      `• Pickup: ${formData.pickupLocation || "Not specified"}`,
      `• Delivery: ${formData.deliveryLocation || "Not specified"}`,
      `• Shipment Details: ${formData.shipmentDetails || "Not specified"}`,
      formData.additionalMessage ? `• Notes: ${formData.additionalMessage}` : null,
    ].filter(Boolean);

    const message = lines.join("\n");
    return `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitSuccess(false);
    setReferenceId("");
    setServerError("");
  };

  if (submitSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-navy-900 border border-amber-500/30 shadow-xl text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="text-2xl font-bold text-navy-950 dark:text-white mb-2">
          Inquiry Validated & Reference Generated
        </h3>

        <div className="inline-block px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-navy-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-4 border border-slate-200 dark:border-navy-700">
          Reference ID: {referenceId}
        </div>

        {/* Honest explanation of backend status */}
        <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-left mb-6 max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
            <strong>System Status:</strong> Because an automated email service or persistent database is not configured on this preview deployment, your enquiry has <em>not</em> been emailed to an inbox.
          </p>
          <p className="text-xs text-amber-800 dark:text-amber-300 mt-2 leading-relaxed">
            To deliver your freight requirements directly to the TLS coordination team right now, click <strong>Dispatch via WhatsApp</strong> below or call directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Dispatch via WhatsApp (+91 93116 06860)</span>
          </a>

          <a
            href={SITE_CONFIG.phoneLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-navy-950 dark:text-white bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 border border-slate-200 dark:border-navy-750 transition-colors"
          >
            <Phone className="w-4 h-4 text-tls-red" />
            <span>Call Operations</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Edit / Reset</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-navy-950 dark:text-white mb-2">
          Request a Transportation Quote
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          Provide your shipment details below. Fields marked with <span className="text-tls-red">*</span> are required.
        </p>

        {/* Honest upfront note about backend configuration */}
        <div className="p-3.5 rounded-xl bg-slate-100/90 dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
          <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Note:</strong> Automated email/database storage is in client-preview mode. For instant, guaranteed transmission to our Jhajjar desk, use the <strong>Send via WhatsApp</strong> button or call directly.
          </span>
        </div>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 flex items-start gap-3 text-red-700 dark:text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>{serverError}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-tls-red">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 dark:border-navy-700 focus:border-electric-500 dark:focus:border-electric-400 focus:ring-electric-500/20"
                } text-navy-950 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Company Name <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Building className="w-4 h-4" />
              </div>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Apex Industrial Corp"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-navy-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-electric-500/20 focus:border-electric-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-tls-red">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 dark:border-navy-700 focus:border-electric-500 dark:focus:border-electric-400 focus:ring-electric-500/20"
                } text-navy-950 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. logistics@company.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 dark:border-navy-700 focus:border-electric-500 dark:focus:border-electric-400 focus:ring-electric-500/20"
                } text-navy-950 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Pickup & Delivery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Pickup Location <span className="text-tls-red">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-electric-500" />
              </div>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Origin City / District / State"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.pickupLocation
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 dark:border-navy-700 focus:border-electric-500 dark:focus:border-electric-400 focus:ring-electric-500/20"
                } text-navy-950 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
              />
            </div>
            {errors.pickupLocation && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.pickupLocation}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Delivery Destination <span className="text-tls-red">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <MapPin className="w-4 h-4 text-tls-red" />
              </div>
              <input
                type="text"
                name="deliveryLocation"
                value={formData.deliveryLocation}
                onChange={handleChange}
                placeholder="Destination City / Pin Code / State"
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                  errors.deliveryLocation
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 dark:border-navy-700 focus:border-electric-500 dark:focus:border-electric-400 focus:ring-electric-500/20"
                } text-navy-950 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
              />
            </div>
            {errors.deliveryLocation && (
              <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                {errors.deliveryLocation}
              </p>
            )}
          </div>
        </div>

        {/* Shipment Details */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
            Shipment Details <span className="text-tls-red">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Package className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="shipmentDetails"
              value={formData.shipmentDetails}
              onChange={handleChange}
              placeholder="e.g. Full Truckload, Industrial machinery, approx 12 Tons"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border ${
                errors.shipmentDetails
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 dark:border-navy-700 focus:border-electric-500 dark:focus:border-electric-400 focus:ring-electric-500/20"
              } text-navy-950 dark:text-white focus:outline-none focus:ring-2 transition-colors`}
            />
          </div>
          {errors.shipmentDetails && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400">
              {errors.shipmentDetails}
            </p>
          )}
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
            Additional Message / Schedule Constraints <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            name="additionalMessage"
            rows={3}
            value={formData.additionalMessage}
            onChange={handleChange}
            placeholder="Specify any preferred pickup date, loading constraints, or special handling..."
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-navy-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-electric-500/20 focus:border-electric-500 transition-colors resize-none"
          />
        </div>

        {/* Form Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-tls-red hover:bg-tls-red-hover active:bg-tls-red-dark transition-all duration-200 shadow-md shadow-tls-red/25 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 transition-colors text-sm"
            title="Send prefilled details directly via WhatsApp"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Send via WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center pt-2">
          For real-time operational coordination, dispatch via WhatsApp to +91 93116 06860. Commercial confidentiality is strictly maintained.
        </p>
      </form>
    </div>
  );
}
