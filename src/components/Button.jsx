export function Button({ text }) {
  return (
    <>
      <button className="bg-button-bg px-14 py-3 border-2 border-solid border-button-bg text-white hover:text-yellow-500 hover:bg-transparent">
        {text}
      </button>
    </>
  );
}
