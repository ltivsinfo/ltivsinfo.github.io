										////倒數腳本
										const targetDate1 = new Date('2023-11-23 23:59:59').getTime();
								

										const targetDate2 = new Date('2024-04-20 23:59:59').getTime();
										const targetDate3 = new Date('2024-5-4 23:59:59').getTime();
								
										function updateCountdown(targetDate, countdownElementId) {
											const currentDate = new Date().getTime();
											const timeLeft = targetDate - currentDate;

											const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
											const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
											const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
											const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
								

											const countdownElement = document.getElementById(countdownElementId);
											countdownElement.innerHTML = `${days} 天 ${hours} 小時 ${minutes} 分鐘 ${seconds} 秒`;
								

											if (timeLeft < 0) {
												countdownElement.innerHTML = "倒计时已结束";
											}
										}
								

										setInterval(() => {
											updateCountdown(targetDate1, "countdown1");
										}, 1000);
								
										
										setInterval(() => {
											updateCountdown(targetDate2, "countdown2");
										}, 1000);
										setInterval(() => {
											updateCountdown(targetDate3, "countdown3");
										}, 1000);
								

										updateCountdown(targetDate1, "countdown1");
										updateCountdown(targetDate2, "countdown2");
										updateCountdown(targetDate3, "countdown3");



