import axios from "axios";

export default {
    getTicket: function(movie,ip){
        const obj = { movie, ip }
        return axios.get("/api/spider/", obj);
    }
};