import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FilterOption = {
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

interface FilterDropdownProps {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDropdown({ options, value, onChange }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const selected = options.find(opt => opt.label === value);

  const filtered = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative text-gray-800 w-full lg:w-64">
      <button
        className="w-full flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm text-left"
        onClick={() => setOpen(v => !v)}
        type="button"
      >
        <span className="flex items-center gap-2">
          {selected?.icon && <selected.icon className="w-4 h-4" />}
          {selected?.label || "Select"}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg">
          <input
            className="w-full px-3 py-2 text-gray-800 border-b border-gray-100 outline-none text-sm"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
          />
          <div className="max-h-60 overflow-y-auto">
            {filtered.map(opt => (
              <button
                key={opt.label}
                className={`flex items-center text-gray-800 gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 ${
                  value === opt.label ? "bg-gray-100 font-semibold" : ""
                }`}
                onClick={() => {
                  onChange(opt.label);
                  setOpen(false);
                  setSearch("");
                }}
                type="button"
              >
                {opt.icon && <opt.icon className="w-4 h-4" />}
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}