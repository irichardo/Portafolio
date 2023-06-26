export async function getPostsData(postId:number){

    const res = await fetch('http://localhost:3001/posts')
    //ESTOY PIDIENDO LOS DATOS
    const data = await res.json();
    console.log(data[2-1], '✔');
    return data[postId-1];
}

export async function getPostDetails() {
  
    const res = await fetch('http://localhost:3001/data')
    const data = await res.json()
    return data;
}