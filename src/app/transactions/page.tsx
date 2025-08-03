"use client";
import React, { useState } from 'react';
import {page} from "@/components/cls";

interface Transaction {
  asset: string;
  amount: string;
  value: string;
  date: string;
  nature: string;
}

const transactions: Transaction[] = [
  { asset: "GGT", amount: "123", value: "$12.2", date: "July 23, 2025", nature: "Buy" },
  { asset: "HGST", amount: "123", value: "$12.2", date: "July 23, 2025", nature: "Sell" },
];

export default function TransactionsHistoryUI() {
  const [search, setSearch] = useState("");

  // Filter transactions by search
  const filteredTransactions = transactions.filter((tx) => {
    const q = search.toLowerCase();
    return (
      tx.asset.toLowerCase().includes(q) ||
      tx.amount.toLowerCase().includes(q) ||
      tx.value.toLowerCase().includes(q) ||
      tx.date.toLowerCase().includes(q) ||
      tx.nature.toLowerCase().includes(q)
    );
  });

  return (
    <div className={page}>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl text-[#2f5597] Font2 pb-5 font-bold">Transactions</h1>
        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
          <div className="flex-1 flex items-center bg-gray-100 rounded-xl px-4 py-2 border border-gray-200">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            <input
              type="text"
              placeholder="Search transactions"
              className="bg-transparent outline-none w-full text-base text-gray-700"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <button
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-all"
            onClick={() => alert('Filter functionality coming soon!')}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M6 10h12M9 15h6" /></svg>
            Filters
          </button>
        </div>
        {/* Transaction Count & Sorting */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold text-gray-800">{filteredTransactions.length} Transactions</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-base">Hotness</span>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>
      {/* Transaction List */}
      <div className="w-full mt-4 flex flex-col divide-y divide-gray-200 bg-white">
        {filteredTransactions.length === 0 && (
          <div className="text-center text-gray-400 py-10">No transactions found.</div>
        )}
        {filteredTransactions.map((tx, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row items-center py-5 gap-4">
            <div className="flex-1 min-w-0 w-full">
              <div className="font-bold text-lg text-gray-900 leading-tight">{tx.asset}</div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mt-1">
                <span>Amount: <span className="font-semibold text-gray-900">{tx.amount}</span></span>
                <span className="text-gray-400">·</span>
                <span>Value: <span className="font-semibold text-[#2f5597]">{tx.value}</span></span>
                <span className="text-gray-400">·</span>
                <span>Date: {tx.date}</span>
                <span className="text-gray-400">·</span>
                <span>
                  Nature: <span className={`font-semibold ${tx.nature === 'Buy' ? 'text-green-600' : 'text-red-500'}`}>{tx.nature}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
