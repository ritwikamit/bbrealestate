import React, { useState } from 'react';
import { EnquiryFormData } from '../../types';
import { Send, CheckCircle2, ShieldCheck, AlertCircle, Phone, MessageSquare, Mail } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';

interface EnquiryFormProps {
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  onSuccess,
  title = "Property Consultation & Land Requirement",
  subtitle = "Direct communication with Baba Baidyanath Real Estate Private Limited.",
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    phone: '',
    email: '',
    preferredLocation: '',
    propertyType: 'Residential Plot',
    plotSizeRequirement: '',
    budgetRange: '₹50 Lakh – ₹1 Crore',
    purpose: 'Investment',
    preferredContactMethod: 'Phone',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  // Honeypot anti-spam field
  const [botField, setBotField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot spam check
    if (botField) {
      return;
    }

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    // Generate statutory reference number
    const ref = `BBRE-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    // Save to local storage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('bbre_enquiries') || '[]');
      existing.push({
        ...formData,
        referenceId: ref,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('bbre_enquiries', JSON.stringify(existing));
    } catch {
      // Storage error non-blocking
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredLocation: '',
      propertyType: 'Residential Plot',
      plotSizeRequirement: '',
      budgetRange: '₹50 Lakh – ₹1 Crore',
      purpose: 'Investment',
      preferredContactMethod: 'Phone',
      message: ''
    });
    setSubmitted(false);
    setReferenceId('');
  };

  const inputClass = isDark
    ? "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-stone-500 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] text-sm transition-all"
    : "w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] text-sm transition-all";

  const labelClass = isDark
    ? "block text-xs uppercase tracking-wider font-mono text-[#FACC15] font-semibold"
    : "block text-xs uppercase tracking-wider font-mono text-[#57534E]";

  if (submitted) {
    return (
      <div className={`p-8 sm:p-10 rounded-2xl text-center space-y-6 ${
        isDark ? 'bg-white/[0.02] border border-white/10' : 'bg-[#FAF8F5] border border-[#E7E2D8]'
      }`}>
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium block">
            Consultation Request Logged
          </span>
          <h3 className={`font-serif text-3xl font-bold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
            Thank You, {formData.name}
          </h3>
          <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#57534E]'}`}>
            Your requirement has been logged directly with Baba Baidyanath Real Estate Private Limited in Aurangabad. A designated officer will contact you via your preferred method.
          </p>
        </div>

        <div className={`p-4 rounded-xl max-w-xs mx-auto text-xs font-mono space-y-1 ${
          isDark ? 'bg-white/[0.03] border border-white/10' : 'bg-white border border-[#E7E2D8] shadow-sm'
        }`}>
          <span className="text-[#78716C] uppercase tracking-wider block">
            Reference Dossier ID
          </span>
          <span className="text-base font-bold text-[#B45309]">
            {referenceId}
          </span>
        </div>

        <div className="pt-2">
          <button
            onClick={resetForm}
            className="rounded-full px-7 py-3 text-xs uppercase tracking-[0.18em] btn-yellow-gradient text-[#0C0A09] font-bold cursor-pointer active:scale-95"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      
      {/* Honeypot field (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <input 
          type="text" 
          name="corporate_fax_number" 
          value={botField} 
          onChange={(e) => setBotField(e.target.value)} 
          tabIndex={-1} 
          autoComplete="off" 
        />
      </div>

      <div className={`space-y-2 pb-2 border-b ${isDark ? 'border-white/10' : 'border-[#E7E2D8]'}`}>
        <CompanyLogo variant="horizontal" size="sm" className="mb-2" />
        <h3 className={`font-serif text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#1C1917]'}`}>
          {title}
        </h3>
        <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-stone-300' : 'text-[#57534E]'}`}>
          {subtitle}
        </p>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Mobile Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelClass}>
            Full Name <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className={labelClass}>
            Mobile Number <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Email & Preferred Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelClass}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. ramesh@example.com"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className={labelClass}>
            Preferred Location
          </label>
          <input
            type="text"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            placeholder="e.g. Near GT Road NH-19, Aurangabad, etc."
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3: Property Type & Approximate Plot Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelClass}>
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="Residential Plot">Residential Plot</option>
            <option value="Land Parcel">Land Parcel</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className={labelClass}>
            Approximate Plot Size / Land Requirement
          </label>
          <input
            type="text"
            name="plotSizeRequirement"
            value={formData.plotSizeRequirement}
            onChange={handleChange}
            placeholder="Example: 2000 sq ft, 5000 sq ft, 1 katha, 1 acre"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 4: Budget Range & Purpose */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className={labelClass}>
            Budget Range
          </label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="₹50 Lakh – ₹1 Crore">₹50 Lakh – ₹1 Crore</option>
            <option value="₹1 – ₹2 Crore">₹1 – ₹2 Crore</option>
            <option value="₹2 – ₹5 Crore">₹2 – ₹5 Crore</option>
            <option value="₹5 – ₹10 Crore">₹5 – ₹10 Crore</option>
            <option value="₹10 Crore+">₹10 Crore+</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className={labelClass}>
            Purpose
          </label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="Investment">Investment</option>
            <option value="Personal Use">Personal Use</option>
            <option value="Future Development">Future Development</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 5: Preferred Contact Method */}
      <div className="space-y-1.5">
        <label className={labelClass}>
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'Phone', label: 'Phone', icon: Phone },
            { id: 'WhatsApp', label: 'WhatsApp', icon: MessageSquare },
            { id: 'Email', label: 'Email', icon: Mail }
          ].map((item) => {
            const isSelected = formData.preferredContactMethod === item.id;
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setFormData((prev) => ({ ...prev, preferredContactMethod: item.id }))}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  isSelected
                    ? isDark
                      ? 'bg-yellow-500/20 border-[#FACC15] text-[#FEF08A]'
                      : 'bg-[#1C1917] border-[#1C1917] text-[#FAF8F5]'
                    : isDark
                      ? 'bg-white/[0.03] border-white/10 text-stone-300 hover:bg-white/[0.08]'
                      : 'bg-white border-[#E8E2D5] text-[#57534E] hover:bg-stone-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 6: Message */}
      <div className="space-y-1.5">
        <label className={labelClass}>
          Message / Specific Notes
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share any additional requirements, preferred timelines, or specific location preferences."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit Action */}
      <div className="pt-2 space-y-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full py-3.5 px-6 btn-yellow-gradient font-bold text-xs uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 shadow-md text-[#0C0A09]"
        >
          {isSubmitting ? (
            <span>Securing &amp; Registering...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5 text-[#0C0A09]" />
              <span>Submit Consultation Request</span>
            </>
          )}
        </button>

        <div className={`flex items-center justify-center gap-2 text-[11px] text-center ${
          isDark ? 'text-stone-400' : 'text-[#78716C]'
        }`}>
          <ShieldCheck className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
          <span>Strictly confidential. Maintained under corporate non-disclosure.</span>
        </div>
      </div>

    </form>
  );
};
