function getMethod() {
   axios({
     method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
     params: {
       _limit: 10
     }
   })
     .then(res => showOutput(res))
     .catch(err => console.error(err));
}

function postMethod() {
  axios
    .post('https://jsonplaceholder.typicode.com/users', {
      title: 'post',
      completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function putMethod() {
  axios
    .put('https://jsonplaceholder.typicode.com/users', {
      title: 'put',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function deleteMethod() {
  axios
    .delete('https://jsonplaceholder.typicode.com/users')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5><span class="colortext">Status: ${res.status}</span></h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      <span class="colortext">Headers</span>
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      <span class="colortext">Data</span>
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
`;
}

document.getElementById('get').addEventListener('click', getMethod);
document.getElementById('post').addEventListener('click', postMethod);
document.getElementById('update').addEventListener('click', putMethod);
document.getElementById('delete').addEventListener('click', deleteMethod);
