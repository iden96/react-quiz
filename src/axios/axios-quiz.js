import axios from 'axios'

export default axios.create({
    baseURL: "https://react-quiz-8a9b2.firebaseio.com/"
})