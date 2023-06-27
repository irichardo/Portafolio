export async function getPostsData(postId:number){
    try{
        const res = await fetch('http://localhost:3001/posts')
        //ESTOY PIDIENDO LOS DATOS
        const data = await res.json();
        return data[postId-1];
    }
    catch(error:any){
        throw new Error ('Fallo en la solicitud'+ ' ' + error.message)
    }
}

export async function getPostDetails() {
    const res = await fetch('http://localhost:3001/data')
    const data = await res.json()
    return data;
}