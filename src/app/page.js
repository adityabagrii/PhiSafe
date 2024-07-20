export default function Home() {
  return (
    <div className="min-h-[93dvh] bg-[rgb(9,14,25)] text-white font flex flex-col justify-center items-center">
      <h1 className="text-[3vw] font-bold">Welcome to PhiSafe!</h1>
      <p className="text-[1.2vw]">Phish Out Fraud</p>

      <div className="textin my-4">
        <form action="" className="flex flex-col w-[50vw]">
          <div className="inp">
            <input className="w-full rounded-xl px-5 py-2 text-black" placeholder="Enter Query or the website URL" />
          </div>
          <div className="flex my-4 justify-center items-center gap-4">
            <button className="w-[10vw] text-[1vw] bg-white px-4 py-2 rounded-lg text-black hover:text-white hover:bg-[#363636] transition-all duration-300">Ask Query</button>
            <button className="w-[10vw] text-[1vw] bg-white px-4 py-2 rounded-lg text-black hover:text-white hover:bg-[#282828] transition-all duration-300">Verify URL</button>
          </div>
        </form>
      </div>
    </div>
  );
}
