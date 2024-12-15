import { useState } from "react";
import helper from "@/lib/utils/helper";
import Image from "next/image";
import Link from "next/link";

export default function LandscapeMediaText({ block }) {
  const { Color, Image: image, Title, Subtitle, Description } = block;
  const { colorExtractor } = helper;

  const extractedColor = colorExtractor(Color);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={`py-[100px] bg-[${extractedColor.color}]`}
      style={{ color: extractedColor.textColor }}
    >
      <div className="container">
        <div className="grid gap-[50px] grid-cols-3 items-center">
          <div className="col-span-1 relative pb-[110%]">
            <span className="border-[5px] border-[#1B217A] absolute top-[0px] left-[-1px] h-full w-full" />
            <span className="border-[5px] border-[#9A0C16] absolute top-[-14px] left-[-14px] h-full w-full" />
            <Image
              src={process.env.NEXT_PUBLIC_TENANT_API + image?.url}
              width={500}
              height={500}
              className="absolute top-[10px] left-[10px] w-[calc(100%-23px)] h-[calc(100%-20px)] object-cover"
            />
          </div>
          <div className="col-span-2 relative">
            <svg
              className="opacity-10 absolute top-[-50px] right-0"
              version="1.1"
              width="120"
              height="120"
              x="0"
              y="0"
              viewBox="0 0 32 32"
            >
              <g>
                <path
                  d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z"
                  fill="#000000"
                  opacity="1"
                ></path>
              </g>
            </svg>
            {Title && (
              <h2 className="font-secondary mb-[30px] inline-block leading-normal md:text-[60px] lg:text-[50px]">
                {Title}
                <span className="h-[5px] block bg-[#9A0C16] w-full max-w-[150px]" />
              </h2>
            )}

            {Subtitle && <h3 className="text-[20px] opacity-70">{Subtitle}</h3>}

            {Description?.split("<p>").length > 2 ? (
              <div>
                <div
                  className="mt-[30px]"
                  dangerouslySetInnerHTML={{
                    __html:
                      Description.split("<p>")
                        .slice(0, 2)
                        .join("<p class='inline'>") + " [...]",
                  }}
                />
                {/* <button
                  className="group relative hover:text-white transition border-[1px] border-[#ccc] bg-white font-bold mt-[40px] px-[25px] py-[10px] rounded-[30px] overflow-hidden inline-block"
                  onClick={openModal}
                >
                  <span className="bg-[#9A0C16] absolute transition-all ease-[ease] duration-[300ms] left-0 top-0 rounded-full group-hover:w-[calc(100%)] w-[0] h-[50px]"></span>
                  <span className="relative">Read More</span>
                </button> */}
                <div
                  className="inline-block font-bold mt-[50px] border-b-[2px] border-black cursor-pointer"
                  onClick={openModal}
                >
                  View More
                </div>
              </div>
            ) : (
              <>
                {Description && (
                  <div
                    className="mt-[30px]"
                    dangerouslySetInnerHTML={{ __html: Description }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed w-full inset-0 p-[30px] flex items-center justify-center z-[1000]">
          <span
            className="bg-black bg-opacity-50 absolute w-full h-full top-0 left-0 cursor-pointer"
            onClick={closeModal}
          />
          <div className="bg-white relative z-[2[ p-[50px] rounded-lg max-w-[1024px] w-full max-h-[calc(100vh-100px)] overflow-y-auto">
            <svg
              class="opacity-10 absolute top-[0] right-[15px]"
              version="1.1"
              width="70"
              height="70"
              x="0"
              y="0"
              viewBox="0 0 32 32"
            >
              <g>
                <path
                  d="M6.6 19.24c-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69.07-3.77-2.69-7.01-6.28-7.38-1.99-.2-3.97.45-5.44 1.77A7.038 7.038 0 0 0 1 12.43c0 3.3 2.34 6.19 5.6 6.81zM24.71 5.45c-1.98-.2-3.96.45-5.43 1.77a7.037 7.037 0 0 0-2.31 5.21c0 3.3 2.34 6.19 5.6 6.81-.66 1.66-1.7 3.3-3.09 4.88-.44.5-.5 1.22-.14 1.78.28.44.74.68 1.24.68.14 0 .28-.01.42-.06 2.94-.86 9.81-3.91 10-13.69v-.14c0-3.71-2.73-6.87-6.29-7.24z"
                  fill="#000000"
                  opacity="1"
                ></path>
              </g>
            </svg>
            <div dangerouslySetInnerHTML={{ __html: Description }} />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
