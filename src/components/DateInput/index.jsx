const DateInput = ({ labelContent }) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return (
    <>
      <label htmlFor={id}>{labelContent}</label>
      <input type="date" id={id} />
    </>
  );
};

export default DateInput;
