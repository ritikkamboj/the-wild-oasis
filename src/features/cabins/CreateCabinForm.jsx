// import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow2 from "../../ui/FormRow";
import { BiData } from "react-icons/bi";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

// const FormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm({cabinToEdit ={}, onCloseModal}) {

  const {id:editId , ...editValues} = cabinToEdit ; 
  const isEditSession = Boolean(editId);
  const queryClient = useQueryClient();
console.log(editValues, "jai baabe ki");
  const { register, handleSubmit, reset, getValues, formState } = useForm({defaultValues : isEditSession ? editValues : {} });

  const { errors } = formState;
  console.log(errors);

  const { isCreating, createCabin} = useCreateCabin() ; 
  const { editCabin, isEditing} = useEditCabin() ;


  const isWorking = isCreating || isEditing ; 

  function onSubmit(data) {
    // console.log(data)
    // console.log({...data, image : data.image[0]});
const image = typeof data.image === "string" ? data.image : data.image[0];

    if(isEditSession)
      editCabin({newCabinData : {...data , image }, id: editId}, {onSuccess : (data) => {
        console.log(data)  // here we can access the data returns by mutateFunction , (point to be remembered )
        reset() 
        onCloseModal?.()}});
    else
    createCabin({...data, image}, {onSuccess : (data) => {
      console.log(data)  // here we can access the data returns by mutateFunction , (point to be remembered )
      reset()
      onCloseModal?.() }});
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow2 label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="number"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "This field is Required" })}
        />
      </FormRow2>
      
      <FormRow2 label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}

          {...register("maxCapacity", {
            required: "This field is Required",
            min: { value: 1, message: "The value here must be atleast 1" },
          })}
        />
      </FormRow2>

      

      <FormRow2 label="Regular Price" error={errors?.regularPrice?.message}>
      <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is Required",
            min: { value: 1, message: "The value here must be atleast 1" },
          })}
        />
      </FormRow2>

      
      <FormRow2 label="Discount" error={errors?.discount?.message}>
      <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is Required",
            validate: (value) =>{
              console.log(value)
              return +value <= getValues().regularPrice ||
              "discount must be less then regularPrice"
          }})}
        />
      </FormRow2>

      
      <FormRow2 label="Description For Website" error={errors?.description?.message}>
      <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "This field is Required" })}
        />
      </FormRow2>

      
     

      <FormRow2 label="Cabin Photo">
        
        <FileInput id="image" accept="image/*"  {...register("image", { required: isEditSession ? false :  "This field is Required" })} />
      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button onClick={() =>onCloseModal?.()} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit Cabin" : "Create New Cabin"}</Button>
      </FormRow2>
    </Form>
  );
}

export default CreateCabinForm;
