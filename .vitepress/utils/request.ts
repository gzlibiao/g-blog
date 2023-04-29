export const get = async <T>(url: string): Promise<T> => {
    return await (await fetch(url)).json()
}
export const post = async <T>(url: string, data: {}): Promise<T> => {
    return await (
        await fetch(url, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    ).json()
}

export const postBlob = async <T, D>(url: string, data: Record<string, D>): Promise<T> => {
    let body: FormData | null = null;
    if (!(data instanceof FormData)) {
        const fd = new FormData()
        Object.keys(data).forEach((o: string): void => {
            fd.append(o, data[o] as Blob)
        })
        body = fd
    }
    return await (
        await fetch(url, {
            method: 'post',
            body,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    ).json()
}

export const del = async <T>(url: string): Promise<T> => {
    return await (
        await fetch(url, {
            method: 'delete'
        })
    ).json()
}

export const put = async <T>(url: string, data: {}): Promise<T> => {
    return await (
        await fetch(url, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    ).json()
}
