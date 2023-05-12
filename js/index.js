document.addEventListener("DOMContentLoaded", function () {
    
	//canvas lines
	let canvas = document.querySelector("#canvas"),
    	ctx = canvas.getContext("2d"),
    	offset = 0;

    if (document.body.clientWidth < 800) {
    	canvas.width = "90";
    }

    const draw = () => {
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
    	ctx.strokeStyle = "#ffffff";
    	ctx.strokeWidth = 1;
    	ctx.setLineDash([4, 2]);
    	ctx.lineDashOffset = -offset;

    	if (document.body.clientWidth >= 1200) {
    		ctx.fillStyle = "#8cf0ef";
    		ctx.fillRect(50, 6, 9, 9);
    		ctx.fillRect(525, 6, 9, 9);

    		ctx.beginPath();
    		ctx.moveTo(50, 10);
    		ctx.lineTo(10, 10);
    		ctx.lineTo(10, 80);
    		ctx.lineTo(486, 80);
    		ctx.lineTo(485, 10	);
    		ctx.lineTo(525, 10);
    		ctx.stroke();
    	}else if(document.body.clientWidth < 1200){
    		ctx.fillStyle = "#8cf0ef";
    		ctx.fillRect(26, 6, 9, 9);
    		ctx.fillRect(26, 78, 9, 9);

    		ctx.beginPath();
    		ctx.moveTo(26, 10);
    		ctx.lineTo(10, 10);
    		ctx.lineTo(10, 83);
    		ctx.lineTo(26, 83);
    		ctx.stroke();
    	} 
    }

    const march = () => {
  		offset++;
  		if (offset > 16) {
    		offset = 0;
  		}
  		draw();
 	 	setTimeout(march, 20);
	}

	march();

	//balls hover

	if (document.body.clientWidth > 1200) {

        let ballsContainer = document.querySelector(".balls"),
            score = document.querySelectorAll(".score .col-lg-4 div a"),
            scoreContainer = document.querySelector(".score"),
            balls = document.querySelectorAll(".balls img"),
            off = 90;

        if (document.body.clientWidth <= 1400) {
            off = 0;
        }
        if (document.body.clientWidth <= 1300) {
            off = -30;
        }

        scoreContainer.addEventListener("mouseover", function (e) {
           score.forEach(function (item, i) {
              if (e.target == item) {
                offset = document.querySelector(`body > section.about > div > div.row.score > div:nth-child(${i + 1})`).offsetLeft - off;
                console.log(offset);
                ballsContainer.style.left = offset + "px";
              } 
           });
        });
	}

	//button read more

	if (document.body.clientWidth <= 430) {
		let text = document.querySelector(".about-inst p"),
			array = text.innerHTML.split("<br><br>"),
			more = document.createElement("a");

		text.textContent = array[0];	

		more.classList.add("more");
		more.textContent = "Читать дальше";
		text.appendChild(more);
	}

    //cards hover

    window.onload = () => {
        if (document.body.clientWidth <= 991) {
            let cardWidth = document.querySelector("#card").clientWidth + 24,
                image = document.querySelectorAll(".hover-image");

            image.forEach(function (item) {
                item.style.width = cardWidth + "px"; 
                item.style.marginLeft = -(cardWidth)/2 + "px"; 
            });
        }
    }
});