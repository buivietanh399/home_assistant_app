// Hàm gọi API sử dụng phương thức GET

const BASE_URL = 'http://192.168.187.128:8123'

export async function getData(url, accessToken) {
    try {
        const response = await fetch(BASE_URL + url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Không thể lấy dữ liệu từ API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        return null;
    }
}

// Hàm gọi API sử dụng phương thức POST
export async function postData(url, body, accessToken) {
    try {
        const response = await fetch(BASE_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Không thể gửi dữ liệu đến API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        return null;
    }
}

// Hàm gọi API sử dụng phương thức PUT
export async function putData(url, body, accessToken) {
    try {
        const response = await fetch(BASE_URL + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error('Không thể cập nhật dữ liệu thông qua API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        return null;
    }
}
