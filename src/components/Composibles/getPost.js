import {ref} from 'vue'

const getPost = (id) => {

    const post = ref(null);

    const error = ref(null);

    const load = async () => {
       
        try{
           
            let data = await fetch('http://localhost:3000/posts/' + this.id)
            
            if(!data.ok){
                
                throw Error('An unknown error has occured')
            }

            post.value = await data.json()

        } catch(err){

            error.value = err.message

            console.log(error.value)

        }
    }

    return{post, error, load}
}

export default getPost