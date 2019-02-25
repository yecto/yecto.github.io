/*	Expanding Menus for Indexhibit
 *		uses jquery
 *
 *	Created by Ross Cairns  Mar 2008
*/


function expandingMenu(num) {
	var speed = 500;
	
	var item_title = $("#menu ul").eq(num).children(":first");
	var items = $("#menu ul").eq(num).children().filter(function (index) { return index > 0; });
	
	/* hide items if not active */
	if (items.is(".active") == false) {
		items.hide();
	}

	/* add click functions + pointer to title */
	item_title.css({cursor:"pointer"}).toggle(
		function () {
			items.show(speed);
		}, function () {
			items.hide(speed);
		}
	)
}