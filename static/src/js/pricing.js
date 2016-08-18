odoo.define("theme_unify.unify_options.pricing", function() {
    "use strict";
    console.log("JS mod \"theme_unify.unify_options.pricing\" loaded");

    var pricing_top_banner_handler = function (e) {
        $(".pricing").each(function(i, elem) {
            // console.log(elem);
            var hasClass = false;
            var classList = elem.className.split(/\s+/);

            for (var i = 0; i < classList.length; i++) {
                if (classList[i] === 'unify_pricing_top_banner') {
                    hasClass = true;
                }
            }

            var $topBanner = $(elem.children[0]);

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
        // unbind the handler before re-binding it so it won't be bind more than once per selector
        $(".snippet-option-theme_unify_snippet_options_pricing").unbind("click", pricing_top_banner_handler).bind("click", pricing_top_banner_handler);
    });

    // $(".pricing").bind("cssClassChanged", function(i, elem){
    //     console.log(i, elem);
    // });
    //
    // $(".pricing").each(function(i, elem) {
    //     if (elem.hasClass("unify_pricing_top_banner")) {
    //         elem.find(".sticker-left").addClass("hidden");
    //     } else {
    //         elem.find(".sticker-left").removeClass("hidden");
    //     }
    // });
    // var s_options = require('web_editor.snippets.options');
    //
    // s_options.registry.unify_options.pricing = s_options.Class.extends({
    //     events: {
    //         'click .pricing .sticker-left': 'log_it',
    //         'log_it': function (e) {
    //             e.stopPropagation();
    //         }
    //     }
    // });
});
