export function Button({ text }) {
  return (
    <>
      <button className="bg-button-bg flex items-center justify-center border-2 border-solid border-button-bg text-white hover:text-yellow-500 hover:bg-transparent w-[180px] h-[53px]">
        {text}
      </button>
    </>
  );
}
