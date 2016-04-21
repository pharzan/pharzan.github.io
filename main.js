var button = require('polythene/button/button');
var dialog = require('polythene/dialog/dialog');
var listTile = require('polythene/list-tile/list-tile');
var  icon = require( 'polythene/icon/icon');

const myListTile = m.component(listTile, {
    title: 'My title',
    subtitle:'this is t test subtitle',
    front: m.component(icon, {
        type: 'large',
        src: './icons/heart.svg'
    }),
    url: {href: 'toolbar', config: m.route}
});

var posts=[
    {
    title:'my test post',
    subtitle:'this is a test',
    icon:'./icons/heart.svg',
    url:'http://pharzan.com'
    }
    ,
    {
	title:'my second test post',
	subtitle:'this is a test',
	icon:'./icons/heart.svg',
	url:'http://pharzan.com',
	content:'llorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahlorem ipsum blah blah blahorem ipsum blah blah blah'
    }

];

var main = {
    view: function() {
        return m('', posts.map(function(post){
	    return m.component(listTile, {
		title: post.title,
		subtitle:post.subtitle,
		front: m.component(icon, {
		    type: 'large',
		    src: post.icon
		}),
		events:{
		    onclick:function(){
			if(typeof post.content!=='undefined')
			    dialog.show({
				title: post.title,
				body: post.content,
				backdrop:true
			    });
			else
			    m.route(post.url);
		    }
		    
		}
		// url: {href: post.url, config: m.route}
	    });
	}),m.component(dialog));

    }

};


m.mount(document.body, main);
