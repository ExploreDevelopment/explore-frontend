import React, { useState } from 'react';

import AppLogo from '@/components/AppLogo/AppLogo';
import TestFlowStart from './components/TestFlowStart';
import TestFlowQuestions from './components/TestFlowQuestions';
import AppProgress from '@/components/AppProgress/AppProgress';

const TestFlow: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStartTest = (): void => {
    setIsStarted(true);
  };

  const handleNextStep = (): void => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {isStarted && (
        <div className="fixed inset-x-0 top-0 z-50 h-1">
          <AppProgress value={((activeStep + 1) / 5) * 100} className="h-full rounded-none" />
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-[700px] space-y-8 rounded-xl bg-white p-8 shadow-sm">
          {isStarted ? (
            <TestFlowQuestions activeStep={activeStep} onNextStep={handleNextStep} />
          ) : (
            <TestFlowStart onStart={handleStartTest} />
          )}
        </div>
      </div>

      <footer className="h-16">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-center gap-2 px-6">
          Made by <AppLogo />
        </div>
      </footer>
    </div>
  );
};

export default TestFlow;
