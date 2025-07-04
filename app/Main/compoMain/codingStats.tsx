import { Stats } from 'node:fs'; // This import seems unused and can likely be removed.
import React, { useState, useEffect } from 'react';

// Tailwind CSS is assumed to be available.
// No need to import 'node:fs' as it's not used in the browser environment.

// Placeholder components for StatsContainer and Title to resolve errors
const StatsContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-900 text-gray-100 p-4 font-sans flex flex-col items-center justify-center">
    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
      {children}
    </div>
  </div>
);

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-white mb-4 text-center">{children}</h2>
);

// Main App component
const CodingStats: React.FC = () => {
  // Define hardcoded data for tabs (used for Coding Ninjas and Blind 75, or as fallbacks)
  const tabData = {
    "LeetCode": {
      total: { completed: 54, total: 100, percentage: 10 },
      easy: { completed: 19, total: 20 },
      medium: { completed: 30, total: 50 },
      hard: { completed: 5, total: 30 },
    },
    "GFG": {
      total: { completed: 20, total: 100, percentage: 20 },
      easy: { completed: 4, total: 20 },
      medium: { completed: 10, total: 50 },
      hard: { completed: 6, total: 30 },
    },
    "Coding Ninjas": {
      total: { completed: 26, total: 100, percentage: 26 },
      easy: { completed: 24, total: 20 },
      medium: { completed: 2, total: 50 },
      hard: { completed: 0, total: 30 },
    },
    "GitHub": {
      repos: 0, // Placeholder, will be replaced by fetched data
      stars: 0,
      followers: 0,
      contributions: 0,
      languages: [],
    },
  };

  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState("LeetCode"); // Default active tab, changed to LeetCode for API demo

  // Interface for fetched statistics
  interface Stats {
    github: {
      repos: number;
      stars: number;
      followers: number;
      contributions: number;
      languages: {
        name: string;
        percentage: number;
      }[];
    };
    leetcode: {
      solved: number;
      score: number;
      easySolved: number; // Changed from 'easy' to 'easySolved' to match API response
      mediumSolved: number; // Changed from 'medium' to 'mediumSolved' to match API response
      hardSolved: number;   // Changed from 'hard' to 'hardSolved' to match API response
      streak: number;
      contestRating: number;
    };
    gfg: {
      total_problems_solved: number; // Changed to match API response
      total_score: number;           // Changed to match API response
      School: number;                // Changed to match API response
      Basic: number;                 // Changed to match API response
      Easy: number;                  // Changed to match API response
      Medium: number;                // Changed to match API response
      Hard: number;                  // Changed to match API response
      pod_solved_longest_streak: number; // Changed to match API response
    };
  }

  // State to hold the current stats displayed (can be animated or direct)
  const [stats, setStats] = useState<Stats>({
    github: {
      repos: 0,
      stars: 0,
      followers: 0,
      contributions: 0,
      languages: []
    },
    leetcode: {
      solved: 0,
      score: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      streak: 0,
      contestRating: 0
    },
    gfg: {
      total_problems_solved: 0,
      total_score: 0,
      School: 0,
      Basic: 0,
      Easy: 0,
      Medium: 0,
      Hard: 0,
      pod_solved_longest_streak: 0
    }
  });

    // State to hold the actual fetched stats before animation
  const [actualStats, setActualStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [animationReady, setAnimationReady] = useState(false);

  // Fetch stats from APIs on component mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setError(null);
        //Coding Ninja API
        const codingNinjaResponse = await fetch('https://www.naukri.com/code360/profile/Codushan');
        const codinNinjaData = await codingNinjaResponse.json();

        // Fetch GitHub API
        const githubResponse = await fetch('https://api.github.com/users/Codushan');
        const githubData = await githubResponse.json();

        // Fetch LeetCode API
        const leetcodeResponse = await fetch('https://leetcode-stats-api.herokuapp.com/Cbonleet');
        const leetcodeData = await leetcodeResponse.json();

        // Fetch GeeksforGeeks API with allorigins CORS proxy
        const gfgResponse = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent('https://gfgstatscard.vercel.app/chandrabhushq6z0?raw=true')}`);
        const gfgData = await gfgResponse.json();

        if (leetcodeData.status === 'error') {
          throw new Error(leetcodeData.message);
        }

        const newStats: Stats = {
          github: {
            repos: githubData.public_repos || 0,
            stars: 0, // GitHub API doesn't directly provide total stars for a user, requires more complex fetching
            followers: githubData.followers || 0,
            contributions: 0, // Not directly from this endpoint
            languages: [ // Placeholder languages, actual languages would require more API calls
              { name: 'JavaScript', percentage: 40 },
              { name: 'Python', percentage: 30 },
              { name: 'TypeScript', percentage: 20 },
              { name: 'Others', percentage: 10 }
            ]
          },
          leetcode: {
            solved: leetcodeData.totalSolved || 0,
            score: leetcodeData.contributionPoints || 0,
            easySolved: leetcodeData.easySolved || 0,
            mediumSolved: leetcodeData.mediumSolved || 0,
            hardSolved: leetcodeData.hardSolved || 0,
            streak: leetcodeData.streak || 0,
            contestRating: leetcodeData.ranking || 0
          },
          gfg: {
            total_problems_solved: gfgData.total_problems_solved || 0,
            total_score: gfgData.total_score || 0,
            School: gfgData.School || 0,
            Basic: gfgData.Basic || 0,
            Easy: gfgData.Easy || 0,
            Medium: gfgData.Medium || 0,
            Hard: gfgData.Hard || 0,
            pod_solved_longest_streak: gfgData.pod_solved_longest_streak || 0
          }
        };

        setActualStats(newStats);

        // Wait a moment before starting animations (if any)
        setTimeout(() => {
          setAnimationReady(true);
        }, 300);

      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Detailed Error:', err.message);
          console.error('Error Stack:', err.stack);
        } else {
          console.error('Unknown error occurred:', err);
        }
        setError('Failed to fetch stats. Please check console for details.');
      }
    };

    fetchStats();
  }, []); // Empty dependency array means this effect runs once on mount

  // Set actual stats for the view after loading and animation is ready
  useEffect(() => {
    if (actualStats && animationReady) {
      setStats(actualStats);
    }
  }, [actualStats, animationReady]);

  // Determine the data to display based on the active tab
  const getDisplayData = () => {
    if (!stats) return tabData[activeTab]; // Fallback if stats not loaded

    switch (activeTab) {
      case "LeetCode":
        return {
          total: { completed: stats.leetcode.solved, total: 100, percentage: (stats.leetcode.solved / 100) * 100 },
          easy: { completed: stats.leetcode.easySolved, total: tabData["LeetCode"].easy.total },
          medium: { completed: stats.leetcode.mediumSolved, total: tabData["LeetCode"].medium.total },
          hard: { completed: stats.leetcode.hardSolved, total: tabData["LeetCode"].hard.total },
        };
      case "GFG":
        return {
          total: { completed: stats.gfg.total_problems_solved, total: 100, percentage: (stats.gfg.total_problems_solved / 100) * 100 },
          easy: { completed: stats.gfg.Easy, total: tabData["GFG"].easy.total },
          medium: { completed: stats.gfg.Medium, total: tabData["GFG"].medium.total },
          hard: { completed: stats.gfg.Hard, total: tabData["GFG"].hard.total },
        };
      case "Coding Ninjas":
        return tabData[activeTab]; // Uses hardcoded data for Coding Ninjas
      case "GitHub":
        return stats.github; // Returns the full GitHub stats object
      default:
        return tabData[activeTab];
    }
  };

  const displayData = getDisplayData();

  if (error) {
    return (
      <StatsContainer>
        <Title>Error</Title>
        <p className="text-red-500 text-center">{error}</p>
      </StatsContainer>
    );
  }

  return (
    // <div className="min-h-screen bg-gray-900 text-gray-100 p-4 font-sans flex items-center justify-center">
    <div className="w-full max-w-8xl bg-gray-800 rounded-lg shadow-lg">
      {/* Navigation Tabs */}
      <div className="flex justify-around border-b border-gray-700">
        {/* Map over the keys of tabData to create navigation tabs */}
        {Object.keys(tabData).map((tabName) => (
          <Tab
            key={tabName}
            title={tabName}
            isActive={activeTab === tabName}
            onClick={setActiveTab} // Pass setActiveTab function to update state on click
          />
        ))}
      </div>

      {/* Conditional rendering for GitHub stats or coding platform stats */}
      {activeTab === "GitHub" ? (
        <GitHubStatsSection githubStats={displayData as Stats['github']} />
      ) : (
        <div className="p-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Total Progress Card */}
            <ProgressCard
              title="Total Progress"
              completed={(displayData as any).total.completed}
              total={(displayData as any).total.total}
              percentage={(displayData as any).total.percentage}
              showRing={true}
            />

            {/* Easy Progress Card */}
            <ProgressCard
              title="Easy"
              completed={(displayData as any).easy.completed}
              total={(displayData as any).easy.total}
              color="bg-green-500"
              showRing={false}
            />

            {/* Medium Progress Card */}
            <ProgressCard
              title="Medium"
              completed={(displayData as any).medium.completed}
              total={(displayData as any).medium.total}
              color="bg-yellow-500"
              showRing={false}
            />

            {/* Hard Progress Card */}
            <ProgressCard
              title="Hard"
              completed={(displayData as any).hard.completed}
              total={(displayData as any).hard.total}
              color="bg-red-500"
              showRing={false}
            />
          </div>
        </div>
      )}
    </div>
    // </div>
  );
}

// Tab component for navigation
function Tab({ title, isActive, onClick }) {
  return (
    <div
      className={`py-3 px-6 cursor-pointer text-sm font-medium rounded-t-lg ${isActive
        ? 'text-#fff border-b-2 border-primary bg-gray-700' // Active tab styling
        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-750' // Inactive tab styling
        }`}
      onClick={() => onClick(title)} // Call onClick with the tab's title
    >
      {title}
    </div>
  );
}

// Progress Card component for displaying progress
function ProgressCard({ title, completed, total, percentage, color, showRing }) {
  // Calculate percentage if not provided (for linear bar)
  const calculatedPercentage = total > 0 ? (completed / total) * 100 : 0;

  // You will need to pass `stats` as a prop to `ProgressCard` or lift `stats` state up
  // or define `ProgressCard` inside `CodingStats` to access `stats`.
  // For now, assuming it's available or `completed` is directly used.
  // If `stats.gfg.solved` is intended for all cards, you need to revisit the logic.
  // For the `total` and `difficulty` cards, `completed` and `total` props are already passed.
  // I'm assuming `completed` is the value to display for these cards.

  return (
    <div className="bg-background p-4 rounded-lg flex flex-col items-start">
      <h3 className="text-gray-300 text-base mb-2">{title}</h3>
      {showRing ? (
        // Circular progress ring for Total Progress with outer stroke
        <div className="flex items-center justify-around w-full">
          <div className="relative w-24 h-24 flex-shrink-0 mr-4 rounded-full bg-gray-600"> {/* Base gray circle */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                // Conic gradient for the orange progress stroke
                background: `conic-gradient(#fff ${percentage}%, transparent ${percentage}%)`,
              }}
            ></div>
            {/* Inner circle to create the "stroke" effect and hold the percentage text */}
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
              <div className="text-primary text-2xl font-bold">
                {percentage}%
              </div>
            </div>
          </div>
          <p className="text-primary text-6xl font-bold -translate-y-[20px]">
            {completed}
            {/* <span className="text-gray-400 text-xl">/{total}</span> */}
          </p>
        </div>
      ) : (
        // Text display for other progress cards (Easy, Medium, Hard)
        <div className="flex justify-center items-center w-full">
          <p className="text-primary text-6xl font-bold text-center">
            {completed} {/* Changed from stats.gfg.solved to completed prop */}
            {/* <span className="text-gray-400">/{total}</span>{' '} */}
            {/* <span className="text-gray-400 text-xxl font-normal ml-4">completed</span> */}
          </p>
          {/* Linear progress bar */}
          {/* <div className="w-full bg-gray-600 rounded-full h-2.5 mt-2">
            <div
              className={`${color} h-2.5 rounded-full`}
              style={{ width: `${calculatedPercentage}%` }}
            ></div>
          </div> */}
        </div>
      )}
    </div>
  );
}

// New component for displaying GitHub statistics
const GitHubStatsSection: React.FC<{ githubStats: Stats['github'] }> = ({ githubStats }) => {
  return (
    <div className="p-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Repositories Card */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Public Repositories</h3>
          <p className="text-white text-6xl font-bold">{githubStats.repos}</p>
        </div>

        {/* Followers Card */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Followers</h3>
          <p className="text-white text-6xl font-bold">{githubStats.followers}</p>
        </div>

        {/* Stars Card (Note: Stars are hardcoded to 0 as the current API does not provide this directly) */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Total Stars</h3>
          <p className="text-white text-6xl font-bold">{githubStats.stars}</p>
          <p className="text-gray-400 text-sm mt-1">(Requires more API calls)</p>
        </div>

        {/* Contributions Card (Note: Contributions are hardcoded to 0 as the current API does not provide this directly) */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Total Contributions</h3>
          <p className="text-white text-6xl font-bold">{githubStats.contributions}</p>
          <p className="text-gray-400 text-sm mt-1">(Requires more API calls)</p>
        </div>

        {/* Languages Section */}
        <div className="bg-background p-4 rounded-lg col-span-1 md:col-span-2 lg:col-span-4">
          <h3 className="text-gray-300 text-base mb-4">Top Languages</h3>
          <div className="space-y-2">
            {githubStats.languages.length > 0 ? (
              githubStats.languages.map((lang, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-200 w-24">{lang.name}</span>
                  <div className="flex-grow bg-gray-600 rounded-full h-4 ml-4">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-200 ml-2">{lang.percentage}%</span>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No language data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingStats;


