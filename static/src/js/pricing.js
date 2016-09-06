odoo.define("theme_unify.unify_options_pricing", function(require) {
    "use strict";

    var s_options = require('web_editor.snippets.options');

    var pricing_top_banner_handler = function (e) {
        $(".pricing").each(function(i, elem) {
            // check if we should hide or show the top banner
            var hasTopBanner = hasClass(elem, 'unify_pricing_top_banner');

            var $topBanner = $(elem.children[0]);

            // check if the selected child is indeed the top banner
            var leftSticker = hasClass(elem.children[0], 'sticker-left');

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
            if (hasTopBanner) {
                // console.log("show top banner");
                $topBanner.removeClass("hidden");
            } else {
                // console.log("hide top banner");
                $topBanner.addClass("hidden");
            }

        });
    };

    var pricing_note_handler = function (e) {
        $(".pricing").each(function(i, elem) {
            // elem has a note
            if (hasClass(elem, /unify_pricing_note.*/)) {
                var note = Number(getClass(elem, /unify_pricing_note.*/).replace("unify_pricing_note_", "").replace(/_/, "."));
                var htmlStars = "";
                var nbStars = 0;
                for (var i = 0 ; i < parseInt(note) ; i++) {
                    htmlStars += '<li><i class="fa fa-star fa-2x"></i></li>\n';
                    ++nbStars;
                }

                if (note - parseInt(note) === 0.5) {
                    htmlStars += '<li><i class="fa fa-star-half-empty fa-2x"></i></li>';
                    ++nbStars;
                }

                for (var i = nbStars ; i < 5 ; i++) {
                    htmlStars += '<li><i class="fa fa-star-o fa-2x"></i></li>';
                }

                $(elem).find(".pricing-content > li > ul").html(htmlStars);
            }
        });
    };

    pricing_note_handler();
    pricing_top_banner_handler();

    $('body').on('DOMNodeInserted', 'div', function (e) {
        // console.log("DOMNodeInserted");
        // unbind the handler before re-binding it so it won't be bind more than once per selector
        $(".snippet-option-unify_options_pricing").unbind("click", pricing_top_banner_handler).bind("click", pricing_top_banner_handler);
        $(".snippet-option-unify_options_pricing").unbind("click", pricing_note_handler).bind("click", pricing_note_handler);
    });
});

