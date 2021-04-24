		var isOpen = false; // 상세정보 보이는지 여부 
		
		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		// 상세보기 추가
		var view = document.querySelector('#view');
		//view.addEventListener('click', () => {document.getElementById('detail').style.display = 'block';})
		view.addEventListener('click', function() {
			//document.getElementById('detail').style.display = 'block';
			//document.querySelector('#detail').style.display = 'block';
			if (isOpen == false) {
				document.querySelector('#detail').style.display = 'block';
				view.innerText = '상세 설명 닫기';
				isOpen = true;
			} else {
				document.querySelector('#detail').style.display = 'none';
				view.innerText = '상세 설명 보기';
				isOpen = false;
			}
		});
		
