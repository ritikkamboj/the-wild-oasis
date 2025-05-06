import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";
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
    <Modal.Open opens='cabin-form'>
      <Button>Add New Cabin </Button>
    </Modal.Open>
    <Modal.Window name="cabin-form">
      <CreateCabinForm/>
    </Modal.Window>

    <Modal.Open opens='table'>
      <Button>Show Tables</Button>
    </Modal.Open>
    <Modal.Window name="table">
      <CabinTable/>
    </Modal.Window>
  </Modal>
}


export default AddCabins;
