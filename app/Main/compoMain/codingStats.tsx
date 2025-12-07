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

// Define types for better type safety
interface TabDataItem {
  total: { completed: number; total: number; percentage: number };
  easy: { completed: number; total: number };
  medium: { completed: number; total: number };
  hard: { completed: number; total: number };
}

interface GitHubData {
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
  languages: { name: string; percentage: number }[];
}

interface TabData {
  [key: string]: TabDataItem | GitHubData;
}

// Main App component
const CodingStats: React.FC = () => {
  // Define hardcoded data for tabs
  const tabData: TabData = {
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
      total: { completed: 22, total: 100, percentage: 27 },
      easy: { completed: 20, total: 20 },
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
  const [activeTab, setActiveTab] = useState("LeetCode"); // Default active tab

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
    codingNinjas: {
      totalSolved: number;
      easySolved: number;
      mediumSolved: number;
      hardSolved: number;
      totalQuestions: number;
      totalEasy: number;
      totalMedium: number;
      totalHard: number;
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
    codingNinjas: {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      totalQuestions: 0,
      totalEasy: 0,
      totalMedium: 0,
      totalHard: 0,
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
  const [isLoading, setIsLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const [hasCheckedCache, setHasCheckedCache] = useState(false);

  // Check for cached data on component mount
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const cachedData = localStorage.getItem('codingStatsData');
    const cachedTimestamp = localStorage.getItem('codingStatsTimestamp');
    
    if (cachedData && cachedTimestamp) {
      const timestamp = parseInt(cachedTimestamp);
      const now = Date.now();
      const cacheAge = now - timestamp;
      const cacheValidDuration = 60 * 60 * 1000; // 1 hour in milliseconds
      
      if (cacheAge < cacheValidDuration) {
        // Use cached data immediately if it's less than 1 hour old
        try {
          const parsedData = JSON.parse(cachedData);
          setActualStats(parsedData);
          setAnimationReady(true);
          setIsLoading(false);
          setHasCheckedCache(true);
          setShowComponent(true); // Show immediately when cached data is available
          // Continue to fetch fresh data in background (don't return early)
        } catch (err) {
          console.error('Error parsing cached data:', err);
          // Continue to fetch fresh data if cache is corrupted
        }
      }
    }
    
    // Always set loading to true and fetch fresh data
    setIsLoading(true);
    setHasCheckedCache(true);
  }, []); // Remove isFirstLoad as dependency

  // Fetch stats from APIs on component mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setError(null);
        
        // Fetch all APIs in parallel for faster loading
        const [codingNinjaResponse, githubResponse, leetcodeResponse, gfgResponse] = await Promise.all([
          fetch('https://coding-ninja-api.vercel.app/api/test/Codushan'),
          fetch('https://api.github.com/users/Codushan'),
          fetch('https://leetcode-stats-api.herokuapp.com/Cbonleet'),
          fetch(`https://gfg-scrapper.vercel.app/chandrabhushq6z0`)
        ]);

        // Check if any response failed
        if (!codingNinjaResponse.ok) {
          console.error('Coding Ninjas API failed:', codingNinjaResponse.status, codingNinjaResponse.statusText);
        }
        if (!githubResponse.ok) {
          console.error('GitHub API failed:', githubResponse.status, githubResponse.statusText);
        }
        if (!leetcodeResponse.ok) {
          console.error('LeetCode API failed:', leetcodeResponse.status, leetcodeResponse.statusText);
        }
        if (!gfgResponse.ok) {
          console.error('GFG API failed:', gfgResponse.status, gfgResponse.statusText);
        }

        const [codinNinjaData, githubData, leetcodeData, gfgData] = await Promise.all([
          codingNinjaResponse.json(),
          githubResponse.json(),
          leetcodeResponse.json(),
          gfgResponse.json()
        ]);

        if (leetcodeData.status === 'error') {
          throw new Error(leetcodeData.message);
        }

        // Check if Coding Ninjas API returned an error
        if (codinNinjaData.status === 'error') {
          console.error('Coding Ninjas API Error:', codinNinjaData.message);
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
         codingNinjas: {
            totalSolved: codinNinjaData.totalSolved || 0,
            easySolved: codinNinjaData.easySolved || 0,
            mediumSolved: codinNinjaData.mediumSolved || 0,
            hardSolved: codinNinjaData.hardSolved || 0,
            totalQuestions: codinNinjaData.totalQuestions || 0,
            totalEasy: codinNinjaData.totalEasy || 0,
            totalMedium: codinNinjaData.totalMedium || 0,
            totalHard: codinNinjaData.totalHard || 0,
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

        // Always cache the fresh data in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('codingStatsData', JSON.stringify(newStats));
          localStorage.setItem('codingStatsTimestamp', Date.now().toString());
        }

        // Update the stats with fresh data
        setActualStats(newStats);
        setAnimationReady(true);
        setIsLoading(false);
        
        // Show component if not already shown
        if (!showComponent) {
          setShowComponent(true);
        }

      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Detailed Error:', err.message);
          console.error('Error Stack:', err.stack);
        } else {
          console.error('Unknown error occurred:', err);
        }
        setError('Failed to fetch stats. Please check console for details.');
        setIsLoading(false);
      }
    };

    // Always fetch fresh data if we're in loading state and have checked cache
    if (isLoading && hasCheckedCache) {
      fetchStats();
    }
  }, [actualStats, isLoading, hasCheckedCache, showComponent]); // Add showComponent as dependency

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
        total: {
          completed: stats.leetcode.solved,
          total: 100,
          percentage: Math.round((stats.leetcode.solved / 100) * 100), // Applied Math.round() here
        },
        easy: { completed: stats.leetcode.easySolved, total: (tabData["LeetCode"] as TabDataItem).easy.total },
        medium: { completed: stats.leetcode.mediumSolved, total: (tabData["LeetCode"] as TabDataItem).medium.total },
        hard: { completed: stats.leetcode.hardSolved, total: (tabData["LeetCode"] as TabDataItem).hard.total },
      };
    case "GFG":
      return {
        total: {
          completed: stats.gfg.total_problems_solved,
          total: 100,
          percentage: Math.round((stats.gfg.total_problems_solved / 100) * 100), // Applied Math.round() here
        },
        easy: { completed: stats.gfg.Easy, total: (tabData["GFG"] as TabDataItem).easy.total },
        medium: { completed: stats.gfg.Medium, total: (tabData["GFG"] as TabDataItem).medium.total },
        hard: { completed: stats.gfg.Hard, total: (tabData["GFG"] as TabDataItem).hard.total },
      };
    case "Coding Ninjas":
      // Add a check to ensure stats.codingNinjas exists
      if (!stats.codingNinjas) {
        // Fallback to initial hardcoded data or return a default/loading state
        return tabData["Coding Ninjas"] as TabDataItem;
      }

      const cnTotalCompleted = stats.codingNinjas.totalSolved;
      
      // Use API data for solved counts, but fall back to reasonable totals if API returns 0
      const cnTotalQuestions = stats.codingNinjas.totalQuestions > 0 ? stats.codingNinjas.totalQuestions : 100;
      const cnTotalPercentage = cnTotalQuestions > 0 ? (cnTotalCompleted / cnTotalQuestions) * 100 : 0;

      // For difficulty levels, use API solved counts but fall back to reasonable totals
      const cnEasyTotal = stats.codingNinjas.totalEasy > 0 ? stats.codingNinjas.totalEasy : 20;
      const cnMediumTotal = stats.codingNinjas.totalMedium > 0 ? stats.codingNinjas.totalMedium : 50;
      const cnHardTotal = stats.codingNinjas.totalHard > 0 ? stats.codingNinjas.totalHard : 30;

      return {
        total: {
          completed: cnTotalCompleted,
          total: cnTotalQuestions,
          percentage: Math.round(isNaN(cnTotalPercentage) ? 0 : cnTotalPercentage)
        },
        easy: {
          completed: stats.codingNinjas.easySolved,
          total: cnEasyTotal
        },
        medium: {
          completed: stats.codingNinjas.mediumSolved,
          total: cnMediumTotal
        },
        hard: {
          completed: stats.codingNinjas.hardSolved,
          total: cnHardTotal
        },
      };

    case "GitHub":
      return stats.github; // Returns the full GitHub stats object
    default:
      return tabData[activeTab];
  }
};

  const displayData = getDisplayData();

  // Show loading state only if we have no cached data and are still loading
  if (isLoading && !actualStats) {
    return null;
  }

  // If we have cached data, show it immediately even if still loading fresh data
  if (actualStats && !showComponent) {
    setShowComponent(true);
  }

  if (error) {
    return (
      <StatsContainer>
        <Title>Error</Title>
        <p className="text-red-500 text-center">{error}</p>
      </StatsContainer>
    );
  }

  return (
    <div 
      className={`transform transition-all duration-700 ease-out ${
        showComponent 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
      }`}
    >
    <h2 className="text-3xl font-bold mb-6">Coding Platform Stats</h2>
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
              color="bg-blue-500"
              showRing={false}
            />

            {/* Easy Progress Card */}
            <ProgressCard
              title="Easy"
              completed={(displayData as any).easy.completed}
              total={(displayData as any).easy.total}
              percentage={(displayData as any).easy.completed / (displayData as any).easy.total * 100}
              color="bg-green-500"
              showRing={false}
            />

            {/* Medium Progress Card */}
            <ProgressCard
              title="Medium"
              completed={(displayData as any).medium.completed}
              total={(displayData as any).medium.total}
              percentage={(displayData as any).medium.completed / (displayData as any).medium.total * 100}
              color="bg-yellow-500"
              showRing={false}
            />

            {/* Hard Progress Card */}
            <ProgressCard
              title="Hard"
              completed={(displayData as any).hard.completed}
              total={(displayData as any).hard.total}
              percentage={(displayData as any).hard.completed / (displayData as any).hard.total * 100}
              color="bg-red-500"
              showRing={false}
            />
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

// Tab component for navigation
interface TabProps {
  title: string;
  isActive: boolean;
  onClick: (title: string) => void;
}

function Tab({ title, isActive, onClick }: TabProps) {
  return (
    <div
      className={`flex items-center justify-center text-center py-3 px-4 sm:px-6 cursor-pointer text-sm font-medium rounded-t-lg ${isActive
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
interface ProgressCardProps {
  title: string;
  completed: number;
  total: number;
  percentage: number;
  color: string;
  showRing: boolean;
}

function ProgressCard({ title, completed, total, percentage, color, showRing }: ProgressCardProps) {
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
const GitHubStatsSection: React.FC<{ githubStats: { repos: number; stars: number; followers: number; contributions: number; languages: { name: string; percentage: number }[] } }> = ({ githubStats }) => {
  return (
    <div className="p-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Repositories Card */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Public Repositories</h3>
          <p className="text-primary text-6xl font-bold">{githubStats.repos}</p>
        </div>

        {/* Followers Card */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Followers</h3>
          <p className="text-primary text-6xl font-bold">{githubStats.followers}</p>
        </div>

        {/* Stars Card (Note: Stars are hardcoded to 0 as the current API does not provide this directly) */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Total Stars</h3>
          <p className="text-primary text-6xl font-bold">{githubStats.stars}</p>
{/*           <p className="text-gray-400 text-sm mt-1">(Requires more API calls)</p> */}
        </div>

        {/* Contributions Card (Note: Contributions are hardcoded to 0 as the current API does not provide this directly) */}
        <div className="bg-background p-4 rounded-lg flex flex-col items-start">
          <h3 className="text-gray-300 text-base mb-2">Total Contributions</h3>
          <p className="text-primary text-6xl font-bold">{githubStats.contributions}</p>
{/*           <p className="text-gray-400 text-sm mt-1">(Requires more API calls)</p> */}
        </div>

        {/* Languages Section */}
        {/* <div className="bg-background p-4 rounded-lg col-span-1 md:col-span-2 lg:col-span-4">
          <h3 className="text-gray-300 text-base mb-4">Top Languages</h3>
          <div className="space-y-2">
            {githubStats.languages.length > 0 ? (
              githubStats.languages.map((lang: { name: string; percentage: number }, index: number) => (
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
        </div> */}
      </div>
    </div>
  );
};

export default CodingStats;


