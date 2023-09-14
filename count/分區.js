        // 设置倒计时的目标日期和时间（以毫秒为单位）
        const targetDate = new Date('2024-04-20 23:59:59').getTime();

        function updateCountdown() {
            const currentDate = new Date().getTime();
            const timeLeft = targetDate - currentDate;

            // 计算剩余的天数、小时、分钟和秒数
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // 将倒计时显示在页面上
            const countdownElement = document.getElementById("count2");
            countdownElement.innerHTML = `${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`;

            // 如果目标日期已经过去，则显示倒计时结束信息
            if (timeLeft < 0) {
                countdownElement.innerHTML = "倒计时已结束";
            }
        }

        // 每隔一秒更新倒计时
        setInterval(updateCountdown, 1000);

        // 初始更新一次，避免页面加载时有延迟
        updateCountdown();