import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b61c21ec2a8645a3bd3a31bdbe10c45f'
    }
})