import supabase from "./supabase";

export async function getCabins() {

    let { data, error } = await supabase
        .from('cabin')
        .select('*')

    if (error) {
        console.log(error)
        throw new Error("there is some Error in fetching the data from cabins db")

    }
    return data;
}

export async function createCabin(newCabin) {

    const { data, error } = await supabase
        .from('cabin')
        .insert([
            { some_column: 'someValue', other_column: 'otherValue' },
        ])
        .select()



    if (error) {
        console.log(error)
        throw new Error("Cabin could not be deleted ")


    }

    export async function deleteCabins(id) {

        const { data, error } = await supabase
            .from('cabin')
            .delete()
            .eq('id', id)


        if (error) {
            console.log(error)
            throw new Error("Cabin could not be deleted ")

        }
        return data;
    }