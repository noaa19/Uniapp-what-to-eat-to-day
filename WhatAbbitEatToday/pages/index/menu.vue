<template>
	<view class="almost-lottery">
		<!-- 背景图 -->
		<view class="mainDiv">
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
		<!-- 背景图结束 -->

		<view style="width: 100%;height: 100%;" :style="{marginTop:windowHeight*-1+'rpx'}">
			<view class="almost-lottery__head" style="display: flex;flex-direction: row;height: 185rpx;">
				<view :class="['action action__', isApple && 'action-shadow']">
					<text class="gold"></text>
					<text class="content">菜单一览<text class="count">{{countMenu}}</text></text>
				</view>
			</view>

			<!-- 主要内容 -->
			<view class="almost-lottery__wheel"
				style="height: calc(100% - 400rpx);border:10rpx dashed #f9dae9f5;background-color: transparent;overflow: hidden;">

				<!-- 编辑区域展示 -->
				<view v-show="showFlag=='edit'" style="width: 100%;height:100%;overflow-y: hidden;">

					<!-- 菜单名字 -->
					<view
						style="width: 98%;height: 95rpx;margin-top:30rpx;display: flex;flex-direction: row;margin-left: 2%;">
						<view style="width: 30%;line-height: 95rpx;color: #c66da7;border: 2px dotted #f9dae9f5;">菜单名字：
						</view>
						<view style="width: 65%;height:95rpx;text-align: center;padding-left: 5%;">
							<input v-model="editMenuName" class="uni-input"
								style="background-color: #FCF7FC;height: 92rpx;width: 95%;border: 2px dotted #f9dae9f5;border-radius: 10rpx;color: #c66da7;"
								maxlength="10" />
						</view>
					</view>
					<!-- 菜单名字结束 -->

					<!-- 已选食物/待选食物 -->
					<view
						style="width: 96%;height: 95rpx;display: flex;flex-direction: row;margin-top: 40rpx;margin-left: 2%;">
						<view style="width: 56%;line-height: 90rpx;color: #c66da7;border: 2px dotted #f9dae9f5;">已选食物
						</view>
						<view
							style="width: 56%;line-height: 90rpx;color: #c66da7;border: 2px dotted #f9dae9f5;margin-left: 4%;">
							待选食物</view>
					</view>
					<!-- 已选食物/待选食物 结束 -->

					<!-- 食物选择框 -->
					<view
						style="width: 100%;height: calc(100% - 300rpx);display: flex;flex-direction: row;margin-top: 40rpx;overflow-y: scroll;">
						<view
							style="width: 45%;color: #c66da7;border: 2px dotted #f9dae9f5;margin-left: 2.5%;overflow-y: scroll;">
							<view class="foodDiv">
								<view v-for="item in editFoodListSelect" style="margin-top: 30rpx;margin-left: 15rpx;"
									@click="delFood(item)" :class="['foodBtn', isApple && 'action-shadow']">
									<text class="foodContent">{{item}}</text>
								</view>
							</view>
						</view>
						<view
							style="width: 45%;color: #c66da7;border: 2px dotted #f9dae9f5;overflow-y: scroll;margin-left: 2.5%;">
							<view class="foodDiv">
								<view v-for="item in editFoodListUnselect" style="margin-top: 30rpx;margin-left: 15rpx;"
									@click="addFood(item)" :class="['foodBtn1', isApple && 'action-shadow']">
									<text class="foodContent">{{item}}</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 食物选择框结束 -->
				</view>



				<!-- 菜单列表展示 -->
				<view v-show="showFlag=='list'" style="width: 100%;height:100%;">
					<view style="width: 100%;height: 120rpx;display: flex;flex-direction: row;padding-top: 20rpx;">
						<view style="width: 60%;height: 100%;text-align: center;padding-left: 5%;">
							<input v-model="inputMenu" class="uni-input"
								style="background-color: #FCF7FC;height: 90rpx;width: 95%;border: 2px dotted #f9dae9f5;border-radius: 20rpx;color: #c66da7;"
								maxlength="10" />
						</view>
						<view style="width: 30%;height: 70rpx;line-height:70rpx;margin-top: 7rpx;">
							<view @click="addMenu()" :class="['smallBtn', isApple && 'action-shadow']">
								<text class="content">添加</text>
							</view>
						</view>
					</view>
					<view style="overflow-y: scroll;width: 100%;height: calc(100% - 150rpx);">
						<view v-for="item in menuList"
							style="width: 100%;height: 130rpx;display: flex;flex-direction: row;">
							<view @click="showEdit(item)"
								:class="[item.foods.length==0?'menuBtn_':'menuBtn', isApple && 'action-shadow']">
								<text class="foodContent">{{item.name}}<text
										class="foodCount">[{{item.foods.length}}]</text></text>
							</view>
							<view :class="['delBtn', isApple && 'action-shadow']">
								<image @click="delMenu(item.id)" class="rbsImg" src="../../static/rabish.png"></image>
							</view>
							<view :class="['chooseBtn', isApple && 'action-shadow']">
								<image @click="chooseMenu(item.id)" class="starImg1"
									:src="item.choose?'../../static/star1.png':'../../static/star2.png'"></image>
							</view>
						</view>
					</view>
				</view>
				<!-- 菜单列表展示结束 -->

			</view>
		</view>
		<!-- 主要内容结束 -->

		<!-- 尾部 -->
		<view v-show="showFlag=='list'" class="almost-lottery__head"
			style="display: flex;flex-direction: row;margin-top:-200rpx;">
			<view style="width: 50%;">
				<view @click="returnIndex()" :class="['action action1', isApple && 'action-shadow']">
					<text class="content">返回首页</text>
				</view>
			</view>
			<view style="width: 50%;">
				<view @click="saveMenu()" :class="['action action1', isApple && 'action-shadow']">
					<text class="content">保存修改</text>
				</view>
			</view>
		</view>
		<!-- 尾部结束 -->

		<!-- 尾部 -->
		<view v-show="showFlag=='edit'" class="almost-lottery__head"
			style="display: flex;flex-direction: row;margin-top:-200rpx;">
			<view style="width: 50%;">
				<view @click="returnList()" :class="['action action1', isApple && 'action-shadow']">
					<text class="content">返回列表</text>
				</view>
			</view>
			<view style="width: 50%;">
				<view @click="saveEdit()" :class="['action action1', isApple && 'action-shadow']">
					<text class="content">保存修改</text>
				</view>
			</view>
		</view>
		<!-- 尾部结束 -->

	</view>
	</view>
</template>

<script>
	export default {
		name: 'menucrud',
		components: {},
		data() {
			return {
				windowHeight: '', // 窗口高度
				countMenu: 10, // 菜单总数
				inputMenu: '', // 输入框的菜单
				editMenuName: '', // 修改菜单名字
				editId: '', // 当前正在修改的id
				showFlag: 'list',
				foodList: [], // 所有的食物
				editFoodListSelect: [],
				editFoodListUnselect: [],
				menuList: []
			}
		},
		computed: {
			isApple() {
				return uni.getSystemInfoSync().platform === 'ios'
			}
		},
		methods: {

			/**
			 *  将食物从待选区域移到已选区域
			 */
			addFood(item) {
				if (!this.editFoodListSelect.includes(item)) {
					this.editFoodListSelect.push(item)
				}
				var list = []
				for (var i = 0; i < this.editFoodListUnselect.length; i++) {
					if (this.editFoodListUnselect[i] != item) {
						list.push(this.editFoodListUnselect[i])
					}
				}
				this.editFoodListUnselect = list
			},

			/**
			 *  将食物从已选区域移到待选区域
			 */
			delFood(item) {
				this.editFoodListUnselect.push(item)
				var list = []
				for (var i = 0; i < this.editFoodListSelect.length; i++) {
					if (this.editFoodListSelect[i] != item) {
						list.push(this.editFoodListSelect[i])
					}
				}
				this.editFoodListSelect = list
			},

			/**
			 *  编辑按钮
			 */
			showEdit(item) {
				this.showFlag = 'edit';
				this.editId = item.id;
				this.editMenuName = item.name+"";
				this.editFoodListSelect = item.foods.concat([]);
				var list = [];
				for (var i = 0; i < this.foodList.length; i++) {
					if (!item.foods.includes(this.foodList[i])) {
						list.push(this.foodList[i])
					}
				}
				this.editFoodListUnselect = list
			},

			/**
			 *  编辑-返回列表
			 */
			returnList() {
				this.showFlag = 'list'
			},

			/**
			 *  编辑-保存修改
			 */
			saveEdit() {
				for(var i = 0;i<this.menuList.length;i++){
					if(this.menuList[i].id == this.editId){
						this.menuList[i].name = this.editMenuName
						this.menuList[i].foods = this.editFoodListSelect
					}
				}
				this.showFlag = 'list'
			},

			/**
			 *  新增菜单
			 */
			addMenu() {
				if (this.inputMenu.trim() != '') {
					var data = {}
					data.id = new Date().getTime();
					data.name = this.inputMenu;
					data.choose = false;
					data.foods = [];
					this.menuList.push(data)
				}
				this.inputMenu = ''
			},

			/**
			 *  删除菜单
			 */
			delMenu(id) {
				uni.showModal({
					content: '确认要删除此菜单吗？',
					showCancel: false,
					confirmColor:'#f1a6bd',
					confirmText: "是的", 
					complete: () => {
						var list = []
						for (var i = 0; i < this.menuList.length; i++) {
							if (this.menuList[i].id != id) {
								list.push(this.menuList[i])
							}
						}
						console.log(this.menuList);
						this.menuList = list
					}
				})
			},

			/**
			 *  选择菜单
			 */
			chooseMenu(id) {
				var len = 0
				for (var i = 0; i < this.menuList.length; i++) {
					if (this.menuList[i].id == id) {
						len = this.menuList[i].foods.length
					}
				}
				if (len > 0) {
					for (var i = 0; i < this.menuList.length; i++) {
						if (this.menuList[i].id == id) {
							this.menuList[i].choose = true
						} else {
							this.menuList[i].choose = false
						}
					}
				}
			},

			/**
			 *  从本地储存里获取食物
			 */
			getFood() {
				let this_ = this
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
			 *  从本地获取菜单列表
			 */
			getMenu() {
				let res = uni.getStorageSync('menuList')
				if(res){
					res = JSON.parse(res)
					this.menuList = res
				}
			},
			
			/**
			 *  保存菜单
			 */
			saveMenu() {
				let this_ = this
				uni.setStorage({
					key: 'menuList',
					data: JSON.stringify(this_.menuList),
					success() {
						this_.returnIndex()
					}
				});
			},
			
			/**
			 *  回到首页
			 */
			returnIndex() {
				uni.navigateBack()
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
			this.getMenu()
		}
	}
</script>

<style lang="scss" scoped>
	.foodDiv {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 20px;
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
		height: 200rpx;

		.action {
			position: relative;
			top: 40rpx;
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
			width: 160rpx;
		}

		.action__ {
			border-radius: 24rpx;
			width: 350rpx;
		}

		.action1 {
			border-radius: 24rpx;
			width: 160px;
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

	.foodCount {
		color: #D96162;
		font-size: 35rpx;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		padding-left: 10rpx;
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

	.menuBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #c66da7;
		font-size: 32rpx;
		background-color: #FCF7FC;
		width: 370rpx;
		height: 90rpx;
		border-radius: 10rpx;
		box-shadow: 5rpx 5rpx 5rpx 0px #f1c0d8cf;
		margin-top: 25rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}

	.menuBtn_ {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #c66da7;
		font-size: 32rpx;
		background-color: #e6e6e680;
		width: 370rpx;
		height: 90rpx;
		border-radius: 10rpx;
		box-shadow: 5rpx 5rpx 5rpx 0px #E6E6E6;
		margin-top: 25rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}

	.delBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #c66da7;
		font-size: 32rpx;
		background-color: #FCF7FC;
		border: 2px dotted #f1c0d8cf;
		width: 70rpx;
		height: 70rpx;
		border-radius: 10rpx;
		box-shadow: 5rpx 5rpx 5rpx 0px #f1c0d8cf;
		margin-top: 35rpx;
		padding-left: 5rpx;
		padding-right: 5rpx;
	}

	.rbsImg {
		width: 50rpx;
		height: 50rpx;
	}

	.starImg1 {
		width: 60rpx;
		height: 60rpx;
	}

	.starImg2 {
		width: 60rpx;
		height: 60rpx;
	}

	.chooseBtn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #c66da7;
		font-size: 32rpx;
		background-color: #FCF7FC;
		width: 70rpx;
		height: 70rpx;
		border-radius: 10rpx;
		box-shadow: 5rpx 5rpx 5rpx 0px #f1c0d8cf;
		border: 2px dotted #f1c0d8cf;
		margin-top: 35rpx;
		padding-left: 5rpx;
		padding-right: 5rpx;
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

	.foodBtn1 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #d961620;
		font-size: 32rpx;
		background-color: #d9616210;
		width: auto;
		height: 70rpx;
		border-radius: 30rpx;
		box-shadow: 5rpx 10rpx 5rpx 0px #f1c0d8cf;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}
</style>
