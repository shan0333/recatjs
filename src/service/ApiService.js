import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    isValidCard(card) {
        return axios.get(USER_API_BASE_URL + '/' + card.cardNo);
    }

    isValidEmailAndPhone(card) {
        return axios.get(USER_API_BASE_URL + '/' + card.email + '/' + card.phone);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();
