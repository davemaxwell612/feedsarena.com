import {ref} from 'vue'

const getPosts = () => {

    const posts = ref([ ])

    const error = ref[null]

    const load = async () => {

        try {
        
            let data = await fetch('http://localhost:3000/posts')

            if(!data.ok){

                throw Error('Something went wrong while trying to load the requested data')
            }

            posts.value = await data.json()

        } catch (error) {
            
            error.value = err.message
            
            console.log(error.value)

        }

    }

    return {error, posts, load}
    
}

export default getPosts