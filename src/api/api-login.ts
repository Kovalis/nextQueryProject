import axios from 'axios'

// interface ILogin {
//   id: number
// }

export async function getLogin() {
  try {
    console.log('ss')
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts')
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}
