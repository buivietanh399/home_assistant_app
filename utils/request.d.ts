declare namespace REQUEST {
    /**
     * Cấm xóa
     */
    type PageParams = {
        page?: number;
        size?: number;
        [key: string]: any;
    };

    type Headers = {
        [key: string]: any;
    };
}
