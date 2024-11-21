jQuery(document).ready(function() {
    jQuery('img[usemap]').rwdImageMaps();

    jQuery('#promotionRulesModal').addClass('show');
    jQuery('body').addClass('modal-open');

    jQuery('.modal-toggle').click(function() {
        var targetModal = jQuery(this).data('target');
        jQuery('#' + targetModal).addClass('show');
        jQuery('body').addClass('modal-open');
    });

    jQuery('.modal-overlay:not(.agreeModal), .modal-toggle.close-modal').click(function() {
        jQuery(this).closest('.modal').removeClass('show');
        jQuery('body').removeClass('modal-open');
    });

    jQuery('.pin-svg').addClass('jump');
    setTimeout(function() {
        jQuery('.pin-svg').removeClass('jump');
        jQuery('.pin-svg').css({ 'opacity': '1', 'display': 'block', 'transition': 'all 0.5s ease' });
    }, 1000);
});

jQuery('.modal-toggle[data-target="termsAndConditionsModal"]').click(function() {
    jQuery('#promotionRulesModal').removeClass('show');
    jQuery('body').removeClass('modal-open');
    jQuery('#termsAndConditionsModal').addClass('show');
    jQuery('body').addClass('modal-open');
});

function triggerAnimation() {
    jQuery('.pin-svg').addClass('animate');
    setTimeout(function() {
        jQuery('.pin-svg').removeClass('animate');
    }, 500);
}
setInterval(triggerAnimation, 5000);
// triggerAnimation();