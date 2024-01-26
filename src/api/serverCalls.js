import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {}
});

// Get Projects
export function getProjects(callback) {
  instance
    .get("/projects")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error.config.method} ${error.config.url}\nMessage: ${error.message}\nData: ${error.response?.data.message}`);
      callback([]);
    });
}

// Get Skills
export function getSkills(callback) {
  instance
    .get("/chips")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error.config.method} ${error.config.url}\nMessage: ${error.message}\nData: ${error.response?.data.message}`);
      callback([]);
    });
}

// Get Work
export function getWork(callback) {
  instance
    .get("/work")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(`ERROR: ${error.config.method} ${error.config.url}\nMessage: ${error.message}\nData: ${error.response?.data.message}`);
      callback([]);
    });
}

// Get Work
export function getAbout(callback) {
  instance
    .get("/about")
    .then((response) => {
      callback(response.data[0]);
    })
    .catch((error) => {
      console.log(`ERROR: ${error.config.method} ${error.config.url}\nMessage: ${error.message}\nData: ${error.response?.data.message}`);
      callback({});
    });
}
