"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className=" mx-auto max-w-[800px] px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
      <div className="space-y-6 text-gray-800 text-base bg-white rounded-xl shadow p-6 border border-gray-200">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Econody is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li>Personal identification information (name, email, wallet address, etc.)</li>
            <li>Usage data and analytics</li>
            <li>Uploaded documents and files</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>To provide and maintain our services</li>
            <li>To improve user experience and platform security</li>
            <li>To communicate with you about updates or support</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing & Disclosure</h2>
          <p>
            We do not sell or rent your personal information. We may share data with trusted third parties for service provision, legal compliance, or platform security.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>Access, update, or delete your personal information</li>
            <li>Withdraw consent at any time</li>
            <li>Contact us for privacy-related requests</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p>
            Econody may update this Privacy Policy from time to time. We will notify users of significant changes and update the effective date at the top of this page.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via the support email provided in the footer.
          </p>
        </section>
      </div>
    </div>
  );
}
