const InputBlock = ({ labelContent, elementType }) => {
  const regex = / /g;
  const id = labelContent.replace(regex, '-').toLowerCase();

  return (
    <>
      <label htmlFor={id}>{labelContent}</label>
      <input type={elementType} id={id} />
    </>
  );
};

export default InputBlock;
