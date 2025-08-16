"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <>
      <div className="footer footer-nav fixed flex justify-center items-center bottom-0 h-[100px] max-w-md w-full border-2 border-gray-300">
        <div className="grid grid-cols-5 gap-6">
          <Link href="/" className={`footer-item flex flex-col items-center p-3 rounded-4xl ${pathname == "/" ? "transition duration-300 scale-125" : ""} `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
              />
            </svg>
            {/* <span className="font-semibold text-sm">Home</span> */}
          </Link>
          <Link href="/tracker" className={`footer-item flex flex-col items-center p-3 rounded-4xl ${pathname == "/tracker" ? "transition duration-300 scale-125" : ""} `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 21q-.425 0-.712-.288T2 20t.288-.712T3 19h18q.425 0 .713.288T22 20t-.288.713T21 21zm1.5-3q-.625 0-1.062-.437T3 16.5v-4q0-.625.438-1.062T4.5 11t1.063.438T6 12.5v4q0 .625-.437 1.063T4.5 18m5 0q-.625 0-1.062-.437T8 16.5v-9q0-.625.438-1.062T9.5 6t1.063.438T11 7.5v9q0 .625-.437 1.063T9.5 18m5 0q-.625 0-1.062-.437T13 16.5v-6q0-.625.438-1.062T14.5 9t1.063.438T16 10.5v6q0 .625-.437 1.063T14.5 18m5 0q-.625 0-1.062-.437T18 16.5v-12q0-.625.438-1.062T19.5 3t1.063.438T21 4.5v12q0 .625-.437 1.063T19.5 18"
              />
            </svg>{" "}
            {/* <span className="font-semibold text-sm">Tracking</span> */}
          </Link>
          <Link href="/chat" className={`footer-item flex flex-col items-center p-3 rounded-4xl ${pathname == "/chat" ? "transition duration-300 scale-125": ""} `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 9h6q.425 0 .713-.288T15 8t-.288-.712T14 7H8q-.425 0-.712.288T7 8t.288.713T8 9m0 4h3q.425 0 .713-.288T12 12t-.288-.712T11 11H8q-.425 0-.712.288T7 12t.288.713T8 13m9 4h-2q-.425 0-.712-.288T14 16t.288-.712T15 15h2v-2q0-.425.288-.712T18 12t.713.288T19 13v2h2q.425 0 .713.288T22 16t-.288.713T21 17h-2v2q0 .425-.288.713T18 20t-.712-.288T17 19zM6 17l-2.15 2.15q-.25.25-.55.125T3 18.8V5q0-.825.588-1.412T5 3h12q.825 0 1.413.588T19 5v4.35q0 .3-.213.488t-.512.162q-1.275-.05-2.437.388T13.75 11.75q-.9.925-1.35 2.088t-.4 2.437q.025.3-.175.513T11.35 17z"
              />
            </svg>
            {/* <span className="font-semibold text-sm">Chat</span> */}
          </Link>
          <Link href="/community" className={`footer-item flex flex-col items-center p-3 rounded-4xl ${pathname == "/community" ? "transition duration-300 scale-125" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M1 18q-.425 0-.712-.288T0 17v-.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0q-.425 0-.712-.288T6 17v-.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V17q0 .425-.287.713T17 18zm12.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V17q0 .425-.288.713T23 18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"
              />
            </svg>
            {/* <span className="font-semibold text-sm">Community</span> */}
          </Link>
          <Link href="/wellness" className={`footer-item flex flex-col items-center p-3 rounded-4xl ${pathname == "/wellness" ? "transition duration-300 scale-125" : ""} `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 22q-.825 0-1.412-.587T7 20v-3H4q-.825 0-1.412-.587T2 15v-2h6.45l1.7 2.55q.125.2.35.325t.475.125q.325 0 .6-.2t.375-.5l1.35-4.05l.85 1.3q.15.2.375.325T15 13h7v2q0 .825-.588 1.413T20 17h-3v3q0 .825-.587 1.413T15 22zm1.7-9.25l-.875-1.3q-.125-.2-.35-.325T9 11H2V9q0-.825.588-1.412T4 7h3V4q0-.825.588-1.412T9 2h6q.825 0 1.413.588T17 4v3h3q.825 0 1.413.588T22 9v2h-6.475l-1.7-2.55q-.125-.2-.35-.325T13 8q-.325 0-.587.2t-.363.5z"
              />
            </svg>
            {/* <span className="font-semibold text-sm">Wellness</span> */}
          </Link>
        </div>
      </div>
    </>
  );
}
