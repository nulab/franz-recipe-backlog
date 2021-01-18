module.exports = (Franz) => {
  const getUnreads = () => {
    const e = document.getElementsByClassName('badge--notification');
		if (e && e.length > 0) {
			Franz.setBadge(Number(e[0].innerText));
		} else {
			Franz.setBadge(0)
		}
  };

  Franz.loop(getUnreads);
};
