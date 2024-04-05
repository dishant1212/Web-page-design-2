

function App() {
  return (
    <>
     
           <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center  px-4 md:px-6">
            <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
            <ul className="md:flex  hidden font-bold text-gray-800">
              <li className="mx-[20px] coursor-pointer">Home</li>
              <li className="mx-[20px] coursor-pointer">About Us</li>
              <li className="mx-[20px] coursor-pointer">Contact Us</li>
            </ul>
            <div className="hidden md:block p-2 bg-indigo-700 text-white rounded font-bold" >Login/Signup</div>
            <div className="md:hidden"><i class="ri-menu-line"></i></div>
           </nav>

       <header className="w-full h-auto">
         <img className="w-full hidden md:block" src="https://cdn.pwskills.com/assets/uploads/thumbnails/660a53ec9709e67e9c23973d.png" />
         <img  className="w-full md:hidden" src="https://emeritus.org/in/wp-content/uploads/sites/3/2023/08/Featured-Images-April-28-1024x536.png" />
         
       </header>

       <div className="h-auto w-full flex flex-wrap flex-col justify-center items-center p-10">
            <div className="w-full h-auto flex flex-wrap flex-col items-center">
              <p className="text-indigo-800 font-bold text-3xl md:text-4xl 2xl:text-6xl">"Pure Hardwork, No Shortcuts!"</p>
              <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mb-4 rounded-2xl"></div>
            </div >

            <div className="w-full flex flex-wrap justify-evenly">
                <div className="w-46 flex flex-col items-center mb-12">
                  <img className="w-44 h-44" src="https://pwskills.com/images/homePage/statistics1.png" />
                  <p className="text-3xl font-bold text-gray-900">55%</p>
                  <p className="text-2xl font-bold text-gray-500">Average Salary Hike</p>
                </div>

                <div className="w-46 flex flex-col items-center mb-12">
                  <img className="w-44 h-44" src="https://pwskills.com/images/homePage/statistics2.png" />
                  <p className="text-3xl font-bold text-gray-900">600+</p>
                  <p className="text-2xl font-bold text-gray-500">Different Courses</p>
                </div>

                <div className="w-46 flex flex-col items-center mb-12">
                  <img className="w-44 h-44" src="https://pwskills.com/images/homePage/statistics3.png" />
                  <p className="text-3xl font-bold text-gray-900">12000+</p>
                  <p className="text-2xl font-bold text-gray-500">Career Transitions</p>
                </div>


                
            </div>


            <div className="w-full h-auto flex flex-wrap flex-col items-center">
              <p className="text-indigo-800 font-bold text-3xl md:text-4xl 2xl:text-6xl">"Our Products"</p>
              <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mb-4 rounded-2xl"></div>
            </div >
            <div className="w-full flex justify-evenly flex-wrap">
                
            <div className="w-64 flex flex-col items-center mb-12 border-2 border-gray-500 p-2 rounded-xl">
                  <img className="w-20 h-20" src="https://pwskills.com/images/homePage/products-icon5.png" />
                  <p className="text-2xl font-bold text-gray-900">Become an affiliate</p>
                 <p className="text-2xl font-bold text-gray-500 text-center mt-4">Explore affiliate marketing opportunities and attain financial freedom.</p>
                </div>

                <div className="w-64 flex flex-col items-center mb-12 p-2">
                  <img className="w-20 h-20" src="https://pwskills.com/images/homePage/products-icon1.png" />
                 
                  <p className="text-2xl font-bold text-gray-900">Pw Skills Lab </p>
                  <p className="text-2xl font-bold text-gray-500 text-center mt-4">Buying a new PC is no longer required, Access unlimited computing power!</p>
                </div>
  
  
                <div className="w-64 flex flex-col items-center mb-12 p-2">
                  <img className="w-20 h-20" src="https://pwskills.com/images/homePage/products-icon4.png" />
                  <p className="text-2xl font-bold text-gray-900">Job Portal</p>
                  <p className="text-2xl font-bold text-gray-500 text-center mt-4">Use exceptional templates for a stand-out resume minus the sign up process.</p>
                </div>

                <div className="w-64 flex flex-col items-center mb-12 p-2">
                  <img className="w-20 h-20" src="https://pwskills.com/images/homePage/products-icon3.png" />
                 
                  <p className="text-2xl font-bold text-gray-900">Hall Of Fame </p>
                  <p className="text-2xl font-bold text-gray-500 text-center mt-4">Our student placements and 100K+ career transitions speak volumes.</p>
                </div>
  
  
                <div className="w-64 flex flex-col items-center mb-12 p-2">
                  <img className="w-20 h-20" src="https://pwskills.com/images/homePage/products-icon2.png" />
                  <p className="text-2xl font-bold text-gray-900">Experience Portal</p>
                  <p className="text-2xl font-bold text-gray-500 text-center mt-4">Self-paced portal prioritizes hands-on training with 570+ internship projects.</p>
                </div>

            </div>

       </div>

       <footer className="w-full bg-gray-900 px-12 sm:px-4 py-40 pt-8 text-white flex flex-col sm:flex-row flex-wrap justify-between  md:px-12">
                 <div className="w-[80%] sm:w-1/4 flex flex-col justify-center ">

                   <img  className="h-16 w-40" src="https://lab.pwskills.com/images/PWSkills-white.png" />
                   <div className="grid gap-4 pt-6">
                   <p className=""><i class="ri-mail-fill text-white"></i> supprt@pwskills.com</p>
                   <p className=""><i class="ri-phone-fill text-white"></i> +91 6361388292</p>
                   </div>
                   <div className="pt-4"><i class="ri-linkedin-box-fill text-white text-2xl"></i>   <i class="ri-youtube-fill text-white text-2xl"></i>   <i class="ri-telegram-fill text-white text-2xl"></i></div>
                   </div>
                   <div className="w-[70%] sm:w-1/4">
                      <p className="text-2xl font-bold text-white pb-4">Company</p>
                      <div className="w-full border-2 border-red-500"> </div>
                    <div className="w-full flex justify-between ">
                      <div className="grid gap-6 pt-8">
                        <p>About us</p>
                         <p>FAQs</p>
                         <p>Privacy Policy</p>
                      </div>
                      <div className="grid gap-6 pt-8">
                        <p>Contact us</p>
                         <p>Job assistance</p>
                         <p>Terms and conditon</p>
                      </div>

                  </div>
                   </div>

                   <div className="w-[70%] sm:w-1/4">
                      <p className="text-2xl font-bold text-white pb-4">Products</p>
                      <div className="w-full border-2 border-red-500"></div>
                      <div className="w-full flex justify-between">
                      <div className="grid gap-6 pt-8">
                        <p>PW Skills Lab</p>
                         <p>Experience Portal</p>
                         <p>Hall of fame</p>
                      </div>
                      <div className="grid gap-6 pt-8">
                        <p>Job Portal</p>
                         <p>Become an affiliate</p>
                         <p>Blog</p>
                      </div>

                  </div>
                   </div>
           </footer>
    </>
  );
}

export default App;
