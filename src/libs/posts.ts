export async function getPostsData(postId:number){
    try{
        const res = await fetch('http://localhost:3001/posts');
        const data = await res.json();
        const contentData =  await getContentData(postId)
        return{ data:data[postId-1], contentData};
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

export async function getContentData(props:number) {
    const res = await fetch(`http://localhost:3001/content/${props}`)
    const data = await res.json()
    return data;
}