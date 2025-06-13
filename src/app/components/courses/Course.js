import Link from 'next/link';

const courses = [
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
  },
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
    modules: [{ name: 'Simple vs Compound Interest', path: '/courses/bankstatements' }]
  },
   {
    title: 'Bank Statements',
    description: 'Learn the fundamentals of Bank Statements',
    modules: [{ name: 'Impacts of Inflation', path: '/courses/bankstatements' }]
  },
];

export default function CourseShowcase() {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-2xl p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-blue-900">{course.title}</h3>
              <p className="text-sm text-blue-700 mt-1">{course.modules.length} module{course.modules.length > 1 ? 's' : ''}</p>
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-grow p-5">
              <p className="text-sm text-gray-600 mb-4 flex-grow">{course.description}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {course.modules.map((module, idx) => (
                  <Link key={idx} href={module.path}>
                    <div className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition">
                      {module.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
