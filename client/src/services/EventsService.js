import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('events', {
      params: {
        id: search
      }
    })
  },
  show (id) {
    console.log(id)
    return Api().get(`/api/events/${id}`)
  },
  post (event) {
    return Api().post('/api/event', event)
  }
}
