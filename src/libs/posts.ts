export async function getPostsData(postId:number){
    try{
        const res = await fetch('https://fakeapi-40dz.onrender.com/posts')
        //ESTOY PIDIENDO LOS DATOS
        const data = await res.json();
        return data[postId-1];
    }
    catch(error:any){
        throw new Error ('Fallo en la solicitud'+ ' ' + error.message)
    }
}

export async function getPostDetails() {
    const res = await fetch('https://fakeapi-40dz.onrender.com/data')
    const data = await res.json()
    return data;
}