import axiosClient from "./axiosClient";

export const API_TASK_URL = "http://localhost:5000/tasks";

const taskApi = {
  // Fetch all task
  fetch: () => {
    return axiosClient.get(API_TASK_URL);
  },
  // Get task by Id
  getTaskById: (id) => {
    return axiosClient.get(`${API_TASK_URL}/${id}`);
  },
  // Delete task
  delete: (id) => {
    return axiosClient.delete(`${API_TASK_URL}/${id}`);
  },
  // Update task
  update: (id, body) => {
    return axiosClient.put(`${API_TASK_URL}/${id}`, body);
  },
  // Add task
  add: (body) => {
    return axiosClient.post(`${API_TASK_URL}`, body);
  },
};
export default taskApi;
