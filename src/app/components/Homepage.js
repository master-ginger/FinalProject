"use client";
import Lottie from 'lottie-react';
import Savings from '../lotties/saving.json';
import Finplan from '../lotties/finplan.json';
import Games from "../lotties/game.json";
import HomeImg from "../lotties/home_img.json";
import Navbar from './Navbar';
import Footer from './Footer';
// import Chatbot from './chatbot';

const coursesData = {
  // Below 18 courses
  under18: [
    {
      title: "Money Basics",
      description: "Learn about the value of money and how inflation affects your savings.",
      image: "/images/ymoney.jpg",
      topics: [
        "Time value of money",
        "Understanding inflation",
        "Saving basics",
        "Financial planning for teens"
      ],
    },
    {
      title: "Financial Concepts",
      description: "Understand opportunity cost and how interest calculations work.",
      image: "/images/yFinancial.jpg",
      topics: [
        "Opportunity cost basics",
        "Interest calculations",
        "Making financial decisions",
        "Planning for the future"
      ],
    },
    {
      title: "Banking Essentials",
      description: "Learn how to read bank statements and use digital payment methods safely.",
      image: "/images/ybank.jpg",
      topics: [
        "Reading bank statements",
        "Digital payments",
        "Banking safety",
        "Setting up your first account"
      ],
    },
    {
      title: "Financial Planning",
      description: "Discover taxation basics and how mutual funds work.",
      image: "/images/yplanning.jpg",
      topics: [
        "Taxation basics for teens",
        "Introduction to mutual funds",
        "Setting financial goals",
        "Planning for education"
      ],
    }
  ],
  
  // Above 18 courses (kept the original module data)
  above18: [
    {
      title: "Budgeting Basics",
      description: "Learn how to create and maintain a budget that works for your financial goals and lifestyle.",
      image: "/Budgeting.jpg",
      topics: [
        "Creating your first budget",
        "Tracking expenses effectively",
        "Setting financial goals",
        "Budget adjustment strategies"
      ]
    },
    {
      title: "Saving Strategies",
      description: "Discover proven techniques to build your savings and create financial security.",
      image: "/saving.png",
      topics: [
        "Emergency fund essentials",
        "Automating your savings",
        "High-yield savings options",
        "Saving for major purchases"
      ]
    },
    {
      title: "Investment Fundamentals",
      description: "Start your investment journey with clear explanations of investment basics and options.",
      image: "/images/invest.jpg",
      topics: [
        "Understanding risk and return",
        "Types of investment accounts",
        "Introduction to stocks and bonds",
        "Building a diversified portfolio"
      ]
    },
    {
      title: "Debt Management",
      description: "Take control of your debt with strategic approaches to reduce and eliminate what you owe.",
      image: "/Debt.jpg",
      topics: [
        "Prioritizing debt repayment",
        "Debt consolidation options",
        "Improving your credit score",
        "Negotiating with creditors"
      ]
    }
  ]
};

export default function Homepage() {

  return (
    <div className="overflow-hidden font-sans">
    
        <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center  ml-40">



            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
  <span className="inline-block relative">
    Empowering 
    <span className="absolute w-full h-3 bg-yellow-300 opacity-40 bottom-1 left-0 z-0"></span>
  </span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 ml-2">
    Your Wallet
  </span>
</h1>

              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8 leading-relaxed">
                One Smart Choice at a Time
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href="#modules" 
                  className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-all duration-300"
                >
                  Explore our Modules
                </a>
                <a 
                  href="#why" 
                  className="inline-block bg-white text-purple-600 border-2 border-purple-600 text-lg font-medium px-8 py-4 rounded-full shadow-md hover:shadow-lg transform hover:translate-y-1 transition-all duration-300"
                >
                  Why CoinCoach?
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute -bottom-8 -left-20 w-64 h-64 bg-purple-300 rounded-full opacity-30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="relative">
                  <Lottie animationData={HomeImg} className="h-80 md:h-96 lg:h-[550px] w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
     

     
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              CoinCoach isn't just another financial advice site; 
              <span className="text-purple-600"> it's a learning companion</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto my-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              Our interactive platform combines expert guidance, practical tools, and engaging content to make financial literacy accessible to everyone.
            </p>
          </div>
        </div>
     

      

     
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-[#301934] to-[#4A266A] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-10 md:p-16 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight caveat-font">
                  Save Today, Secure Tomorrow, <br/>
                  <span className="text-yellow-300">Your Future Starts with Small Steps!</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
                  Master the art of intelligent saving with strategies that grow your money while keeping it accessible for your needs.
                </p>
                <a 
                  href="#modules" 
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-all duration-300"
                >
                  Learn How →
                </a>
              </div>
              <div className="flex justify-center py-8 md:py-0">
                <Lottie animationData={Savings} className="h-80 md:h-96 lg:h-[500px] w-auto transform scale-125" />
              </div>
            </div>
          </div>
        </div>
    

      
        <div className="container mt-44 mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            <span className="relative inline-block px-2">
              Why Use CoinCoach?
              <svg className="absolute -bottom-2 left-0 w-full" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="#EAB308" />
              </svg>
            </span>
          </h2>

         
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-x-8 gap-y-12 mb-28">
              <div className="md:col-span-5 order-2 md:order-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-full blur-2xl opacity-60 transform -rotate-6"></div>
                  <Lottie animationData={Games} className="w-full max-w-lg h-80 md:h-96" />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-yellow-400 transform md:translate-x-8">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Interactive Learning
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Gamified Learning</h3>
                  <p className="text-lg md:text-xl font-semibold mb-4 text-gray-800">For Fun And Engagement</p>
                  <p className="text-base md:text-lg text-gray-700 mb-6">
                    Learning about finances doesn't have to be boring! CoinCoach turns complex topics into interactive games, quizzes, and challenges, so you can stay motivated and retain what you learn.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Interactive simulations to practice concepts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Achievement badges and progress tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Friendly competitions with other learners</span>
                    </li>
                  </ul>
                  <a 
                    href="#modules" 
                    className="inline-block bg-[#301934] text-white px-6 py-3 rounded-full font-medium hover:bg-purple-900 transition-colors duration-300"
                  >
                    Try It Now
                  </a>
                </div>
              </div>
            </div>
         

          {/* Feature Two */}
         
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-x-8 gap-y-12">
              <div className="md:col-span-7">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-r-8 border-yellow-400 transform md:-translate-x-8">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Premium Content
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Expert-Crafted Curriculum</h3>
                  <p className="text-lg md:text-xl font-semibold mb-4 text-gray-800">for Real Results</p>
                  <p className="text-base md:text-lg text-gray-700 mb-6">
                    Our courses are designed by financial experts who understand how to simplify complex concepts without losing important details. Learn practical skills you can apply immediately.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Content updated monthly to stay current</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Real-world case studies and examples</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Personalized learning paths based on goals</span>
                    </li>
                  </ul>
                  <a 
                    href="#modules" 
                    className="inline-block bg-[#301934] text-white px-6 py-3 rounded-full font-medium hover:bg-purple-900 transition-colors duration-300"
                  >
                    View Curriculum
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-2xl opacity-60 transform rotate-6"></div>
                  <Lottie animationData={Finplan} className="w-full max-w-lg h-80 md:h-96" />
                </div>
              </div>
            </div>
         
        </div>
     

   

      {/* Chat with AI Assistant */}
      {/* <div className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="relative inline-block px-2">
                Ask Your Finance Questions
                <svg className="absolute -bottom-2 left-0 w-full" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="#EAB308" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Our AI assistant is here to answer your financial questions, big or small. 
              Try it now with a sample question or ask your own!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Chatbot />
          </div>
        </div>
      </div> */}


    </div>
  );
}