const trim = (body, excluded = []) => {
    const trimmedBody = Object.assign({}, body)

    Object.keys(trimmedBody).forEach(key => {
        if (trimmedBody[key] && !excluded.includes(key)) {
            trimmedBody[key] = trimmedBody[key].trim()
        }
    })

    return trimmedBody
}

const check = (body, required = []) => {
    return required.every(key => body[key])
}

export default {
    trim,
    check
}