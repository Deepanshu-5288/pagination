
function utils(data) {
    const userPerPage = 10;
    const pages = Math.ceil(data.length / userPerPage);
    const newUsers = Array.from({length: pages}, (_, index) => {
        const start = index * userPerPage;
        return data.slice(start, start + userPerPage);
    })
  return (
    newUsers
  )
}

export default utils