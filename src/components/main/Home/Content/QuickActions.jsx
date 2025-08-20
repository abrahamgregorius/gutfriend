export default function QuickActions() {
  return (
    <>
      <div className="quick-actions flex flex-col gap-4">
        <div className="quick-actions-header">
          <span className="text-2xl text-gray-700">Quick Actions</span>
        </div>
        <div className="quick-actions-main">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid-item w-full flex flex-col gap-1 text-white justify-center items-center min-h-[6rem] from-[#3aca59] to-[#079726] bg-gradient-to-r rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M11 13v3q0 .425.288.713T12 17t.713-.288T13 16v-3h3q.425 0 .713-.288T17 12t-.288-.712T16 11h-3V8q0-.425-.288-.712T12 7t-.712.288T11 8v3H8q-.425 0-.712.288T7 12t.288.713T8 13zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>
              <span className="font-light">Log Symptoms</span>
            </div>
            <div className="grid-item w-full flex flex-col gap-1 text-white justify-center items-center min-h-[6rem] from-[#daa84c] to-[#ee8c0b] bg-gradient-to-r rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M7 22q-.425 0-.712-.288T6 21v-8.15q-1.35-.35-2.175-1.425T3 9V3q0-.425.288-.712T4 2t.713.288T5 3v5h1V3q0-.425.288-.712T7 2t.713.288T8 3v5h1V3q0-.425.288-.712T10 2t.713.288T11 3v6q0 1.35-.825 2.425T8 12.85V21q0 .425-.288.713T7 22m10 0q-.425 0-.712-.288T16 21v-8.525q-1.35-.45-2.175-1.887T13 7.325Q13 5.1 14.175 3.55T17 2t2.825 1.562T21 7.35q0 1.825-.825 3.25T18 12.475V21q0 .425-.288.713T17 22"
                />
              </svg>
              <span className="font-light">Track Meal</span>
            </div>
            <div className="grid-item w-full flex flex-col gap-1 text-white justify-center items-center min-h-[6rem] from-[#aa4ac7] to-[#a108c0] bg-gradient-to-r rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M10.5 15v1q0 .625.438 1.063T12 17.5t1.063-.437T13.5 16v-1h1q.625 0 1.063-.437T16 13.5t-.437-1.062T14.5 12h-1v-1q0-.625-.437-1.062T12 9.5t-1.062.438T10.5 11v1h-1q-.625 0-1.062.438T8 13.5t.438 1.063T9.5 15zM7 21q-.825 0-1.412-.587T5 19V8q0-.825.588-1.412T7 6h10q.825 0 1.413.588T19 8v11q0 .825-.587 1.413T17 21zM7 5q-.425 0-.712-.288T6 4t.288-.712T7 3h10q.425 0 .713.288T18 4t-.288.713T17 5z"
                />
              </svg>
              <span className="font-light">Medication</span>
            </div>
            <div className="grid-item w-full flex flex-col gap-1 text-white justify-center items-center min-h-[6rem] from-[#e2418c] to-[#e90893] bg-gradient-to-r rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFFFFF"
                  d="M4.3 19.7q-.275-.275-.275-.7t.275-.7l1.375-1.375q-.8-1.025-1.237-2.275T4 12q0-3.35 2.325-5.675T12 4h6q.825 0 1.413.587T20 6v6q0 3.35-2.325 5.675T12 20q-1.4 0-2.637-.437T7.1 18.325L5.7 19.7q-.275.275-.7.275t-.7-.275m4.05-4.05q.275.325.7.312t.725-.312l3.925-3.925q.3-.3.3-.713t-.3-.712q-.275-.275-.7-.275t-.7.275l-3.95 3.95q-.275.275-.275.688t.275.712"
                />
              </svg>
              <span className="font-light">Wellness Tips</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
