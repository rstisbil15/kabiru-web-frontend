"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  TrendingUp,
  FileText,
  Pencil,
  Lightbulb,
  Megaphone,
  BookOpen,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col selection:bg-primary-default selection:text-white">
      {/* ========================================================= */}
      {/* NAVIGATION / NAVBAR                                       */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-aizone.png"
              alt="AIZONE - Learning AI Concepts"
              width={160}
              height={48}
              priority
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#beranda"
              className="text-[#4B5563] hover:text-[#1F3F8A] text-[15px] font-medium transition-colors"
            >
              Beranda
            </a>
            <a
              href="#fitur"
              className="text-[#4B5563] hover:text-[#1F3F8A] text-[15px] font-medium transition-colors"
            >
              Fitur
            </a>
            <a
              href="#tentang-kami"
              className="text-[#4B5563] hover:text-[#1F3F8A] text-[15px] font-medium transition-colors"
            >
              Tentang Kami
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <button
                type="button"
                className="px-5 py-2 text-sm font-semibold rounded-xl border border-neutral-300 text-neutral-700 bg-neutral-50/70 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                Log In
              </button>
            </Link>
            <Link href="/dashboard">
              <button
                type="button"
                className="px-6 py-2 text-sm font-semibold rounded-xl text-white bg-[#277BC0] hover:bg-[#2370AF] shadow-sm transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section id="beranda" className="px-4 sm:px-6 md:px-10 pt-2 pb-16 max-w-[1440px] mx-auto w-full">
        <div className="bg-[#184674] rounded-[48px] md:rounded-[60px] pt-16 sm:pt-20 md:pt-24 px-4 sm:px-8 text-center text-white shadow-xl relative overflow-visible">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-[52px] md:leading-[1.18] font-bold tracking-tight text-white max-w-4xl mx-auto">
            Belajar{" "}
            <span className="text-[#FFB200]">Koding &amp; Kecerdasan</span>
            <br />
            <span className="text-[#FFB200]">Artifisial</span> dengan Cara Baru
            yang
            <br />
            Lebih Seru
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-white/90 text-sm sm:text-base md:text-[17px] max-w-2xl mx-auto leading-relaxed font-normal">
            Kabiru menyajikan pembelajaran koding dan kecerdasan artifisial
            secara bertahap dan terstruktur, dilengkapi latihan interaktif,
            gamifikasi, dan asisten AI yang mendampingi proses belajar di setiap
            tahap.
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <Link href="/dashboard">
              <button
                type="button"
                className="px-8 py-3.5 rounded-2xl font-bold text-white bg-[#FF9F00] hover:bg-[#F59500] shadow-[0_4px_14px_rgba(255,159,0,0.35)] transition-all hover:brightness-105 active:translate-y-0.5 text-base cursor-pointer"
              >
                Coba Sekarang
              </button>
            </Link>
          </div>

          {/* Floating Dashboard Preview Card (Overlapping Bottom) */}
          <div className="mt-7 sm:mt-8 max-w-5xl mx-auto -mb-48 sm:-mb-64 md:-mb-[320px] relative z-20 px-2 sm:px-4">
            <div className="rounded-2xl md:rounded-[32px] shadow-[0_25px_65px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-neutral-100 bg-white">
              <Image
                src="/images/dashboard-preview.png"
                alt="Preview Dashboard Kabiru - AIZONE"
                width={1024}
                height={635}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: MENGAPA KABIRU COCOK                           */}
      {/* ========================================================= */}
      <section id="fitur" className="pt-56 sm:pt-72 md:pt-96 pb-16 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Two-column Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start mb-12 sm:mb-16">
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-neutral-900 leading-[1.2] tracking-tight">
              Mengapa <span className="text-[#277BC0]">Kabiru</span>
              <br />
              Cocok untuk Belajar
              <br />
              Koding dan KA
            </h2>
          </div>
          <div className="md:col-span-5 pt-2">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Kabiru dirancang untuk kamu yang ingin belajar koding dan AI secara
              bertahap, ringan, dan konsisten tanpa harus membaca materi panjang.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-[#ECF3F9] rounded-[28px] md:rounded-[32px] p-8 sm:p-10 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 rounded-full bg-[#277BC0] flex items-center justify-center text-amber-300 shadow-md shadow-[#277BC0]/20">
              <FileText size={26} className="text-amber-300 fill-amber-300/30" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-neutral-900">
              Microlearning yang Ringkas
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Materi disajikan dalam potongan kecil dan fokus, sehingga mudah dipahami dan tidak melelahkan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ECF3F9] rounded-[28px] md:rounded-[32px] p-8 sm:p-10 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 rounded-full bg-[#277BC0] flex items-center justify-center text-amber-300 shadow-md shadow-[#277BC0]/20">
              <Pencil size={24} className="text-amber-300 fill-amber-300/20" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-neutral-900">
              Drill &amp; Practice di Setiap Unit
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Setelah mini teori, kamu langsung mengerjakan latihan untuk memperkuat pemahaman.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ECF3F9] rounded-[28px] md:rounded-[32px] p-8 sm:p-10 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 rounded-full bg-[#277BC0] flex items-center justify-center text-amber-300 shadow-md shadow-[#277BC0]/20">
              <Lightbulb size={26} className="text-amber-300 fill-amber-300/40" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-neutral-900">
              Beragam Tipe Soal Interaktif
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Pilihan ganda, drag &amp; drop, sorting, dan fill in the blank untuk menjaga proses belajar tetap aktif dan tidak membosankan.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#ECF3F9] rounded-[28px] md:rounded-[32px] p-8 sm:p-10 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="w-14 h-14 rounded-full bg-[#277BC0] flex items-center justify-center text-amber-300 shadow-md shadow-[#277BC0]/20">
              <Bot size={26} className="text-amber-300" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-neutral-900">
              Asisten AI Siap Membantu
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Asisten AI membantumu memahami konsep, mencari kesalahan kode, dan memberi saran belajar sesuai kebutuhanmu.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: PENGALAMAN BELAJAR (ZIG-ZAG ROWS)               */}
      {/* ========================================================= */}
      <section id="pengalaman-belajar" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-neutral-900 leading-tight">
            <span className="text-[#277BC0]">Pengalaman Belajar</span> Lebih
            Efektif,
            <br />
            Terarah, dan Menyenangkan
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Kabiru menggabungkan pembelajaran terstruktur, gamifikasi, dan
            kecerdasan artifisial untuk menciptakan pengalaman belajar yang
            relevan dengan kebutuhan masa kini.
          </p>
        </div>

        <div className="flex flex-col gap-24 sm:gap-32">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 relative">
              {/* Yellow decorative blob */}
              <div className="absolute -bottom-6 -left-6 w-4/5 h-4/5 bg-[#FEF3C7] rounded-[40%_60%_60%_40%/50%] -z-10" />
              <Image
                src="/images/feature-microlearning.png"
                alt="Belajar Sedikit Demi Sedikit Dengan Fokus Yang Jelas"
                width={601}
                height={552}
                className="w-full h-auto object-contain drop-shadow-xl relative z-10"
              />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-neutral-900 leading-snug">
                Belajar Sedikit Demi Sedikit Dengan Fokus Yang Jelas.
              </h3>
              <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                Setiap materi dipecah menjadi unit kecil berisi inti konsep yang
                langsung diikuti latihan, sehingga belajar terasa ringan, tidak
                melelahkan, dan mudah dilakukan setiap hari.
              </p>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-neutral-900 leading-snug">
                Belajar Aktif Lewat Praktik, Bukan Hanya Membaca
              </h3>
              <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                Kamu akan mengerjakan berbagai tipe soal seperti pilihan ganda,
                drag &amp; drop, sorting, dan isian untuk memperkuat pemahaman di
                setiap unit.
              </p>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 relative">
              {/* Yellow decorative blob */}
              <div className="absolute -bottom-6 -right-6 w-4/5 h-4/5 bg-[#FEF3C7] rounded-[60%_40%_40%_60%/50%] -z-10" />
              <Image
                src="/images/feature-practice.png"
                alt="Belajar Aktif Lewat Praktik, Bukan Hanya Membaca"
                width={679}
                height={527}
                className="w-full h-auto object-contain drop-shadow-xl relative z-10"
              />
            </div>
          </div>

          {/* Row 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7 relative">
              {/* Yellow decorative blob */}
              <div className="absolute -bottom-6 -left-6 w-4/5 h-4/5 bg-[#FEF3C7] rounded-[40%_60%_60%_40%/50%] -z-10" />
              <Image
                src="/images/feature-gamification.png"
                alt="Gamifikasi Yang Membangun Kebiasaan Belajar"
                width={614}
                height={488}
                className="w-full h-auto object-contain drop-shadow-xl relative z-10"
              />
            </div>
            <div className="md:col-span-5">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-neutral-900 leading-snug">
                Gamifikasi Yang Membangun Kebiasaan Belajar
              </h3>
              <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                Kabiru menggunakan EXP, level, streak, tantangan, dan
                leaderboard untuk membuat proses belajar lebih seru sekaligus
                mendorong konsistensi. Setiap latihan yang kamu selesaikan
                langsung tercatat sebagai progres.
              </p>
            </div>
          </div>

          {/* Row 4: Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-neutral-900 leading-snug">
                Pendamping Pintar Selama Proses Belajar
              </h3>
              <p className="mt-5 text-neutral-600 text-sm sm:text-base leading-relaxed">
                Kamu bisa langsung bertanya ke asisten AI saat mengerjakan
                soal. Setelah sesi latihan, asisten AI memberikan ringkasan
                hasil, menunjukkan kesalahan, dan bagian yang masih perlu
                ditingkatkan.
              </p>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 relative">
              {/* Yellow decorative blob */}
              <div className="absolute -bottom-6 -right-6 w-4/5 h-4/5 bg-[#FEF3C7] rounded-[60%_40%_40%_60%/50%] -z-10" />
              <Image
                src="/images/feature-ai-assistant.png"
                alt="Pendamping Pintar Selama Proses Belajar"
                width={611}
                height={466}
                className="w-full h-auto object-contain drop-shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: STRUKTUR PEMBELAJARAN (DARK BLUE CONTAINER)   */}
      {/* ========================================================= */}
      <section id="struktur-kurikulum" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-[#1B4D8E] text-white rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle corner glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl pointer-events-none" />

          {/* Sub-section A: Struktur Kurikulum */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left Column: Heading & Steps */}
            <div className="md:col-span-5">
              <span className="text-[#FFB200] text-sm font-semibold">
                Struktur Pembelajaran
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white leading-tight mt-3">
                Struktur Pembelajaran yang Membimbing Proses Belajar
              </h2>
              <p className="mt-5 text-white/75 text-sm sm:text-base leading-relaxed">
                Pembelajaran disusun dalam struktur yang jelas dan beberapa tingkat agar siswa dapat belajar secara fokus tanpa merasa kewalahan.
              </p>

              {/* Numbered Steps List */}
              <div className="mt-8 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF9F00] text-white font-extrabold flex items-center justify-center shrink-0 text-sm shadow-md">
                    1
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-0.5">
                    Modul sebagai gambaran umum topik pembelajaran.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF9F00] text-white font-extrabold flex items-center justify-center shrink-0 text-sm shadow-md">
                    2
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-0.5">
                    Lesson sebagai penjabaran materi yang dipelajari secara berurutan.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF9F00] text-white font-extrabold flex items-center justify-center shrink-0 text-sm shadow-md">
                    3
                  </div>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-0.5">
                    Stage sebagai tahapan microlearning berisi materi singkat dan latihan.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Screenshot Eksplorasi/Modul */}
            <div className="md:col-span-7">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <Image
                  src="/images/feature-eksplorasi.png"
                  alt="Halaman Eksplorasi Modul Kabiru"
                  width={560}
                  height={560}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Sub-section B: Apa yang Bisa Dipelajari di Kabiru? */}
          <div className="mt-16 sm:mt-24 pt-6">
            <h3 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white mb-10 leading-[1.2] tracking-tight">
              Apa yang Bisa
              <br />
              di Pelajari di Kabiru?
            </h3>

            {/* 6 Topic Pills */}
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                {[
                  "Berpikir Komputasional",
                  "Literasi Digital",
                  "Algoritma Pemrograman",
                ].map((topic) => (
                  <div
                    key={topic}
                    className="bg-[#214168] hover:bg-[#274c78] rounded-[36px] sm:rounded-full py-5 px-6 sm:px-8 text-center text-sm sm:text-base font-normal text-white/95 transition-all duration-200 cursor-pointer flex items-center justify-center min-h-[72px]"
                  >
                    {topic}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                {[
                  "Analisis Data",
                  "Literasi dan Etika Kecerdasan Artifisial",
                  "Pemanfaatan dan Pengembangan Kecerdasan Artifisial",
                ].map((topic) => (
                  <div
                    key={topic}
                    className="bg-[#214168] hover:bg-[#274c78] rounded-[36px] sm:rounded-full py-5 px-6 sm:px-8 text-center text-xs sm:text-[14px] md:text-[15px] font-normal text-white/95 transition-all duration-200 cursor-pointer flex items-center justify-center min-h-[72px] leading-snug"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: APA YANG AKAN KAMU DAPATKAN?                    */}
      {/* ========================================================= */}
      <section id="keuntungan" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Centered Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-neutral-900 leading-tight">
            Apa yang Akan Kamu
            <br />
            Dapatkan?
          </h2>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Progres Terukur */}
          <div className="bg-[#FEF3C7] rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#FDE047] flex items-center justify-center text-[#EAB308] shadow-sm mb-8">
                <TrendingUp size={26} className="text-[#CA8A04]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-neutral-900 leading-snug">
                Progres
                <br />
                Terukur
              </h3>
              <p className="mt-5 text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                Pantau perkembangan belajarmu melalui level, statistik latihan, dan pencapaian.
              </p>
            </div>
          </div>

          {/* Card 2: Feedback & Rekomendasi */}
          <div className="bg-[#FEF3C7] rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#FDE047] flex items-center justify-center text-[#0284C7] shadow-sm mb-8">
                <Megaphone size={26} className="text-[#0284C7]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-neutral-900 leading-snug">
                Feedback &amp;
                <br />
                Rekomendasi
              </h3>
              <p className="mt-5 text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                Dapatkan koreksi, penjelasan instan, dan saran materi dari asisten AI.
              </p>
            </div>
          </div>

          {/* Card 3: Konsistensi Belajar */}
          <div className="bg-[#FEF3C7] rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#FDE047] flex items-center justify-center text-[#38BDF8] shadow-sm mb-8">
                <BookOpen size={26} className="text-[#0284C7]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-neutral-900 leading-snug">
                Konsistensi
                <br />
                Belajar
              </h3>
              <p className="mt-5 text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
                Kabiru membantumu membangun kebiasaan belajar yang rutin dan berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: CALL TO ACTION (CTA BANNER)                     */}
      {/* ========================================================= */}
      <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-[#1E5292] rounded-[32px] md:rounded-[40px] px-8 py-14 sm:py-16 md:py-20 text-center text-white shadow-xl relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold max-w-3xl mx-auto leading-tight text-white">
            Mulai Perjalanan Koding &amp;
            <br />
            Kecerdasan Artifisial Bersama Kabiru
          </h2>

          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Belajar lebih terarah, lebih seru, dan didukung asisten AI. Semua dalam satu platform.
          </p>

          <div className="mt-8 flex justify-center">
            <Link href="/dashboard">
              <button
                type="button"
                className="bg-[#FF9F00] hover:bg-[#e68e00] text-white font-semibold px-8 py-3 rounded-xl text-sm sm:text-base shadow-md transition-all duration-200 cursor-pointer"
              >
                Coba Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: FOOTER                                         */}
      {/* ========================================================= */}
      <footer className="bg-[#031833] text-neutral-300 pt-16 pb-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
            {/* Col 1: Brand & Description */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <Link href="/" className="inline-block bg-white rounded-xl px-3 py-2 w-fit shadow-md">
                <Image
                  src="/images/logo-aizone.png"
                  alt="AIZONE - Learning AI Concepts"
                  width={160}
                  height={48}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-xs sm:text-[13px] text-neutral-300/80 leading-relaxed max-w-sm mt-1">
                Platform pembelajaran berbasis web yang membantu siswa mempelajari koding dan kecerdasan artifisial secara bertahap dan terstruktur. Materi disusun berdasarkan kurikulum pembelajaran koding dan AI, dilengkapi latihan interaktif untuk mendukung pemahaman konsep.
              </p>
            </div>

            {/* Col 2: Navigasi */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <span className="text-sm font-semibold text-white">
                Navigasi
              </span>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-neutral-300/80">
                <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#struktur-kurikulum" className="hover:text-white transition-colors">Kurikulum</a></li>
                <li><a href="#fitur" className="hover:text-white transition-colors">Fitur</a></li>
                <li><a href="#mengapa-kabiru" className="hover:text-white transition-colors">Tentang Kami</a></li>
              </ul>
            </div>

            {/* Col 3: Fitur */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <span className="text-sm font-semibold text-white">
                Fitur
              </span>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-neutral-300/80">
                <li><a href="#struktur-kurikulum" className="hover:text-white transition-colors">Pembelajaran Bertahap</a></li>
                <li><a href="#pengalaman-belajar" className="hover:text-white transition-colors">Latihan Soal Interaktif</a></li>
                <li><a href="#pengalaman-belajar" className="hover:text-white transition-colors">Gamifikasi</a></li>
                <li><a href="#pengalaman-belajar" className="hover:text-white transition-colors">Asisten AI</a></li>
              </ul>
            </div>

            {/* Col 4: Informasi */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <span className="text-sm font-semibold text-white">
                Informasi
              </span>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-neutral-300/80">
                <li><span className="hover:text-white transition-colors cursor-pointer">Pusat Bantuan</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Syarat &amp; Ketentuan</span></li>
              </ul>
            </div>

            {/* Col 5: Sosial */}
            <div className="md:col-span-1 flex flex-col gap-3">
              <span className="text-sm font-semibold text-white">
                Sosial
              </span>
              <div className="flex items-center gap-3 text-white">
                {/* Facebook icon */}
                <a href="#" aria-label="Facebook" className="hover:text-[#FFB200] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                  </svg>
                </a>
                {/* Instagram icon */}
                <a href="#" aria-label="Instagram" className="hover:text-[#FFB200] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* LinkedIn icon */}
                <a href="#" aria-label="LinkedIn" className="hover:text-[#FFB200] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* X (formerly Twitter) icon */}
                <a href="#" aria-label="X (Twitter)" className="hover:text-[#FFB200] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>© Copyright KABIRU 2026. All Rights Reserved</p>
            <p>Disusun berdasarkan Kurikulum Koding dan Kecerdasan Artifisial</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
