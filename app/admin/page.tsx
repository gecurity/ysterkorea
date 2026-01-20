"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LeadDashboardTable from "./components/LeadDashboardTable";
import CaseStudyManager from "./components/CaseStudyManager";
import SolutionManager from "./components/SolutionManager";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"leads" | "cases" | "solutions">("leads");
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.replace("/admin/login");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">관리자 대시보드</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      {/* 탭 네비게이션 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("leads")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "leads"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              리드 관리
            </button>
            <button
              onClick={() => setActiveTab("cases")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "cases"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              프로젝트 사례 관리
            </button>
            <button
              onClick={() => setActiveTab("solutions")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "solutions"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              제품 솔루션 관리
            </button>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "leads" ? (
          <LeadDashboardTable />
        ) : activeTab === "cases" ? (
          <CaseStudyManager />
        ) : (
          <SolutionManager />
        )}
      </div>
    </main>
  );
}
