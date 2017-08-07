// client-side js

var output = document.getElementById('output-container');


document.getElementById('file-analyze-form').onsubmit = function(event) {
  event.preventDefault();
  
  if (event.target['file-input'].value) {
    var userFile = new FormData(document.getElementById('file-analyze-form'));

    fetch('/filedata', { method: 'POST', body: userFile }).then( function(response) {
      return response.json();
    }).then( function(fileData) {
      if (fileData.hasOwnProperty('buffer')) {
        fileData.buffer = { object: 'buffer data ommited from harness' };
      }
      output.innerHTML = '<pre id="output">' + JSON.stringify(fileData, null, '  ') + '</pre>';
    });
  }
}