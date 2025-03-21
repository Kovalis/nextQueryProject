import axios from 'axios'

// interface ILogin {
//   id: number
// }

export async function getLogin() {
  try {
    const res = await axios.post(`${process.env.API_URL}/posts`)
    return res.data
  } catch (e) {
    console.error(e)
    throw e
  }
}
