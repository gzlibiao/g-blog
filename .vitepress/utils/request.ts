export const get = async (url:string) => {
  return await (await fetch(url)).json()
}

export const post = async (url:string, data:{}) => {
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

export const postBlob = async (url:string, data:{}) => {
  if (!(data instanceof FormData)) {
    const fd = new FormData()
    Object.keys(data).forEach((o) => {
      fd.append(o, data[o])
    })
    data = fd
  }
  return await (
    await fetch(url, {
      method: 'post',
      body: data as BodyInit,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  ).json()
}

export const del = async (url:string) => {
  return await (
    await fetch(url, {
      method: 'delete'
    })
  ).json()
}

export const put = async (url:string, data:{}) => {
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
