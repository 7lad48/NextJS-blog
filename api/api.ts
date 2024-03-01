const baseURL = 'https://jsonplaceholder.typicode.com/posts'
export const API = {
    async getPosts(){
        const response = await fetch(baseURL, {
            next: {
                revalidate: 120,
            }
        })
        return response.json()
    },
    async getPost(id: string){
        const response = await fetch(`${baseURL}/${id}`, {
            next: {
                revalidate: 120,
            }
        })
        return response.json()
    }
}