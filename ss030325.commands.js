var edChar = document.querySelector(".ved#canvas");

var commands = [
	{
		label: "Starting soon",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss0728/base43.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: white; font-size: 200%; animation: loading-text 1s infinite linear alternate; ");
			slideDiv.style.zIndex = 2;

			slideDiv.innerHTML = 'Starting Soon';
			edChar.style.zIndex = 1;
			edChar.style.opacity = 0;
			edDisplayHide();
			slideIframe.style.visibility = "hidden";
			slideIframe.src = 'data:text/html,';
		}
	},


	{
		label: "Ed appears",
		f: function() {
			edChar.style.zIndex = 2;
			edChar.style.transitionDuration = '0s';
			edChar.style.left = "50%";
			edChar.style.top = "50%";
			edChar.style.marginLeft = "-150px";
			edChar.style.marginTop = "-150px";
			edChar.style.transform = "scale(1.5)";
			edChar.style.opacity = 1;
			edDisplayHide();


			slideIframe.style.visibility = "hidden";
			slideDiv.setAttribute("style", "background-image: url(ss0728/shop_bg.webp); background-size: cover;background-position: center center;background-repeat: no-repeat;");
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.innerHTML = ``;
			// setTimeout(function() {
			// 	slideDiv.style.transitionDuration = '2s';
			// 	slideDiv.style.opacity = 1;
			// }, 1000);

		}
	},


	{
		label: "Edbot Streak",
		f: function() {
			edChar.style.zIndex = 2;
			edChar.style.transitionDuration = '0s';
			edChar.style.left = "50%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-150px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			edDisplayHide();

			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '500ms';
			edChar.style.transitionTimingFunction = 'ease-out';
			slideIframe.style.visibility = "hidden";
			slideDiv.setAttribute("style", "background-image: url(ss030325/edbot1.png); background-size: contain;background-position: center center;background-repeat: no-repeat;");
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.innerHTML = ``;
			// setTimeout(function() {
			// 	slideDiv.style.transitionDuration = '2s';
			// 	slideDiv.style.opacity = 1;
			// }, 1000);

		}
	},

	{
		label: "Title",
		f: function() {
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			edDisplayHide();


			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '500ms';
			edChar.style.transitionTimingFunction = 'ease-out';
			slideIframe.style.visibility = "hidden";
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: black; font-size: 450%; text-align: center;");
			slideDiv.innerHTML = '<div><div style="font-size: 40%; opacity: 1">The Cool Things About</div>VTubers<br><img src="ss030325/risu1.svg" style="width: 40vw;"></div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
		}
	},


	// {
	// 	label: "Controlling avatar",
	// 	f: function() {
	// 		edChar.style.zIndex = 2;
	// 		edChar.style.transitionDuration = '0s';
	// 		edChar.style.left = "50%";
	// 		edChar.style.top = "100%";
	// 		edChar.style.marginLeft = "-150px";
	// 		edChar.style.marginTop = "-270px";
	// 		edChar.style.transform = "scale(0.8)";
	// 		edChar.style.opacity = 1;
	// 		edDisplayHide();

	// 		edChar.style.zIndex = 3;
	// 		edChar.style.transitionDuration = '500ms';
	// 		edChar.style.transitionTimingFunction = 'ease-out';
	// 		slideIframe.style.visibility = "hidden";
	// 		slideDiv.setAttribute("style", "background-image: url(ss030325/edbot1.png); background-size: contain;background-position: center center;background-repeat: no-repeat;");
	// 		slideDiv.style.zIndex = 1;
	// 		slideDiv.style.opacity = 1;
	// 		slideDiv.innerHTML = ``;
	// 	}
	// },


	{
		label: "Disclaimer",
		f: function() {
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			edDisplayHide();


			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '500ms';
			edChar.style.transitionTimingFunction = 'ease-out';
			slideIframe.style.visibility = "hidden";
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: black; font-size: 450%; text-align: center; flex-wrap: wrap;");
			slideDiv.innerHTML = '';
			slideDiv.innerHTML += '<div style="background: #00000099; padding: 20px 30px; border-radius: 5px;"><img src="ss030325/hololive.svg" style="width: 50vw;"></div>';
			slideDiv.innerHTML += '<div style="background: #ffffff88; padding: 20px 20px; border-radius: 5px;width: 50vw; font-size: 40%; margin-right: 120px; border-style: solid; border-width: 5px; animation: border-blink 1s linear infinite;"><strong style="color: red;">Disclaimer:</strong> Not a professional. For better information, you may contact Fandy, Fitri, Saphira, or Reky.</div>';
			slideDiv.innerHTML += '<style>@keyframes border-blink{0%, 49% {border-color: red} 50%, 99% {border-color: black} }</style>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
		}
	},

	{
		label: "[1] Technology",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: black; font-size: 350%; text-align: center;");
			slideDiv.innerHTML = '<span>Technology<br><img src="ss030325/codemiko1.png" style="height: 30vh;"><br>&nbsp;</span>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		}
	},

	{
		label: "[1] Technology: The models",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">The Models</div>';
			let table = '<div style="padding: 20px;">';
			table += '<table style="border: none; width: 100%">';
			table += '<tr>';
			table += '<td style="width: 33%; text-align: center;"><img style="height: 30vh;" src="ss030325/model-png.gif"></td>';
			table += '<td style="width: 33%; text-align: center;"><img style="height: 30vh;" src="ss030325/model-2d-optimized.gif"></td>';
			table += '<td style="width: 33%; text-align: center;"><img style="height: 30vh;" src="ss030325/model-3d-optimized.gif"></td>';
			table += '</tr>';
			table += '<tr>';
			table += '<td style="text-align: center; font-size: 50%;">Reactive images</td>';
			table += '<td style="text-align: center; font-size: 50%;">2D</td>';
			table += '<td style="text-align: center; font-size: 50%;">3D</td>';
			table += '</tr>';
			table += '</table>';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		}
	},

	{
		label: "[1] Technology: The models | Reactive image",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">The Models: Reactive Images</div>';
			let table = '<div style="padding: 20px; margin-left: 10vw;">';
			table += '<table style="border: none; width: 100%">';
			table += '<tr>';
			table += '<td style="width: 33%; text-align: center; opacity: 1.0;"><img style="height: 30vh;" src="ss030325/model-png.gif"></td>';
			table += '<td style="width: 33%; text-align: center; opacity: 0.0;"><img style="height: 30vh;" src="ss030325/model-2d-optimized.gif"></td>';
			table += '<td style="width: 33%; text-align: center; opacity: 0.0;"><img style="height: 30vh;" src="ss030325/model-3d-optimized.gif"></td>';
			table += '</tr>';
			table += '</table>';
			table += '<br>';
			table += '<table>';
			table += '<tr>';
			table += '<td style="text-align: center; font-size: 50%;"><img style="height: 20vh;" src="ss030325/model-png-idle.png"></td>';
			table += '<td style="text-align: center; font-size: 50%;"><img style="height: 20vh;" src="ss030325/model-png-speaking.png"></td>';
			table += '<td style="text-align: center; font-size: 50%;"></td>';
			table += '</tr>';
			table += '<tr>';
			table += '<td style="text-align: center; font-size: 50%;">Idle</td>';
			table += '<td style="text-align: center; font-size: 50%;">Speaking</td>';
			table += '<td style="text-align: center; font-size: 50%;"></td>';
			table += '</tr>';
			table += '</table>';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li>Cheapest</li>"
			+"<li>Lightweight</li>"
			+"</ul>",
	},

	{
		label: "[1] Technology: The models | 2D",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">The Models: 2D</div>';
			let table = '<div style="padding: 20px; margin-left: 10vw;">';
			table += '<table style="border: none; width: 100%">';
			table += '<tr>';
			table += '<td style="width: 33%; text-align: center; opacity: 1.0;"><img style="height: 30vh;" src="ss030325/model-2d-optimized.gif"><br>';
			table += '<img style="height: 30vh;" src="ss030325/dokibird-doki.gif"></td>';
			table += '<td style="width: 67%; text-align: left; opacity: 1.0; font-size: 60%;"><ul>';
			table += '<li>Motions</li>';
			table += '<li>Expressions</li>';
			table += '<li>Physics</li>';
			table += '</ul></td>';
			table += '</tr>';
			table += '</table>';
			table += '<br>';
			// table += '<table>';
			// table += '<tr>';
			// table += '<td style="text-align: center; font-size: 50%;"><img style="height: 20vh;" src="ss030325/model-png-idle.png"></td>';
			// table += '<td style="text-align: center; font-size: 50%;"><img style="height: 20vh;" src="ss030325/model-png-speaking.png"></td>';
			// table += '<td style="text-align: center; font-size: 50%;"></td>';
			// table += '</tr>';
			// table += '<tr>';
			// table += '<td style="text-align: center; font-size: 50%;">Idle</td>';
			// table += '<td style="text-align: center; font-size: 50%;">Speaking</td>';
			// table += '<td style="text-align: center; font-size: 50%;"></td>';
			// table += '</tr>';
			// table += '</table>';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li></li>"
			+"</ul>",
	},

	{
		label: "[1] Technology: The models | 3D",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">The Models: 3D</div>';
			let table = '<div style="padding: 20px; margin-left: 10vw;">';
			table += '<table style="border: none; width: 100%">';
			table += '<tr>';
			table += '<td style="width: 33%; text-align: center; opacity: 1.0;"><img style="height: 30vh;" src="ss030325/model-3d-optimized.gif"></td>';
			table += '<td style="width: 67%; text-align: left;   opacity: 1.0; font-size: 60%;"><ul>';
			table += '<li>Motions</li>';
			table += '<li>Expressions</li>';
			table += '<li>Physics</li>';
			table += '</ul></td>';
			table += '</tr>';
			table += '<tr>';
			// table += '<td colspan="2"><img style="height: 30vh;" src="ss030325/dokibird-shock.gif"></td>';

			table += '<td colspan="2">';
			table += '<div style="height: 35vh;width: 45vh; background: grey; background-image: url(ss030325/miko1.gif); background-size: 110% auto; background-position: center bottom; display: inline-block;"></div>';
			table += '<div style="height: 35vh;width: 45vh; background: grey; background-image: url(ss030325/miko1.gif); background-size: 100% auto; background-position: center top; display: inline-block;"></div>';
			table += '</td>';

			table += '</tr>';
			table += '</table>';
			table += '<br>';
			// table += '<table>';
			// table += '<tr>';
			// table += '<td style="text-align: center; font-size: 50%;"><img style="height: 20vh;" src="ss030325/model-png-idle.png"></td>';
			// table += '<td style="text-align: center; font-size: 50%;"><img style="height: 20vh;" src="ss030325/model-png-speaking.png"></td>';
			// table += '<td style="text-align: center; font-size: 50%;"></td>';
			// table += '</tr>';
			// table += '<tr>';
			// table += '<td style="text-align: center; font-size: 50%;">Idle</td>';
			// table += '<td style="text-align: center; font-size: 50%;">Speaking</td>';
			// table += '<td style="text-align: center; font-size: 50%;"></td>';
			// table += '</tr>';
			// table += '</table>';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li>Wider capabilities</li>"
			+"<li>Expensive equipments</li>"
			+"</ul>",
	},

	{
		label: "[1] Technology: The models | 3D (2)",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">The Models: 3D</div>';
			let table = '<div style="padding: 20px; margin-left: 10vw;">';
			table += '<img style="height: 50vh;" src="ss030325/hololive.gif">';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li></li>"
			+"</ul>",
	},

	{
		label: "[1] Technology: AI VTubers",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">AI VTubers</div>';
			let table = '<div style="padding: 20px; margin-left: 10vw;">';
			table += '<img style="height: 50vh;" src="ss030325/Kizunaai.webp">';
			table += '<div style="font-weight: 80%l">Kizuna Ai &ne; AI</div>';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li></li>"
			+"</ul>",
	},

	{
		label: "[1] Technology: AI VTubers (Neuro Sama)",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">AI VTubers</div>';
			let table = '<div style="padding: 20px; margin-left: 10vw;">';
			table += '<img style="height: 50vh;" src="ss030325/NeuroSamaV3.webp">';
			table += '<img style="height: 50vh;" src="ss030325/Evil_Neuro_portrait_4.webp">';
			table += '<div style="font-weight: 80%l">Neuro-sama &amp; Evil Neuro</div>';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li>interations with chat</li>"
			+"<li>karaoke</li>"
			+"<li>collabs</li>"
			+"</ul>",
	},

	{
		label: "[1] Technology: AI VTubers (Neuro Sama Error)",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">AI VTubers</div>';
			let table = '<div style="padding: 20px; margin-left: 3vw;">';
			table += '<img style="height: 60vh;" src="ss030325/neuro-error.png">';
			table += '</div>';
			slideDiv.innerHTML += table;
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li></li>"
			+"</ul>",
	},

	{
		label: "[2] Viewers",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: black; font-size: 350%; text-align: center;");
			slideDiv.innerHTML = '<span>Viewers<br><img src="ss030325/pemaloe.jpg" style="height: 30vh;"><br>&nbsp;</span>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		}
	},

	{
		label: "[2] VTuber X Viewers",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/talent-viewers.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">VTuber X Viewers</div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li></li>"
			+"</ul>",
	},

	{
		label: "[2] VTuber X Viewers: Hashtags",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/viewers-hastags.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">Hashtags</div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li></li>"
			+"</ul>",
	},

	{
		label: "[2] VTuber X Viewers: Hashtags (2)",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/viewers-contents.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">Viewers\' Contents</div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li>We don't judge</li>"
			+"<li>Engagement</li>"
			+"</ul>",
	},

	{
		label: "[2] VTuber X Viewers: Hashtags (3)",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/viewers-contents-commis.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">Viewers\' Contents</div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li>We don't judge</li>"
			+"<li>Engagement</li>"
			+"</ul>",
	},

	{
		label: "[2] VTuber X Viewers: Hashtags (4)",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/viewers-contents-commis-open.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; text-shadow: none; color: black; font-size: 250%;");
			slideDiv.innerHTML = '<div style="padding: 20px;">Viewers\' Contents</div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		},
		note: "<ul>"
			+"<li>We don't judge</li>"
			+"<li>Engagement</li>"
			+"</ul>",
	},

	{
		label: "Thank you",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss030325/bg.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: black; font-size: 350%; text-align: center; flex-wrap: wrap;");
			// slideDiv.innerHTML = '<span>Thank You<br>&nbsp;<br>&nbsp;</span>';
			slideDiv.innerHTML = '<span>Thank You<br></span>';
			slideDiv.innerHTML += '<div style="font-size: 25%; text-align: left; padding: 10px; line-height: 1;">Sources:<ul>'
				+'<li>https://www.researchgate.net/figure/Figure-B4-CodeMiko-vitual-3D-avatar-Left-and-Youna-Kang-the-human-behind-avatar_fig10_366836517</li>'
				// +'<li>https://powerrangers.fandom.com/wiki/Storm_Megazord</li>'
				+'<li>https://tenor.com/view/dokibird-doki-huh-vtuber-shock-gif-8264548511385952861</li>'
				+'<li>https://www.youtube.com/shorts/O_MVDDKyhMs</li>'
				+'<li>https://hololive.hololivepro.com/en</li>'
				+'<li>https://virtualyoutuber.fandom.com/wiki/Kizuna_Ai</li>'
				+'<li>https://virtualyoutuber.fandom.com/wiki/Neuro-sama</li>'
				+'<li>https://x.com/LinhNguyenKz/status/1614623572319940609/photo/1</li>'
				+'<li>https://x.com/Shira_Yuki69/status/1574081814767214592/photo/1</li>'
				+'<li>https://www.youtube.com/@AyundaRisu</li>'
				+'<li>https://www.youtube.com/@KaelaKovalskia</li>'
				// +'<li></li>'
				+'</ul></div>';
			slideDiv.style.zIndex = 1;
			slideDiv.style.opacity = 1;
			slideDiv.style.visibility = "visible";

			edDisplayHide();
			edChar.style.zIndex = 3;
			edChar.style.transitionDuration = '1s';
			edChar.style.transitionTimingFunction = 'ease-out';
			edChar.style.left = "100%";
			edChar.style.top = "100%";
			edChar.style.marginLeft = "-270px";
			edChar.style.marginTop = "-270px";
			edChar.style.transform = "scale(0.8)";
			edChar.style.opacity = 1;
			slideIframe.style.visibility = "hidden";
		}
	},

	{
		label: "Blank",
		f: function() {
			slideDiv.setAttribute("style", "background-image: url(ss0728/base43.svg); background-size: contain;background-position: center center;background-repeat: no-repeat; display: flex; justify-content: center; align-items: center; text-shadow: none; color: white; font-size: 200%;");
			slideDiv.style.zIndex = 2;

			slideDiv.innerHTML = '';
			edChar.style.zIndex = 1;
			edChar.style.opacity = 0;
			edDisplayHide();
			slideIframe.style.visibility = "hidden";
			slideIframe.src = 'data:text/html,';
			slideDiv2.style.visibility = "hidden";
		}
	},


];



/*

https://hololive.hololivepro.com/en/talents/ayunda-risu/
https://www.researchgate.net/figure/Figure-B4-CodeMiko-vitual-3D-avatar-Left-and-Youna-Kang-the-human-behind-avatar_fig10_366836517
https://powerrangers.fandom.com/wiki/Storm_Megazord
-- https://tenor.com/view/dokibird-shock-shocked-reaction-vtuber-gif-3184297915140176134
https://tenor.com/view/dokibird-doki-huh-vtuber-shock-gif-8264548511385952861
https://www.youtube.com/shorts/O_MVDDKyhMs
https://hololive.hololivepro.com/en
https://virtualyoutuber.fandom.com/wiki/Kizuna_Ai
https://virtualyoutuber.fandom.com/wiki/Neuro-sama
https://x.com/LinhNguyenKz/status/1614623572319940609/photo/1
https://x.com/Shira_Yuki69/status/1574081814767214592/photo/1
https://www.youtube.com/@AyundaRisu
https://hololive.hololivepro.com/en/talents/kaela-kovalskia/
https://www.youtube.com/@KaelaKovalskia

*/


for (let i in commands) {
	let f = commands[i].f;
	commands[i].f = () => {
		// console.log("Slide: "+commands[i].label);
		f();
		// document.getElementById("slideCaching").innerHTML = '<div style="position: fixed; left: 10%; visibility: visible;">'
		// slideDiv.innerHTML += '<div style="position: fixed; left: 10%; visibility: visible;">'
		slideCaching.innerHTML = '<div style="position: fixed; left: 10%; visibility: visible;">'
			+'<img src="ss0728/base43.svg">'
			+'<img src="ss0728/shop_bg.webp">'
			+'<img src="ss030325/edbot1.png">'
			+'<img src="ss030325/risu1.svg">'
			+'<img src="ss030325/bg.svg">'
			+'<img src="ss030325/codemiko1.png">'
			+'<img src="ss030325/hololive.svg">'
			+'<img src="ss030325/model-png.gif">'
			+'<img src="ss030325/model-2d-optimized.gif">'
			+'<img src="ss030325/model-3d-optimized.gif">'
			+'<img src="ss030325/model-png-idle.png">'
			+'<img src="ss030325/model-png-speaking.png">'
			+'<img src="ss030325/dokibird-doki.gif">'
			+'<img src="ss030325/miko1.gif">'
			+'<img src="ss030325/hololive.gif">'
			+'<img src="ss030325/Kizunaai.webp">'
			+'<img src="ss030325/NeuroSamaV3.webp">'
			+'<img src="ss030325/Evil_Neuro_portrait_4.webp">'
			+'<img src="ss030325/neuro-error.png">'
			+'<img src="ss030325/pemaloe.jpg">'
			+'<img src="ss030325/talent-viewers.svg">'
			+'<img src="ss030325/viewers-hastags.svg">'
			+'<img src="ss030325/viewers-contents.svg">'
			+'<img src="ss030325/viewers-contents-commis.svg">'
			+'<img src="ss030325/viewers-contents-commis-open.svg">'
			+'<img src="">'
			+'<img src="">'
			+'<img src="">'
			+'<img src="">'
			+'<img src="">'
			+'</div>';
	};
}
