module.exports = {
  formatDate: (date, showHour = true) => {
    const pad = (n) => (n < 10 ? '0' : '') + n;

    const newDate = new Date(date);

    if (!showHour) {
      let month = pad(newDate.getMonth() + 1);
      let day = pad(newDate.getDate());
      let year = newDate.getFullYear();

      return day + '/' + month + '/' + year;
    }
    return newDate.toLocaleString();
  }
}
