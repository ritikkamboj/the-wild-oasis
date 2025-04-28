import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {

  const [showForm , setShowForm] = useState(false);
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
    
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={()=> setShowForm((state)=> !state)}>Add New Cabin</Button>
        {showForm && <CreateCabinForm/>}

      </Row>
    </>
  );
}

export default Cabins;
