import axios from './axios';

export default class crud {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    const response = await axios.get(this.path);
    return response;
  }

  async getOne(id) {
    const response = await axios.get(this.path + `/${id}`);
    return response;
  }

  async updateOne(id, body) {
    const response = await axios.patch(this.path + `/${id}`, { ...body });
    return response;
  }

  async deleteOne(id) {
    const response = await axios.delete(this.path + `/${id}`);
    return response;
  }
}
