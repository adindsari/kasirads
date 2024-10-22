import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"],
}
);

export default function Page() {
  return (
    <>
    <Login />
    </>
  );
}

function Login() {
  return (
    <div className="bg-[#F8F8FF] w-screen h-screen pl-[320px] pt-[80px] pb-[150px] pr-[90px]">
      <div className="bg-[#FCFCFC] w-[650px] h-[420px] rounded-[20px]">
        <div className="bg-[#FCFCFC] w-[120px] h-[50px] absolute top-[95px] left-1/2 translate-x-1/2 translate-y-1/2 ml-[50px]">
        <h2 className="text-[#007FFF] ml-[3px] mt-[7px] font-semibold text-[25px]">KasirAds</h2></div>
        <div className="bg-[#FCFCFC] w-[300px] h-[70px] absolute top-[150px] left-[507px] translate-x-1/2 translate-y-1/2">
        <h2 className="ml-[40px] mt-[0px] font-medium text-[12px]">Selamat datang kembali silahkan</h2>
        <h2 className="ml-[32px] mt-[0px] font-medium text-[12px]">masukan nama pengguna dan kata</h2>
        <h2 className="ml-[85px] mt-[0px] font-medium text-[12px]">sandi untuk masuk!</h2></div>
        <div className="bg-[#FCFCFC] w-[120px] h-[25px] absolute top-[260px] left-[596px] translate-x-1/2 translate-y-1/2">
        <p className="ml-[9px] mt-[5px] font-reguler text-[12px]">Nama pengguna</p></div>
        <input className="bg-slate-100 w-[300px] h-[32px] absolute top-[285px] left-[507px] translate-x-1/2 translate-y-1/2 rounded-[10px]"></input>
        <input className="bg-slate-100 w-[300px] h-[32px] absolute top-[360px] left-[507px] translate-x-1/2 translate-y-1/2 rounded-[10px]"></input>
        <div className="bg-[#FCFCFC] w-[120px] h-[25px] absolute top-[335px] left-[596px] translate-x-1/2 translate-y-1/2">
        <p className="ml-[9px] mt-[5px] font-reguler text-[12px]">Kata sandi</p></div>
        <button className="bg-[#007FFF] w-[300px] h-[32px] absolute top-[423px] left-[507px] translate-x-1/2 translate-y-1/2 rounded-[10px]">
        <h2 className="ml-[0px] mt-[0px] font-semibold text-[15px]"></h2>
        <p className="text-[#FCFCFC]">Masuk</p></button>
        <div className="bg-[#007FFF] w-[325px] h-[420px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px]">
          <Image
          src= {"/login.png"}
          className="w-[700px] h-[400px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
        </div>
      </div>
    </div>
  );
}
