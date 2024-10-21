import React, { useState } from 'react';
import './TabComponent.css';
import About from './About'; // Contentをインポート
import Development from './Development';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (e, tab) => {
    e.preventDefault(); // デフォルトの挙動を防ぐ
    setActiveTab(tab);
  };

  return (
    <div className="TabComponent">
      <div className="tabs">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={(e) => handleTabClick(e, 'tab1')}
        >
          自己紹介
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={(e) => handleTabClick(e, 'tab2')}
        >
          開発
        </button>
      </div>

      <div className="content">
        {activeTab === 'tab1' && <About />} {/* タブ1でContentを表示 */}
        {activeTab === 'tab2' && <Development />}
      </div>
    </div>
  );
}

export default TabComponent;
