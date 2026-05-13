import { DemoHeroSection } from '../components/DemoHeroSection';
import { DemoScreenshotSection } from '../components/DemoScreenshotSection';
import { DemoTimelineSection } from '../components/DemoTimelineSection';
import { DemoFocusMetricsSection } from '../components/DemoFocusMetricsSection';
import { DemoAIClassificationSection } from '../components/DemoAIClassificationSection';
import { DemoIncidentTraceSection } from '../components/DemoIncidentTraceSection';
import { DemoAwarenessReminderSection } from '../components/DemoAwarenessReminderSection';
import { DemoManagerReportSection } from '../components/DemoManagerReportSection';
import { DemoExecutiveReportSection } from '../components/DemoExecutiveReportSection';
import { DemoCTASection } from '../components/DemoCTASection';
import { Zap, Cpu, Sparkles, Star, BrainCircuit, CircuitBoard } from 'lucide-react';

export function DemoPage() {
  return (
    <div className="relative">
      {/* AI Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Lightning icons */}
        <Zap 
          className="absolute top-[5%] left-[10%] w-16 h-16 text-[#1e4bbf]/10 animate-pulse" 
          style={{ animationDuration: '3s' }} 
        />
        <Zap 
          className="absolute top-[40%] right-[8%] w-20 h-20 text-[#1e4bbf]/15 animate-pulse" 
          style={{ animationDuration: '4s', animationDelay: '1s' }} 
        />
        <Zap 
          className="absolute top-[75%] left-[15%] w-18 h-18 text-[#1e4bbf]/12 animate-pulse" 
          style={{ animationDuration: '3.5s', animationDelay: '2s' }} 
        />
        
        {/* Circuit/Chip icons */}
        <Cpu 
          className="absolute top-[15%] right-[18%] w-20 h-20 text-[#1e4bbf]/10 animate-pulse" 
          style={{ animationDuration: '5s', animationDelay: '0.5s' }} 
        />
        <CircuitBoard 
          className="absolute top-[55%] left-[8%] w-24 h-24 text-indigo-400/8 animate-pulse" 
          style={{ animationDuration: '6s' }} 
        />
        <Cpu 
          className="absolute top-[85%] right-[20%] w-22 h-22 text-indigo-400/10 animate-pulse" 
          style={{ animationDuration: '5.5s', animationDelay: '1.5s' }} 
        />
        
        {/* Stars */}
        <Star 
          className="absolute top-[10%] right-[30%] w-12 h-12 text-[#1e4bbf]/15 animate-pulse" 
          style={{ animationDuration: '3.5s', animationDelay: '2s' }} 
        />
        <Star 
          className="absolute top-[30%] left-[25%] w-14 h-14 text-indigo-400/10 animate-pulse" 
          style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} 
        />
        <Star 
          className="absolute top-[65%] right-[25%] w-13 h-13 text-[#1e4bbf]/12 animate-pulse" 
          style={{ animationDuration: '4s', animationDelay: '0.8s' }} 
        />
        
        {/* Sparkles */}
        <Sparkles 
          className="absolute top-[25%] left-[5%] w-18 h-18 text-[#1e4bbf]/12 animate-pulse" 
          style={{ animationDuration: '4s', animationDelay: '0.8s' }} 
        />
        <Sparkles 
          className="absolute top-[50%] right-[12%] w-16 h-16 text-indigo-400/10 animate-pulse" 
          style={{ animationDuration: '5s', animationDelay: '2.5s' }} 
        />
        <Sparkles 
          className="absolute top-[90%] left-[30%] w-17 h-17 text-[#1e4bbf]/11 animate-pulse" 
          style={{ animationDuration: '4.5s', animationDelay: '1s' }} 
        />
        
        {/* Brain Circuit */}
        <BrainCircuit 
          className="absolute top-[20%] left-[22%] w-24 h-24 text-[#1e4bbf]/8 animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '1s' }} 
        />
        <BrainCircuit 
          className="absolute top-[70%] right-[15%] w-26 h-26 text-indigo-400/9 animate-pulse" 
          style={{ animationDuration: '6.5s', animationDelay: '2s' }} 
        />
      </div>

      {/* Sections */}
      <DemoHeroSection />
      <div id="minh-bach" className="scroll-mt-20">
        <DemoScreenshotSection />
        <DemoTimelineSection />
        <DemoFocusMetricsSection />
      </div>
      <div id="ai-bao-mat" className="scroll-mt-20">
        <DemoAIClassificationSection />
        <DemoAwarenessReminderSection />
      </div>
      <div id="truy-vet" className="scroll-mt-20">
        <DemoIncidentTraceSection />
      </div>
      <div id="bao-cao-da-cap" className="scroll-mt-20">
        <DemoManagerReportSection />
        <DemoExecutiveReportSection />
      </div>
      <DemoCTASection />
    </div>
  );
}