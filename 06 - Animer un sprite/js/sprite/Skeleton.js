class Skeleton {
	constructor() {
		let columnCount = 9;
		let rowCount = 4;
		let refreshDelay = 100; 			// msec
		let loopColumns = true; 			// or by row?
		let scale = 1.0;
		this.tiledImage = new TiledImage("images/skeleton-walk.png", columnCount, rowCount,
										 refreshDelay, loopColumns, scale, null);
		this.tiledImage.changeRow(1);					// One row per animation
		this.tiledImage.changeMinMaxInterval(0, 8); 	// Loop from which column to which column?

		this.tiledImage.addImage("images/item-hood-walk.png");
		this.tiledImage.addImage("images/item-shield-walk.png");

		this.x = 300;
		this.y = 300;
	}

	tick () {
		if (leftArrowOn) {
			this.tiledImage.changeRow(1);
			this.x--;
		}

		if (rightArrowOn) {
			this.tiledImage.changeRow(3);
			this.x++;
		}

		this.tiledImage.tick(this.x, this.y, ctx);

		return true;
	}
}