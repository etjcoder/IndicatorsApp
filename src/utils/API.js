import axios from "axios";

export default {
    getDials: function() {
        return axios.get("/api/dials/session")
    },
    logCall: function(data) {
        console.log("API-HIT")
        console.log(data)
        return axios.post("/api/dials/session", data)
    }
}