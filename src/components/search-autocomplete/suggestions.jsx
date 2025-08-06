export default function Suggestions({ data, handleClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={`${item}-${index}`}>
              {item}
            </li> // ✅ clé unique
          ))
        : null}
    </ul>
  );
}
