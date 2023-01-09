<template>
	<view class="almost-lottery">
		<!-- 食物仓库 -->
		<view style="width: 100%;height: 100%;">
			<view style="width: 100%;height: 100%;overflow-y: hidden;">
				<!-- 标题 -->
				<view class="almost-lottery__head">
					<view :class="['action action__', isApple && 'action-shadow']">
						<text class="gold"></text>
						<text class="content">食物仓库<text class="count">{{foodList.length}}</text></text>
					</view>
				</view>
				<!-- 标题结束 -->

				<!-- 主要内容 -->
				<view class="almost-lottery__wheel"
					style="height: calc(100% - 500rpx);border:10rpx dashed #f9dae9f5;background-color: transparent;overflow-y: hidden;">
					<view style="width:100%;height: calc(100% - 500rpx);border: 1px solid transparent;">
						<view style="width: 100%;height: 100rpx;display: flex;flex-direction: row;padding-top: 20rpx;">
							<view style="width: 60%;height: 100%;text-align: center;padding-left: 5%;">
								<input v-model="inputFood" class="uni-input"
									style="background-color: #FCF7FC;height: 90rpx;width: 95%;border: 2px dotted #f9dae9f5;border-radius: 20rpx;color: #c66da7;"
									maxlength="10" />
							</view>
							<view style="width: 30%;height: 70rpx;line-height:70rpx;margin-top: 7rpx;">
								<view @click="addFood()" :class="['smallBtn', isApple && 'action-shadow']">
									<text class="content">添加</text>
								</view>
							</view>
						</view>

						<!-- 食物展示框 -->
						<view
							style="width: 100%;height:800rpx;padding-top: 30rpx;padding-bottom: 30rpx;overflow-y: scroll;">
							<view class="foodDiv">
								<view v-for="item in foodList" style="margin-top: 30rpx;margin-left: 15rpx;"
									 :class="['foodBtn', isApple && 'action-shadow']">
									<text class="foodContent">{{item}}</text>
									<text @click="delFood(item)" class="closeBtn">X</text>
								</view>
							</view>
							<!-- 食物展示框结束 -->

						</view>
					</view>
					<!-- 主要内容结束 -->
				</view>

				<!-- 尾部 -->
				<view class="almost-lottery__head" style="display: flex;flex-direction: row;">
					<view style="width: 50%;">
						<view @click="returnIndex()" :class="['action action_', isApple && 'action-shadow']">
							<text class="content">返回首页</text>
						</view>
					</view>
					<view style="width: 50%;">
						<view @click="saveFood()" :class="['action action_', isApple && 'action-shadow']">
							<text class="content">保存修改</text>
						</view>
					</view>
				</view>
				<!-- 尾部结束 -->

			</view>
		</view>
		<!-- 食物仓库--end -->

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
	export default {
		name: 'food',
		components: {},
		data() {
			return {
				windowHeight: '', // 窗口高度
				inputFood: '', // 输入框的新食物
				foodList: [], // 食物仓库
				originFoodList:[], // 原先的食物仓库

			}
		},
		computed: {
			isApple() {
				return uni.getSystemInfoSync().platform === 'ios'
			}
		},
		methods: {
			/**
			 *  返回首页
			 */
			returnIndex(){
				uni.navigateBack()
			},

			/**
			 *  从本地储存里获取食物
			 */
			getFood() {
				let this_ = this
				let res = uni.getStorageSync('foodList')
				if(res){
					this_.foodList = JSON.parse(res)
					this_.originFoodList = this_.foodList.concat([])
					this_.countFood = this_.foodList.length
				}
				// 默认食物
				// if(this_.foodList.length == 0){
				// 	this_.foodList = ['烧鸭','烧鸡','烤兔腿','肯德基','水煮鱼','羊肉汤','肉夹馍','红烧肉','卤肉饭','猪脚饭']
				// }
			},

			/**
			 *  保存食物
			 */
			saveFood() {
				let this_ = this
				
				// 找出被删除的食物
				var delList = []
				for(var i = 0;i<this.originFoodList.length;i++){
					if(!this.foodList.includes(this.originFoodList[i])){
						delList.push(this.originFoodList[i])
					}
				}
				
				// 在之前的菜单中删除这些食物
				uni.getStorage({
					key: 'menuList',
					success(res) {
						if (res && res.data) {
							var menuList = JSON.parse(res.data)
							for(var i = 0;i<menuList.length;i++){
								var list = []
								for(var j = 0;j<menuList[i].foods.length;j++){
									if(!delList.includes(menuList[i].foods[j])){
										list.push(menuList[i].foods[j])
									}
								}
								menuList[i].foods = list
							}
							uni.setStorage({
								key: 'menuList',
								data: JSON.stringify(menuList),
								success() {
								}
							});
						}
					}
				});
				
				uni.setStorage({
					key: 'foodList',
					data: JSON.stringify(this_.foodList),
					success() {
						this_.returnIndex()
					}
				});
			},

			/**
			 *  删除食物
			 */
			delFood(item) {
				console.log("需要删除的是:"+item)
				var list = []
				for (var i = 0; i < this.foodList.length; i++) {
					if (this.foodList[i] != item) {
						list.push(this.foodList[i])
					}
				}
				this.foodList = list
			},

			/**
			 *  添加食物
			 */
			addFood() {
				this.inputFood = this.inputFood.trim();
				if (this.inputFood != '') {
					var isExist = false;
					for (var i = 0; i < this.foodList.length; i++) {
						if (this.foodList[i] == this.inputFood) {
							isExist = true;
						}
					}
					if (isExist) {
						// 食物已经存在
						let this_ = this
						uni.showModal({
							content: '已经添加过 [' + this_.inputFood + '] 啦！',
							showCancel: false,
							confirmColor: '#f1a6bd',
							confirmText: "好的",
							complete: () => {
								this.inputFood = ''
							}
						})
					} else {
						this.foodList.push(this.inputFood)
						this.inputFood = ''
					}
				}
			},
		},

		onLoad() {

		},
		onUnload() {},
		onShow() {
			let self = this;
			uni.getSystemInfo({
				success: function(res) {
					self.windowHeight = (res.windowHeight * (750 / res.windowWidth)) //将px 转换rpx
				}
			});
			this.getFood()
		}
	}
</script>

<style lang="scss" scoped>
	
	.foodDiv {
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		 writing-mode: horizontal-tb;
	}

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
		background-color: #FCF7FC;
		width: auto;
		height: 70rpx;
		border-radius: 30rpx;
		box-shadow: 5rpx 10rpx 5rpx 0px #f1c0d8cf;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}
	
	.foodBtn:hover {
		background-color: #f1c0d8;
	}
	
	.closeBtn {
		padding-left: 15rpx;
		color: #D96162;
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
