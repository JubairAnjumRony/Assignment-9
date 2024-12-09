import React from 'react';

const Newsletter = () => {
    return (
        <section
          className="bg-gray-50"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/Mc5ydHn/ai-generated-8131432-1280.png')",
          }}
        >
          <div className="p-8 md:p-12 lg:px-16 lg:py-24  ">
            <div className="mx-auto md:max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-white mb-5 md:text-3xl text-black">
                Stay Ahead with Expert Career Insights
              </h2>
    
              <p className="hiddensm:mt-4 sm:block text-black">
                Subscribe to our newsletter and unlock a wealth of career-focused
                resources, expert tips, industry news, inspiring success stories,
                and strategies to help you excel. Get all the tools you need
                delivered straight to your inbox to stay informed and take control
                of your professional journey.
              </p>
            </div>
    
            <div className="mx-auto mt-8 max-w-xl">
              <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
    
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                  />
                </div>
    
                <button
                  type="submit"
                  className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-success-primary-500 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                >
                  <span className="text-sm font-medium"> Sign Up </span>
    
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    }
    


export default Newsletter;