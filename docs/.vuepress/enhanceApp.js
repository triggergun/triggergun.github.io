
import LockContent from './components/LockContent.vue';

export default ({ Vue }) => {


    // 回到顶部按钮的逻辑
    Vue.mixin({
        mounted() {
            const backToTopButton = document.createElement('div');
            backToTopButton.className = 'back-to-top';
            // backToTopButton.innerHTML = '^';

            // 创建图片元素
            const iconImage = document.createElement('img');
            iconImage.src = '/back-to-top-icon.png'; // 图片路径
            backToTopButton.appendChild(iconImage); // 按钮的孩子

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

        //     console.log('this.$page:', this.$page); // 打印当前页面对象
        //     console.log('this.$page.content:', this.$page.content); // 打印当前页面对象
        //     if (this.$page && this.$page.content) {
        //         console.log('进入 if 语句块'); // 调试信息
        //         const ratio = 0.2; // 截取前 20%
        //         const content = this.$page.content;
        //         const length = Math.floor(content.length * ratio);
        //         const partialContent = content.slice(0, length);
        //
        //         // 替换页面内容为部分内容
        //         const contentElement = document.querySelector('.theme-default-content');
        //         if (contentElement) {
        //             contentElement.innerHTML = partialContent;
        //
        //             // 插入解锁按钮
        //             const lockContainer = document.createElement('div');
        //             lockContainer.innerHTML = `
        //     <lock-content :content="\`${content.replace(/`/g, '\\`')}\`" :unlock-ratio="${ratio}" />
        //   `;
        //             contentElement.appendChild(lockContainer);
        //         }
        //     } else {
        //         console.log('未进入 if 语句块'); // 调试信息
        //     }
        },

    });
};