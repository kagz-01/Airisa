import { Head } from "$fresh/runtime.ts";

export default function Team() {
  return (
    <div class="bg-paper min-h-screen">
      <Head>
        <title>Our Team | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Meet the leadership team driving inclusive, sustainable mobility and climate action across Africa."
        />
      </Head>

      {/* Hero Section */}
      <section class="relative py-16 md:py-24 bg-emerald-950 flex flex-col justify-center overflow-hidden">
        {/* Decorative Background Elements */}
        <div class="absolute -top-32 -right-32 w-2/3 h-2/3 max-w-[800px] border-[1px] border-emerald-800 rounded-full animate-spin-slow opacity-30 blur-[1px]" />
        <div class="absolute bottom-10 -left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-[100px]" />
        
        <div class="container mx-auto px-6 relative z-10 text-center">
            <h1 class="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mix-blend-difference mb-8">
              Our <br />
              <span class="text-emerald-400 italic font-medium tracking-tight">Team</span>
            </h1>
        </div>
      </section>

      {/* Evelyn Profile - Founder Spotlight */}
      <section class="py-16 md:py-20 bg-white dark:bg-emerald-900/10 border-b border-emerald-50 dark:border-emerald-900/50 transition-colors duration-500">
         <div class="container mx-auto px-6 max-w-7xl">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center md:items-start">
               {/* Left: Sticky Image & Quick Facts */}
               <div class="w-full lg:w-[45%] lg:sticky lg:top-32 shrink-0">
                  <div class="relative group">
                     {/* Image Wrapper with Organic Radius & Shadow */}
                     <div class="aspect-[4/5] overflow-hidden organic-radius bg-slate-100 dark:bg-emerald-900/40 shadow-[0_20px_50px_rgba(2,44,34,0.15)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(2,44,34,0.2)]">
                        <img 
                          src="/images/evelyn.png" 
                          alt="Evelyn Gathua" 
                          class="w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000"
                        />
                     </div>
                  </div>
                  
                  {/* Contact / Social Quick Links */}
                  <div class="mt-12 md:mt-16 flex items-center justify-center lg:justify-start gap-6 border-t border-slate-100 dark:border-emerald-800/50 pt-8 transition-colors">
                     <div class="flex flex-col gap-1">
                       <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-emerald-500/80 transition-colors">CONNECT</span>
                     </div>
                     <a href="https://linkedin.com/in/evelyn-gathua-a40887112" target="_blank" class="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-800/40 hover:bg-emerald-950 dark:hover:bg-emerald-600 text-emerald-800 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     </a>
                     <a href="mailto:e.gathua@airisagreenconsulting.com" class="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-800/40 hover:bg-emerald-950 dark:hover:bg-emerald-600 text-emerald-800 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                     </a>
                  </div>
               </div>
               
               {/* Right: Rich Narrative Text */}
               <div class="w-full lg:w-[55%] flex flex-col justify-center font-sans mt-8 lg:mt-0 text-left">
                  <h2 class="text-5xl md:text-7xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-12 leading-none transition-colors">
                     Evelyn <br />
                     <span class="text-slate-300 dark:text-emerald-800/80">Gathua</span>
                  </h2>
                  
                  {/* Editorial Text Blocks using client verbatim */}
                  <div class="space-y-8 text-lg font-medium text-slate-700 dark:text-emerald-50/80 leading-relaxed border-l-4 border-emerald-100 dark:border-emerald-800 pl-6 md:pl-10 relative transition-colors">
                     <p>
                        Evelyn Gathua is an environmental and sustainable mobility professional working at the intersection of sustainable mobility, gender and social inclusion, and climate-aligned transport systems across Africa.
                     </p>
                     
                     <p>
                        She is the <span class="font-black text-emerald-950 dark:text-emerald-100 underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors">Founder of Airisa Green Consulting</span>, and serves as Strategy and Sustainability Manager at Sustainable Transport Africa.
                     </p>
                     
                     <p>
                        Evelyn has worked with organizations including the World Resources Institute, the United Nations Environment Programme, and Bolt Operations OU, supporting research, policy development, and the implementation of sustainable transport initiatives.
                     </p>
                     
                     <div class="bg-emerald-50/50 dark:bg-emerald-900/30 p-6 rounded-br-2xl border border-emerald-100/50 dark:border-emerald-700/30 my-10 transition-colors">
                        <p class="text-emerald-900 dark:text-emerald-100 leading-relaxed font-bold transition-colors">
                          She is a 2023 Fellow of the Rethinking Transport Lab by GIZ, a member of the Global Alliance for Feminist Transport, a member of the Kenya Bureau of Standards (KEBS) Electric Mobility Technical Committee, a registered NEMA EIA/EA Associate Expert, and a member of the International Association for Impact Assessment.
                        </p>
                     </div>
                     
                     <p class="text-xl md:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight leading-snug transition-colors">
                        "She was also recognized among the Most Influential Women in Mobility 2025 by Vulog."
                     </p>
                  </div>
                  

               </div>
            </div>
         </div>
      </section>


      {/* Anthony Profile - Founder Spotlight (Flipped Layout) */}
      <section class="py-16 md:py-20 bg-zinc-50 dark:bg-emerald-950 border-b border-emerald-50 dark:border-emerald-900/50 transition-colors duration-500">
         <div class="container mx-auto px-6 max-w-7xl">
            <div class="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center md:items-start text-left">
               {/* Left (visually Right): Sticky Image & Quick Facts */}
               <div class="w-full lg:w-[45%] lg:sticky lg:top-32 shrink-0">
                  <div class="relative group">
                     {/* Image Wrapper */}
                     <div class="aspect-[4/5] overflow-hidden organic-radius bg-slate-200 dark:bg-emerald-900/40 shadow-[0_20px_50px_rgba(39,39,42,0.15)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(39,39,42,0.2)]">
                        <img 
                          src="/images/antony.png" 
                          alt="Anthony Ndolo" 
                          class="w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000 object-top"
                        />
                     </div>
                  </div>
                  
                  {/* Contact / Social Quick Links */}
                  <div class="mt-10 flex items-center justify-center lg:justify-end gap-4 border-t border-slate-200 dark:border-emerald-800/50 pt-6 transition-colors">
                     {/* Email */}
                     <a href="mailto:a.ndolo@airisagreenconsulting.com" title="Email Anthony" class="w-10 h-10 rounded-full bg-zinc-200 dark:bg-emerald-800/40 hover:bg-emerald-950 dark:hover:bg-emerald-600 text-emerald-900 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                     </a>
                     {/* LinkedIn */}
                     <a href="https://www.linkedin.com/in/anthony-ndolo-58151b87?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" title="Anthony's LinkedIn" class="w-10 h-10 rounded-full bg-zinc-200 dark:bg-emerald-800/40 hover:bg-emerald-950 dark:hover:bg-emerald-600 text-emerald-900 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     </a>
                     <div class="flex flex-col gap-1 text-right">
                       <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">CONNECT</span>
                     </div>
                  </div>
               </div>
               
               {/* Right (visually Left): Rich Narrative Text */}
               <div class="w-full lg:w-[55%] flex flex-col justify-center font-sans mt-8 lg:mt-0 text-left">
                  <h2 class="text-5xl md:text-7xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-12 leading-none transition-colors">
                     Anthony <br />
                     <span class="text-slate-300 dark:text-emerald-800/80">Ndolo</span>
                  </h2>
                  
                  {/* Editorial Text Blocks using client verbatim */}
                  <div class="space-y-8 text-lg font-medium text-slate-700 dark:text-emerald-50/80 leading-relaxed border-r-4 lg:border-r-0 lg:border-l-4 border-amber-200 dark:border-amber-900/40 pr-6 lg:pr-0 lg:pl-10 relative transition-colors">
                     <p>
                        Anthony is a business systems architect and operator with experience spanning across health-tech, logistics-tech, programme design, and organisational scaling in emerging markets. 
                     </p>
                     
                     <p>
                        He founded and led <span class="font-black text-emerald-950 dark:text-emerald-100 border-b-2 border-amber-400 dark:border-amber-500 transition-colors">Smatbeba</span>, a digital cargo transportation marketplace operating across East Africa, and later served as Chief Operating Officer at EcoWorld Recycling, where he led strategic operations and managed a USAID-supported plastic circular-economy initiative.
                     </p>
                     
                     <p>
                        He has also worked as a Programs Manager at an ESO, designing and delivering capacity-building programmes for entrepreneurs. 
                     </p>
                     
                     <div class="bg-amber-50/80 dark:bg-amber-900/20 p-6 rounded-bl-2xl lg:rounded-bl-none lg:rounded-br-2xl border border-amber-100/50 dark:border-amber-800/30 my-10 transition-colors">
                        <p class="text-amber-950 dark:text-amber-100 leading-relaxed font-bold transition-colors">
                           A 2025 Dream VC Fellow, Anthony focuses on building markets by aligning incentives, systems, and execution to ensure value is created and grown sustainably.
                        </p>
                     </div>
                  </div>
                  

               </div>
            </div>
         </div>
      </section>

      {/* CTA Footer Section */}
      <section class="py-16 md:py-20 bg-emerald-950 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div class="container mx-auto px-6 relative z-10 max-w-4xl">
            <h3 class="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 shadow-sm">
              <span class="text-amber-400 italic">Catalyzing</span> Action.
            </h3>
            <p class="text-emerald-50/70 text-lg md:text-xl font-medium leading-relaxed mb-12">
              Ready to explore a partnership or strategic engagement? 
              Get in touch with the leadership team to discuss your next big mobility or sustainability initiative.
            </p>
            <a
              href="/partner"
              class="inline-block px-10 py-5 bg-amber-400 text-emerald-950 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Start the Conversation →
            </a>
        </div>
      </section>
    </div>
  );
}
