import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabins() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((state) => !state)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}><CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/></Modal>}
//     </div>
//   );
// }


function AddCabins()
{
  return <Modal>
    <Modal.Open>
      <Button>Add New Cabin </Button>
    </Modal.Open>
    <Modal.Window>
      <CreateCabinForm/>
    </Modal.Window>
  </Modal>
}


export default AddCabins;
