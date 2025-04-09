export const sendSuccess = (res, message, data = {}, status = 200) => {
    return res.status(status).json({ message, data });
  };
  
  export const sendError = (res, err) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({ message });
  };
  