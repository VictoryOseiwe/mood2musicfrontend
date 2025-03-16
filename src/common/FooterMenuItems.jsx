export default function FooterMenuItem({
  title,
  first,
  second,
  third,
  fourth,
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
  firstClick,
  secondClick,
  thirdClick,
  fourthClick,
}) {
  return (
    <>
      <div>
        <h4>{title}</h4>
        <ul>
          <li onClick={firstClick}>
            <a href={firstLink}>{first}</a>
          </li>
          <li onClick={secondClick}>
            <a href={secondLink}>{second}</a>
          </li>
          <li onClick={thirdClick}>
            <a href={thirdLink}>{third}</a>
          </li>
          <li onClick={fourthClick}>
            <a href={fourthLink}>{fourth}</a>
          </li>
        </ul>
      </div>
    </>
  );
}
