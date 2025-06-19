import React from 'react';
import DashboardHeader from './_components/DashboardHeader';
import UserStoryList from './_components/UserStoryList';

function Dashboard() {
  return (
    <div className='p-10 md:px-20 lf:px-40'>
      <DashboardHeader />
      <UserStoryList />
    </div>
  );
};

export default Dashboard;