!function(n,e,a){var o=n("header.navigation.auto-hide"),i=function(){o.addClass("hidden-nav")};n(a).ready(function(){var a=e.setTimeout(i,5e3);o.hover(function(){clearTimeout(a)},function(){a=e.setTimeout(i,5e3)});var d=0;n(e).scroll(function(e){var a=n(this).scrollTop();a>0&&a>d?o.addClass("hidden-nav"):o.removeClass("hidden-nav"),d=a})})}(jQuery,window,document);