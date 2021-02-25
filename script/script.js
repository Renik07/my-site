const body = document.querySelector('body');

for (let i = 0; i < 100; i++) {
	const blocks = document.createElement('div');

	blocks.classList.add('block');
	body.appendChild(blocks);
}

function animateBlocks() {
	anime({
		targets: '.block',
		translateX: function() {
			return anime.random(-900, 900);
		},
		translateY: function() {
			return anime.random(-500, 500);
		},
		scale: function() {
			return anime.random(1, 4.5);
		},
		easing: 'easeInOutBack',
    duration: 4000,
		delay: anime.stagger(50),
		complete: animateBlocks
	});
}

animateBlocks();