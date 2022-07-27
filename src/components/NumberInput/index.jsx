const NumberInput = ({ labelContent }) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return (
    <>
      <label htmlFor={id}>{labelContent}</label>
      <input type="number" id={id} />
    </>
  );
};

export default NumberInput;
