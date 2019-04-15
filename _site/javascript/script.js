// INBOX PAGE

function composeEmailBtn() {
    let x = document.getElementById("writeMessBtn");
    if (x.innerHTML == "Soạn tin nhắn") {
        x.innerHTML = "Thu nhỏ";
    }
    else {
        x.innerHTML = "Soạn tin nhắn"
    }
    x = document.getElementById("ComposeMessage");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    $('#emailTexter').autoResize();
}
function addCC() {
    let subj = document.getElementById('mailSubject');
    subj.innerHTML += '<div class="row py-1"><div class="col-3 d-flex justify-content-start align-items-center"><small class="text-secondary"><strong>CC:</strong></small></div><div class="col-9"><input type="text" class="form-control" style="height: 30px; font-size: 13px" placeholder="e.g. jane@domain.com, mark@domain.com"></div></div>'
    document.getElementById('addCCBtn').hidden = true;
}
function addBCC() {
    let subj = document.getElementById('mailSubject');
    subj.innerHTML += '<div class="row py-1"><div class="col-3 d-flex justify-content-start align-items-center"><small class="text-secondary"><strong>BCC:</strong></small></div><div class="col-9"><input type="text" class="form-control" style="height: 30px; font-size: 13px" placeholder="e.g. jane@domain.com, mark@domain.com"></div></div>'
    document.getElementById('addBCCBtn').hidden = true;
}
// Auto size text email in inbox
(function (a) {
    a.fn.autoResize = function (j) {
        var b = a.extend({
            onResize: function () { },
            animate: true,
            animateDuration: 150,
            animateCallback: function () { },
            extraSpace: 20,
            limit: 1000
        }, j);
        this.filter('textarea').each(function () {
            var c = a(this).css({
                resize: 'none',
                'overflow-y': 'hidden'
            })
                , k = c.height()
                , f = (function () {
                    var l = ['height', 'width', 'lineHeight', 'textDecoration', 'letterSpacing']
                        , h = {};
                    a.each(l, function (d, e) {
                        h[e] = c.css(e)
                    });
                    return c.clone().removeAttr('id').removeAttr('name').css({
                        position: 'absolute',
                        top: 0,
                        left: -9999
                    }).css(h).attr('tabIndex', '-1').insertBefore(c)
                }
                )()
                , i = null
                , g = function () {
                    f.height(0).val(a(this).val()).scrollTop(10000);
                    var d = Math.max(f.scrollTop(), k) + b.extraSpace
                        , e = a(this).add(f);
                    if (i === d) {
                        return
                    }
                    i = d;
                    if (d >= b.limit) {
                        a(this).css('overflow-y', '');
                        return
                    }
                    b.onResize.call(this);
                    b.animate && c.css('display') === 'block' ? e.stop().animate({
                        height: d
                    }, b.animateDuration, b.animateCallback) : e.height(d)
                };
            c.unbind('.dynSiz').bind('keyup.dynSiz', g).bind('keydown.dynSiz', g).bind('change.dynSiz', g)
        });
        return this
    }
}
)(jQuery);
// Send email
function sendEmail() {
    location.reload();
}


// REPORT PAGE
