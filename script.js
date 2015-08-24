var dict = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Greg", "Helen", "Iggy", "Jack", "Kim", "Lloyd", "Molly", "Nancy", "Oscar", "Peggy", "Quincy", "Rick", "Sam", "Trent", "Ulysses", "Victor", "Wendy", "Xavier", "Yahaira", "Zoe"];
var interlocuters = [], map = new Map();

$('div.content').each(function (i, e) {
		if ($(e).find('.username').find('b')) {
				interlocuters.push($(e).find('.username').text());
		}
		if ($(e).find('.twitter-atreply')) {
				$(e).find('.twitter-atreply').each(function (index, element) {
						interlocuters.push($(element).text());
				});
		}
});

var uniques = new Set(interlocuters);
uniques.delete("");

var i = 0;
uniques.forEach(function(e){
	map.set(e, dict[i++] || 'tweeter' + i);
});


$('.username.js-action-profile-name,.twitter-atreply').each(function(index,el){
	var $el = $(el), cur = $el.text(), mapped = map.get(cur);
	$el.text(mapped || 'tweeter');
});

$('.twitter-atreply').each(function(index,el){
	var $el = $(el), cur = $el.text(), mapped = map.get(cur);
	alert(cur + '-' + mapped);
	$el.text(mapped || 'tweeter');
});
