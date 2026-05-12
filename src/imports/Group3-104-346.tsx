import imgImage4 from "figma:asset/fc85fcc20a8849487be2262e0bb6557038d96c3f.png";
import imgImage5 from "figma:asset/d4cd0887a56d4fb05e86c91393ae02753b964c31.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[777px] left-0 top-0 w-[1439px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute bg-[#5b5d7b] h-[238px] left-0 top-[777px] w-[1439px]" />
      <div className="absolute h-[370px] left-[268px] top-[577px] w-[903px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[21px] left-[374px] top-[289px] w-[160px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[21px] left-[374px] top-[337px] w-[160px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[30px] left-[339px] top-[385px] w-[189px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[30px] left-[345px] top-[435px] w-[189px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[30px] left-[345px] top-[485px] w-[189px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[30px] left-[345px] top-[521px] w-[189px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[64px] left-[589px] top-[337px] w-[397px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[64px] left-[760px] top-[415px] w-[397px]" />
      <div className="absolute bg-[#fff6f6] blur-[6px] h-[84px] left-[710px] top-[210px] w-[447px]" />
    </div>
  );
}