export default ({ Vue }) => {
    // 回到顶部按钮的逻辑
    Vue.mixin({
        mounted() {
            const backToTopButton = document.createElement('div');
            backToTopButton.className = 'back-to-top';
            backToTopButton.innerHTML = '^';
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            document.body.appendChild(backToTopButton);
            // 监听滚动事件
            const checkScroll = () => {
                if (window.scrollY > 100) {
                    backToTopButton.classList.add('visible'); // 显示按钮
                } else {
                    backToTopButton.classList.remove('visible'); // 隐藏按钮
                }
            };

            // 初始化时检查一次
            checkScroll();
            // 监听滚动事件
            window.addEventListener('scroll', checkScroll);




            // 创建微信公众号按钮
            const wechatButton = document.createElement('div');
            wechatButton.className = 'wechat-button';
            wechatButton.innerHTML = '个人微信公众号群';
            document.body.appendChild(wechatButton);

            // 创建微信二维码图片
            const qrcodeImage = document.createElement('img');
            qrcodeImage.src = '/wechat-qrcode.png'; // 二维码图片路径
            qrcodeImage.className = 'wechat-qrcode';
            document.body.appendChild(qrcodeImage);

            // 鼠标悬停显示二维码
            wechatButton.addEventListener('mouseenter', () => {
                qrcodeImage.style.display = 'block';
            });

            // 鼠标离开隐藏二维码
            wechatButton.addEventListener('mouseleave', () => {
                qrcodeImage.style.display = 'none';
            });


        }
    });
};