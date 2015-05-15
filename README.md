#######################
HOW TO: SMOOTH ACCORDION


1. In your HTML, make a wrapper div with a class of accordion

<div class="accordion">
	
</div>


2. Make a div with masthead as the class within the accordion wrapper that will be what is shown as a tab of the accordion. Any content you drop in the div will be shown as your tab.

<div class="accordion">
	<div class="masthead">
		### Masthead Content ####
	</div>
</div>


3. Make a div with content as the class below the masthead div (but not within) that will be the content within the tab. Any content you drop in the div will be shown when you click on the tab.

<div class="accordion">
	<div class="masthead">
		### Masthead Content ###
	</div>
	<div class="content">
		### Content ###
	</div>	
</div>


If you can't get this to work, feel free to message me on GitHub or at realjoet9@gmail.com. Please make sure you check for spelling and syntax errors before messaging me about problems.