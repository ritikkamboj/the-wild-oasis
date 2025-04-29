import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinsApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {

    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        // mutationFn : (id) => deleteCabins(id),
        mutationFn: deleteCabinsApi,
        onSuccess: () => {
            toast.success("Cabin Deleted Successfully ");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),

        // here in above casse mutationFn call the function with id internally
    });
    return { isDeleting, deleteCabin }
}
