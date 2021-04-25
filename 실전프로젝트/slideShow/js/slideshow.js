var imgs = document.querySelectorAll('#container > img'); // document.querySelector('#container').getElementsByTagName('img')
var prev = document.querySelector('#prev'); // 이전 <
var next = document.querySelector('#next'); // 다음 >

// for (var i = 0; i < imgs.length; i++) {
//     imgs[i].style.display = 'none';
// }

// imgs[0].style.display = 'block'; // 첫번째꺼만 보이게


// prev.onclick = () => {
//     var curImgIdx;
//     for (var i = 0; i < imgs.length; i++) {
//         if (imgs[i].style.display == 'block') {
//             imgs[i].style.display = 'none';
//             curImgIdx = i;
//         }
//     }

//     var targetIdx = curImgIdx - 1 < 0 ? imgs.length -1 : curImgIdx - 1;
//     imgs[targetIdx].style.display = 'block';
// };

// next.onclick = () => {
//     var curImgIdx;
//     for (var i = 0; i < imgs.length; i++) {
//         if (imgs[i].style.display == 'block') {
//             imgs[i].style.display = 'none';
//             curImgIdx = i;
//         }
//     }

//     var targetIdx = curImgIdx + 1 == imgs.length ? 0 : curImgIdx + 1;
//     imgs[targetIdx].style.display = 'block';
// };

/**
 * showSlide(idx);
 * 함수를 만들어서 비슷한 함수 줄이기
 */
var showImgIdx = 0; // 보일 이미지 index 변수
showSlide(showImgIdx);

prev.onclick = () => {
    showImgIdx = showImgIdx - 1 < 0 ? imgs.length-1 : --showImgIdx;
    showSlide(showImgIdx);
};

next.onclick = () => {
    showImgIdx = showImgIdx + 1 == imgs.length ? 0 : ++showImgIdx;
    showSlide(showImgIdx);
};

function showSlide(idx) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    } // 이미지 요소 모두 display = none으로 바꾸고
    imgs[idx].style.display = 'block';
}
