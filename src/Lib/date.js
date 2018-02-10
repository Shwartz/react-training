export function today() {
  const today = new Date();
  return ((today.getDate() < 10) ? "0" : "") + today.getDate() + "/" + (((today.getMonth() + 1) < 10) ? "0" : "") + (today.getMonth() + 1) + "/" + today.getFullYear();
}

export function time() {
  const time = new Date();
  return ((time.getHours() < 10) ? "0" : "") + time.getHours() + ":" + ((time.getMinutes() < 10) ? "0" : "") + time.getMinutes() + ":" + ((time.getSeconds() < 10) ? "0" : "") + time.getSeconds();
}