"use client";
import { useState } from 'react';
import Link from 'next/link';

// Deterministic gradient function based on course title
const getCourseGradient = (title) => {
  const hash = Array.from(title).reduce(
    (hash, char) => char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash,
    0
  );
  
  const gradients = [
    'from-indigo-500 to-blue-600',
    'from-purple-500 to-pink-600',
    'from-cyan-500 to-blue-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-yellow-500 to-amber-600'
  ];
  
  return gradients[Math.abs(hash) % gradients.length];
};

const basicCourses = [
  {
    title: 'Bank Statements',
    description: 'Learn the fundamentals of Bank Statements',
    modules: [{ name: 'Understanding Bank Statements', path: '/courses/bankstatements' }]
  },
  {
    title: 'Inflation',
    description: 'Learn the fundamentals of Inflation',
    modules: [{ name: 'Impacts of Inflation', path: '/courses/inflation' }]
  },
  {
    title: 'Interests',
    description: 'Learn how interests work',
    modules: [{ name: 'Simple vs Compound Interest', path: '/courses/interests' }]
  },
   {
    title: 'Intro to Mutual Funds',
    description: 'Learn how mutual funds work',
    modules: [{ name: 'Mutual Funds', path: '/courses/mutual' }]
  },
  {
    title: 'Intro to Digital Payments',
    description: 'Learn about digital payments',
    modules: [{ name: 'UPI Payments', path: '/courses/upi' }]
  }
];

const advancedCourses = [
  {
    title: 'Credit & Debt',
    description: 'Understand how credit works and how to manage debt effectively.',
    modules: [{ name: 'Credit & Debt Basics', path: '/courses/creditDebt' }]
  },
  {
    title: 'Financial Independence',
    description: 'Strategies for becoming financially independent.',
    modules: [
      { name: 'Module 1', path: '/courses/FinancialIndependenceModule1' },
      { name: 'Module 2', path: '/courses/FinancialIndependenceModule2' }
    ]
  },
  {
    title: 'Investment Basics',
    description: 'Learn the fundamentals of investing.',
    modules: [{ name: 'Investment Basics', path: '/courses/investment' }]
  },
  {
    title: 'Taxation',
    description: 'Understand taxes and how they impact your finances.',
    modules: [
      { name: 'Module 1', path: '/courses/taxes1' },
      { name: 'Module 2', path: '/courses/taxes2' }
    ]
  }
];

const CourseShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'basic', name: 'Fundamentals' },
    { id: 'advanced', name: 'Advanced' }
  ];

  // Combined courses for search
  const allCourses = [
    ...basicCourses.map(course => ({ ...course, category: 'basic' })),
    ...advancedCourses.map(course => ({ ...course, category: 'advanced' }))
  ];

  // Filter logic
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Finance Courses</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build your financial literacy with our comprehensive curriculum
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Bar */}
          <div className="w-full sm:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">No courses found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mb-6">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-gray-100"
            >
              {/* Card Header with Gradient */}
              <div className="relative h-40 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${getCourseGradient(course.title)} opacity-90`}></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black bg-opacity-20 rounded-full backdrop-blur-sm mb-2 w-fit">
                    {course.modules.length} module{course.modules.length > 1 ? 's' : ''}
                  </span>
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow p-6">
                <p className="text-gray-600 mb-5 line-clamp-3">{course.description}</p>
                
                {/* Modules */}
                <div className="mt-auto">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Modules</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.modules.slice(0, 3).map((module, idx) => (
                      <Link key={idx} href={module.path} passHref>
                        <div className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 cursor-pointer">
                          Go to {module.name}
                        </div>
                      </Link>
                    ))}
                    {course.modules.length > 3 && (
                      <div className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-50 rounded-full">
                        +{course.modules.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseShowcase;