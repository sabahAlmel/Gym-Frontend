import axios from 'axios'
import env from 'react-dotenv'

export async function fetchGymPlans(){
    try {
        await axios.get(`http://localhost:${env.PORT}/gymPlans/read`) 
        
    } catch (error) {
        console.log(error)
    }
}