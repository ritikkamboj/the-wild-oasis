import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";


export function useCreateCabin() {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        // mutationFn : (newCabin) => createCabin(newCabin)
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("Cabin Created Successfully ");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });

            // reset();
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { isCreating, createCabin }

}
