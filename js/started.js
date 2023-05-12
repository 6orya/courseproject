document.addEventListener("DOMContentLoaded", function() {
	//canvas lines
  	let _canvas = document.querySelectorAll("#canvas-2"),
      __canvas = document.querySelectorAll("#canvas-3"),
      ___canvas = document.querySelectorAll("#canvas-4"),
      offset = 0;


    const draw = () => {
        _canvas.forEach(function (item) {
          let _ctx = item.getContext("2d");

          _ctx.clearRect(0, 0, item.width, item.height);
          _ctx.fillStyle = "#001c5d";
          _ctx.fillRect(0, 0, 9, 9);
          _ctx.fillRect(128, 0, 9, 9);

          _ctx.setLineDash([5, 1]);
          _ctx.lineDashOffset = -offset;
          _ctx.strokeStyle = "#000000";
    
        _ctx.beginPath();    
          _ctx.moveTo(9, 5);
          _ctx.lineTo(128, 5);
          _ctx.stroke();
        });
        __canvas.forEach(function (item) {
          let __ct = item.getContext("2d");

          __ct.clearRect(0, 0, item.width, item.height);
          __ct.fillStyle = "#8cf0ef";
          __ct.fillRect(125, 0, 9, 9);
          __ct.fillRect(0, 0, 9, 9);
          __ct.fillRect(0, 250, 9, 9);

          __ct.setLineDash([5, 2]);
          __ct.lineDashOffset = -offset;
          __ct.strokeStyle = "#000000";

          __ct.beginPath();  
          __ct.moveTo(125, 4);
          __ct.lineTo(9, 4);
          __ct.moveTo(4, 9);
          __ct.lineTo(4, 250);
          __ct.stroke(); 
        });
        ___canvas.forEach(function (item) {
          let ___ct = item.getContext("2d");

          ___ct.clearRect(0, 0, item.width, item.height);
          ___ct.fillStyle = "#8cf0ef";
          ___ct.fillRect(250, 0, 9, 9);
          ___ct.fillRect(250, 125, 9, 9);
          ___ct.fillRect(0, 125, 9, 9);

          ___ct.setLineDash([5, 2]);
          ___ct.lineDashOffset = -offset;
          ___ct.strokeStyle = "#000000";

          ___ct.beginPath();  
          ___ct.moveTo(254, 9);
          ___ct.lineTo(254, 125);
          ___ct.moveTo(250, 129);
          ___ct.lineTo(9, 129);
          ___ct.stroke();
        });
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

  //mobile menu

	let menuButton = document.querySelector(".mobile-menu img"),
		menu = document.querySelector(".menu"),
		nav = document.querySelector("nav"),
		menuPart = document.querySelectorAll(".menu li #nav-link"),
		open = false,
		underOpen = false;

	menuButton.addEventListener("click", function () {
		if (!open) {
			nav.style.background = "#08172d";
			menuButton.src = "img/close.png";
			menu.style.display = "block";
			open = true;
		}else{
			nav.style.background = "rgba(22, 22, 32, 0.4)";
			menuButton.src = "img/menu.png";
			menu.style.display = "none";
			open = false;
		}
	});

	if (document.body.clientWidth <= 991) {
		menuPart.forEach(function (item) {
			item.addEventListener("click", function () {
				if (!underOpen) {
					item.nextElementSibling.style.display = "block";
					underOpen = true;
				}else{
					item.nextElementSibling.style.display = "none";
					underOpen = false;
				}
			});
		});
	}

	//popap 

	let popap = document.querySelector(".form"),
		btn = document.querySelectorAll(".ques"),
		fon = document.querySelector(".fon"),
		popapClose = document.querySelector(".form #close");

	btn.forEach(function (item) {
		item.addEventListener("click", function () {
			popap.style.display = "block";
			fon.style.display = "block";
			if (document.body.clientWidth <= 991) {
				popap.style.top = window.pageYOffset + 115 + "px";
			}else{
				popap.style.top = window.pageYOffset + 190 + "px";
			}
		});	
	});

	popapClose.addEventListener("click", function () {
		popap.style.display = "none";
		fon.style.display = "none";
	});
});



