/*вывод продуктов*/
if (!$.cookie('view_products')) {
    $.cookie('view_products', 'grid');
}

$(document).on('click', '#select-view a', function () {
    var id = 'grid';
    if ($(this).hasClass('list')) {
        id = 'list'
    }
    $(this).addClass('active').siblings('.active').removeClass('active');
    $('.products[data-view]').attr('data-view', id);
    $.cookie('view_products', id);

    return false;
});
/*!вывод продуктов*/