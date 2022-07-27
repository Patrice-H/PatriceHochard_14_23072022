import TextInput from '../TextInput';
import SelectDropDown from '../SelectDropDown';
import NumberInput from '../NumberInput';

const AddressFieldset = () => {
  return (
    <fieldset className="address">
      <legend>Address</legend>
      <TextInput labelContent="Street" />
      <TextInput labelContent="City" />
      <SelectDropDown labelContent="State" />
      <NumberInput labelContent="Zip Code" />
    </fieldset>
  );
};

export default AddressFieldset;
