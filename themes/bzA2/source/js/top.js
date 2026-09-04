// 监听滚动事件
$(window).scroll(async () => {
    if ($(this).scrollTop() > 200) {
        await $('#top').show()
    } else {
        await $('#top').hide()
    }
})

// 监听点击事件
$('#top').click(async () => {
    await $('body, html').animate({
        scrollTop: 0
    }, 300)
})