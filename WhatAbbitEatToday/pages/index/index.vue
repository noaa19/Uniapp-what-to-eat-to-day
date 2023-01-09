<template>
	<view class="almost-lottery">
		<view style="width: 100%;height: 100%;">

			<!-- 头部 -->
			<view class="almost-lottery__head">
				<view :class="['action', isApple && 'action-shadow']">
					<text class="gold"></text>
					<text class="content">阿兔今天吃什么：<text class="num">{{ eatToday }}</text></text>
				</view>
			</view>

			<!-- 转盘 -->
			<view class="almost-lottery__wheel" style="height: calc(100% - 520rpx);">
				<view style="height: calc((100% - 600rpx) * 0.5);background-color: #f9dae978;"></view>
				<view style="height: 600rpx;">
					<almost-lottery :redrawSign="redrawSign" :lottery-size="lotteryConfig.lotterySize"
						:action-size="lotteryConfig.actionSize" :ring-count="13" :duration="5" :img-circled="true"
						:canvasCached="true" :prize-list="prizeList" :prize-index="prizeIndex"
						@reset-index="prizeIndex = -1" @draw-start="handleDrawStart" @draw-end="handleDrawEnd"
						@finish="handleDrawFinish" v-if="prizeList.length" />
				</view>
				<view style="height: calc((100% - 600rpx) * 0.5);background-color: #f9dae978;"></view>
			</view>

			<!-- 尾部 -->
			<view class="almost-lottery__head" style="display: flex;flex-direction: row;">
				<view style="width: 50%;">
					<view @click="showPage(1)" :class="['action action_', isApple && 'action-shadow']">
						<text class="content">食物仓库<text class="count">{{ foodList.length }}</text></text>
					</view>
				</view>
				<view style="width: 50%;">
					<view @click="showPage(2)" :class="['action action_', isApple && 'action-shadow']">
						<text class="content">菜单维护<text class="count">{{ menuList.length }}</text></text>
					</view>
				</view>
			</view>
		</view>


		<!-- 背景图 -->
		<view class="mainDiv" :style="{marginTop:windowHeight*-1+'rpx'}">
			<view class="bgDiv" style="height: 20%;">
			</view>
			<view class="bgDiv" style="height: 20%;">
			</view>
			<view class="bgDiv" style="height: 20%;">
			</view>
			<view class="bgDiv" style="height: 20%;">
			</view>
			<view class="bgDiv" style="height: 20%;">
			</view>
		</view>

	</view>

</template>

<script>
	import AlmostLottery from '@/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue'
	import {
		clearCacheFile,
		clearStore
	} from '@/uni_modules/almost-lottery/utils/almost-utils.js'
	export default {
		name: 'Home',
		components: {
			AlmostLottery,
		},
		data() {
			return {

				redrawSign: '', // 重绘转盘的信号量

				windowHeight: '', // 窗口高度
				eatToday: '', // 抽选结果
				foodList: [], // 食物仓库
				menuList: [], // 菜单仓库


				// 开启调试模式
				isDev: true,

				// 以下是转盘配置相关数据
				lotteryConfig: {
					// 抽奖转盘的整体尺寸，单位rpx
					lotterySize: 600,
					// 抽奖按钮的尺寸，单位rpx
					actionSize: 200
				},

				// 以下是奖品配置数据
				// 奖品数据
				prizeList: [],
				// 中奖下标
				prizeIndex: -1,
				// 是否正在抽奖中，避免重复触发
				prizeing: false,
			}
		},
		computed: {
			isApple() {
				return uni.getSystemInfoSync().platform === 'ios'
			}
		},
		methods: {

			handleDrawFinish() {

			},

			initFoodData() {
				let this_ = this
				// 获取食物仓库
				uni.getStorage({
					key: 'foodList',
					success(res) {
						if (res && res.data) {
							this_.foodList = JSON.parse(res.data)
						}
					}
				});
			},

			/**
			 *  页面跳转
			 */
			showPage(type) {
				if (type == 1) {
					uni.navigateTo({
						url: 'food'
					})
				} else if (type == 2) {
					uni.navigateTo({
						url: 'menu'
					})
				}
			},

			handleInitCanvas() {
				clearCacheFile()
				clearStore()
				this.prizeList = []
				this.getPrizeList()
			},


			checkPrizeList() {
				let this_ = this
				let res = uni.getStorageSync('menuList')
				var isData = false
				this_.prizeList = []
				if (res) {
					this_.menuList = JSON.parse(res)
					for (var i = 0; i < this_.menuList.length; i++) {
						if (this_.menuList[i].choose == true) {
							if (this_.menuList[i].foods.length > 0) {
								isData = true
							}
						}
					}
				}
				if (!isData) {
					if (this.menuList.length == 0) {
						this.menuList = [{
							id: '1',
							name: '默认菜单',
							foods: ['烧鸭', '烧鸡', '烤兔腿', '水煮鱼', '羊肉汤', '肉夹馍', '卤肉饭', '猪脚饭'],
							choose: true
						}]
					}
				}
				uni.setStorageSync('menuList', JSON.stringify(this.menuList));
			},

			getPrizeList() {
				let this_ = this
				this.checkPrizeList()
				let res = uni.getStorageSync('menuList')
				if (!res) return
				res = JSON.parse(res)
				this_.prizeList = []
				this_.menuList = res
				for (var i = 0; i < this_.menuList.length; i++) {
					if (this_.menuList[i].choose == true) {
						if (this_.menuList[i].foods.length > 0) {
							for (var a = 0; a < this_.menuList[i].foods.length; a++) {
								this_.prizeList.push({
									prizeId: a,
									prizeName: this_.menuList[i].foods[a]
								})
							}
						}
					}
				}
			},
			handleDrawStart() {
				// if (this.prizeing){
				// 	console.log("死于this.prizeing 为true")
				// 	return
				// } 
				this.prizeing = true
				this.tryLotteryDraw()
			},
			tryLotteryDraw() {
				this.remoteGetPrizeIndex()
			},
			remoteGetPrizeIndex() {
				let list = [...this.prizeList]
				let prizeId = Math.floor(Math.random() * list.length + 1)
				for (let i = 0; i < list.length; i++) {
					let item = list[i]
					if (item.prizeId === prizeId) {
						// 中奖下标
						this.prizeIndex = i
						break
					}
				}
			},


			// 本次抽奖结束
			handleDrawEnd() {
				// 旋转结束后，开始处理拿到结果后的逻辑
				let prizeName = this.prizeList[this.prizeIndex].prizeName
				this.eatToday = prizeName
				this.prizeIndex = -1
				let tipContent = ''
				if (prizeName.includes("兔")) {
					tipContent = '兔兔那么可爱，怎么可以吃兔兔！坏蛋！'
				}
				if (prizeName.includes("羊")) {
					tipContent = '好耶，吃掉懒羊羊！'
				}
				if (prizeName.includes("鱼")) {
					tipContent = '吃鱼肉！喝鱼血！鱼皮剥下来做大衣！'
				}
				if (prizeName.includes("鸡")) {
					tipContent = '？网络上的烧鸡还不能满足你吗？'
				}
				if (prizeName.includes("脑花")) {
					tipContent = '不会吧不会吧不会有人吃脑花吧。'
				}
				if (prizeName.includes("哈密瓜")) {
					tipContent = '哈密瓜是地球的珍宝。'
				}
				if (prizeName.includes("卤肉饭")) {
					tipContent = '？你居然还吃卤肉饭。'
				}
				if (prizeName.includes("嘉然")) {
					tipContent = '呵呵，露出真面露了吧。'
				}
				if (prizeName.includes("答辩")) {
					tipContent = '我没意见。'
				}
				var time = new Date().getTime() + ''
				if (time.charAt(time.length - 1) == '1') {
					tipContent = '好吃，多吃点！'
				}
				if (time.charAt(time.length - 1) == '2') {
					tipContent = '吃吧，不会长胖的！'
				}
				if (time.charAt(time.length - 1) == '0') {
					tipContent = '喜欢，可以给阿兔也买一份吗?'
					uni.showModal({
						content: tipContent,
						showCancel: false,
						confirmColor: '#f1a6bd',
						confirmText: "没有问题！",
						complete: () => {
							this.prizeing = false
							uni.showModal({
								content: '阿兔爱你！',
								showCancel: false,
								confirmColor: '#f1a6bd',
								confirmText: "知道啦",
								complete: () => {
									this.prizeing = false
									
								}
							})
						}
					})
				}else if (tipContent != '') {
					uni.showModal({
						content: tipContent,
						showCancel: false,
						confirmColor: '#f1a6bd',
						confirmText: "爱吃",
						complete: () => {
							this.prizeing = false
						}
					})
				} else {
					this.prizeing = false
				}
				this.prizeing = false
			},
		},
		onLoad() {},
		onUnload() {
			uni.hideLoading()
		},
		onShow() {
			let self = this;
			uni.getSystemInfo({
				success: function(res) {
					self.windowHeight = (res.windowHeight * (750 / res.windowWidth)) //将px 转换rpx
				}
			});
			this.redrawSign = new Date().getTime()
			this.initFoodData()
			this.getPrizeList()
		}
	}
</script>

<style lang="scss" scoped>
	.mainDiv {
		width: 100%;
		height: 100%;
	}

	.bgDiv {
		background: url('@/static/images/bg2.jpg') no-repeat center center/cover;
		height: 20%;
	}

	.almost-lottery {
		flex: 1;
		background: transparent;
	}

	.almost-lottery__head {
		position: relative;
		width: 100%;
		height: 260rpx;
		background: url('@/static/images/bg2.jpg') no-repeat center center/cover;

		.action {
			position: relative;
			top: 82rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 550rpx;
			height: 85rpx;
			line-height: 85rpx;
			margin: 0 auto;
			color: #c66da7;
			font-size: 32rpx;
			background-color: #f9dae9f5;
			border-radius: 44rpx;
			box-shadow: 0px 14rpx 0px 0px #f1c0d8;
		}

		.action_ {
			border-radius: 24rpx;
			width: 300rpx;
		}

		.action__ {
			border-radius: 24rpx;
			width: 350rpx;
		}

		.gold {
			width: 44rpx;
			height: 44rpx;
			margin-right: 10rpx;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: contain;
			background-image: url("~static/images/egg.png");
		}

		.count {
			color: #D96162;
			font-size: 35rpx;
			font-weight: bold;
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
			padding-left: 10rpx;
		}

		.num {
			color: #D96162;
			font-weight: bold;
			font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		}
	}

	.almost-lottery__wheel {
		text-align: center;
		background-color: #FFFFFF;

		.almost-lottery__count {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 40rpx 0;
		}

		.text {
			color: #FFFFFF;
			font-size: 24rpx;
		}
	}

	.smallBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #c66da7;
		font-size: 32rpx;
		background-color: #f9dae9f5;
		width: 180rpx;
		height: 70rpx;
		border-radius: 15rpx;
		box-shadow: 0px 10rpx 0px 0px #f1c0d8;
	}

	.foodBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #c66da7;
		font-size: 32rpx;
		background-color: #f9dae9f5;
		width: auto;
		height: 70rpx;
		border-radius: 15rpx;
		box-shadow: 0px 10rpx 0px 0px #f1c0d8;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.action_ {
		border-radius: 24rpx;
		width: 300rpx;
	}

	.action__ {
		border-radius: 24rpx;
		width: 350rpx;
	}
</style>
