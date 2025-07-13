$(document).ready(function() {
    // モバイルメニューの開閉
    $('#mobileMenuToggle').click(function() {
        $('.nav-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // スムーススクロール
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            const headerHeight = $('.header').outerHeight();
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 800);
            
            // モバイルメニューを閉じる
            $('.nav-menu').removeClass('active');
            $('#mobileMenuToggle').removeClass('active');
        }
    });

    // スクロール時のヘッダー変化
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    // 実績タブフィルタリング
    $('.tab-button').click(function() {
        const category = $(this).data('category');
        
        // タブのアクティブ状態を変更
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        
        // 実績アイテムのフィルタリング
        if (category === 'all') {
            $('.work-item').fadeIn(300);
        } else {
            $('.work-item').hide();
            $('.work-item[data-category="' + category + '"]').fadeIn(300);
        }
    });

    // スキルバーのアニメーション
    function animateSkillBars() {
        $('.skill-card').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom && !$(this).hasClass('animated')) {
                $(this).addClass('animated');
                $(this).find('.level-bar').css('width', function() {
                    return $(this).parent().find('.level-bar').attr('style').match(/width:\s*(\d+%)/)[1];
                });
            }
        });
    }

    // スクロール時にスキルバーアニメーションを実行
    $(window).scroll(animateSkillBars);
    animateSkillBars(); // 初回実行

    // フォーム送信処理
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // フォームデータを取得
        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            project: $('#project').val(),
            message: $('#message').val()
        };
        
        // ここで実際の送信処理を行う（今回はアラート表示のみ）
        alert('お問い合わせありがとうございます。\n1営業日以内にご返信いたします。');
        
        // フォームをリセット
        this.reset();
    });

    // 要素のフェードイン表示
    function fadeInOnScroll() {
        $('.section-title, .work-item, .timeline-item, .stat-item, .goal-item, .investment-card, .strength-item').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50) {
                $(this).addClass('fade-in-up');
            }
        });
    }

    $(window).scroll(fadeInOnScroll);
    fadeInOnScroll(); // 初回実行

    // スクロールパフォーマンスの最適化
    let scrollTimer;
    $(window).scroll(function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
            // スクロール停止後に実行する処理
        }, 100);
    });

    // 画像の遅延読み込み
    const lazyLoadImages = function() {
        $('img[data-src]').each(function() {
            const img = $(this);
            const elementTop = img.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom) {
                img.attr('src', img.attr('data-src'));
                img.removeAttr('data-src');
            }
        });
    };

    $(window).on('scroll load', lazyLoadImages);

    // ナビゲーションのアクティブ状態を更新
    function updateActiveNav() {
        const scrollPosition = $(window).scrollTop() + $('.header').outerHeight();
        
        $('section[id]').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = $(this).attr('id');
                $('.nav-menu a').removeClass('active');
                $('.nav-menu a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    }

    $(window).scroll(updateActiveNav);
    updateActiveNav(); // 初回実行

    // タイムラインアイテムのアニメーション
    function animateTimeline() {
        $('.timeline-item').each(function(index) {
            const element = $(this);
            const elementTop = element.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50) {
                setTimeout(function() {
                    element.addClass('fade-in-up');
                }, index * 100);
            }
        });
    }

    $(window).scroll(animateTimeline);
    animateTimeline(); // 初回実行

    // ビジョンセクションのゴールアニメーション
    function animateVisionGoals() {
        $('.goal-item').each(function(index) {
            const element = $(this);
            const elementTop = element.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50) {
                setTimeout(function() {
                    element.css({
                        'opacity': '0',
                        'transform': 'scale(0.8)'
                    }).animate({
                        'opacity': '1'
                    }, 500).css({
                        'transform': 'scale(1)',
                        'transition': 'transform 0.5s ease'
                    });
                }, index * 150);
            }
        });
    }

    $(window).scroll(animateVisionGoals);
    animateVisionGoals(); // 初回実行

    // 投資カードのアニメーション
    function animateInvestmentCards() {
        $('.investment-card').each(function(index) {
            const element = $(this);
            const elementTop = element.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50 && !element.hasClass('animated')) {
                element.addClass('animated');
                setTimeout(function() {
                    element.css({
                        'opacity': '0',
                        'transform': 'translateX(' + (index % 2 === 0 ? '-50px' : '50px') + ')'
                    }).animate({
                        'opacity': '1'
                    }, 600).css({
                        'transform': 'translateX(0)',
                        'transition': 'transform 0.6s ease'
                    });
                }, index * 100);
            }
        });
    }

    $(window).scroll(animateInvestmentCards);
    animateInvestmentCards(); // 初回実行

    // ヒーローセクションの強みアニメーション
    $('.strength-item').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });
        setTimeout(() => {
            $(this).animate({
                'opacity': '1'
            }, 800).css({
                'transform': 'translateY(0)',
                'transition': 'transform 0.8s ease'
            });
        }, 300 + (index * 200));
    });

    // モバイル対応：タッチイベント
    let touchStartX = 0;
    let touchEndX = 0;

    $('.works-grid').on('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    $('.works-grid').on('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // 左スワイプ
        }
        if (touchEndX > touchStartX + 50) {
            // 右スワイプ
        }
    }

    // ウィンドウリサイズ時の処理
    let resizeTimer;
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // リサイズ完了後の処理
            if ($(window).width() > 768) {
                $('.nav-menu').removeClass('active');
                $('#mobileMenuToggle').removeClass('active');
            }
        }, 250);
    });
});