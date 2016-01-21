'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Jacob Terrado is cool");
		$(".jumbotron p").toggleClass("active");
		$(".jumbotron button").text("it worked");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(testJavaScript);

	$("#submitBtn").click(submitClick)
}

function testJavaScript(e) {
	console.log("testJavaScript");
	e.preventDefault();

	// $(this).css("background-color","#F0F0F0");

	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length == 0) {
		containingProject.append("<div class=\"project-description\"><p>Description of the project goes here.</p></div>");
		containingProject.css("background-color", "#A0A0A0");
		containingProject.css("text-align", "center");
	} else {
		// containingProject.append("<div><p>Stop clicking me</p></div>");
		containingProject.fadeToggle();
	}
}

function submitClick(e) {
	var projectID = $("#project").val();

	$(projectID).animate({
		width: $("#width").val()
	});

	var textNew = $("#description").val();
	$(projectID + " .project-description").text(textNew);
}