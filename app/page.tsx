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
    <Transaksi />
    </>
  );
}

function Transaksi() {
  return(
    <div className="bg-slate-100 w-screen h-screen">
        <div className="bg-[#007FFF] w-[120px] h-screen rounded-tr-[10px] rounded-br-[10px]">
        <div className="bg-slate-300 w-[50px] h-[37px] absolute top-[5px] left-[6px] translate-x-1/2 translate-y-2/2 ml-[0px]"></div>
        <div className="bg-[#007FFF] w-[62px] h-[53px] absolute top-[30px] left-[0px] translate-x-1/2 translate-y-1/2 ml-[-5px] rounded-[10px]">
        <Image
          src= {"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3'/%3E%3C/svg%3E"}
          className="w-[80px] h-[30px] mt-[5px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
          <p className="ml-[9px] mt-[-3px] font-semibold text-[10px] text-[#FCFCFC]">Beranda</p>
          </div>
          <div className="bg-blue-400 w-[62px] h-[53px] absolute top-[-20px] left-[0px] translate-x-1/2 translate-y-[145px] ml-[-5px] rounded-[10px]">
        <Image
           src= {"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M13.5 12.423q-.846 0-1.423-.577t-.577-1.423T12.077 9t1.423-.577T14.923 9t.577 1.423t-.577 1.423t-1.423.577m-6.192 3.193q-.667 0-1.141-.475q-.475-.475-.475-1.141V6.846q0-.666.475-1.14t1.14-.475h12.385q.667 0 1.141.474t.475 1.141V14q0 .666-.475 1.14q-.474.476-1.14.476zm1-1h10.384q0-.672.475-1.144q.474-.472 1.14-.472V7.846q-.67 0-1.142-.474q-.473-.475-.473-1.141H8.308q0 .671-.475 1.143q-.474.472-1.14.472V13q.67 0 1.143.475q.472.474.472 1.14m10.038 4H4.308q-.667 0-1.141-.474q-.475-.475-.475-1.141V8.192h1V17q0 .23.192.423q.193.193.424.193h14.038zm-11.038-4h-.616V6.232h.616q-.25 0-.433.183t-.183.432V14q0 .25.183.433t.433.183'/%3E%3C/svg%3E"}
          className="w-[80px] h-[30px] mt-[5px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
           <p className="ml-[6px] mt-[-4px] font-semibold text-[10px] text-[#FCFCFC]">Transaksi</p>
           </div>
           <div className="bg-[#007FFF] w-[62px] h-[53px] absolute top-[-25px] left-[0px] translate-x-1/2 translate-y-[218px] ml-[-5px] rounded-[10px]">
        <Image
           src= {"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'%3E%3Cpath fill='white' d='M8 8.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 3.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m3-1.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3zm5.5 4h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5'/%3E%3C/svg%3E"}
          className="w-[80px] h-[30px] mt-[5px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
           <p className="ml-[19px] mt-[0px] font-semibold text-[10px] text-[#FCFCFC]">Data</p>
           </div>
           <div className="bg-[#007FFF] w-[62px] h-[53px] absolute top-[40px] left-[0px] translate-x-1/2 translate-y-[220px] ml-[-5px] rounded-[10px]">
        <Image
           src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1'/%3E%3C/svg%3E"}
          className="w-[80px] h-[30px] mt-[5px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
           <p className="ml-[5px] mt-[0px] font-semibold text-[10px] text-[#FCFCFC]">Pengguna</p>
           </div>
           <div className="bg-[#007FFF] w-[62px] h-[53px] absolute top-[68px] left-[0px] translate-x-1/2 translate-y-[260px] ml-[-5px] rounded-[10px]">
        <Image
           src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'%3E%3Cpath fill='white' d='M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176Z'/%3E%3C/svg%3E"}
          className="w-[80px] h-[30px] mt-[5px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
           <p className="ml-[16px] mt-[0px] font-semibold text-[10px] text-[#FCFCFC]">Rekap</p>
           </div>
           <div className="bg-[#007FFF] w-[62px] h-[53px] absolute bottom-[50px] left-[0px] translate-x-1/2 translate-y-1/2 ml-[-5px] rounded-[10px]">
        <Image
           src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z'/%3E%3C/svg%3E"}
          className="w-[80px] h-[30px] mt-[5px]"
          width={0}
          height={0}
          alt={"gambar"}
          unoptimized
          />
           <p className="ml-[13px] mt-[0px] font-semibold text-[10px] text-[#FCFCFC]">Keluar</p></div>
           <div className="bg-yellow-300 w-[1158px] h-[65px] absolute top-[-3px] left-[60px] ml-[60px]">
            <div className="bg-red-600 w-[120px] h-[30px] mt-[12px] ml-[10px] text-[25px]">Transaksi</div>
            <div className="bg-[#FCFCFC] w-[120px] h-[17px] mt-0px] ml-[10px]">
            <div className="bg-purple-500 w-[120px] h-[17px] flex">
              <div className="bg-black w-[30px] h-[17px]">
              <div className="bg-blue-300 w-[80px] h-[17px] ml-[25px]">
                <p className="ml-[10px] text-semibold text-[14px]">Tanggal</p></div> 
              </div>  
              </div>  
            </div>
            
           </div>
        </div>
    </div> 
  );
}