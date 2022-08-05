import SelectDropDown from '../SelectDropDown';
import InputBlock from '../InputBlock';

const AddressFieldset = () => {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <InputBlock labelContent="Street" elementType="text" />
      <InputBlock labelContent="City" elementType="text" />
      <SelectDropDown labelContent="State" />
      <InputBlock labelContent="Zip Code" elementType="number" />
    </fieldset>
  );
};

export default AddressFieldset;
