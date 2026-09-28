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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-[#121614]/95 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 text-left shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all sm:my-8 sm:w-full sm:max-w-2xl animate-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <div className="absolute top-5 right-5 z-10">
            <button
              onClick={onClose}
              className="p-2 text-[#A5A095] hover:text-[#F5F2EA] bg-white/[0.04] hover:bg-white/[0.1] rounded-full border border-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <EnquiryForm 
            onSuccess={onClose}
            theme="dark"
            title="Official Requirement Registration"
            subtitle="Submit your property, land parcel, or partnership inquiry directly to the corporate office."
          />

        </div>
      </div>
    </div>
  );
};
