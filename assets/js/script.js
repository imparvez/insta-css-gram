$(function(){
	$(".filter-list li").on("click", function(){
		var $selectedFilter = $(this).data("filters");
		$("figure")
			.removeAttr("class")
			.addClass($selectedFilter)
	});
})