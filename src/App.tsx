import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLayout from '@/templates/PageLayout/PageLayout';
import Dashboard from '@/templates/Dashboard/Dashboard';
import TestFlow from '@/templates/TestFlow/TestFlow';
import TestResults from '@/templates/TestResults/TestResults';
import Testing from '@/templates/Testing/Testing';
import Practice from '@/templates/Practice/Practice';
import History from '@/templates/History/History';
import PracticeSection from '@/templates/PracticeSection/PracticeSection';
import Profile from '@/templates/Profile/Profile';
import Login from '@/templates/Login/Login';
import PracticeHistory from '@/templates/PracticeHistory/PracticeHistory';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout title="Dashboard" actions>
            <Dashboard />
          </PageLayout>
        }
      />
      <Route
        path="/practice"
        element={
          <PageLayout title="Practice">
            <Practice />
          </PageLayout>
        }
      />
      <Route
        path="/practice/:section"
        element={
          <PageLayout title="Practice" backActions>
            <PracticeSection />
          </PageLayout>
        }
      />
      <Route
        path="/practice/:section/practice-history"
        element={
          <PageLayout title="Practice" backActions>
            <PracticeHistory />
          </PageLayout>
        }
      />
      <Route
        path="/history"
        element={
          <PageLayout title="History">
            <History />
          </PageLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <PageLayout title="Profile">
            <Profile />
          </PageLayout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<TestFlow />} />
      <Route path="/components" element={<Testing />} />
      <Route path="/results" element={<TestResults />} />
    </Routes>
  );
};

export default App;
