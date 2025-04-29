import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditSetting } from './useEditSetting';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {

  const { settings :{minBookingLength , maxBookingLength ,maxGuestsPerBooking, breakfastPrice}={}, isLoading } = useSettings() ;

  const { editSetting, isEditing } = useEditSetting() ;

  if(isLoading) return <Spinner/>

  function handleUpdate(e,field)
  {
    const {value} = e.target;
    
    console.log(value,'jai')
    if(!value) return
    // console.log(e.target.value,x)
    let obj={};
    obj[field] = value ;
    editSetting(obj)
  }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e) =>handleUpdate(e,'minBookingLength') } disabled={isEditing} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={(e) =>handleUpdate(e,'maxBookingLength') } disabled={isEditing} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} onBlur={(e) =>handleUpdate(e,'maxGuestsPerBooking') } disabled={isEditing} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={(e) =>handleUpdate(e,'breakfastPrice') } disabled={isEditing} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
