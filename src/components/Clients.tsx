import React from 'react';

export const Clients: React.FC = () => {
  const clientsList = [
    { name: "Bal Raksha Bharat", desc: "Save the Children India" },
    { name: "ChildFund India", desc: "Child Rights & NGO" },
    { name: "Akhand Jyoti", desc: "Eye Hospital" },
    { name: "AT&T", desc: "Global Telecom" },
    { name: "T-Mobile", desc: "Wireless Network" },
    { name: "Sprint", desc: "Assurance Wireless" },
    { name: "BT", desc: "British Telecom" },
    { name: "EE", desc: "Mobile & Broadband" },
    { name: "Homiee & Ginger", desc: "FMCG Brand" },
    { name: "IndiaHolidayClub.com", desc: "Travel & Leisure" },
    { name: "YES BANK", desc: "Financial Services" },
    { name: "Shell Energy", desc: "Clean Power" },
    { name: "British Gas", desc: "Energy & Utilities" },
    { name: "SFE Energy", desc: "Utility Services" },
    { name: "Hello Fresh", desc: "Global Meal Kits" },
    { name: "Milk & More", desc: "Fresh Produce" },
    { name: "British Red Cross", desc: "Humanitarian" },
    { name: "Plan International", desc: "Children's Rights" },
    { name: "Médecins Sans Frontières", desc: "Doctors Without Borders" }
  ];

  return (
    <section id="clients" className="py-24 bg-white border-b border-slate-200 text-center scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-black text-[#0b192c] tracking-tight uppercase mb-14">
          CLIENTS
        </h2>

        {/* Client Logos / Badges Grid matching PDF logo wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {clientsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center hover:bg-white hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-sm sm:text-base font-extrabold text-[#0b192c] group-hover:text-[#008767] transition-colors">
                {item.name}
              </span>
              <span className="text-[11px] text-slate-500 mt-1 font-medium">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
