odoo.define("theme_unify.unify_options_pricing", function(require) {
    "use strict";

    var s_options = require('web_editor.snippets.options');
    /*s_options.registry.unify_options_pricing = s_options.Class.extends({
        start: {
            'click .pricing .sticker-left': 'log_it',
            'log_it': function (e) {
                e.stopPropagation();
                console.log("click .pricing .sticker-left");
            }
        }
    });*/

    console.log("JS mod \"theme_unify.unify_options.pricing\" loaded");

    var pricing_top_banner_handler = function (e) {
        $(".pricing").each(function(i, elem) {
            // check if we should hide or show the top banner
            var hasClass = false;
            var classList = elem.className.split(/\s+/);

            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'unify_pricing_top_banner') {
                    hasClass = true;
                }
            }

            var $topBanner = $(elem.children[0]);

            // check if the selected child is indeed the top banner
            var leftSticker = false;
            var classList = elem.children[0].className.split(/\s+/);

            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'sticker-left') {
                    leftSticker = true;
                }
            }

            // if the child is not the right one, create it
            if (!leftSticker) {
                // <div class="sticker-left o_default_snippet_text">Top</div>
                var topBanner = document.createElement("div");
                topBanner.innerHTML = "Top";
                topBanner.className = "sticker-left o_default_snippet_text";
                elem.insertBefore(topBanner, elem.firstChild );
            }

            $topBanner = $(elem.children[0]);

            // hide/show the banner
            if (hasClass) {
                // console.log("show top banner");
                $topBanner.removeClass("hidden");
            } else {
                // console.log("hide top banner");
                $topBanner.addClass("hidden");
            }

        });
    };

    $('body').on('DOMNodeInserted', 'div', function (e) {
        console.log("DOMNodeInserted");
        // unbind the handler before re-binding it so it won't be bind more than once per selector
        $(".snippet-option-theme_unify_snippet_options_pricing").unbind("click", pricing_top_banner_handler).bind("click", pricing_top_banner_handler);
    });
});
