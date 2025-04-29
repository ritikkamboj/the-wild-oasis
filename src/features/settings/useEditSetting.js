import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";


export function useEditSetting() {

    const queryClient = useQueryClient()
    const { mutate: editSetting, isLoading: isEditing } = useMutation({
        // mutationFn : (newCabin) => createCabin(newCabin)
        mutationFn: updateSetting,
        onSuccess: () => {
            toast.success("Setting Successfully updated ");
            queryClient.invalidateQueries({ queryKey: ["setting"] });

            // reset();
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { editSetting, isEditing }
}
