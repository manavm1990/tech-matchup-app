// Client-side API service
import ky from "ky";

const BASE_URL = "http://localhost:5000";

export default {
  create(matchup) {
    return ky.post(`${BASE_URL}/matchups`, {
      json: matchup,
    });
  },
  index(type) {
    // Blank type means all tech
    return ky.get(`${BASE_URL}/${type ? type : ""}`).json();
  },
  show(id) {
    return ky.get(`${BASE_URL}/matchups/${id}`).json();
  },
  update(id, techNum) {
    return ky
      .put(`${BASE_URL}/matchups/${id}`, {
        json: { techNum },
      })
      .json();
  },
};
