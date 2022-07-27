const TextInput = ({ labelContent }) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return (
    <>
      <label htmlFor={id}>{labelContent}</label>
      <input type="text" id={id} />
    </>
  );
};

export default TextInput;
