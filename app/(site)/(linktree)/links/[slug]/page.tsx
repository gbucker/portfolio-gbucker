function redirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const variableValue = (urlParams.get('url'))
  if (variableValue !== null) {
    const decodedURL = decodeURI(variableValue);
    return window.open(decodedURL);
  } else {
    return window.open('/links')
  }
}

redirect()