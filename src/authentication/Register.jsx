import React from 'react'
import left from "../assets/images/left.png";

const Register = () => {
  return (
        <section className="mt-1 overflow-hidden bg-white">
                <div className="flex flex-row mx-8 items-center">
                        <img src={left} alt="back" />
                        <h2 className="text-[18px] font-semibold  mx-auto">
                          Register
                        </h2>
                      </div>

        {/* Register Text*/}   
        <div className="flex flex-col mt-40 mx-10">
        <h2 className="text-[18px] text-[#ce1567] font-semibold">Create a New Account</h2>
        <p className="mt-2 w-[350px] text-[13px] text-[#595757]">
          Create an account so you can manage your personal finances
        </p>
      </div>


      {/*Register Form*/}
             
            <form className=" mt-15 ml-11">
             <input type="text" placeholder=" Enter Phone Number" className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-5 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"/>
              <input type="password" placeholder="Password" className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-5 focus:outline-none focus:border-[#ce1567] text-[13px] px-6"/>
              <input type="password" placeholder="Confirm Password" className="w-[320px] bg-[#f3f3f3] rounded-lg border-gray-300 py-3 mb-4  focus:outline-none focus:border-[#ce1567] text-[13px] px-6"/>
            </form>
               
            <button className="bg-[#ce1567] mt-5 text-white py-3 px-10 rounded-lg text-[14px] font-medium hover:bg-[#ce1567] focus:outline-none focus:ring-2 focus:ring-blue-500 w-[320px] ml-12">
          Register

        </button>

        </section>
  )
}

export default Register