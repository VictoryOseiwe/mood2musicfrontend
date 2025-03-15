export default function Button({ text, buttonClass, buttonOnclick, icon }) {
  return (
    <>
      <button className={buttonClass} onClick={buttonOnclick}>
        {text}
        {icon}
      </button>
    </>
  );
}
