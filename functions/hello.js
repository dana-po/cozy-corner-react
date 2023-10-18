//domain/.netlify/functions/hello

exports.handler = async function () {

  return {
    statusCode: 200,
    body: 'hello',
  }
}



//for BE