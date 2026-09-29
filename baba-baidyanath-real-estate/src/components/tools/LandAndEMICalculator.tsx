import React, { useState } from 'react';

type UnitType = 'katha' | 'bigha' | 'decimal' | 'sqft' | 'gaj' | 'acre';

// Bihar regional factors relative to Square Feet
const SQFT_FACTORS: Record<UnitType, number> = {
  sqft: 1,
  katha: 1361.25,      // 20 Dhur standard in Aurangabad / Magadh
  bigha: 27225,        // 20 Katha
  decimal: 435.6,      // 1 Dismil
  gaj: 9,              // 1 Sq Yard = 9 Sq Ft
  acre: 43560          // 1 Acre = 43,560 Sq Ft (32 Katha approx)
};

const UNIT_LABELS: Record<UnitType, { name: string; regionalNote: string }> = {
  katha: { name: 'Katha (कट्ठा)', regionalNote: 'Standard Bihar unit (1 Katha = 1,361.25 sq ft)' },
  bigha: { name: 'Bigha (बीघा)', regionalNote: '20 Katha = 1 Bigha (27,225 sq ft)' },
  decimal: { name: 'Decimal / Dismil (डिसमिल)', regionalNote: 'Standard revenue metric (435.6 sq ft)' },
  sqft: { name: 'Square Feet (वर्ग फीट)', regionalNote: 'Standard architectural metric' },
  gaj: { name: 'Gaj / Sq. Yard (गज)', regionalNote: '1 Gaj = 9 Square Feet' },
  acre: { name: 'Acre (एकड़)', regionalNote: '32 Katha approx in Bihar' }
};

export const LandAndEMICalculator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'land' | 'emi'>('land');

  // Land converter state
  const [inputVal, setInputVal] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<UnitType>('katha');
  const [ratePerKatha, setRatePerKatha] = useState<number>(0);

  // EMI calculator state
  const [loanAmount, setLoanAmount] = useState<number>(2500000); // 25 Lakhs
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(15);   // 15 years

  // Calculate Land conversions
  const sqftBase = (inputVal || 0) * SQFT_FACTORS[fromUnit];
  const convertedValues: Record<UnitType, number> = {
    sqft: sqftBase,
    katha: sqftBase / SQFT_FACTORS.katha,
    bigha: sqftBase / SQFT_FACTORS.bigha,
    decimal: sqftBase / SQFT_FACTORS.decimal,
    gaj: sqftBase / SQFT_FACTORS.gaj,
    acre: sqftBase / SQFT_FACTORS.acre
  };

  const totalEstimatedCost = ratePerKatha > 0 ? convertedValues.katha * ratePerKatha : 0;

  // Calculate EMI
  const monthlyRate = (interestRate / 100) / 12;
  const totalMonths = tenureYears * 12;
  const emiNumerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
  const emiDenominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
  const monthlyEmi = emiDenominator > 0 ? emiNumerator / emiDenominator : 0;
  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-12 md:py-20 relative z-10 bg-transparent text-[#1C1917]" aria-label="Land & Real Estate Calculators">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#9A6F20] tracking-wide">
              <span className="font-hindi text-sm sm:text-base text-[#9A6F20] font-semibold">
                ॥ बिहार भूमि मापी एवं वित्तीय विश्लेषण ॥
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
              Property &amp; Land Calculators
            </h2>
            <p className="text-base text-[#57534E] leading-relaxed font-normal">
              कट्ठा, बीघा, धूर, डिसमिल एवं वर्ग फीट की प्रामाणिक क्षेत्रीय गणना (औरंगाबाद एवं मगध मानक)। Standardized mathematical benchmarks for Bihar land records.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E8E2D5] rounded-xl shadow-xs w-full sm:w-auto self-start">
            <button
              onClick={() => setActiveMode('land')}
              className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-lg transition-all cursor-pointer text-center whitespace-nowrap ${
                activeMode === 'land'
                  ? 'bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Bihar Land Converter / भूमि मापी
            </button>
            <button
              onClick={() => setActiveMode('emi')}
              className={`flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider uppercase rounded-lg transition-all cursor-pointer text-center whitespace-nowrap ${
                activeMode === 'emi'
                  ? 'bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold shadow-xs'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              Loan &amp; EMI / ईएमआई
            </button>
          </div>
        </div>

        {/* Mode 1: Land Unit Converter */}
        {activeMode === 'land' && (
          <div className="rounded-2xl border border-[#E7E2D8] bg-white p-6 sm:p-10 shadow-[0_15px_40px_rgba(28,25,23,0.06)] space-y-8 animate-in fade-in duration-200">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Input side */}
              <div className="md:col-span-5 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="land-area-input" className="block text-xs uppercase tracking-wider font-mono text-[#B45309] font-semibold">
                    Enter Area Quantity
                  </label>
                  <div className="relative">
                    <input
                      id="land-area-input"
                      type="number"
                      min="0"
                      step="any"
                      value={inputVal === 0 ? '' : inputVal}
                      onChange={(e) => setInputVal(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 5"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xl font-serif text-2xl text-[#1C1917] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-all placeholder:text-[#A8A29E]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="land-unit-select" className="block text-xs uppercase tracking-wider font-mono text-[#B45309] font-semibold">
                    Select Source Unit
                  </label>
                  <select
                    id="land-unit-select"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value as UnitType)}
                    className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xl text-sm text-[#1C1917] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 cursor-pointer"
                  >
                    <option value="katha">Katha (कट्ठा) - 1,361.25 sq ft</option>
                    <option value="bigha">Bigha (बीघा) - 20 Katha</option>
                    <option value="decimal">Decimal / Dismil (डिसमिल) - 435.6 sq ft</option>
                    <option value="sqft">Square Feet (वर्ग फीट)</option>
                    <option value="gaj">Gaj / Sq. Yard (गज) - 9 sq ft</option>
                    <option value="acre">Acre (एकड़) - 43,560 sq ft</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#E7E2D8]">
                  <label htmlFor="rate-per-katha-input" className="block text-xs uppercase tracking-wider font-mono text-[#78716C]">
                    Optional: Indicative Rate per Katha (₹)
                  </label>
                  <input
                    id="rate-per-katha-input"
                    type="number"
                    min="0"
                    step="50000"
                    value={ratePerKatha === 0 ? '' : ratePerKatha}
                    onChange={(e) => setRatePerKatha(parseFloat(e.target.value) || 0)}
                    placeholder="e.g. 2500000"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E7E2D8] rounded-xl font-mono text-sm text-[#1C1917] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 placeholder:text-[#A8A29E]"
                  />
                  {ratePerKatha > 0 && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#FEF3C7] to-[#FFFBEB] border border-[#FDE68A] space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-[#92400E] font-mono font-semibold">
                        Estimated Plot Valuation
                      </span>
                      <div className="font-serif text-2xl text-[#B45309] font-bold">
                        ₹ {formatINR(totalEstimatedCost)}
                      </div>
                      <div className="text-[11px] text-[#78350F]">
                        Based on {convertedValues.katha.toFixed(2)} Katha @ ₹ {formatINR(ratePerKatha)}/Katha
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Conversion results side */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E7E2D8]">
                  <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-semibold">
                    Standardized Equivalents
                  </span>
                  <span className="text-xs text-[#78716C] font-mono">
                    Magadh / Bihar Metric
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {(Object.keys(convertedValues) as UnitType[]).map((unit) => (
                    <div
                      key={unit}
                      className={`p-4 rounded-xl border transition-all ${
                        fromUnit === unit
                          ? 'bg-gradient-to-br from-[#FEF3C7] via-[#FFFBEB] to-white border-[#F59E0B] shadow-[0_2px_10px_rgba(245,158,11,0.15)]'
                          : 'bg-[#FAF8F5] border-[#E7E2D8]'
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono">
                        {UNIT_LABELS[unit].name}
                      </span>
                      <div className="font-serif text-2xl text-[#1C1917] font-bold my-1 tabular-nums">
                        {convertedValues[unit] >= 100
                          ? convertedValues[unit].toLocaleString('en-IN', { maximumFractionDigits: 2 })
                          : convertedValues[unit].toLocaleString('en-IN', { maximumFractionDigits: 4 })}
                      </div>
                      <span className="text-[10px] text-[#A8A29E] block leading-tight font-normal">
                        {UNIT_LABELS[unit].regionalNote}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] text-xs text-[#57534E] space-y-1 font-normal">
                  <span className="font-mono text-[#B45309] text-[11px] uppercase tracking-wider font-semibold block">
                    Statutory Diligence Note
                  </span>
                  <p>
                    Standard Bihar revenue conversions treat 1 Katha as 20 Dhur (approx 1,361.25 sq ft). Actual registry and revenue survey demarcations require Khatiyan ledger verification and physical field Amin survey.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Mode 2: Loan / EMI Estimator */}
        {activeMode === 'emi' && (
          <div className="rounded-2xl border border-[#E7E2D8] bg-white p-6 sm:p-10 shadow-[0_15px_40px_rgba(28,25,23,0.06)] space-y-8 animate-in fade-in duration-200">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Sliders side */}
              <div className="md:col-span-6 space-y-6">
                
                {/* Loan Amount */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label htmlFor="loan-amount-slider" className="uppercase tracking-wider text-[#B45309] font-semibold">
                      Principal Loan Amount
                    </label>
                    <span className="text-[#1C1917] font-bold">₹ {formatINR(loanAmount)}</span>
                  </div>
                  <input
                    id="loan-amount-slider"
                    type="range"
                    min="500000"
                    max="15000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-[#E7E2D8] rounded-lg appearance-none cursor-pointer accent-[#B45309]"
                  />
                  <div className="flex justify-between text-[10px] text-[#A8A29E] font-mono">
                    <span>₹ 5 Lakhs</span>
                    <span>₹ 1.5 Crores</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label htmlFor="interest-rate-slider" className="uppercase tracking-wider text-[#B45309] font-semibold">
                      Annual Interest Rate
                    </label>
                    <span className="text-[#1C1917] font-bold">{interestRate} %</span>
                  </div>
                  <input
                    id="interest-rate-slider"
                    type="range"
                    min="6.5"
                    max="14.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-[#E7E2D8] rounded-lg appearance-none cursor-pointer accent-[#B45309]"
                  />
                  <div className="flex justify-between text-[10px] text-[#A8A29E] font-mono">
                    <span>6.5%</span>
                    <span>14.0%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <label htmlFor="tenure-slider" className="uppercase tracking-wider text-[#B45309] font-semibold">
                      Loan Tenure
                    </label>
                    <span className="text-[#1C1917] font-bold">{tenureYears} Years</span>
                  </div>
                  <input
                    id="tenure-slider"
                    type="range"
                    min="3"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-[#E7E2D8] rounded-lg appearance-none cursor-pointer accent-[#B45309]"
                  />
                  <div className="flex justify-between text-[10px] text-[#A8A29E] font-mono">
                    <span>3 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>

              </div>

              {/* Obsidian Gold Summary Card */}
              <div className="md:col-span-6 rounded-2xl bg-[#0C0A09] text-white p-7 sm:p-9 border border-[#F59E0B]/30 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FDE68A] font-mono block mb-1">
                    Estimated Monthly Installment (EMI)
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight">
                    ₹ {formatINR(monthlyEmi)}
                    <span className="text-xs text-stone-400 font-normal ml-2 font-mono">/ month</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block">
                      Total Interest Payable
                    </span>
                    <div className="font-serif text-lg sm:text-xl text-[#FDE68A] font-bold">
                      ₹ {formatINR(totalInterest)}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-mono block">
                      Total Repayment Amount
                    </span>
                    <div className="font-serif text-lg sm:text-xl text-white font-bold">
                      ₹ {formatINR(totalPayment)}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-stone-300">
                  Calculated based on standard reducing balance amortization. Actual lending terms subject to institutional bank appraisals.
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
