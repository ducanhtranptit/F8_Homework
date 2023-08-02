const convertTime = function (ms) {
  const seccond = 1000;
  const minute = 60 * seccond;
  const hour = 60 * minute;
  const day = 24 * hour;

  let days = Math.floor(ms / day);
  ms %= day;

  let hours = Math.floor(ms / hour);
  ms %= hour;

  let minutes = Math.floor(ms / minute);
  ms %= minute;

  let secconds = Math.floor(ms / seccond);
  ms %= seccond;

  let milliseconds = ms;

  let result = "";

  if (days > 0) {
    result += `${days} ngày${days > 1 ? "" : ""}, `;
  }

  if (hours > 0) {
    result += `${hours} giờ${hours > 1 ? "" : ""}, `;
  }

  if (minutes > 0) {
    result += `${minutes} phút${minutes > 1 ? "" : ""}, `;
  }

  if (secconds > 0) {
    result += `${secconds} giây${secconds > 1 ? "" : ""}, `;
  }

  if (milliseconds > 0) {
    result += `${milliseconds} mili giây${milliseconds > 1 ? "" : ""}`;
  }

  if (result.endsWith(", ")) {
    result = result.slice(0, -2);
  }

  return result;
};

console.log(convertTime(1001));
console.log(convertTime(34325055574));
