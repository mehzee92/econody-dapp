"use client";
import React from "react";

export default function TermsOfUsePage() {
  return (
    <div className=" mx-auto max-w-[800px] px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Terms of Use</h1>
      <div className="space-y-6 text-gray-800 text-base bg-white rounded-xl shadow p-6 border border-gray-200">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Econody, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree, you are prohibited from using or accessing this site.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Econody’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc pl-6">
            <li>Do not misuse the platform or attempt unauthorized access.</li>
            <li>Provide accurate information when registering or using services.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this site are the property of Econody or its licensors. You may not use, reproduce, or distribute any content without explicit permission.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
          <p>
            The materials on Econody’s website are provided “as is”. Econody makes no warranties, expressed or implied, and hereby disclaims all other warranties.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p>
            In no event shall Econody or its suppliers be liable for any damages arising out of the use or inability to use the materials on Econody’s website.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Modifications</h2>
          <p>
            Econody may revise these Terms of Use at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Use.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p>
            Any claim relating to Econody’s website shall be governed by the laws of the platform’s jurisdiction without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </div>
  );
}
