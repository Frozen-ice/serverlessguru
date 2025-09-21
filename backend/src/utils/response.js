const createResponse = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
};

const success = (data, statusCode = 200) => {
  return createResponse(statusCode, {
    success: true,
    data
  });
};

const error = (message, statusCode = 500) => {
  return createResponse(statusCode, {
    success: false,
    error: message
  });
};

module.exports = {
  createResponse,
  success,
  error
};
