const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
  } catch {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
