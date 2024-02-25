export const Contact = ({ name, number, onButtonClick }) => {
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={onButtonClick}>
        Delete
      </button>
    </div>
  );
};
