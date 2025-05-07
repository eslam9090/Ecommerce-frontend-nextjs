import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className=" display flex flex-col md:flex-row gap-60 items-center h-[100vh]">
        <div className="">
          <Image
            src={
              "https://images.unsplash.com/photo-1601714582667-574b826b99a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="background"
            width={400}
            height={800}
            className="h-[100vh] object-cover w-900 md:w-[400px] md:h-[100vh]"
          />
        </div>
        <div className="">
          <SignIn />
        </div>
      </div>
    </section>
  );
  {
  }
}
