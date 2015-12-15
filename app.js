var cohortMembers = ["Scott", "Kristy", "Natalie", "Charlie", "Brooks", "Sam", "Eric", "Joe", "Nathan", "Kenzi", "Jeremy", "Altamir", "Christopher", "Zach", "Amber", "Robby", "Matthew", "Anthony", "Mark", "Paul", "Liz"];
var counter = 0;
$(document).ready(function(){
	$('.create-button').on('click', appendDom);
	$('#container').on('click', '.remove-button', removeStudent);


});

function appendDom (){
	$('#container').append('<div class="students"></div>');

	var $el = $('#container').children().last();

	$el.append('<p>'+cohortMembers[counter]+'</p>').hide().slideDown(1000);
	$el.append('<button class="remove-button">Remove</button>');


	if(cohortMembers.length == counter){
		$('#container').empty();
		counter=-1;
	}

	counter++;

}

function removeStudent() {
	$(this).parent().fadeOut(1000);
}



// this goes in the appendDom function
// $el.hide().fadeIn();

//this goes in a new clickThing function
// $(this).parent().slideup();
// $(this).parent().hide().fadeIn();
// $(this).parent().fadeOut();
//opacity - hides things but keeps the space on the DOM

