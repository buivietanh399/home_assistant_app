// Hàm gọi API sử dụng phương thức GET

const BASE_URL_BACKEND = 'http://192.168.0.2:8080'

export async function getDataBackend(url, accessToken) {
    try {
        const response = await fetch(BASE_URL_BACKEND + url, {
            headers: {
                'Authorization': `${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Không thể lấy dữ liệu từ API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API:' + error + 'url: ' + url);
        return null;
    }
}

export async function deleteDataBackend(url, accessToken) {
    try {
        const response = await fetch(BASE_URL_BACKEND + url, {
            method: 'DELETE',
            headers: {
                'Authorization': `${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Không thể xóa dữ liệu từ API');
        }
    } catch (error) {
        console.error('Lỗi khi gọi API:' + error + 'url: ' + url);
        return null;
    }
}

// Hàm gọi API sử dụng phương thức POST
export async function postDataBackend(url, body, accessToken) {
    try {
        const response = await fetch(BASE_URL_BACKEND + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${accessToken}`
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Không thể gửi dữ liệu đến API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API:' + error + 'url: ' + url);
        return null;
    }
}

// Hàm gọi API sử dụng phương thức PUT
export async function putDataBackend(url, body, accessToken) {
    try {
        const response = await fetch(BASE_URL_BACKEND + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${accessToken}`
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Không thể cập nhật dữ liệu thông qua API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API:' + error + 'url: ' + url);
        return null;
    }
}
