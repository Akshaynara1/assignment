import Image from "next/image";
import logo from "@/app/assests/navbar-brand.png"
export default function Home () {
return( 
  <div className=" w-[1440px] h-[1132px] bg-[#252B42] ">

<nav className="w-[1322px] h-[91px] ml-[59px] flex gap-40 items-center ">
    
      <div className=" w-[187px] h-[58px] mt-[17px] ml-[136px] ">
        <Image src={logo} alt="img"></Image> 

      </div>   
      <ul className=" text-white flex gap-10  ">
        <li className=" hover:text-gray-400 cursor-pointer" >Home</li>
        <li className=" hover:text-gray-400 cursor-pointer " > Product</li>
        <li className=" hover:text-gray-400 cursor-pointer " >Pricing</li>
        <li className=" hover:text-gray-400 cursor-pointer " >Contact</li>
      </ul>

     <div >
  <button className="text-white px-16 w-[41px] h-[22px] hover:text-gray-400">Login</button>
  <button className="text-white bg-[#23A6F0] w-[110px] h-[52px] rounded-[5px] hover:bg-blue-500"> Join us</button>
  </div>
       
    
      </nav>
    
    <div className="w-[1046px] h-[1028px] mt-[104px] ml-[197px]">

        <div className=" w-[710px] h-[496px]">
          <h5 className=" width-[77px] h-[24px] font-bold text-[#23A6F0] text-[16px] px-[400px]">Welcome</h5> <br /><br />

          <h1 className="w-[542px] h-[160px] text-center font-bold text-[58px] text-white ml-44">Selling on the internet like a pro</h1>

              <br /><br />   
          <h4 className=" w-[536px] h-[60px] font-normal text-xl text-white ml-52 tracking-[0.02em]">We know how large objects will act, but things on a <br />
             &ensp; &ensp; &ensp; &ensp; small scale just do not act that way. </h4> 

                <br /><br />
             <button className=" w-[193px] h-[52px] rounded-[5px] bg-[#23A6F0] text-white ml-64 hover:bg-blue-500 "  > Get Quote Now</button>
                &nbsp; &nbsp;
              <button className="w-[162px] h-[52px] rounded-[5px] border-[1px]  text-[#23A6F0] border-[#23A6F0] hover:bg-gray-500">Learn More</button>


        </div>
           <br /><br />      

        <div className="flex gap-[30px]">
          <div className=" w-[1046px] h-[292px]  bg-white hover:bg-gray-300 ">
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] mt-[22px] ml-[19px] "></div>
            <h3 className=" w-[135px] h-[24px] font-bold text-base text-[#252B42] ml-[19px] mt-5">training Courses</h3>
            <div className="w-[50px] h-[2px] bg-[#E74040] ml-[19px] mt-5"></div>
            <p className=" w-[222px] h-[60px] text-[#737373] font-normal text-sm ml-[19px] mt-5"  >The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
          <div className=" w-[1046px] h-[292px] bg-white  hover:bg-gray-300">
          <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8] mt-[22px] ml-[19px] "></div>
          <h3 className=" w-[168px] h-[24px] font-bold text-base text-[#252B42] ml-[19px] mt-5">2,769 online courses</h3>
          <div className="w-[50px] h-[2px] bg-[#E74040] ml-[19px] mt-5"></div>
          <p className=" w-[222px] h-[60px] text-[#737373] font-normal text-sm ml-[19px] mt-5"  >The gradual accumulation of information about atomic and small-scale behaviour...</p>


          </div>
          <div className=" w-[1046px] h-[292px]  bg-[#23A6F0] hover:bg-blue-500">
            
          <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFFFFF] mt-[22px] ml-[19px] "></div>
          <h3 className=" w-[135px] h-[24px] font-bold text-base text-white ml-[19px] mt-5">training Courses</h3>
            <div className="w-[50px] h-[2px] bg-white ml-[19px] mt-5"></div>
            <p className=" w-[222px] h-[60px] text-white font-normal text-sm ml-[19px] mt-5"  >The gradual accumulation of information about atomic and small-scale behaviour...</p>
          
          </div>
        </div>
    </div>


  </div> 

)
}