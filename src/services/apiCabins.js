import supabase, { supabaseUrl } from "./supabase";

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

export async function createEditCabin(newCabin, id) {
    // https://rmbreqytkekbinbdiywb.supabase.co/storage/v1/object/public/cabins-images//cabin-001.jpg

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', "");

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`

    let query = supabase.from("cabins");

    // A) Below code is to create the entry 
    if (!id)
        query = query
            .insert([
                { ...newCabin, image: imagePath },
            ])
            .select().single()

    if (id)
        query = query.update({ ...newCabin, image: imagePath })
            .eq('id', id)
            .select().single()

    const { data, error } = await query;

    if (error) {
        console.log(error)
        throw new Error("Cabin could not be created ")


    }

    // 2. Uploading the image 
    const { error: storageError } = await supabase
        .storage
        .from('cabins-images')
        .upload(imageName, newCabin.image)

    // 3. Deleting the cabin if there is error in uploading the image 
    if (storageError) {

        const { data, error } = await supabase
            .from('cabin')
            .delete()
            .eq('id', data.id)
        console.log(error)
        throw new Error("Cabin image could not be uploaded and the cabin was not created ")



    }
    return data;
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