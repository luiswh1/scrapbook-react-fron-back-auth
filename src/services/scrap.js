import api from './api';

class Scrap {
    getConfig() {
        return {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        };
    }

    async getScraps() {
        const response = await api.get('scraps', this.getConfig());

        return response.data;
    }

    async postScrap(titulo, descricao) {
        const response = await api.post('scraps', {
            title: titulo,
            longText: descricao,
            },
            this.getConfig()
        );

        return response.data;
    }

    async delete(id) {
        const response = await api.delete(`scraps/${id}`, this.getConfig());

        return response.data;
    }

    async login(email, password) {
        const response = await api.post('auth', {
            email,
            password,
        });

        return response.data;
    }

    async updateScrap(id, titulo,descricao) {
        const response = await api.put(`scraps/${id}`,  {
            title: titulo,
            longText: descricao,
        }, this.getConfig());

        return response.data;
    }
}

export default new Scrap();