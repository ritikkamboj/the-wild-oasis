import supabase from "./supabase";

export async function getCabins() {

    let { data, error } = await supabase
        .from('cabin')
        .select('*')

    if (error) {
        console.log("there is some Error in fetching the data from cabins db")

    }
    return data;
}