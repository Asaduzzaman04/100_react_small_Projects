const Loading = () => {
  return <>

<div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
  <div
    className="w-40 h-40 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      className="w-36 h-36 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>
  </div>
</div>

  </>;
};

export default Loading;
