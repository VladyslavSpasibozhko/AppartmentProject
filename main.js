const blockImage = document.getElementById('apartPicture');
const footerBlock = document.getElementById('footer');
const buttonUp = footerBlock.querySelector('.upToTop');
const footerText = footerBlock.querySelector('.footer-information-text');
const footerFormBorder = footerBlock.querySelector('.borderLine');


const imgArr = ["http://stroykadoma.org/wp-content/uploads/2016/01/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%8B-70-%D0%BA%D0%B2.-%D0%BC-2.jpg", 
				"https://asart.com.ua/wp-content/uploads/2017/03/Kuhnya-studiya-2watermark.jpg", 
				"http://interika.com.ua/wp-content/uploads/2010/04/kvartira_2.jpg"];


document.addEventListener('DOMContentLoaded', function() {
	const img = document.createElement('img');
		img.src = imgArr[0];
	blockImage.appendChild(img);

	let removeImg = setInterval(remove, 6000);
	currentImage = 0;

	function remove () {
		currentImage++;
		if (currentImage > 2) {
			currentImage = 0
		}
		let img = blockImage.querySelector('img');
		blockImage.removeChild(img);

		let newImg = document.createElement('img');
		newImg.src = imgArr[currentImage];
		blockImage.appendChild(newImg)
	}

	buttonUp.addEventListener('click', (e) => {
		e.preventDefault();
		
		let up = setInterval(()=> {
			window.scrollBy(0, -50);
			let scrolled = window.pageYOffset;

			if (scrolled === 0) {
			clearInterval(up);
			}

			console.log(scrolled)
		}, 10);	
	});


	window.addEventListener('scroll', showFooterForm)

	function showFooterForm () {
		let scrolled = window.pageYOffset;
		
		if (scrolled > 2600) {
			window.removeEventListener('scroll', showFooterForm);
			opacity = 0;
			let addOpacity = setInterval(() => {
				opacity = opacity + 0.05;
				footerText.style.opacity = opacity;
				footerFormBorder.style.opacity = opacity;
				
				if (opacity > 1) {
					clearInterval(addOpacity);
				}
			}, 150);
		}
	};
});



	

