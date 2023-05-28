export function Post() {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => { 
            console.log(data);
        })
    }}>
        Traer Posts
    </button>
}