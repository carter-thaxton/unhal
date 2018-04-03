
function unhal(data) {
  if (isArray(data)) {
    return data.map(unhal)
  } else if (isObject(data)) {
    var d = Object.assign({}, data)
    delete d._links

    if (d._embedded) {
      Object.assign(d, unhal(d._embedded))
      delete d._embedded
    }

    Object.keys(d).forEach(k => { d[k] = unhal(d[k]) })

    return d
  } else {
    return data
  }
}

function isObject(a) {
  return (!!a) && (a.constructor === Object)
}

function isArray(a) {
  return (!!a) && (a.constructor === Array)
}


module.exports = unhal
