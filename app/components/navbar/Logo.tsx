'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer" 
    //   src="/images/logo.png" 
    //   height="100" 
    //   width="100" 
    //   alt="Logo" 
    // />
    <p className="font-bold text-lg hidden md:block cursor-pointer" onClick={() => router.push('/')} >Exam Paper Hub</p>
   );
}
 
export default Logo;
