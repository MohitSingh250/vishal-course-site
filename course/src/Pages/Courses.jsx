import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  BookOpen, 
  MessageCircle, 
  Moon, 
  Sun,
  Home, 
  Bookmark,
  Search 
} from "react-feather";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    {
      id: 1,
      title: "Frontend Masterclass",
      image: "/images/courses/frontend.jpg",
      progress: 27,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Algorithms & Data Structures",
      image: "/images/courses/algorithms.jpg",
      progress: 0,
      category: "Computer Science",
    },
    {
      id: 3,
      title: "Full-Stack Bootcamp",
      image: "/images/courses/fullstack.jpg",
      progress: 42,
      category: "Web Development",
    },
    {
      id: 4,
      title: "Cloud Engineering",
      image: "/images/courses/cloud.jpg",
      progress: 8,
      category: "DevOps",
    },
    {
      id: 5,
      title: "Blockchain Fundamentals",
      image: "/images/courses/blockchain.jpg",
      progress: 15,
      category: "Web3",
    },
    {
      id: 6,
      title: "Mobile App Development",
      image: "/images/courses/mobile.jpg",
      progress: 0,
      category: "App Development",
    },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-16 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col items-center py-6 gap-8`}>
        <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
          D
        </div>
        <nav className="flex flex-col gap-6 items-center">
          <Link
            to="/"
            className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <Home className="h-5 w-5" />
          </Link>
          <button
            onClick={() => setActiveTab("courses")}
            className={`p-2 rounded-lg ${activeTab === "courses" ? (darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600') : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`}
          >
            <BookOpen className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab("bookmarks")}
            className={`p-2 rounded-lg ${activeTab === "bookmarks" ? (darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600') : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`}
          >
            <Bookmark className="h-5 w-5" />
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`p-2 rounded-lg ${activeTab === "messages" ? (darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600') : (darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')}`}
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-16">
        {/* Header */}
        <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>LearnHub</h1>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative hidden md:block">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="search"
                  placeholder="Search courses..."
                  className={`pl-10 pr-4 py-2 w-[240px] rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-200 text-gray-900'} border focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <Bell className="h-5 w-5" />
              </button>

              <button
                className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={toggleTheme}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <div className="relative">
                <img 
                  src="/images/avatar.jpg" 
                  alt="User" 
                  className="h-10 w-10 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="px-6 py-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Welcome Back, Jamie!</h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Continue your learning journey where you left off.</p>
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div 
                key={course.id}
                className={`rounded-lg overflow-hidden shadow-sm ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border hover:shadow-md transition-shadow`}
              >
                <div className="relative h-48 w-full">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <span className="text-xs font-medium text-white px-3 py-1 m-3 bg-purple-600 rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{course.title}</h3>
                </div>
                <div className="px-4 pb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Progress</span>
                    <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{course.progress}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-purple-600" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="p-4 flex gap-2">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
                    Continue Learning
                  </button>
                  <button className={`p-2 rounded-md ${darkMode ? 'text-gray-300 border-gray-600 hover:bg-gray-700' : 'text-gray-600 border-gray-200 hover:bg-gray-100'} border`}>
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;