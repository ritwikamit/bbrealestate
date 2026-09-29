import React from 'react';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Dark frosted backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
        <div className="relative transform overflow-y-auto max-h-[92vh] sm:max-h-[88vh] rounded-t-3xl sm:rounded-2xl bg-[#FAF8F5] text-[#1C1917] border border-[#E7E2D8] p-5 sm:p-8 text-left shadow-[0_25px_60px_rgba(40,25,10,0.25)] transition-all w-full sm:max-w-2xl animate-in slide-in-from-bottom-5 sm:zoom-in-95 duration-200">
          
          {/* Mobile Drag / Sheet Grab Handle */}
          <div className="sm:hidden w-12 h-1 bg-[#D6CBB8] rounded-full mx-auto mb-3" />

          {/* Close Button */}
          <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
            <button
              onClick={onClose}
              className="p-2 text-[#78716C] hover:text-[#1C1917] bg-stone-200/70 hover:bg-stone-300 rounded-full border border-[#E7E2D8] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B27] active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <EnquiryForm 
            onSuccess={onClose}
            theme="light"
            title="Official Requirement Registration"
            subtitle="Submit your property, land parcel, or partnership inquiry directly to the corporate office in Aurangabad."
          />

        </div>
      </div>
    </div>
  );
};
