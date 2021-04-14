document.querySelector('#open').addEventListener('click', showDetail);
document.querySelector('#close').addEventListener('click', hideDetail);

function showDetail() {
	document.querySelector('#open').style.display = 'none';
	document.querySelector('.detail').style.display = 'block';
}

function hideDetail() {
	document.querySelector('#open').style.display = 'block';
	document.querySelector('.detail').style.display = 'none';
}